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
  socket: Socket;
}

const useStore = create<GameStateStore>((set) => ({
  currentScreen: "joining",
  answer: "",
  winner: "",
  room: "",
  players: [],
  socket: socket
}));

export default useStore;
