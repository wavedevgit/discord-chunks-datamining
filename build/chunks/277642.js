/** Chunk was on 82510 **/
n.d(t, {
  r: () => c,
  t: () => s
});
var r = n(442837),
  l = n(314897),
  i = n(19780),
  a = n(959457);

function o(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function s(e) {
  return (0, r.e7)([a.Z, l.default], () => {
    if (null == e) return !0;
    let t = a.Z.getUserIds(e);
    return null == t || o(t, l.default.getId())
  })
}

function c() {
  return (0, r.e7)([i.Z, l.default], () => {
    let e = i.Z.getUserIds();
    return null == e || o(e, l.default.getId())
  })
}