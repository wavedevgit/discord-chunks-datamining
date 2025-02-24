/** Chunk was on 38597 **/
"use strict";

function a(e) {
  var t, r, a, n = e[0],
    s = e[1],
    o = e[2];
  return t = +n + 0 * s + 1.13983 * o, r = +n + -.39465 * s + -.5806 * o, a = +n + 2.02311 * s + 0 * o, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (a = Math.min(Math.max(0, a), 1))]
}

function n(e) {
  var t = e[0] / 255,
    r = e[1] / 255,
    a = e[2] / 255;
  return [.299 * t + .587 * r + .114 * a, -.14713 * t + -.28886 * r + .436 * a, .615 * t + -.51499 * r + -.10001 * a]
}
r.d(t, {
  L: () => n,
  x: () => a
})