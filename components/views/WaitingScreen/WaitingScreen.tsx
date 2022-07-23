import styles from "./WaitingScreen.module.css";
import useGameStore from "@/store/gameStore";

const WaitingScreen = (): JSX.Element => {
  const players = useGameStore((state) => state.players);

  return (
    <>
      <h1>Waiting for other players</h1>
      <div className={styles.dotPulse}></div>
      {players.map((player) => (
        <p key={player.id}>
          Player <b>{player.name}</b> joined.
        </p>
      ))}
    </>
  );
};

export default WaitingScreen;
