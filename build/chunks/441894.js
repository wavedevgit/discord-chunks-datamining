/** Chunk was on 80125 **/
n.d(t, {
  J: () => a
}), n(47120);
var r = n(442837),
  i = n(592125),
  o = n(19780),
  l = n(977059),
  c = n(760373);

function a(e) {
  let {
    channelId: t,
    location: n
  } = e, {
    enabled: a
  } = (0, l.S)({
    location: n
  });
  return (0, r.e7)([o.Z, i.Z], () => (function(e, t) {
    var n;
    let [r, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.Z, i.Z];
    if (!t || null == e || r.getChannelId() !== e) return !1;
    let a = l.getChannel(e);
    if (null == a || a.isGuildStageVoice()) return !1;
    let u = null === (n = r.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
    return null != u && u !== c.Eg
  })(t, a, [o.Z, i.Z]), [t, a])
}