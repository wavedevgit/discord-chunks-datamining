/** Chunk was on 12416 **/
n.d(t, {
  Z: () => d
});
var r = n(442837),
  i = n(199902),
  l = n(314897),
  a = n(858340),
  o = n(959457),
  s = n(557457),
  c = n(614963),
  u = n(981631);

function d(e) {
  let t = (0, s.Wc)(e),
    n = e.stream.guildId,
    d = e.stream.ownerId;
  return (0, r.e7)([o.Z, a.Z, l.default, i.Z], () => {
    if (null == d) return null;
    let e = d === l.default.getId();
    if (!e && null == i.Z.getActiveStreamForUser(d, n)) return null;
    let r = e && null != a.Z.getHookError(u.K3D.SOUND);
    return (0, c.Z)(o.Z.getQuality(), o.Z.getStatsHistory(n, d, e), r, t)
  }, [t, n, d])
}