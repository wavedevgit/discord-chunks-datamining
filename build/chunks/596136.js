/** Chunk was on 67244 **/
/** chunk id: 596136, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk760919 = require("./760919.js"),
  Chunk365938 = require("./365938.js");
let s = 2610 / 16384,
  o = 16384 / 2610,
  i = 32 / 2523,
  c = new Chunk760919.Z({
    id: "rec2100pq",
    cssId: "rec2100-pq",
    name: "REC.2100-PQ",
    base: Chunk365938.Z,
    toBase: e => e.map(function(e) {
      return 1e4 * (Math.max(e ** i - .8359375, 0) / (18.8515625 - 18.6875 * e ** i)) ** o / 203
    }),
    fromBase: e => e.map(function(e) {
      let t = Math.max(203 * e / 1e4, 0);
      return ((.8359375 + 18.8515625 * t ** s) / (1 + 18.6875 * t ** s)) ** 78.84375
    })
  })