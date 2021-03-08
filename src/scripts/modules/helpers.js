/**
 *
 * @param {int} start // Starting position
 * @param {int} target // Target position
 * @param {int} speed // Speed
 */

export function lerp (start, target, speed) {
  return speed * (target - start)
}

export function fastBoxCollision (c1x, c1y, c1w, c1h, c2x, c2y, c2w, c2h) {
  return c1x < c2x + c2w && c1x + c1w > c2x && c1y < c2y + c2h && c1y + c1h > c2y
}

export function clamp (num, min, max) {
  return num <= min ? min : num >= max ? max : num
}
