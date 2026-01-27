/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function r(e) {
  return (0, o.cf)([c.A, n.A, _.default], () => (function(e) {
    var t;
    let a = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.A,
      o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : n.A,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : _.default,
      i = null != e ? a.getVoiceState(e.getGuildId(), r.getId()) : null;
    return {
      selfDeaf: o.isSelfDeaf(),
      deaf: null != (t = null == i ? true : i.deaf) && t
    }
  })(e, c.A, n.A, _.default), [e])
}