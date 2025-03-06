/** Chunk was on 76282 **/
n.d(t, {
  r: () => c,
  t: () => s
});
var r = n(442837),
  i = n(314897),
  o = n(19780),
  l = n(959457);

function a(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function s(e) {
  return (0, r.e7)([l.Z, i.default], () => {
    if (null == e) return !0;
    let t = l.Z.getUserIds(e);
    return null == t || a(t, i.default.getId())
  })
}

function c() {
  return (0, r.e7)([o.Z, i.default], () => {
    let e = o.Z.getUserIds();
    return null == e || a(e, i.default.getId())
  })
}