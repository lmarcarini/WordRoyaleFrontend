import Head from "next/head";
import styles from "../styles/Home.module.css";
import { io } from "socket.io-client";
import useGameState from "../customHooks/useGameState";
import { isWordAllowed, getGuessResult } from "../customHooks/useGameLogic";
import WaitingScreen from "../components/WaitingScreen";
import EnterScreen from "../components/EnterScreen";
import GameOverScreen from "../components/GameOverScreen";
import PlayingScreen from "../components/PlayingScreen";
import { useEffect, useState } from "react";
import WinnerScreen from "../components/WinnerScreen";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://word-royale-backend.herokuapp.com/"
    : "https://localhost:8080";

const socket = io(apiUrl);

type Props = {
  allowedGuesses: string[];
};

const initialCharacters: Characters = {
  a: "?",
  b: "?",
  c: "?",
  d: "?",
  e: "?",
  f: "?",
  g: "?",
  h: "?",
  i: "?",
  j: "?",
  k: "?",
  l: "?",
  m: "?",
  n: "?",
  o: "?",
  p: "?",
  q: "?",
  r: "?",
  s: "?",
  t: "?",
  u: "?",
  v: "?",
  w: "?",
  x: "?",
  y: "?",
  z: "?",
};

const Home = ({ allowedGuesses }: Props) => {
  const { answer, gameState, players, room, setGameState } =
    useGameState(socket);

  const [characters, setCharacters] = useState<Characters>(initialCharacters);

  useEffect(() => {
    if (gameState === "joining") setCharacters(initialCharacters);
  }, [gameState]);

  const handleGuess = (word: string): boolean => {
    if (isWordAllowed(word, allowedGuesses)) {
      let guessResult = getGuessResult(word, answer);
      let updatedCharacters = updateCharacters(characters, word, guessResult);
      console.log(updatedCharacters);
      setCharacters(updatedCharacters);
      socket.emit("guess", guessResult, room);
      return true;
    }
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("teste");
    const form = document.querySelector("form") as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    socket.emit("join", {
      name: name,
    });
  };

  //handle refresh client
  const handleRestart = () => {
    socket.emit("restart");
    setGameState("joining");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Word Royale</title>
        <meta name="WorBRle" content="Game Worlble" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {gameState === "joining" && <EnterScreen handleSubmit={handleSubmit} />}
        {gameState === "waiting" && <WaitingScreen players={players} />}
        {gameState === "playing" && (
          <PlayingScreen
            players={players}
            handleGuess={handleGuess}
            socketid={socket.id}
            characters={characters}
          />
        )}
        {gameState === "gameover" && (
          <GameOverScreen handleRestart={handleRestart} />
        )}
        {gameState === "winner" && (
          <WinnerScreen handleRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  //get all words from file
  const fs = require("fs");
  const readWords = () => {
    const words =
      fs.readFileSync("./public/wordle-allowed-guesses.txt", "utf8") +
      "\n" +
      fs.readFileSync("./public/wordle-answers-alphabetical.txt", "utf8");
    return words.split("\n") || [];
  };
  const allowedGuesses = readWords();
  return {
    props: {
      allowedGuesses,
    },
    revalidate: 1000,
  };
}

const updateCharacters = (
  characters: Characters,
  word: string,
  guessResult: string
) => {
  let newCharacters = { ...characters };
  for (let i = 0; i < guessResult.length; i++) {
    let currentChar: CharactersIndex = word[i] as CharactersIndex;
    switch (guessResult[i]) {
      case "O":
        newCharacters[currentChar] = "O";
        break;
      case "X":
        if (newCharacters[currentChar] !== "O")
          newCharacters[currentChar] = "X";
        break;
      case "N":
        if (
          newCharacters[currentChar] !== "O" &&
          newCharacters[currentChar] !== "X"
        )
          newCharacters[currentChar] = "N";
        break;
      default:
        newCharacters[currentChar] = guessResult[i];
        break;
    }
  }
  return newCharacters;
};
