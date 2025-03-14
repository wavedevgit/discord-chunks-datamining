/** Chunk was on 99518 **/
t.d(n, {
  Z: () => u
});
var i = t(442837),
  r = t(592125),
  l = t(944486);

function u() {
  return (0, i.e7)([l.Z, r.Z], () => {
    let e = l.Z.getVoiceChannelId();
    if (null != e) {
      let n = r.Z.getChannel(e);
      if (null == n ? void 0 : n.isGuildStageVoice()) return n
    }
    return null
  })
}