import create from "zustand";
import { GameStateType } from "@/models/GameState.model";
import { Player } from "@/models/Player.model";
import { io, Socket } from "socket.io-client";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? "wss://word-royale-backend.herokuapp.com/"
    : "ws://localhost:8080";

const socket = io(apiUrl);

interface GameStateStore {
  currentScreen: GameStateType;
  answer: string;
  winner: string;
  room: string;
  players: Player[];
  guesses: string[];
  socket: Socket;
  reset: () => void;
}

const useStore = create<GameStateStore>((set) => ({
  currentScreen: "joining",
  answer: "",
  winner: "",
  room: "",
  players: [],
  guesses: [""].fill("", 0, 6),
  socket: socket,
  reset: () =>
    set((state) => ({
      ...state,
      currentScreen: "joining",
      answer: "",
      winner: "",
      room: "",
      players: [],
      guesses: [""].fill("", 0, 6),
    })),
}));

export default useStore;
