import { CharacterType, CharacterStateType } from "@/models/Character.model";
import { CharactersType } from "@/models/CharactersType.model";

const updateCharacters = (
  characters: CharactersType,
  word: CharacterType[],
  guessResult: CharacterStateType[]
) => {
  let newCharacters = { ...characters };
  for (let i = 0; i < guessResult.length; i++) {
    let currentChar = word[i];
    switch (guessResult[i]) {
      case "O":
        newCharacters[currentChar] = "O";
        break;
      case "X":
        if (newCharacters[currentChar] !== "O")
          newCharacters[currentChar] = "X";
        break;
      case "N":
        if (
          newCharacters[currentChar] !== "O" &&
          newCharacters[currentChar] !== "X"
        )
          newCharacters[currentChar] = "N";
        break;
      default:
        newCharacters[currentChar] = guessResult[i];
        break;
    }
  }
  return newCharacters;
};

export default updateCharacters;
