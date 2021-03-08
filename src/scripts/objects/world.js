import { palette } from "../modules/colors.js";
import { bs } from "../game.js";

export class SolidOBject {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.c = color;
  }

  draw (ctx) {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

export class Ground extends SolidOBject {
  constructor (x, y) {
    super(x, y, bs, bs, palette.gray);
  }
}

// TODO: add new class that extends Liquid object, liquid has additional constructor properties
// = Damage, Slowness, StatusEffect
export class Water extends SolidOBject {
  constructor (x, y) {
    super(x, y, bs, bs, palette.blue);

    // How many time slower it makes the player move
    this.slow = 1.2;
  }
}
