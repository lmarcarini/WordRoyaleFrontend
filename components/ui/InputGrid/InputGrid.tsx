import styles from "./InputGrid.module.css";
import InputSquare from "@/ui/InputSquare";
import { CharacterStateType } from "@/models/Character.model";
import useGuesses from "./hooks/useGuesses";
import useResults from "./hooks/useResults";

type Props = {
  disabled?: boolean;
};

const InputGrid = ({ disabled = false }: Props) => {
  const { displayGuesses, hasGuessedWrong, resetGuessWrong, guessLine } =
    useGuesses(disabled);
  const results = useResults();

  const grid = new Array(6).fill(new Array(5).fill(""));

  return (
    <div className={styles.gridContainer}>
      {grid.map((row, rowIndex) => (
        <div className={styles.answerRow} key={rowIndex}>
          {row.map((col: number, colIndex: number) => (
            <InputSquare
              key={colIndex}
              character={
                displayGuesses[rowIndex]?.charAt(colIndex).toUpperCase() || ""
              }
              state={
                results !== undefined && results[rowIndex]
                  ? (results[rowIndex][colIndex] as CharacterStateType)
                  : undefined
              }
              wrong={hasGuessedWrong}
              resetWrong={resetGuessWrong}
              isGuess={guessLine === rowIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InputGrid;
