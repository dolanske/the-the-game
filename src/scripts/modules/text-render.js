export function renderText (x, y, text, color, ctx) {
  ctx.fillStyle = color
  ctx.fillText(text, x, y)
}
