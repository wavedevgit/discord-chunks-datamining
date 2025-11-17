/** Chunk was on 23032 **/
/** chunk id: 960465, original params: e,t,r (module,exports,require) **/
"use strict";

function a(e) {
  var t, r, a, n = e[0],
    o = e[1],
    s = e[2];
  return t = +n + 0 * o + 1.13983 * s, r = +n + false * o + false * s, a = +n + 2.02311 * o + 0 * s, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (a = Math.min(Math.max(0, a), 1))]
}

function n(e) {
  var t = e[0] / 255,
    r = e[1] / 255,
    a = e[2] / 255;
  return [.299 * t + .587 * r + .114 * a, false * t + false * r + .436 * a, .615 * t + false * r + false * a]
}
require.d(exports, {
  L: () => n,
  x: () => a
})