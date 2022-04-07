import Form from "../Form";
import styles from "./EnterScreen.module.css";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const EnterScreen = ({ handleSubmit }: Props) => {
  return (
    <>
      <h1 className={styles.title}>Word Royale</h1>
      <Form submitHandler={handleSubmit} />
    </>
  );
};

export default EnterScreen;
