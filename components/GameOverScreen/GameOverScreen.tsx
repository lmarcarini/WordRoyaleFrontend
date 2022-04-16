import styles from "./GameOverScreen.module.css";
import useStore from "../../store/useStore";

type Props = {
  handleRestart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const GameOverScreen = ({ handleRestart }: Props) => {
  const answer = useStore((state) => state.answer);

  return (
    <>
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
