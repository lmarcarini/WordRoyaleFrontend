import styles from "./GameOverScreen.module.css";
import useGameStore from "@/store/gameStore";
import InputGrid from "@/ui/InputGrid";

type Props = {
  handleRestart: React.MouseEventHandler<HTMLButtonElement>;
};

const GameOverScreen = ({ handleRestart }: Props): JSX.Element => {
  const answer = useGameStore((state) => state.answer);

  return (
    <>
      <InputGrid disabled={true} />
      <h1>Game Over</h1>
      <p>The word was {answer}!</p>
      <button
        type="button"
        onClick={handleRestart}
        className={styles.replayButton}
      >
        Play Again
      </button>
    </>
  );
};

export default GameOverScreen;
