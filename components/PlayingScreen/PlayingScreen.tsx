import InputGrid from "../InputGrid";
import MiniAnswer from "../MiniAnswer";
import VisualKeyboard from "../VisualKeyboard";
import styles from "./PlayingScreen.module.css";

type Props = {
  handleGuess: (word: string) => boolean;
  players: Player[];
  socketid: string;
  characters: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
    h: string;
    i: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n: string;
    o: string;
    p: string;
    q: string;
    r: string;
    s: string;
    t: string;
    u: string;
    v: string;
    w: string;
    x: string;
    y: string;
    z: string;
  };
};

const PlayingScreen = ({
  handleGuess,
  players,
  socketid,
  characters,
}: Props) => {
  return (
    <>
      <InputGrid
        handleGuess={handleGuess}
        results={players.find((player) => player.id === socketid)?.guesses}
      />
      <div className={styles.MiniPlayerContainer}>
        {players
          .filter((player) => player.id !== socketid)
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
