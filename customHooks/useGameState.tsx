import { useEffect } from "react";
import useStore from "../store/gameStore";
import useCharacterStore from "@/store/charactersStore";
import { Player } from "@/models/Player.model";

const useGameState = () => {
  const socket = useStore((state) => state.socket);

  const players = useStore((state) => state.players);
  const currentScreen = useStore((state) => state.currentScreen);

  const reset = useStore((state) => state.reset);
  const resetCharacters = useCharacterStore((state) => state.resetCharacters);

  useEffect(() => {
    const onJoin = (room: string, answer: string) => {
      if (currentScreen === "joining") {
        console.log("Joining game");
        useStore.setState({
          room: room,
          currentScreen: "waiting",
          answer: answer,
        });
      }
    };

    const onStart = () => {
      if (currentScreen === "waiting") {
        console.log("Starting game");
        useStore.setState({ currentScreen: "playing" });
      }
    };

    const getPlayers = (players: Player[]) => {
      useStore.setState({ players: players });
    };

    const getGuess = (playerId: string, guess: string[]) => {
      const player = players.findIndex((p) => p.id === playerId);
      const playerExists = player !== -1;
      if (playerExists) {
        let newPlayers = players;
        newPlayers[player].guesses = [...newPlayers[player].guesses, guess];
        if (
          newPlayers[player].guesses.length >= 6 &&
          newPlayers[player].status === "playing"
        ) {
          newPlayers[player].status = "gameover";
          /*if (socket.id === playerId) {
            useStore.setState({ currentScreen: "gameover" });
          }*/
        }
        useStore.setState({ players: [...newPlayers] });
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
        useStore.setState({ players: [...newPlayers] });
      }
    };

    const onWinner = (playerId: string) => {
      console.log(`${playerId} won`);
      //change status of player to gameover
      useStore.setState({
        currentScreen: socket.id === playerId ? "winner" : "gameover",
      });
      const player = players.findIndex((p) => p.id === playerId);
      if (player !== -1) {
        let newPlayers = players;
        newPlayers[player].status = "winner";
        console.log(newPlayers);
        useStore.setState({ players: [...newPlayers] });
      }
    };

    const onDisconnect = () => {
      console.log("Disconnected");
      resetCharacters();
      reset();
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
  }, [currentScreen, players, socket, reset, resetCharacters]);
};

export default useGameState;
