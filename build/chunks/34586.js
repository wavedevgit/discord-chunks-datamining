/** Chunk was on 97574 **/
r.d(t, {
  E: () => o
});
var n = r(442837),
  l = r(650774),
  i = r(206583),
  a = r(981631);

function o(e) {
  return (0, n.e7)([l.Z], () => {
    if (null == e) return;
    let t = l.Z.getMemberCount(e.id),
      r = e.hasFeature(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
      n = e.hasFeature(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
      o = null != t && t < i.k4;
    return r || n ? r : o
  })
}