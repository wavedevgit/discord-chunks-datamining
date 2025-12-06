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
  return (0, r.cj)([l.Z, i.Z, a.default], () => (function(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.Z,
      r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i.Z,
      o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : a.default,
      s = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
    return {
      selfDeaf: r.isSelfDeaf(),
      deaf: null != (t = null == s ? true : s.deaf) && t
    }
  })(e, l.Z, i.Z, a.default), [e])
}