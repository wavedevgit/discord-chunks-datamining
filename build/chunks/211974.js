/** Chunk was on 63379 **/
/** chunk id: 211974, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  V: () => f
});
var Chunk310784 = require("./310784.js"),
  r = require.n(Chunk310784);

function v(A, t, e) {
  if (!r().valid(t)) return A.map(() => "#000000");
  let g = r()(t),
    v = g.luminance();
  return A.map((A, t) => g.luminance((A * e[t].base + v * e[t].tint) / (e[t].base + e[t].tint)).hex())
}

function f(A) {
  let {
    primaryBaseColors: t,
    primaryTintColor: e,
    primaryTintLuminances: g,
    primaryLuminanceWeights: r,
    secondaryBaseColors: f,
    secondaryTintColor: B,
    secondaryTintLuminances: h,
    secondaryLuminanceWeights: n
  } = A, l = null != e ? v(g, e, r) : t, C = [];
  return null != f && null != h && null != n && (C = null != B ? v(h, B, n) : f), {
    primaryColorsTransformed: l,
    secondaryColorsTransformed: C
  }
}