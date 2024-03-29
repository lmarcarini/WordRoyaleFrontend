import Key from "./components/Key";
import styles from "./VisualKeyboard.module.css";
import { CharacterType } from "@/models/Character.model";
import { CharactersType } from "@/models/CharactersType.model";

type Props = {
  characters: CharactersType;
};

const createKeyObject = (key: string, display?: string | undefined) => {
  return {
    key,
    value: display || key,
    onClick: () =>
      window.dispatchEvent(new KeyboardEvent("keydown", { key: key })),
  };
};

const firstRow = "QWERTYUIOP".split("").map((key) => createKeyObject(key));

const secondRow = "ASDFGHJKL".split("").map((key) => createKeyObject(key));

const thirdRow = [
  createKeyObject("Backspace", "←"),
  ..."ZXCVBNM".split("").map((key) => createKeyObject(key)),
  createKeyObject("Enter", "↳"),
];

const VisualKeyboard = ({ characters }: Props) => {
  return (
    <div className="keyboard">
      <div className={styles["keyboard-row"]}>
        {firstRow.map((key) => (
          <Key
            key={key.key}
            value={key.value}
            onClick={key.onClick}
            state={characters[key.value.toLowerCase() as CharacterType]}
          />
        ))}
      </div>
      <div
        className={
          styles["keyboard-row"] + " " + styles["keyboard-row--middle"]
        }
      >
        {secondRow.map((key) => (
          <Key
            key={key.key}
            value={key.value}
            onClick={key.onClick}
            state={characters[key.value.toLowerCase() as CharacterType]}
          />
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {thirdRow.map((key) => (
          <Key
            key={key.key}
            value={key.value}
            onClick={key.onClick}
            state={characters[key.value.toLowerCase() as CharacterType]}
          />
        ))}
      </div>
    </div>
  );
};

export default VisualKeyboard;
