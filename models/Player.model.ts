export interface Player {
  id: string;
  name: string;
  guesses: Array<string[]>;
  room: string;
  status: string;
}
