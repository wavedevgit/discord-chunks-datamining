/** Chunk was on 43498 **/
n.d(t, {
  Z: () => s
});
var i = n(442837),
  r = n(314897),
  l = n(131951),
  o = n(979651);

function s(e) {
  return (0, i.cj)([o.Z, l.Z, r.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
      s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
      a = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
    return {
      selfDeaf: i.isSelfDeaf(),
      deaf: null != (t = null == a ? void 0 : a.deaf) && t
    }
  })(e, o.Z, l.Z, r.default), [e])
}