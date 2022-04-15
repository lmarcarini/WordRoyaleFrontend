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
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "q" }));
      },
    },
    {
      key: "w",
      value: "w",
      className: "keyboard-key",
      onClick: () => {
        console.log("w");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "w" }));
      },
    },
    {
      key: "e",
      value: "e",
      className: "keyboard-key",
      onClick: () => {
        console.log("e");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "e" }));
      },
    },
    {
      key: "r",
      value: "r",
      className: "keyboard-key",
      onClick: () => {
        console.log("r");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "r" }));
      },
    },
    {
      key: "t",
      value: "t",
      className: "keyboard-key",
      onClick: () => {
        console.log("t");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "t" }));
      },
    },
    {
      key: "y",
      value: "y",
      className: "keyboard-key",
      onClick: () => {
        console.log("y");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "y" }));
      },
    },
    {
      key: "u",
      value: "u",
      className: "keyboard-key",
      onClick: () => {
        console.log("u");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "u" }));
      },
    },
    {
      key: "i",
      value: "i",
      className: "keyboard-key",
      onClick: () => {
        console.log("i");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "i" }));
      },
    },
    {
      key: "o",
      value: "o",
      className: "keyboard-key",
      onClick: () => {
        console.log("o");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "o" }));
      },
    },
    {
      key: "p",
      value: "p",
      className: "keyboard-key",
      onClick: () => {
        console.log("p");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "p" }));
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
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      },
    },
    {
      key: "s",
      value: "s",
      className: "keyboard-key",
      onClick: () => {
        console.log("s");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "s" }));
      },
    },
    {
      key: "d",
      value: "d",
      className: "keyboard-key",
      onClick: () => {
        console.log("d");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "d" }));
      },
    },
    {
      key: "f",
      value: "f",
      className: "keyboard-key",
      onClick: () => {
        console.log("f");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "f" }));
      },
    },
    {
      key: "g",
      value: "g",
      className: "keyboard-key",
      onClick: () => {
        console.log("g");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "g" }));
      },
    },
    {
      key: "h",
      value: "h",
      className: "keyboard-key",
      onClick: () => {
        console.log("h");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "h" }));
      },
    },
    {
      key: "j",
      value: "j",
      className: "keyboard-key",
      onClick: () => {
        console.log("j");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "j" }));
      },
    },
    {
      key: "k",
      value: "k",
      className: "keyboard-key",
      onClick: () => {
        console.log("k");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "k" }));
      },
    },
    {
      key: "l",
      value: "l",
      className: "keyboard-key",
      onClick: () => {
        console.log("l");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "l" }));
      },
    },
  ];

  const thirdRow = [
    {
      key: "Backspace",
      value: "←",
      className: "keyboard-key",
      onClick: () => {
        console.log("Backspace");
        window.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Backspace" })
        );
      },
    },
    {
      key: "z",
      value: "z",
      className: "keyboard-key",
      onClick: () => {
        console.log("z");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "z" }));
      },
    },
    {
      key: "x",
      value: "x",
      className: "keyboard-key",
      onClick: () => {
        console.log("x");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "x" }));
      },
    },
    {
      key: "c",
      value: "c",
      className: "keyboard-key",
      onClick: () => {
        console.log("c");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "c" }));
      },
    },
    {
      key: "v",
      value: "v",
      className: "keyboard-key",
      onClick: () => {
        console.log("v");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "v" }));
      },
    },
    {
      key: "b",
      value: "b",
      className: "keyboard-key",
      onClick: () => {
        console.log("b");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "b" }));
      },
    },
    {
      key: "n",
      value: "n",
      className: "keyboard-key",
      onClick: () => {
        console.log("n");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "n" }));
      },
    },
    {
      key: "m",
      value: "m",
      className: "keyboard-key",
      onClick: () => {
        console.log("m");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "m" }));
      },
    },
    {
      key: "Enter",
      value: "↳",
      className: "keyboard-key",
      onClick: () => {
        console.log("Enter");
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
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
