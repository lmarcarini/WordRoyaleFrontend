import useController from "@/hooks/useController";
import { CharacterType } from "@/models/Character.model";
import { getGuessResult, isWordAllowed } from "@/utils/gameLogic";
import updateCharacters from "@/utils/updateCharacters";
import useCharacterStore from "@/store/charactersStore";
import useGameStore from "@/store/gameStore";
import { useState } from "react";

const useGuesses = (disabled = false) => {
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const [hasGuessedWrong, setHasGuessedWrong] = useState<boolean>(false);
  const guesses = useGameStore((state) => state.guesses);
  const characters = useCharacterStore((state) => state.characters);
  const socket = useGameStore((state) => state.socket);
  const room = useGameStore((state) => state.room);
  const answer = useGameStore((state) => state.answer);

  const makeGuess = (word: string): boolean => {
    if (disabled) return false;
    if (isWordAllowed(word)) {
      let guessResult = getGuessResult(word, answer);
      let updatedCharacters = updateCharacters(
        characters,
        word.split("") as CharacterType[],
        guessResult
      );
      useCharacterStore.setState({
        characters: { ...characters, ...updatedCharacters },
      });
      socket.emit("guess", guessResult, room);
      let tempGuesses: string[] = [...guesses];
      tempGuesses[currentGuess] = guess;
      useGameStore.setState({ guesses: [...tempGuesses] });
      setCurrentGuess(currentGuess + 1);
      return true;
    }
    console.log("guess not allowed");
    setHasGuessedWrong(true);
    return false;
  };

  const { guess } = useController(makeGuess);

  let displayGuesses = guesses;
  if (!disabled) displayGuesses[currentGuess] = guess;

  return {
    displayGuesses,
    hasGuessedWrong,
    resetGuessWrong: () => setHasGuessedWrong(false),
    guessLine: currentGuess,
  };
};

export default useGuesses;
