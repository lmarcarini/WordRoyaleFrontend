import Key from "../Key";
import styles from "./VisualKeyboard.module.css";

type Props = {
  characters: Characters;
};

const VisualKeyboard = ({ characters }: Props) => {
  const firstRow = [
    {
      key: "q",
      value: "q",
      className: "keyboard-key",
      onClick: () => {
        console.log("q");
      },
    },
    {
      key: "w",
      value: "w",
      className: "keyboard-key",
      onClick: () => {
        console.log("w");
      },
    },
    {
      key: "e",
      value: "e",
      className: "keyboard-key",
      onClick: () => {
        console.log("e");
      },
    },
    {
      key: "r",
      value: "r",
      className: "keyboard-key",
      onClick: () => {
        console.log("r");
      },
    },
    {
      key: "t",
      value: "t",
      className: "keyboard-key",
      onClick: () => {
        console.log("t");
      },
    },
    {
      key: "y",
      value: "y",
      className: "keyboard-key",
      onClick: () => {
        console.log("y");
      },
    },
    {
      key: "u",
      value: "u",
      className: "keyboard-key",
      onClick: () => {
        console.log("u");
      },
    },
    {
      key: "i",
      value: "i",
      className: "keyboard-key",
      onClick: () => {
        console.log("i");
      },
    },
    {
      key: "o",
      value: "o",
      className: "keyboard-key",
      onClick: () => {
        console.log("o");
      },
    },
    {
      key: "p",
      value: "p",
      className: "keyboard-key",
      onClick: () => {
        console.log("p");
      },
    },
  ];

  const secondRow = [
    {
      key: "a",
      value: "a",
      className: "keyboard-key",
      onClick: () => {
        console.log("a");
      },
    },
    {
      key: "s",
      value: "s",
      className: "keyboard-key",
      onClick: () => {
        console.log("s");
      },
    },
    {
      key: "d",
      value: "d",
      className: "keyboard-key",
      onClick: () => {
        console.log("d");
      },
    },
    {
      key: "f",
      value: "f",
      className: "keyboard-key",
      onClick: () => {
        console.log("f");
      },
    },
    {
      key: "g",
      value: "g",
      className: "keyboard-key",
      onClick: () => {
        console.log("g");
      },
    },
    {
      key: "h",
      value: "h",
      className: "keyboard-key",
      onClick: () => {
        console.log("h");
      },
    },
    {
      key: "j",
      value: "j",
      className: "keyboard-key",
      onClick: () => {
        console.log("j");
      },
    },
    {
      key: "k",
      value: "k",
      className: "keyboard-key",
      onClick: () => {
        console.log("k");
      },
    },
    {
      key: "l",
      value: "l",
      className: "keyboard-key",
      onClick: () => {
        console.log("l");
      },
    },
  ];

  const thirdRow = [
    {
      key: "z",
      value: "z",
      className: "keyboard-key",
      onClick: () => {
        console.log("z");
      },
    },
    {
      key: "x",
      value: "x",
      className: "keyboard-key",
      onClick: () => {
        console.log("x");
      },
    },
    {
      key: "c",
      value: "c",
      className: "keyboard-key",
      onClick: () => {
        console.log("c");
      },
    },
    {
      key: "v",
      value: "v",
      className: "keyboard-key",
      onClick: () => {
        console.log("v");
      },
    },
    {
      key: "b",
      value: "b",
      className: "keyboard-key",
      onClick: () => {
        console.log("b");
      },
    },
    {
      key: "n",
      value: "n",
      className: "keyboard-key",
      onClick: () => {
        console.log("n");
      },
    },
    {
      key: "m",
      value: "m",
      className: "keyboard-key",
      onClick: () => {
        console.log("m");
      },
    },
  ];

  return (
    <div className="keyboard">
      <div className={styles["keyboard-row"]}>
        {firstRow.map((key) => (
          <Key
            key={key.key}
            value={key.value}
            className={key.className}
            onClick={key.onClick}
            state={characters[key.value as CharactersIndex]}
          />
        ))}
      </div>
      <div className={styles["keyboard-row"] + " " + styles["keyboardRow2"]}>
        {secondRow.map((key) => (
          <Key
            key={key.key}
            value={key.value}
            className={key.className}
            onClick={key.onClick}
            state={characters[key.value as CharactersIndex]}
          />
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {thirdRow.map((key) => (
          <Key
            key={key.key}
            value={key.value}
            className={key.className}
            onClick={key.onClick}
            state={characters[key.value as CharactersIndex]}
          />
        ))}
      </div>
    </div>
  );
};

export default VisualKeyboard;
