/** Chunk was on 15814 **/
r.d(t, {
  s: () => a
});
var n = r(688619),
  l = r.n(n);

function i(e, t, r) {
  if (!l().valid(t)) return e.map(() => "#000000");
  let n = l()(t),
    i = n.luminance();
  return e.map((e, t) => n.luminance((e * r[t].base + i * r[t].tint) / (r[t].base + r[t].tint)).hex())
}

function a(e) {
  let {
    primaryBaseColors: t,
    primaryTintColor: r,
    primaryTintLuminances: n,
    primaryLuminanceWeights: l,
    secondaryBaseColors: a,
    secondaryTintColor: o,
    secondaryTintLuminances: s,
    secondaryLuminanceWeights: h
  } = e, c = null != r ? i(n, r, l) : t, v = [];
  return null != a && null != s && null != h && (v = null != o ? i(s, o, h) : a), {
    primaryColorsTransformed: c,
    secondaryColorsTransformed: v
  }
}