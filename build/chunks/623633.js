/** Chunk was on 99245 **/
t.d(n, {
  Z: () => u
});
var i = t(442837),
  l = t(592125),
  r = t(944486);

function u() {
  return (0, i.e7)([r.Z, l.Z], () => {
    let e = r.Z.getVoiceChannelId();
    if (null != e) {
      let n = l.Z.getChannel(e);
      if (null == n ? void 0 : n.isGuildStageVoice()) return n
    }
    return null
  })
}