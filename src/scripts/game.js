/**
 * Handle imports
 */

import * as txt from "./modules/text-render.js";
import * as input from "./modules/input.js";
import * as world from "./modules/generator.js";
import { Player } from "./objects/player.js";

/**
 * Set global variables
 */

export let canvas = null;
export let ctx = null;
export let player = null;
export const solidObjects = [];
export let xe = 0;
export let ye = 0;
export const bs = 16;

export let xtiles = 0;
export let ytiles = 0;

export function __init () {
  // Assign variables after vue is ready
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  xe = ctx.canvas.width;
  ye = ctx.canvas.height;
  xtiles = xe / bs;
  ytiles = ye / bs;

  // Rus once at the start
  world.__generate();

  player = new Player(64, ye / 2);
  input.initKeyboard();

  let lastUpdate = Date.now();
  const dtInterval = setInterval(tick, 1000 / 60);

  function tick () {
    const now = Date.now();
    const dt = now - lastUpdate;
    lastUpdate = now;

    update(dt);
    draw(dt);
  }
}

/**
 * Graphics
 */

function draw (time) {
  player.draw(ctx);
  solidObjects.map(i => i.draw(ctx));

  // Debug stuff
  txt.renderText(4, 11, `${xtiles} xtiles | ${ytiles} ytiles`, "#fff", ctx);
}

/**
 * Functionality
 */
function update (time) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  input.handleKeys();
  player.move(input.hsp, input.vsp, solidObjects);
}

// Call init
// __init();
