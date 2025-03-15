/** Chunk was on 95373 **/
n.d(t, {
  S: () => l,
  _: () => c
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

function c() {
  let e = (0, o.e7)([i.default], () => i.default.getCurrentUser());
  return r.ZP.canUseIncreasedRecentAvatarsLimit(e)
}