import { palette } from "../modules/colors.js";
import { Life } from "../extends/life.js";

export class Player extends Life {
  constructor (x, y) {
    // Player has preset width / height
    super(x, y, 16, 16, 3);

    this.x = x;
    this.y = y;
    this.color = palette.red;
  }

  draw (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 16, 16);
    // ctx.fillStyle = '#fff'

    // ctx.fillRect(this.x + this.w / 2, this.y + this.h / 2, 1, 1)
  }
}
