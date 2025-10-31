/** Chunk was on 54628 **/
/** chunk id: 567027, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk665352 = require("./665352.js"),
  Chunk566162 = require("./566162.js");
let o = new Chunk665352.Z({
  id: "hwb",
  name: "HWB",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    w: {
      range: [0, 100],
      name: "Whiteness"
    },
    b: {
      range: [0, 100],
      name: "Blackness"
    }
  },
  base: Chunk566162.Z,
  fromBase(e) {
    let [t, r, a] = e;
    return [t, a * (100 - r) / 100, 100 - a]
  },
  toBase(e) {
    let [t, r, a] = e, n = (r /= 100) + (a /= 100);
    if (n >= 1) return [t, 0, r / n * 100];
    let o = 1 - a;
    return [t, 100 * (0 === o ? 0 : 1 - r / o), 100 * o]
  },
  formats: {
    hwb: {
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
})