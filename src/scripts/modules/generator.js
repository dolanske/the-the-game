import { xe, xtiles, ye, ytiles, solidObjects, bs } from "../game.js";
// import { handlePromise } from "./helpers.js";
import * as world from "../objects/world.js";
import levelData from "@/database/database.js"

// Load template

function generateWalls () {
  for (let iy = 0; iy <= ytiles; iy++) {
    for (let ix = 0; ix <= xtiles; ix++) {
      if (iy === 0) solidObjects.push(new world.Ground(bs * ix, iy)); // Top wall
      if (iy === ytiles) solidObjects.push(new world.Ground(bs * ix, bs * iy - bs)); // Bottom wall
      if (ix === 0) solidObjects.push(new world.Ground(ix, iy * bs)); // Left wall
      if (ix === xtiles) solidObjects.push(new world.Ground(ix * bs - bs, iy * bs)); // Right Wall
    }
  }
}

/**
 *  Room functions
 **/
export function generateRoomOne () {
  const level = loadLevel(1);

  level.then(level => {
    for (const yAx in level) {
      for (const xAx in level[yAx]) {
        // Loop over each generated object

        generateObjectAtPosition(xAx * bs + bs, yAx * bs + bs, level[yAx][xAx]);
      }
    }
  })
}

/**
 *
 * @param {*} x X of Object
 * @param {*} y Y of Object
 * @param {*} objId ID of object to generate
 */

function generateObjectAtPosition (x, y, objId) {
  // 0 - Air
  // 1 - Wall
  // 2 - Water (player moves twice slower)
  // 3 - Player

  switch (objId) {
    case 1:
      solidObjects.push(new world.Ground(x, y));
      break;
    case 2:
      solidObjects.push(new world.Water(x, y));
  }
}

/**
 *
 * @param {*} id ID of fetched level
 * @returns Promise for desired level
 */

async function loadLevel (id) {
  let level;

  await levelData.getLevel(id)
    .then(response => {
      level = JSON.parse(response.data.level)
    })
    .catch(error => {
      console.log(error)
    })

  return level
}

async function createLevel (id) {}

async function updateLevel (id) {}

/**
 *  For generating things in the world
 */

export function __generate () {
  generateWalls();
  generateRoomOne();
}
