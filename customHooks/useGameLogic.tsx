export const isWordAllowed = (
  word: string,
  allowedGuesses: string[]
): boolean => {
  const isWordValid = (word: string): boolean => word.length === 5;

  const checkIfWordExists = (word: string): boolean =>
    allowedGuesses.includes(word);

  return isWordValid(word) && checkIfWordExists(word);
};

export const getGuessResult = (word: string, answer: string): string => {
  let result: string = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === answer[i]) {
      answer = answer.substring(0, i) + "." + answer.substring(i + 1);
      word = word.substring(0, i) + "-" + word.substring(i + 1);
      result += "O";
    } else {
      result += "N";
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (answer.includes(word[i])) {
      result = result.substring(0, i) + "X" + result.substring(i + 1);
      answer = answer.replace(word[i], "");
    }
  }
  return result;
};
