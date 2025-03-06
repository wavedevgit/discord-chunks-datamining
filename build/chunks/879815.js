/** Chunk was on 97434 **/
n.d(t, {
  Z: () => c
});
var a = n(442837),
  i = n(314897),
  o = n(131951),
  r = n(979651);

function c(e) {
  return (0, a.cj)([r.Z, o.Z, i.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
      c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
      l = null != e ? n.getVoiceState(e.getGuildId(), c.getId()) : null;
    return {
      selfDeaf: a.isSelfDeaf(),
      deaf: null !== (t = null == l ? void 0 : l.deaf) && void 0 !== t && t
    }
  })(e, r.Z, o.Z, i.default), [e])
}