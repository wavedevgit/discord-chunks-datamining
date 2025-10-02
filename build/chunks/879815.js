/** Chunk was on 93886 **/
/** chunk id: 879815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js");

function o(e) {
  return (0, r.cj)([a.Z, l.Z, i.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Z,
      r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Z,
      o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : i.default,
      s = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
    return {
      selfDeaf: r.isSelfDeaf(),
      deaf: null != (t = null == s ? true : s.deaf) && t
    }
  })(e, a.Z, l.Z, i.default), [e])
}