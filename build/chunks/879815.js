/** Chunk was on 97161 **/
n.d(t, {
  Z: () => c
});
var o = n(442837),
  a = n(314897),
  r = n(131951),
  i = n(979651);

function c(e) {
  return (0, o.cj)([i.Z, r.Z, a.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z,
      c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
      l = null != e ? n.getVoiceState(e.getGuildId(), c.getId()) : null;
    return {
      selfDeaf: o.isSelfDeaf(),
      deaf: null != (t = null == l ? void 0 : l.deaf) && t
    }
  })(e, i.Z, r.Z, a.default), [e])
}