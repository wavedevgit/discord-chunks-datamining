/** Chunk was on 62318 **/
t.d(n, {
  Z: () => i
});
var e = t(442837),
  c = t(241155),
  d = t(430824);

function i(u, n) {
  return (0, e.cj)([d.Z, c.Z], () => {
    let t = d.Z.getGuild(u),
      e = null != t;
    return null == t && null != n && (t = c.Z.getCachedGuildByEventId(n)), {
      isMember: e,
      guild: t
    }
  }, [u, n])
}