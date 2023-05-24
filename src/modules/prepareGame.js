import { PLAYERS } from "./PLAYERS.js";

export function prepareGame() {
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
