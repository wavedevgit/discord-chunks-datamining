/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function r(e) {
  return (0, n.cf)([c.A, o.A, a.default], () => (function(e) {
    var t;
    let _ = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.A,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.A,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : a.default,
      i = null != e ? _.getVoiceState(e.getGuildId(), r.getId()) : null;
    return {
      selfDeaf: n.isSelfDeaf(),
      deaf: null != (t = null == i ? true : i.deaf) && t
    }
  })(e, c.A, o.A, a.default), [e])
}