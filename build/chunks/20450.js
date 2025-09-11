/** Chunk was on 54628 **/
/** chunk id: 20450, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk665352 = require("./665352.js"),
  Chunk99978 = require("./99978.js"),
  Chunk257381 = require("./257381.js");
let s = 2610 / 16384,
  i = 16384 / 2610,
  c = 1.7 * 2523 / 32,
  u = 32 / (1.7 * 2523),
  l = [
    [.41478972, .579999, .014648],
    [false, 1.120649, .0531008],
    [false, .2648, .6684799]
  ],
  f = [
    [1.9242264357876067, false, .037651404030618],
    [.35031676209499907, .7264811939316552, false],
    [false, false, 1.5227665613052603]
  ],
  b = [
    [.5, .5, 0],
    [3.524, false, .542708],
    [.199076, 1.096799, false]
  ],
  d = [
    [1, .1386050432715393, .05804731615611886],
    [.9999999999999999, false, false],
    [.9999999999999998, false, false]
  ],
  h = new Chunk665352.Z({
    id: "jzazbz",
    name: "Jzazbz",
    coords: {
      jz: {
        refRange: [0, 1],
        name: "Jz"
      },
      az: {
        refRange: [false, .5]
      },
      bz: {
        refRange: [false, .5]
      }
    },
    base: Chunk257381.Z,
    fromBase(e) {
      let [t, r, a] = e, o = (0, n.Z)(l, [1.15 * t - (1.15 - 1) * a, .66 * r - (.66 - 1) * t, a]).map(function(e) {
        return ((.8359375 + 18.8515625 * (e / 1e4) ** s) / (1 + 18.6875 * (e / 1e4) ** s)) ** c
      }), [i, u, f] = (0, n.Z)(b, o);
      return [.43999999999999995 * i / (1 + false * i) - 16295499532821565e-27, u, f]
    },
    toBase(e) {
      let [t, r, a] = e, o = (0, n.Z)(d, [(t + 16295499532821565e-27) / (.43999999999999995 - false * (t + 16295499532821565e-27)), r, a]).map(function(e) {
        return 1e4 * ((.8359375 - e ** u) / (18.6875 * e ** u - 18.8515625)) ** i
      }), [s, c, l] = (0, n.Z)(f, o), b = (s + (1.15 - 1) * l) / 1.15;
      return [b, (c + (.66 - 1) * b) / .66, l]
    },
    formats: {
      color: {
        coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  })