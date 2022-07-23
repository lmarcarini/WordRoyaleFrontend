import "../styles/globals.css";
import useGameState from "../customHooks/useGameState";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useGameState();
  return <Component {...pageProps} />;
}

export default MyApp;
