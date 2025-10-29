/** Chunk was on 93886 **/
/** chunk id: 879815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js");

function l(e) {
  return (0, r.cj)([o.Z, i.Z, a.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.Z,
      r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i.Z,
      l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : a.default,
      s = null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
    return {
      selfDeaf: r.isSelfDeaf(),
      deaf: null != (t = null == s ? true : s.deaf) && t
    }
  })(e, o.Z, i.Z, a.default), [e])
}