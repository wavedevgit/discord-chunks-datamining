/** Chunk was on 54628 **/
/** chunk id: 375924, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk760919 = require("./760919.js"),
  Chunk365938 = require("./365938.js");
let o = new Chunk760919.Z({
  id: "rec2100hlg",
  cssId: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: Chunk365938.Z,
  toBase: e => e.map(function(e) {
    return e <= .5 ? e ** 2 / 3 * 3.7743 : (Math.exp((e - .55991073) / .17883277) + .28466892) / 12 * 3.7743
  }),
  fromBase: e => e.map(function(e) {
    return (e /= 3.7743) <= 1 / 12 ? Math.sqrt(3 * e) : .17883277 * Math.log(12 * e - .28466892) + .55991073
  })
})