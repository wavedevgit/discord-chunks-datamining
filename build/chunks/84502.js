/** Chunk was on 7318 **/
/** chunk id: 84502, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  s: () => i
});
var Chunk688619 = require("./688619.js"),
  r = require.n(Chunk688619);

function l(A, e, t) {
  if (!r().valid(e)) return A.map(() => "#000000");
  let n = r()(e),
    l = n.luminance();
  return A.map((A, e) => n.luminance((A * t[e].base + l * t[e].tint) / (t[e].base + t[e].tint)).hex())
}

function i(A) {
  let {
    primaryBaseColors: e,
    primaryTintColor: t,
    primaryTintLuminances: n,
    primaryLuminanceWeights: r,
    secondaryBaseColors: i,
    secondaryTintColor: s,
    secondaryTintLuminances: a,
    secondaryLuminanceWeights: o
  } = A, g = null != t ? l(n, t, r) : e, c = [];
  return null != i && null != a && null != o && (c = null != s ? l(a, s, o) : i), {
    primaryColorsTransformed: g,
    secondaryColorsTransformed: c
  }
}