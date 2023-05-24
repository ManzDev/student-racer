import { startIteration } from "./startIteration.js";

const startButton = document.querySelector(".start");

export function startGame() {
  console.log("Empieza el juego...");
  startButton.toggleAttribute("disabled");
  startIteration();
}
