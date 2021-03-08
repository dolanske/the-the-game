import { fastBoxCollision } from "../modules/helpers.js";

export class Life {
  constructor (x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    // this.sprite

    this.isColliding = null;
  }

  /**
   *
   * @param {int} hsp // Horizontal speed
   * @param {int} vsp // Vertical speed TODO: remove when added gravity
   * @param {int} amount By how many pixels should the object move
   * @param {obj} objects Array of all objects the object collides
   */
  move (hsp, vsp, objects) {
    const xx = this.x + this.w / 2;
    const yy = this.y + this.h / 2;

    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];

      const ox = obj.x + obj.w / 2;
      const oy = obj.y + obj.h / 2;

      if (
        fastBoxCollision(
          xx + 1 * Math.sign(hsp),
          this.y,
          this.w,
          this.h,
          ox,
          obj.y,
          obj.w,
          obj.h
        )
      ) {
        while (
          !fastBoxCollision(xx, this.y, this.w, this.h, ox, obj.y, obj.w, obj.h)
        ) {
          this.x += Math.sign(hsp);
          break;
        }
        hsp = 0;
      }

      if (
        fastBoxCollision(
          this.x,
          yy + 1 * Math.sign(vsp),
          this.w,
          this.h,
          obj.x,
          oy,
          obj.w,
          obj.h
        )
      ) {
        while (
          !fastBoxCollision(
            this.x,
            yy + Math.sign(vsp),
            this.w,
            this.h,
            obj.x,
            oy,
            obj.w,
            obj.h
          )
        ) {
          this.y += Math.sign(vsp);
          break;
        }
        vsp = 0;
      }
    }

    this.x += hsp * this.speed;
    this.y += vsp * this.speed;
  }
}
