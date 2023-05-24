import { PLAYERS } from "./PLAYERS.js";
import { updatePlayers } from "./updatePlayers.js";

const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");

export function resetGame() {
  PLAYERS.forEach(player => {
    player.x = 0;
  });
  updatePlayers();
  startButton.toggleAttribute("disabled");
  resetButton.toggleAttribute("disabled");

  const winners = document.querySelectorAll(".winner");
  winners.forEach(winner => winner.classList.remove("winner"));
}
