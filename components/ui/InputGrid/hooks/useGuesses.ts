import useController from "@/hooks/useController";
import { CharacterType } from "@/models/Character.model";
import { getGuessResult, isWordAllowed } from "@/utils/gameLogic";
import updateCharacters from "@/utils/updateCharacters";
import useCharacterStore from "@/store/charactersStore";
import useGameStore from "@/store/gameStore";
import { useState } from "react";

const useGuesses = () => {
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const [guesses, setGuesses] = useState<string[]>([""].fill("", 0, 6));
  const characters = useCharacterStore((state) => state.characters);
  const socket = useGameStore((state) => state.socket);
  const room = useGameStore((state) => state.room);
  const players = useGameStore((state) => state.players);
  const answer = useGameStore((state) => state.answer);

  const makeGuess = (word: string): boolean => {
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
      setGuesses(tempGuesses);
      setCurrentGuess(currentGuess + 1);
      return true;
    }
    return false;
  };

  const { guess } = useController(makeGuess);

  let displayGuesses = guesses;
  displayGuesses[currentGuess] = guess;

  return displayGuesses;
};

export default useGuesses;
