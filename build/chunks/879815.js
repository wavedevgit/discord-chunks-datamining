/** Chunk was on 93886 **/
/** chunk id: 879815, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js");

function r(e) {
  return (0, n.cj)([f.Z, o.Z, d.default], () => (function(e) {
    var a;
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.Z,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.Z,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : d.default,
      c = null != e ? t.getVoiceState(e.getGuildId(), r.getId()) : null;
    return {
      selfDeaf: n.isSelfDeaf(),
      deaf: null != (a = null == c ? true : c.deaf) && a
    }
  })(e, f.Z, o.Z, d.default), [e])
}