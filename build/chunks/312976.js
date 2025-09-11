/** Chunk was on 54628 **/
/** chunk id: 312976, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk665352 = require("./665352.js"),
  Chunk135164 = require("./135164.js"),
  Chunk656653 = require("./656653.js");
let s = new Chunk665352.Z({
  id: "lch",
  name: "LCH",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 150],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Chunk135164.Z,
  fromBase(e) {
    let t, [r, a, n] = e;
    return t = .02 > Math.abs(a) && .02 > Math.abs(n) ? NaN : 180 * Math.atan2(n, a) / Math.PI, [r, Math.sqrt(a ** 2 + n ** 2), (0, o.j)(t)]
  },
  toBase(e) {
    let [t, r, a] = e;
    return r < 0 && (r = 0), isNaN(a) && (a = 0), [t, r * Math.cos(a * Math.PI / 180), r * Math.sin(a * Math.PI / 180)]
  },
  formats: {
    lch: {
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
})