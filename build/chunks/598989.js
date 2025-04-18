/** Chunk was on 68632 **/
n.d(t, {
  S: () => c,
  _: () => l
});
var r = n(442837),
  i = n(594174),
  a = n(74538),
  o = n(482207);

function c() {
  return (0, r.cj)([o.Z], () => ({
    avatars: o.Z.getAvatars(),
    loading: o.Z.isFetching,
    error: o.Z.fetchError
  }))
}

function l() {
  let e = (0, r.e7)([i.default], () => i.default.getCurrentUser());
  return a.ZP.canUseIncreasedRecentAvatarsLimit(e)
}