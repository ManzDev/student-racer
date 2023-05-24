import { startGame } from "./modules/startGame.js";
import { prepareGame } from "./modules/prepareGame.js";
import { resetGame } from "./modules/resetGame.js";

prepareGame();

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => startGame());

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => resetGame());
