/** Chunk was on 23032 **/
/** chunk id: 981613, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk665352 = require("./665352.js"),
  Chunk762399 = require("./762399.js"),
  Chunk656653 = require("./656653.js");
let s = new Chunk665352.Z({
  id: "oklch",
  name: "Oklch",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    c: {
      refRange: [0, .4],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  white: "D65",
  base: Chunk762399.Z,
  fromBase(e) {
    let t, [r, a, n] = e;
    return t = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : 180 * Math.atan2(n, a) / Math.PI, [r, Math.sqrt(a ** 2 + n ** 2), (0, o.j)(t)]
  },
  toBase(e) {
    let t, r, [a, n, o] = e;
    return isNaN(o) ? (t = 0, r = 0) : (t = n * Math.cos(o * Math.PI / 180), r = n * Math.sin(o * Math.PI / 180)), [a, t, r]
  },
  formats: {
    oklch: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
})