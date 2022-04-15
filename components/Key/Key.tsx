import styles from "./Key.module.css";

type Props = {
  onClick: () => void;
  value: string;
  className: string;
  state: string;
};

const Key = ({ className, value, state, onClick }: Props) => {
  return (
    <div className={styles[className] + " " + styles[state]} onClick={onClick}>
      {value}
    </div>
  );
};

export default Key;
