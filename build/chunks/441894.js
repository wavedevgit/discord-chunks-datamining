/** Chunk was on 94470 **/
n.d(t, {
  J: () => u
}), n(388685);
var r = n(442837),
  i = n(592125),
  l = n(19780),
  o = n(760373);

function u(e) {
  let {
    channelId: t
  } = e;
  return (0, r.e7)([l.Z, i.Z], () => (function(e) {
    var t;
    let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, i.Z];
    if (null == e || n.getChannelId() !== e) return !1;
    let u = r.getChannel(e);
    if (null == u || u.isGuildStageVoice()) return !1;
    let a = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
    return null != a && a !== o.Eg
  })(t, [l.Z, i.Z]), [t])
}