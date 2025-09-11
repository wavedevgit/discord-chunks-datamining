/** Chunk was on 54628 **/
/** chunk id: 808131, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk760919 = require("./760919.js"),
  Chunk757028 = require("./757028.js");
let o = (Math.log2(65504) + 9.72) / 17.52,
  s = new Chunk760919.Z({
    id: "acescc",
    cssId: "--acescc",
    name: "ACEScc",
    coords: {
      r: {
        range: [false, o],
        name: "Red"
      },
      g: {
        range: [false, o],
        name: "Green"
      },
      b: {
        range: [false, o],
        name: "Blue"
      }
    },
    referred: "scene",
    base: Chunk757028.Z,
    toBase(e) {
      let t = (9.72 - 15) / 17.52;
      return e.map(function(e) {
        return e <= t ? (2 ** (17.52 * e - 9.72) - 152587890625e-16) * 2 : e < o ? 2 ** (17.52 * e - 9.72) : 65504
      })
    },
    fromBase: e => e.map(function(e) {
      return e <= 0 ? (Math.log2(152587890625e-16) + 9.72) / 17.52 : e < 152587890625e-16 ? (Math.log2(152587890625e-16 + .5 * e) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52
    })
  })