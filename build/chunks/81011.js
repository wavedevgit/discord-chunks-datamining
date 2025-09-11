/** Chunk was on 54628 **/
/** chunk id: 81011, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk665352 = require("./665352.js"),
  Chunk629990 = require("./629990.js"),
  Chunk856308 = require("./856308.js"),
  Chunk186267 = require("./186267.js"),
  Chunk37484 = require("./37484.js");
let c = Chunk629990.mh.D65,
  u = 216 / 24389,
  l = 24389 / 27,
  [f, b] = (0, Chunk186267.uv)({
    space: Chunk856308.Z,
    coords: c
  }),
  d = new Chunk665352.Z({
    id: "luv",
    name: "Luv",
    coords: {
      l: {
        refRange: [0, 100],
        name: "Lightness"
      },
      u: {
        refRange: [false, 215]
      },
      v: {
        refRange: [false, 215]
      }
    },
    white: c,
    base: Chunk856308.Z,
    fromBase(e) {
      let t = [(0, i.sI)(e[0]), (0, i.sI)(e[1]), (0, i.sI)(e[2])],
        r = t[1],
        [a, n] = (0, s.uv)({
          space: o.Z,
          coords: t
        });
      if (!Number.isFinite(a) || !Number.isFinite(n)) return [0, 0, 0];
      let c = r <= u ? l * r : 116 * Math.cbrt(r) - 16;
      return [c, 13 * c * (a - f), 13 * c * (n - b)]
    },
    toBase(e) {
      let [t, r, a] = e;
      if (0 === t || (0, i.Wi)(t)) return [0, 0, 0];
      r = (0, i.sI)(r), a = (0, i.sI)(a);
      let n = r / (13 * t) + f,
        o = a / (13 * t) + b,
        s = t <= 8 ? t / l : Math.pow((t + 16) / 116, 3);
      return [9 * n / (4 * o) * s, s, (12 - 3 * n - 20 * o) / (4 * o) * s]
    },
    formats: {
      color: {
        id: "--luv",
        coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  })