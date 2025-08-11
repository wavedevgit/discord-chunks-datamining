/** Chunk was on 67244 **/
/** chunk id: 53796, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk760919 = require("./760919.js"),
  Chunk806578 = require("./806578.js");
let s = 1 / 512,
  o = 16 / 512,
  i = new Chunk760919.Z({
    id: "prophoto",
    cssId: "prophoto-rgb",
    name: "ProPhoto",
    base: Chunk806578.Z,
    toBase: e => e.map(e => e < o ? e / 16 : e ** 1.8),
    fromBase: e => e.map(e => e >= s ? e ** (1 / 1.8) : 16 * e)
  })