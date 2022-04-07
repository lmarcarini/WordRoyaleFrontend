import styles from "./WaitingScreen.module.css";

type Props = {
  players: Player[];
};

const WaitingScreen = ({ players }: Props) => {
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
