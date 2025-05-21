/** Chunk was on 89839 **/
n.d(t, {
  l: () => i
});
var r = n(442837),
  l = n(291175),
  a = n(621853);

function i(e) {
  return (0, r.e7)([a.Z], () => {
    var t;
    let n, r = null != e ? a.Z.getUserProfile(e) : null,
      i = null == r ? void 0 : r.premiumSince;
    return null == r || null == i ? null : (null == r || null == (t = r.badges) || t.forEach(e => {
      let t = (0, l.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}