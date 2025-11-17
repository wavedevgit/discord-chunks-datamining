/** Chunk was on 23032 **/
/** chunk id: 762399, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk665352 = require("./665352.js"),
  Chunk99978 = require("./99978.js"),
  Chunk856308 = require("./856308.js");
let s = [
    [.819022437996703, .3619062600528904, false],
    [.0329836539323885, .9292868615863434, .0361446663506424],
    [.0481771893596242, .2642395317527308, .6335478284694309]
  ],
  i = [
    [1.2268798758459243, false, .2813910456659647],
    [false, 1.112286803280317, false],
    [false, false, 1.5869240198367816]
  ],
  c = [
    [.210454268309314, .7936177747023054, false],
    [1.9779985324311684, false, .450593709617411],
    [.0259040424655478, .7827717124575296, false]
  ],
  u = [
    [1, .3963377773761749, .2158037573099136],
    [1, false, false],
    [1, false, false]
  ],
  l = new Chunk665352.Z({
    id: "oklab",
    name: "Oklab",
    coords: {
      l: {
        refRange: [0, 1],
        name: "Lightness"
      },
      a: {
        refRange: [false, .4]
      },
      b: {
        refRange: [false, .4]
      }
    },
    white: "D65",
    base: Chunk856308.Z,
    fromBase(e) {
      let t = (0, n.Z)(s, e).map(e => Math.cbrt(e));
      return (0, n.Z)(c, t)
    },
    toBase(e) {
      let t = (0, n.Z)(u, e).map(e => e ** 3);
      return (0, n.Z)(i, t)
    },
    formats: {
      oklab: {
        coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
      }
    }
  })