import { useEffect, useState } from "react";

type Props = {
  handleGuess: (guess: string) => void;
  state?: String;
};

const useController = (
  makeGuess: (guess: string) => Boolean,
  state?: String
) => {
  const [guess, setGuess] = useState("");

  const resetGuess = () => {
    setGuess("");
  };

  useEffect(() => {
    //handle key down
    const handleKeyDown = (e: KeyboardEvent) => {
      let MAX_CHARACTERS = 5;
      if (state === "joining") {
        MAX_CHARACTERS = 10;
        if (e.key === "Enter") {
          makeGuess(guess);
          return;
        }
      }
      if (e.key === "Enter" && guess.length === MAX_CHARACTERS) {
        if (makeGuess(guess)) setGuess("");
        return;
      }
      if (e.key === "Backspace" && guess.length > 0)
        setGuess(guess.slice(0, -1));
      if (new RegExp(/^[a-z]$/i).test(e.key) && guess.length < MAX_CHARACTERS)
        setGuess(guess + e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess, makeGuess, state]);

  return { guess, resetGuess };
};

export default useController;
