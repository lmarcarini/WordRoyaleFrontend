import useGameStore from "@/store/gameStore";

const useResults = () => {
  const socket = useGameStore((state) => state.socket);
  const players = useGameStore((state) => state.players);

  const results = players.find((player) => player.id === socket.id)?.guesses;

  return results;
};

export default useResults;
