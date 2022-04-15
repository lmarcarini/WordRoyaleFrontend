import { useEffect } from "react";
import styles from "./MiniAnswer.module.css";

type MiniAnswerProps = {
  guesses: Array<string>;
};

export default function MiniAnswer({ guesses }: MiniAnswerProps) {
  useEffect(() => {
    console.log(guesses);
  }, [guesses]);

  return (
    <div className={styles.miniContainer}>
      {guesses.map((guess, index) => (
        <div key={index} className="answerLine">
          {guess.split("").map((c, i) => (
            <div className={styles[c] + " " + styles.square} key={i}></div>
          ))}
        </div>
      ))}
      {guesses.length < 6 && (
        <div className={styles.answerLine}>
          <div className={styles.typing + " " + styles.square}></div>
        </div>
      )}
    </div>
  );
}
