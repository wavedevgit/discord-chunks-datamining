/** Chunk was on 94387 **/
n.d(t, {
  Z: () => c
});
var o = n(442837),
  i = n(314897),
  a = n(131951),
  l = n(979651);

function c(e) {
  return (0, o.cj)([l.Z, a.Z, i.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
      c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
      _ = null != e ? n.getVoiceState(e.getGuildId(), c.getId()) : null;
    return {
      selfDeaf: o.isSelfDeaf(),
      deaf: null !== (t = null == _ ? void 0 : _.deaf) && void 0 !== t && t
    }
  })(e, l.Z, a.Z, i.default), [e])
}