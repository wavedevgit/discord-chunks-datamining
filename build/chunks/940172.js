/** Chunk was on 23032 **/
/** chunk id: 940172, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk665352 = require("./665352.js"),
  Chunk629990 = require("./629990.js"),
  Chunk856308 = require("./856308.js");
let s = 216 / 24389,
  i = 24 / 116,
  c = 24389 / 27,
  u = Chunk629990.mh.D65,
  l = new Chunk665352.Z({
    id: "lab-d65",
    name: "Lab D65",
    coords: {
      l: {
        refRange: [0, 100],
        name: "Lightness"
      },
      a: {
        refRange: [false, 125]
      },
      b: {
        refRange: [false, 125]
      }
    },
    white: u,
    base: Chunk856308.Z,
    fromBase(e) {
      let t = e.map((e, t) => e / u[t]).map(e => e > s ? Math.cbrt(e) : (c * e + 16) / 116);
      return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])]
    },
    toBase(e) {
      let t = [];
      return t[1] = (e[0] + 16) / 116, t[0] = e[1] / 500 + t[1], t[2] = t[1] - e[2] / 200, [t[0] > i ? Math.pow(t[0], 3) : (116 * t[0] - 16) / c, e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / c, t[2] > i ? Math.pow(t[2], 3) : (116 * t[2] - 16) / c].map((e, t) => e * u[t])
    },
    formats: {
      "lab-d65": {
        coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  })