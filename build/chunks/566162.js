/** Chunk was on 23032 **/
/** chunk id: 566162, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk665352 = require("./665352.js"),
  Chunk855930 = require("./855930.js");
let o = new Chunk665352.Z({
  id: "hsv",
  name: "HSV",
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
    v: {
      range: [0, 100],
      name: "Value"
    }
  },
  base: Chunk855930.Z,
  fromBase(e) {
    let [t, r, a] = e, n = (a /= 100) + (r /= 100) * Math.min(a, 1 - a);
    return [t, 0 === n ? 0 : 200 * (1 - a / n), 100 * n]
  },
  toBase(e) {
    let [t, r, a] = e, n = (a /= 100) * (1 - (r /= 100) / 2);
    return [t, 0 === n || 1 === n ? 0 : (a - n) / Math.min(n, 1 - n) * 100, 100 * n]
  },
  formats: {
    color: {
      id: "--hsv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
})