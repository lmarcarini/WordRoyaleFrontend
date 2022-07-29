import styles from "./Key.module.css";

type Props = {
  onClick: () => void;
  value: string;
  state: string;
};

const Key = ({ value, state, onClick }: Props) => {
  return (
    <div
      className={
        styles["keyboard-key"] + " " + styles["keyboard-key--state--" + state]
      }
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Key;
