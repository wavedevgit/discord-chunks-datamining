/** Chunk was on 31422 **/
/** chunk id: 855930, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk665352 = require("./665352.js"),
  Chunk216397 = require("./216397.js");
let s = new Chunk665352.Z({
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
  base: Chunk216397.Z,
  fromBase: e => {
    let t = Math.max(...e),
      r = Math.min(...e),
      [a, n, s] = e,
      [o, i, c] = [NaN, 0, (r + t) / 2],
      l = t - r;
    if (0 !== l) {
      switch (i = 0 === c || 1 === c ? 0 : (t - c) / Math.min(c, 1 - c), t) {
        case a:
          o = (n - s) / l + 6 * (n < s);
          break;
        case n:
          o = (s - a) / l + 2;
          break;
        case s:
          o = (a - n) / l + 4
      }
      o *= 60
    }
    return i < 0 && (o += 180, i = Math.abs(i)), o >= 360 && (o -= 360), [o, 100 * i, 100 * c]
  },
  toBase: e => {
    let [t, r, a] = e;

    function n(e) {
      let n = (e + t / 30) % 12,
        s = r * Math.min(a, 1 - a);
      return a - s * Math.max(false, Math.min(n - 3, 9 - n, 1))
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