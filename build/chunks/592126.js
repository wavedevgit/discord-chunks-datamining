/** Chunk was on 62318 **/
n.d(t, {
  Z: () => l
});
var d = n(442837),
  u = n(241155),
  i = n(430824);

function l(e, t) {
  return (0, d.cj)([i.Z, u.Z], () => {
    let n = i.Z.getGuild(e),
      d = null != n;
    return null == n && null != t && (n = u.Z.getCachedGuildByEventId(t)), {
      isMember: d,
      guild: n
    }
  }, [e, t])
}