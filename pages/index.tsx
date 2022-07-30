import Head from "next/head";
import styles from "../styles/Home.module.css";
import WaitingScreen from "../components/views/WaitingScreen";
import EnterScreen from "../components/views/EnterScreen";
import GameOverScreen from "../components/views/GameOverScreen";
import PlayingScreen from "../components/views/PlayingScreen";
import WinnerScreen from "../components/views/WinnerScreen";
import useGameStore from "../store/gameStore";

const Home = (): JSX.Element => {
  const { currentScreen, socket, reset } = useGameStore((state) => ({
    currentScreen: state.currentScreen,
    socket: state.socket,
    reset: state.reset,
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = document.querySelector("form") as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    socket.emit("join", {
      name: name,
    });
  };

  //handle refresh client
  const handleRestart = () => {
    reset();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Word Royale</title>
        <meta name="Word Royale" content="Multiplayer word guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {currentScreen === "joining" && (
          <EnterScreen handleSubmit={handleSubmit} />
        )}
        {currentScreen === "waiting" && <WaitingScreen />}
        {currentScreen === "playing" && <PlayingScreen />}
        {currentScreen === "gameover" && (
          <GameOverScreen handleRestart={handleRestart} />
        )}
        {currentScreen === "winner" && (
          <WinnerScreen handleRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default Home;
