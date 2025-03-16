/** Chunk was on 98697 **/
n.d(t, {
  Z: () => a
});
var r = n(442837),
  i = n(314897),
  o = n(131951),
  l = n(979651);

function a(e) {
  return (0, r.cj)([l.Z, o.Z, i.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
      s = null != e ? n.getVoiceState(e.getGuildId(), a.getId()) : null;
    return {
      selfDeaf: r.isSelfDeaf(),
      deaf: null !== (t = null == s ? void 0 : s.deaf) && void 0 !== t && t
    }
  })(e, l.Z, o.Z, i.default), [e])
}