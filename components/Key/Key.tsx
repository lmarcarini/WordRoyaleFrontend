import styles from "./Key.module.css";

type Props = {
  onClick: () => void;
  value: string;
  className: string;
  state: string;
};

const Key = ({ className, value, state }: Props) => {
  return <div className={styles[className] + " " + styles[state]}>{value}</div>;
};

export default Key;
