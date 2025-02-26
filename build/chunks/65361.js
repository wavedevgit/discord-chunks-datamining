/** Chunk was on 88313 **/
a.d(t, {
  u: () => l
});
var r = a(192379),
  n = a(442837),
  o = a(699553),
  i = a(314852);

function l(e) {
  let t = (0, n.e7)([i.Z], () => i.Z.getProfile(e)),
    a = (0, n.e7)([i.Z], () => i.Z.getFetchStatus(e));
  return {
    guildProfile: t,
    fetchGuildProfile: r.useCallback(async function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return await (0, o.CR)(e, t)
    }, [e]),
    fetchStatus: a
  }
}