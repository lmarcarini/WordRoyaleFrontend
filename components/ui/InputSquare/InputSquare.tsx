import { CharacterStateType } from "@/models/Character.model";
import styles from "./InputSquare.module.css";

type Props = {
  character: string;
  state: CharacterStateType | undefined;
};

const InputSquare = ({ character, state }: Props): JSX.Element => {
  const classes = [styles["square"]];
  if (state) classes.push(styles[`square--${state}`]);

  return <div className={classes.join(" ")}>{character}</div>;
};

export default InputSquare;
