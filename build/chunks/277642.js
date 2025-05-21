/** Chunk was on 55196 **/
n.d(t, {
  r: () => c,
  t: () => o
});
var l = n(442837),
  i = n(314897),
  r = n(19780),
  s = n(959457);

function a(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function o(e) {
  return (0, l.e7)([s.Z, i.default], () => {
    if (null == e) return !0;
    let t = s.Z.getUserIds(e);
    return null == t || a(t, i.default.getId())
  })
}

function c() {
  return (0, l.e7)([r.Z, i.default], () => {
    let e = r.Z.getUserIds();
    return null == e || a(e, i.default.getId())
  })
}