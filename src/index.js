import { getRandomNumber } from "./modules/getRandomNumber.js";
import { prepareGame } from "./modules/prepareGame.js";
import { PLAYERS } from "./modules/PLAYERS.js";
import confetti from "canvas-confetti";

const FINISH_LIMIT = 700;
const CONFETTI_OPTIONS = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
};

function resetGame() {
  PLAYERS.forEach(player => {
    player.x = 0;
  });
  updatePlayers();
  const startButton = document.querySelector(".start");
  startButton.toggleAttribute("disabled");
  const resetButton = document.querySelector(".reset");
  resetButton.toggleAttribute("disabled");

  const winners = document.querySelectorAll(".winner");
  winners.forEach(winner => winner.classList.remove("winner"));
}

function startGame() {
  console.log("Empieza el juego...");
  const startButton = document.querySelector(".start");
  startButton.toggleAttribute("disabled");
  startIteration();
}

function updatePlayers() {
  const images = document.querySelectorAll(".player");

  images.forEach((image, index) => {
    const player = PLAYERS.at(index);
    image.style.setProperty("--x", `${player.x}px`);
  });
}

function startIteration() {
  PLAYERS.forEach((player) => {
    const increment = getRandomNumber();
    player.x += increment;
  });

  // Actualiza el DOM de los players
  updatePlayers();

  const winner = getWinnerPlayer();
  if (winner !== null) {
    console.log("Ha ganado " + winner.alt);
    winner.classList.add("winner");
    confetti(CONFETTI_OPTIONS);
    const resetButton = document.querySelector(".reset");
    resetButton.toggleAttribute("disabled");
  } else {
    setTimeout(() => startIteration(), 50);
  }
}

function getWinnerPlayer() {
  const images = document.querySelectorAll(".player");

  for (let i = 0; i < PLAYERS.length; i++) {
    const player = PLAYERS.at(i);
    if (player.x >= FINISH_LIMIT) {
      return images[i];
    }
  }

  return null;
}

// Principal
prepareGame();

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => startGame());

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => resetGame());
