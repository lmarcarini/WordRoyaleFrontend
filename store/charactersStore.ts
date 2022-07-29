import create from "zustand";
import { CharacterType, CharacterStateType } from "@/models/Character.model";
import { CharactersType } from "@/models/CharactersType.model";

const initialCharacters: CharactersType = {
  a: "?",
  b: "?",
  c: "?",
  d: "?",
  e: "?",
  f: "?",
  g: "?",
  h: "?",
  i: "?",
  j: "?",
  k: "?",
  l: "?",
  m: "?",
  n: "?",
  o: "?",
  p: "?",
  q: "?",
  r: "?",
  s: "?",
  t: "?",
  u: "?",
  v: "?",
  w: "?",
  x: "?",
  y: "?",
  z: "?",
};

interface CharacterStore {
  characters: CharactersType;
  setCharacter: (
    character: CharacterType,
    newState: CharacterStateType
  ) => void;
  resetCharacters: () => void;
}

const useStore = create<CharacterStore>((set) => ({
  characters: { ...initialCharacters },
  setCharacter: (character, newState) =>
    set((state) => ({
      ...state,
      characters: { ...state.characters, [character]: newState },
    })),
  resetCharacters: () =>
    set((state) => ({ ...state, characters: { ...initialCharacters } })),
}));

export default useStore;
