import React, { useEffect } from "react";
import style from "./PlayAgainButton.module.css";

type Props = {
  onClick: () => void;
};

const PlayAgainButton = ({ onClick: onRestart }: Props): JSX.Element => {
  const handleClick = () => {
    onRestart();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Enter") onRestart();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRestart]);

  return (
    <button
      type="button"
      className={style.playAgainButton}
      onClick={handleClick}
    >
      Play Again
    </button>
  );
};

export default PlayAgainButton;
