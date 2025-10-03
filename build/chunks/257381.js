/** Chunk was on 54628 **/
/** chunk id: 257381, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk665352 = require("./665352.js"),
  Chunk856308 = require("./856308.js");
let o = new Chunk665352.Z({
  id: "xyz-abs-d65",
  cssId: "--xyz-abs-d65",
  name: "Absolute XYZ D65",
  coords: {
    x: {
      refRange: [0, 9504.7],
      name: "Xa"
    },
    y: {
      refRange: [0, 1e4],
      name: "Ya"
    },
    z: {
      refRange: [0, 10888.3],
      name: "Za"
    }
  },
  base: Chunk856308.Z,
  fromBase: e => e.map(e => Math.max(203 * e, 0)),
  toBase: e => e.map(e => Math.max(e / 203, 0))
})