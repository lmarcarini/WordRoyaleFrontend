import styles from "./GameOverScreen.module.css";

type Props = {
  handleRestart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const GameOverScreen = ({ handleRestart }: Props) => {
  return (
    <>
      <h1>Game Over</h1>
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
