import styles from "./GameOverScreen.module.css";
import useGameStore from "@/store/gameStore";
import InputGrid from "@/ui/InputGrid";
import PlayAgainButton from "@/ui/PlayAgainButton";

type Props = {
  handleRestart: () => void;
};

const GameOverScreen = ({ handleRestart }: Props): JSX.Element => {
  const answer = useGameStore((state) => state.answer);

  return (
    <>
      <InputGrid disabled={true} />
      <div>
        <h1>Game Over</h1>
        <p>
          The word was{" "}
          <b>
            <i>{answer}</i>
          </b>
          !
        </p>
      </div>
      <PlayAgainButton onClick={handleRestart} />
    </>
  );
};

export default GameOverScreen;
