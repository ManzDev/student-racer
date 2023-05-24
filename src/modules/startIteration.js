import { getRandomNumber } from "./getRandomNumber.js";
import { getWinnerPlayer } from "./getWinnerPlayer.js";
import { updatePlayers } from "./updatePlayers.js";
import { endGame } from "./endGame.js";
import { PLAYERS } from "./PLAYERS.js";

export function startIteration() {
  PLAYERS.forEach((player) => {
    const increment = getRandomNumber();
    player.x += increment;
  });

  // Actualiza el DOM de los players
  updatePlayers();

  const winner = getWinnerPlayer();
  if (winner !== null) {
    endGame(winner);
  } else {
    setTimeout(() => startIteration(), 50);
  }
}
