/** Chunk was on 71704 **/
n.d(t, {
  S: () => l,
  _: () => c
});
var r = n(442837),
  a = n(594174),
  i = n(74538),
  o = n(482207);

function l() {
  return (0, r.cj)([o.Z], () => ({
    avatars: o.Z.getAvatars(),
    loading: o.Z.isFetching,
    error: o.Z.fetchError
  }))
}

function c() {
  let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
  return i.ZP.canUseIncreasedRecentAvatarsLimit(e)
}