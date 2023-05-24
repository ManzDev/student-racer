import { PLAYERS } from "./PLAYERS.js";

export function updatePlayers() {
  const images = document.querySelectorAll(".player");

  images.forEach((image, index) => {
    const player = PLAYERS.at(index);
    image.style.setProperty("--x", `${player.x}px`);
  });
}
