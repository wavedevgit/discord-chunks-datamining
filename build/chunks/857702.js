/** Chunk was on 54628 **/
/** chunk id: 857702, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk665352 = require("./665352.js"),
  Chunk20450 = require("./20450.js"),
  Chunk656653 = require("./656653.js");
let s = new Chunk665352.Z({
  id: "jzczhz",
  name: "JzCzHz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    cz: {
      refRange: [0, 1],
      name: "Chroma"
    },
    hz: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Chunk20450.Z,
  fromBase(e) {
    let t, [r, a, n] = e;
    return t = 2e-4 > Math.abs(a) && 2e-4 > Math.abs(n) ? NaN : 180 * Math.atan2(n, a) / Math.PI, [r, Math.sqrt(a ** 2 + n ** 2), (0, o.j)(t)]
  },
  toBase: e => [e[0], e[1] * Math.cos(e[2] * Math.PI / 180), e[1] * Math.sin(e[2] * Math.PI / 180)]
})