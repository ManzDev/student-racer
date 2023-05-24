import { PLAYERS } from "./PLAYERS.js";

const FINISH_LIMIT = 700;

export function getWinnerPlayer() {
  const images = document.querySelectorAll(".player");

  for (let i = 0; i < PLAYERS.length; i++) {
    const player = PLAYERS.at(i);
    if (player.x >= FINISH_LIMIT) {
      return images[i];
    }
  }

  return null;
}
