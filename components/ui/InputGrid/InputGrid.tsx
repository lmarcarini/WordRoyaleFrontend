import React, { useState } from "react";
import useController from "../../../customHooks/useController";
import styles from "./InputGrid.module.css";

type Props = {
  handleGuess: (word: string) => boolean;
  results: string[][] | undefined;
};

const InputGrid = ({ handleGuess, results }: Props) => {
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const [guesses, setGuesses] = useState<string[]>([""].fill("", 0, 6));

  const makeGuess = (guess: string): Boolean => {
    if (handleGuess(guess)) {
      let tempGuesses: string[] = [...guesses];
      tempGuesses[currentGuess] = guess;
      setGuesses(tempGuesses);
      setCurrentGuess(currentGuess + 1);
      return true;
    }
    return false;
  };
  const { guess } = useController(makeGuess);

  const grid = new Array(6).fill(new Array(5).fill(""));

  let displayGuesses = guesses;
  displayGuesses[currentGuess] = guess;

  return (
    <div className={styles.gridContainer}>
      {grid.map((row, rowIndex) => (
        <div className={styles.answerRow} key={rowIndex}>
          {new Array(5).fill(" ").map((col: number, colIndex: number) => (
            <div
              key={colIndex}
              className={
                styles.square +
                (results !== undefined && results[rowIndex]
                  ? " " + styles[results[rowIndex][colIndex] || "d"]
                  : "")
              }
            >
              {displayGuesses[rowIndex]?.charAt(colIndex).toUpperCase() || ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InputGrid;
