import InputGrid from "@/ui/InputGrid";
import MiniAnswer from "@/ui/MiniAnswer";
import VisualKeyboard from "@/ui/VisualKeyboard";
import styles from "./PlayingScreen.module.css";
import useCharacterStore from "@/store/charactersStore";
import useGameStore from "@/store/gameStore";

const PlayingScreen = () => {
  const characters = useCharacterStore((state) => state.characters);
  const socket = useGameStore((state) => state.socket);
  const players = useGameStore((state) => state.players);

  return (
    <>
      <InputGrid />
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
