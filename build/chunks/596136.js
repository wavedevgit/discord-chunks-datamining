/** Chunk was on 38597 (284c18b018f79f5f.js) **/
"use strict";
r.d(t, {
  Z: () => c
});
var a = r(760919),
  n = r(365938);
let s = 2610 / 16384,
  o = 16384 / 2610,
  i = 32 / 2523,
  c = new a.Z({
    id: "rec2100pq",
    cssId: "rec2100-pq",
    name: "REC.2100-PQ",
    base: n.Z,
    toBase: e => e.map(function(e) {
      return 1e4 * (Math.max(e ** i - .8359375, 0) / (18.8515625 - 18.6875 * e ** i)) ** o / 203
    }),
    fromBase: e => e.map(function(e) {
      let t = Math.max(203 * e / 1e4, 0);
      return ((.8359375 + 18.8515625 * t ** s) / (1 + 18.6875 * t ** s)) ** 78.84375
    })
  })