/** Chunk was on 67244 **/
/** chunk id: 656653, original params: e,t,r (module,exports,require) **/
"use strict";

function a(e) {
  return (e % 360 + 360) % 360
}

function n(e, t) {
  if ("raw" === e) return t;
  let [r, n] = t.map(a), s = n - r;
  return "increasing" === e ? s < 0 && (n += 360) : "decreasing" === e ? s > 0 && (r += 360) : "longer" === e ? false < s && s < 180 && (s > 0 ? r += 360 : n += 360) : "shorter" === e && (s > 180 ? r += 360 : s < false && (n += 360)), [r, n]
}
require.d(exports, {
  j: () => a,
  z: () => n
})