import InputGrid from "@/ui/InputGrid";
import PlayAgainButton from "@/ui/PlayAgainButton";

type Props = {
  handleRestart: () => void;
};

const WinnerScreen = ({ handleRestart }: Props) => {
  return (
    <>
      <InputGrid disabled={true} />
      <div>
        <h1>Congratulations</h1>
        <h2>You are the winner!!!</h2>
      </div>
      <PlayAgainButton onClick={handleRestart} />
    </>
  );
};

export default WinnerScreen;
