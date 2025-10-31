/** Chunk was on 54628 **/
/** chunk id: 656653, original params: e,t,r (module,exports,require) **/
"use strict";

function a(e) {
  return (e % 360 + 360) % 360
}

function n(e, t) {
  if ("raw" === e) return t;
  let [r, n] = t.map(a), o = n - r;
  return "increasing" === e ? o < 0 && (n += 360) : "decreasing" === e ? o > 0 && (r += 360) : "longer" === e ? false < o && o < 180 && (o > 0 ? r += 360 : n += 360) : "shorter" === e && (o > 180 ? r += 360 : o < false && (n += 360)), [r, n]
}
require.d(exports, {
  j: () => a,
  z: () => n
})