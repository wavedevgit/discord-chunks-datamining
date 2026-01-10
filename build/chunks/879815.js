/** Chunk was on 93886 **/
/** chunk id: 879815, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js");

function r(e) {
  return (0, c.cj)([d.Z, o.Z, n.default], () => (function(e) {
    var t;
    let a = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d.Z,
      c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.Z,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : n.default,
      i = null != e ? a.getVoiceState(e.getGuildId(), r.getId()) : null;
    return {
      selfDeaf: c.isSelfDeaf(),
      deaf: null != (t = null == i ? true : i.deaf) && t
    }
  })(e, d.Z, o.Z, n.default), [e])
}