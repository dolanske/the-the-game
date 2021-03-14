/* eslint-disable no-multi-spaces */
import {  xtiles, ytiles, solidObjects, bs, player, currentLevelId } from "../game.js";
import * as world from "../objects/world.js";
import levelData from "@/database/database.js"

// Current level object
let currentLevelObject = null;

function generateWalls () {
  for (let iy = 0; iy <= ytiles; iy++) {
    for (let ix = 0; ix <= xtiles; ix++) {
      if (iy === 0)       solidObjects.push(new world.Ground(bs * ix, iy)); // Top wall
      if (iy === ytiles)  solidObjects.push(new world.Ground(bs * ix, bs * iy - bs)); // Bottom wall
      if (ix === 0)       solidObjects.push(new world.Ground(ix, iy * bs)); // Left wall
      if (ix === xtiles)  solidObjects.push(new world.Ground(ix * bs - bs, iy * bs)); // Right Wall
    }
  }
}

/**
 *  Room functions
 **/
export function generateLevel () {
  const level = loadLevel(currentLevelId);

  level.then(l => {
    currentLevelObject = l

    for (const yAx in l) {
      for (const xAx in l[yAx]) {
        // Loop over each generated object

        generateObjectAtPosition(xAx * bs + bs, yAx * bs + bs, l[yAx][xAx]);
      }
    }
  });
}

/**
 *
 * @param {*} x X of Object
 * @param {*} y Y of Object
 * @param {*} objId ID of object to generate
 */

export function generateObjectAtPosition (x, y, objId, add = false) {
  // 0 - Air
  // 1 - Wall
  // 2 - Water (player moves twice slower)
  // 3 - Player

  if (add) {
    currentLevelObject[Math.floor(y / bs) - 1][Math.floor(x / bs) - 1] = objId
    update()
  }

  switch (objId) {
    case 1:
      solidObjects.push(new world.Ground(x, y));
      break;
    case 2:
      solidObjects.push(new world.Water(x, y));
      break;
    case 3:
      player.x = x;
      player.y = y;
      break;
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
      level = response.data.level
    })
    .catch(error => {
      console.log(error)
    })

  return level
}

async function createLevel (levelId) {
  await levelData.addLevel({})
}

async function update () {
  await levelData.updateLevel({ id: currentLevelId, level: currentLevelObject })
    .catch(e => {
      console.log(e)
    })
}

/**
 *  For generating things in the world
 */

export function __generate () {
  generateWalls();
  generateLevel();
}
