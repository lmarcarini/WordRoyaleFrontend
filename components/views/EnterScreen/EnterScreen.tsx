import Form from "../../ui/Form";
import VisualKeyboard from "../../ui/VisualKeyboard";
import styles from "./EnterScreen.module.css";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const EnterScreen = ({ handleSubmit }: Props) => {
  const characters: Characters = {
    a: "?",
    b: "?",
    c: "?",
    d: "?",
    e: "?",
    f: "?",
    g: "?",
    h: "?",
    i: "?",
    j: "?",
    k: "?",
    l: "?",
    m: "?",
    n: "?",
    o: "?",
    p: "?",
    q: "?",
    r: "?",
    s: "?",
    t: "?",
    u: "?",
    v: "?",
    w: "?",
    x: "?",
    y: "?",
    z: "?",
  };
  return (
    <>
      <h1 className={styles.title}>Word Royale</h1>
      <Form submitHandler={handleSubmit} />
      <VisualKeyboard characters={characters} />
    </>
  );
};

export default EnterScreen;
