/** Chunk was on 93024 **/
n.d(t, {
  J: () => a,
  U: () => c
});
var r = n(442837),
  i = n(650774),
  l = n(496675),
  o = n(231338);

function a(e) {
  return (0, r.e7)([l.Z], () => null != e && l.Z.can(o.Pl.MENTION_EVERYONE, e), [e])
}

function c(e) {
  let t = null == e ? void 0 : e.guild_id,
    n = (0, r.e7)([i.Z], () => i.Z.getMemberCount(t), [t]);
  return null == e || null != n && !(n > 5e4)
}