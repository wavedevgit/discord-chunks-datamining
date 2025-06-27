/** Chunk was on 89149 **/
n.d(e, {
  Z: () => a
});
var r = n(442837),
  i = n(592125),
  l = n(944486);

function a() {
  return (0, r.e7)([l.Z, i.Z], () => {
    let t = l.Z.getVoiceChannelId();
    if (null != t) {
      let e = i.Z.getChannel(t);
      if (null == e ? void 0 : e.isGuildStageVoice()) return e
    }
    return null
  })
}