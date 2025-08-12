/** Chunk was on 45550 **/
/** chunk id: 84502, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  s: () => n
});
var Chunk688619 = require("./688619.js"),
  g = require.n(Chunk688619);

function v(A, t, e) {
  if (!g().valid(t)) return A.map(() => "#000000");
  let r = g()(t),
    v = r.luminance();
  return A.map((A, t) => r.luminance((A * e[t].base + v * e[t].tint) / (e[t].base + e[t].tint)).hex())
}

function n(A) {
  let {
    primaryBaseColors: t,
    primaryTintColor: e,
    primaryTintLuminances: r,
    primaryLuminanceWeights: g,
    secondaryBaseColors: n,
    secondaryTintColor: f,
    secondaryTintLuminances: B,
    secondaryLuminanceWeights: h
  } = A, l = null != e ? v(r, e, g) : t, i = [];
  return null != n && null != B && null != h && (i = null != f ? v(B, f, h) : n), {
    primaryColorsTransformed: l,
    secondaryColorsTransformed: i
  }
}