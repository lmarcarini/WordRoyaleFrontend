import create from "zustand";

const useStore = create((set: any) => ({
  currentScreen: "joining",
  setScreen: (screen: "joining" | "waiting" | "playing" | "gameover") =>
    set((state: any) => ({ ...state, currentScreen: screen })),
  answer: "",
}));

export default useStore;
