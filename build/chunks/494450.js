/** Chunk was on 89839 **/
t.d(n, {
  l: () => i
});
var l = t(442837),
  r = t(291175),
  a = t(621853);

function i(e) {
  return (0, l.e7)([a.Z], () => {
    var n;
    let t, l = null != e ? a.Z.getUserProfile(e) : null,
      i = null == l ? void 0 : l.premiumSince;
    return null == l || null == i ? null : (null == l || null == (n = l.badges) || n.forEach(e => {
      let n = (0, r.gn)(e.id);
      null != n && (t = n)
    }), t)
  })
}