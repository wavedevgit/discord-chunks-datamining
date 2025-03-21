/** Chunk was on 33397 **/
r.d(t, {
  r: () => o,
  t: () => a
});
var n = r(442837),
  l = r(314897),
  i = r(19780),
  u = r(959457);

function s(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function a(e) {
  return (0, n.e7)([u.Z, l.default], () => {
    if (null == e) return !0;
    let t = u.Z.getUserIds(e);
    return null == t || s(t, l.default.getId())
  })
}

function o() {
  return (0, n.e7)([i.Z, l.default], () => {
    let e = i.Z.getUserIds();
    return null == e || s(e, l.default.getId())
  })
}