/** Chunk was on 99665 **/
n.d(t, {
  Z: () => u
});
var r = n(442837),
  l = n(592125),
  i = n(944486);

function u() {
  return (0, r.e7)([i.Z, l.Z], () => {
    let e = i.Z.getVoiceChannelId();
    if (null != e) {
      let t = l.Z.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}