/** Chunk was on 55196 **/
t.d(l, {
  r: () => c,
  t: () => o
});
var n = t(442837),
  i = t(314897),
  s = t(19780),
  r = t(959457);

function a(e, l) {
  return 0 === e.size || 1 === e.size && e.has(l)
}

function o(e) {
  return (0, n.e7)([r.Z, i.default], () => {
    if (null == e) return !0;
    let l = r.Z.getUserIds(e);
    return null == l || a(l, i.default.getId())
  })
}

function c() {
  return (0, n.e7)([s.ZP, i.default], () => {
    let e = s.ZP.getUserIds();
    return null == e || a(e, i.default.getId())
  })
}