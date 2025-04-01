/** Chunk was on 54061 **/
n.d(t, {
  S: () => l,
  _: () => _
});
var o = n(442837),
  i = n(594174),
  r = n(74538),
  a = n(482207);

function l() {
  return (0, o.cj)([a.Z], () => ({
    avatars: a.Z.getAvatars(),
    loading: a.Z.isFetching,
    error: a.Z.fetchError
  }))
}

function _() {
  let e = (0, o.e7)([i.default], () => i.default.getCurrentUser());
  return r.ZP.canUseIncreasedRecentAvatarsLimit(e)
}