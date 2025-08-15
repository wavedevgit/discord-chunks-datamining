/** Chunk was on 31422 **/
/** chunk id: 369318, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => f,
  Z: () => b
});
var Chunk665352 = require("./665352.js"),
  Chunk656653 = require("./656653.js"),
  Chunk856308 = require("./856308.js"),
  Chunk440255 = require("./440255.js");
let i = require("./629990.js").mh.D65,
  c = 216 / 24389,
  l = 24389 / 27;

function u(e) {
  return e > 8 ? Math.pow((e + 16) / 116, 3) : e / l
}
let f = (0, Chunk440255.NZ)(i, 200 / Math.PI * u(50), 100 * u(50), "average", false),
  b = new Chunk665352.Z({
    id: "hct",
    name: "HCT",
    coords: {
      h: {
        refRange: [0, 360],
        type: "angle",
        name: "Hue"
      },
      c: {
        refRange: [0, 145],
        name: "Colorfulness"
      },
      t: {
        refRange: [0, 100],
        name: "Tone"
      }
    },
    base: Chunk856308.Z,
    fromBase: e => (function(e, t) {
      var r;
      let a = 116 * ((r = e[1]) > c ? Math.cbrt(r) : (l * r + 16) / 116) - 16;
      if (0 === a) return [0, 0, 0];
      let s = (0, o.S5)(e, f);
      return [(0, n.j)(s.h), s.C, a]
    })(e, 0),
    toBase: e => (function(e, t) {
      let [r, a, n] = e, s = [], i = 0;
      if (0 === n) return [0, 0, 0];
      let c = u(n);
      i = n > 0 ? .00379058511492914 * n ** 2 + .608983189401032 * n + .9155088574762233 : 9514440756550361e-21 * n ** 2 + .08693057439788597 * n - 21.928975842194614;
      let l = 0,
        f = 1 / 0;
      for (; l <= 15;) {
        let e = Math.abs((s = (0, o.Zk)({
          J: i,
          C: a,
          h: r
        }, t))[1] - c);
        if (e < f) {
          if (e <= 2e-12) return s;
          f = e
        }
        i -= (s[1] - c) * i / (2 * s[1]), l += 1
      }
      return (0, o.Zk)({
        J: i,
        C: a,
        h: r
      }, t)
    })(e, f),
    formats: {
      color: {
        id: "--hct",
        coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
      }
    }
  })