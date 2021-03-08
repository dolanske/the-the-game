import { clamp } from "./helpers.js";

export let vsp = 0;
export let hsp = 0;
export const keys = [];
const allowJump = true;

export function initKeyboard () {
  // Fuck you solution
  keys.ArrowRight = false;
  keys.ArrowLeft = false;
  keys.ArrowDown = false;
  keys.ArrowUp = false;

  document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
  });

  // Once key is up
  document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });
}

export function handleKeys () {
  const hinput = keys.ArrowRight - keys.ArrowLeft;
  const vinput = keys.ArrowDown - keys.ArrowUp;

  if (hinput !== 0 || vinput !== 0) {
    hsp = clamp(lengthdir_x(1, getAngle({ x: 0, y: 0 }, { x: hinput, y: vinput })), -1, 1);
    vsp = clamp(lengthdir_y(1, getAngle({ x: 0, y: 0 }, { x: hinput, y: vinput })), -1, 1);
  } else {
    hsp = 0;
    vsp = 0;
  }

  // When R is pressed, reset game
  if (keys.r) location.reload();
}

export function lengthdir_x (dist, ang) {
  return dist * Math.cos(ang);
}

export function lengthdir_y (dist, ang) {
  return dist * Math.sin(ang);
}

export function getAngle (p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}
