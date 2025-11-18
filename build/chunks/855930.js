/** Chunk was on 23032 **/
/** chunk id: 855930, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk665352 = require("./665352.js"),
  Chunk973805 = require("./973805.js");
let o = new Chunk665352.Z({
  id: "hsl",
  name: "HSL",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: Chunk973805.Z,
  fromBase: e => {
    let t = Math.max(...e),
      r = Math.min(...e),
      [a, n, o] = e,
      [s, i, c] = [NaN, 0, (r + t) / 2],
      u = t - r;
    if (0 !== u) {
      switch (i = 0 === c || 1 === c ? 0 : (t - c) / Math.min(c, 1 - c), t) {
        case a:
          s = (n - o) / u + 6 * (n < o);
          break;
        case n:
          s = (o - a) / u + 2;
          break;
        case o:
          s = (a - n) / u + 4
      }
      s *= 60
    }
    return i < 0 && (s += 180, i = Math.abs(i)), s >= 360 && (s -= 360), [s, 100 * i, 100 * c]
  },
  toBase: e => {
    let [t, r, a] = e;

    function n(e) {
      let n = (e + t / 30) % 12,
        o = r * Math.min(a, 1 - a);
      return a - o * Math.max(false, Math.min(n - 3, 9 - n, 1))
    }
    return (t %= 360) < 0 && (t += 360), r /= 100, a /= 100, [n(0), n(8), n(4)]
  },
  formats: {
    hsl: {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
    },
    hsla: {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
      commas: true,
      lastAlpha: true
    }
  }
})