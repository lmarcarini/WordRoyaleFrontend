import InputGrid from "@/ui/InputGrid";
import MiniAnswer from "@/ui/MiniAnswer";
import VisualKeyboard from "@/ui/VisualKeyboard";
import styles from "./PlayingScreen.module.css";
import useCharacterStore from "@/store/charactersStore";
import useGameStore from "@/store/gameStore";
import { isWordAllowed, getGuessResult } from "@/utils/gameLogic";
import updateCharacters from "@/utils/updateCharacters";
import { CharacterType } from "@/models/Character.model";

const PlayingScreen = () => {
  const characters = useCharacterStore((state) => state.characters);
  const socket = useGameStore((state) => state.socket);
  const room = useGameStore((state) => state.room);
  const players = useGameStore((state) => state.players);
  const answer = useGameStore((state) => state.answer);

  const handleGuess = (word: string): boolean => {
    console.log(word);
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
      console.log(guessResult);
      socket.emit("guess", guessResult, room);
      return true;
    }
    return false;
  };

  return (
    <>
      <InputGrid
        handleGuess={handleGuess}
        results={players.find((player) => player.id === socket.id)?.guesses}
      />
      <div className={styles.MiniPlayerContainer}>
        {players
          .filter((player) => player.id !== socket.id)
          .map((player) => (
            <div
              key={player.id}
              className={styles[player.status] + " " + styles.playerMiniDisplay}
            >
              {player.name}
              <br />
              <MiniAnswer guesses={player.guesses} />
            </div>
          ))}
      </div>
      <VisualKeyboard characters={characters} />
    </>
  );
};

export default PlayingScreen;
