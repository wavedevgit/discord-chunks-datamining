/** Chunk was on 89839 **/
n.d(t, {
  l: () => i
});
var l = n(442837),
  r = n(291175),
  a = n(621853);

function i(e) {
  return (0, l.e7)([a.Z], () => {
    var t;
    let n, l = null != e ? a.Z.getUserProfile(e) : null,
      i = null == l ? void 0 : l.premiumSince;
    return null == l || null == i ? null : (null == l || null == (t = l.badges) || t.forEach(e => {
      let t = (0, r.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}