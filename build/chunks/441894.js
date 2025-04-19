/** Chunk was on 98254 **/
n.d(t, {
  J: () => o
}), n(388685);
var i = n(442837),
  r = n(592125),
  l = n(19780),
  a = n(760373);

function o(e) {
  let {
    channelId: t
  } = e;
  return (0, i.e7)([l.Z, r.Z], () => (function(e) {
    var t;
    let [n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, r.Z];
    if (null == e || n.getChannelId() !== e) return !1;
    let o = i.getChannel(e);
    if (null == o || o.isGuildStageVoice()) return !1;
    let u = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
    return null != u && u !== a.Eg
  })(t, [l.Z, r.Z]), [t])
}