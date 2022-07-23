import { useRef } from "react";
import useController from "../../../customHooks/useController";
import styles from "./Form.module.css";

type FormProps = {
  submitHandler: React.FormEventHandler<HTMLFormElement>;
};

export default function Form({ submitHandler }: FormProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = (playerName: string): Boolean => {
    if (playerName.length > 0) {
      //enable input
      inputRef.current!.disabled = false;
      buttonRef.current?.click();
      inputRef.current!.disabled = true;
      return true;
    }
    return false;
  };

  const { guess } = useController(handleEnter, "joining");

  return (
    <form id="form" onSubmit={submitHandler} className={styles.form}>
      <label className={styles.inputLabel}>
        <input
          className={styles.playerNameInput}
          type="text"
          id="name"
          name="name"
          value={guess.toUpperCase()}
          disabled
          ref={inputRef}
        />
        <button className={styles.submitButton} ref={buttonRef} type="submit">
          o
        </button>
        <br />
        Type Your Name
      </label>
      <br />
    </form>
  );
}
