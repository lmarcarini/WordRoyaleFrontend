import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

const useGameState = (socket: Socket) => {
  const [gameState, setGameState] = useState<string>("joining");
  const [players, setPlayers] = useState<Player[]>([]);
  const [room, setRoom] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    const onJoin = (room: string, answer: string) => {
      if (gameState === "joining") {
        console.log("Joining game");
        setRoom(room);
        setGameState("waiting");
        console.log(answer);
        setAnswer(answer);
      }
    };

    const onStart = () => {
      if (gameState === "waiting") {
        console.log("Starting game");
        setGameState("playing");
      }
    };

    const getPlayers = (players: Player[]) => {
      setPlayers(players);
    };

    const getGuess = (playerId: string, guess: string) => {
      const player = players.findIndex((p) => p.id === playerId);
      if (player !== -1) {
        let newPlayers = players;
        newPlayers[player].guesses = [...newPlayers[player].guesses, guess];
        if (
          newPlayers[player].guesses.length >= 6 &&
          newPlayers[player].status === "playing"
        ) {
          newPlayers[player].status = "gameover";
          if (socket.id === playerId) {
            setGameState("gameover");
          }
        }
        setPlayers([...newPlayers]);
      }
    };

    const onLeft = (playerId: string) => {
      console.log(`${playerId} left`);
      //change status of player to gameover
      const player = players.findIndex((p) => p.id === playerId);
      if (player !== -1) {
        let newPlayers = players;
        newPlayers[player].status = "gameover";
        console.log(newPlayers);
        setPlayers([...newPlayers]);
      }
    };

    const onWinner = (playerId: string) => {
      console.log(`${playerId} won`);
      //change status of player to gameover

      setGameState(socket.id === playerId ? "winner" : "gameover");

      const player = players.findIndex((p) => p.id === playerId);
      if (player !== -1) {
        let newPlayers = players;
        newPlayers[player].status = "winner";
        console.log(newPlayers);
        setPlayers([...newPlayers]);
      }
    };

    const onDisconnect = () => {
      console.log("Disconnected");
      setGameState("joining");
      setRoom("");
      setPlayers([]);
      setAnswer("");
    };

    socket.on("join", onJoin);
    socket.on("start", onStart);
    socket.on("players", getPlayers);
    socket.on("guess", getGuess);
    socket.on("left", onLeft);
    socket.on("winner", onWinner);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.off("join", onJoin);
      socket.off("start", onStart);
      socket.off("players", getPlayers);
      socket.off("guess", getGuess);
      socket.off("left", onLeft);
      socket.off("winner", onWinner);
      socket.off("disconnect", onDisconnect);
    };
  }, [gameState]);

  return { answer, gameState, players, room, setGameState };
};

export default useGameState;
