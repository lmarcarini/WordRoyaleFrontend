type Props = {
  handleRestart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const WinnerScreen = ({ handleRestart }: Props) => {
  return (
    <>
      <h1>Congratulations</h1>
      <h2>You are the winner!!!</h2>
      <button type="button" onClick={handleRestart}>
        Play Again
      </button>
    </>
  );
};

export default WinnerScreen;