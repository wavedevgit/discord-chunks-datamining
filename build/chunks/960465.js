/** Chunk was on 23706 **/
/** chunk id: 960465, original params: e,t,r (module,exports,require) **/
"use strict";

function n(e) {
  var t, r, n, a = e[0],
    o = e[1],
    s = e[2];
  return t = +a + 0 * o + 1.13983 * s, r = +a + false * o + false * s, n = +a + 2.02311 * o + 0 * s, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
}

function a(e) {
  var t = e[0] / 255,
    r = e[1] / 255,
    n = e[2] / 255;
  return [.299 * t + .587 * r + .114 * n, false * t + false * r + .436 * n, .615 * t + false * r + false * n]
}
require.d(exports, {
  L: () => a,
  x: () => n
})