import confetti from "canvas-confetti";

const PLAYERS = [
  { name: "Agustina", color: "#00CED1", x: 0, picture: "images/agustina.png" },
  { name: "Dave", color: "#50F6B2", x: 0, picture: "images/dave.png" },
  { name: "Fany", color: "#CA2AF9", x: 0, picture: "images/fany.jpg" },
  { name: "Isabel", color: "#000000", x: 0, picture: "images/isabel.jpg" },
  { name: "Nahomi", color: "#B5FF33", x: 0, picture: "images/nahomi.jpg" },
  { name: "Naomi", color: "#d4045b", x: 0, picture: "images/naomi.jpg" },
  { name: "Pablo", color: "#99FF00", x: 0, picture: "images/pablo.jpg" },
  { name: "Sara", color: "rgb(32, 203, 157)", x: 0, picture: "images/sara.jpg" }
];

const FINISH_LIMIT = 700;
const CONFETTI_OPTIONS = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
};

function prepareGame() {
  console.log("Preparando juego...");

  const trackRace = document.querySelector(".track-race");
  PLAYERS.forEach((player) => {
    const image = document.createElement("img");
    image.classList.add("player");
    image.src = player.picture;
    image.alt = player.name;
    image.title = player.name;
    image.style.setProperty("--x", `${player.x}px`);
    image.style.setProperty("--color", player.color);
    trackRace.appendChild(image);
  });
}

function startGame() {
  console.log("Empieza el juego...");
  startIteration();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
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
