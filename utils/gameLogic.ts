import { CharacterStateType } from "@/models/Character.model";
import allowedGuesses from "@/utils/allowedGuesses";

export const isWordAllowed = (word: string): boolean => {
  const isWordValid = (word: string): boolean => word.length === 5;

  const checkIfWordExists = (word: string): boolean =>
    allowedGuesses.includes(word);

  return isWordValid(word) && checkIfWordExists(word);
};

export const getGuessResult = (
  word: string,
  answer: string
): CharacterStateType[] => {
  let result: CharacterStateType[] = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === answer[i]) {
      answer = answer.substring(0, i) + "." + answer.substring(i + 1);
      word = word.substring(0, i) + "-" + word.substring(i + 1);
      result.push("O");
    } else {
      result.push("N");
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (answer.includes(word[i])) {
      result[i] = "X";
      answer = answer.replace(word[i], "");
    }
  }
  return result;
};
