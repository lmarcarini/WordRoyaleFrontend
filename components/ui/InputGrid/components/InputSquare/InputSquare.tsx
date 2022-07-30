import { CharacterStateType } from "@/models/Character.model";
import React from "react";
import styles from "./InputSquare.module.css";

type Props = {
  character: string;
  state: CharacterStateType | undefined;
  wrong: boolean;
  resetWrong: () => void;
  isGuess: boolean;
};

const InputSquare = ({
  character,
  state,
  wrong,
  resetWrong,
  isGuess,
}: Props): JSX.Element => {
  const classes = [styles["square"]];
  if (state) classes.push(styles[`square--${state}`]);
  if (wrong && isGuess) classes.push(styles[`square--wrong`]);

  const handleAnimationEnd = () => {
    resetWrong();
  };

  return (
    <div className={classes.join(" ")} onAnimationEnd={handleAnimationEnd}>
      {character}
    </div>
  );
};

export default React.memo(InputSquare);
