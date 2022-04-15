import React, { useEffect, useState } from "react";
import useController from "../../customHooks/useController";
import styles from "./InputGrid.module.css";

type Props = {
  handleGuess: (word: string) => boolean;
  results: string[] | undefined;
};

const InputGrid = ({ handleGuess, results }: Props) => {
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const makeGuess = (guess: string): Boolean => {
    if (handleGuess(guess)) {
      setCurrentGuess(currentGuess + 1);
      return true;
    }
    return false;
  };

  const [guesses, setGuesses] = useState<string[]>([""].fill("", 0, 6));

  const grid = new Array(6).fill(new Array(5).fill(""));

  const { guess } = useController(makeGuess);

  useEffect(() => {
    let tempGuesses: string[] = [...guesses];
    tempGuesses[currentGuess] = guess;
    setGuesses(tempGuesses);
  }, [guess]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className={styles.gridContainer}>
      {grid.map((row, rowIndex) => (
        <div className={styles.answerRow} key={rowIndex}>
          {new Array(5).fill(" ").map((col: any, colIndex: any) => (
            <div
              key={colIndex}
              className={
                styles.square +
                (results !== undefined && results[rowIndex]
                  ? " " + styles[results[rowIndex][colIndex] || "d"]
                  : "")
              }
            >
              {guesses[rowIndex]?.charAt(colIndex).toUpperCase() || ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InputGrid;
