/** Chunk was on 38597 (284c18b018f79f5f.js) **/
"use strict";
r.d(t, {
  Z: () => s
});
var a = r(760919),
  n = r(365938);
let s = new a.Z({
  id: "rec2100hlg",
  cssId: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: n.Z,
  toBase: e => e.map(function(e) {
    return e <= .5 ? e ** 2 / 3 * 3.7743 : (Math.exp((e - .55991073) / .17883277) + .28466892) / 12 * 3.7743
  }),
  fromBase: e => e.map(function(e) {
    return (e /= 3.7743) <= 1 / 12 ? Math.sqrt(3 * e) : .17883277 * Math.log(12 * e - .28466892) + .55991073
  })
})