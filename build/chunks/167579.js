/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function i(e) {
  return (0, a.cf)([n.A, r.A, o.default], () => (function(e) {
    var t;
    let _ = arguments.length > 1 && true !== arguments[1] ? arguments[1] : n.A,
      a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.A,
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.default,
      l = null != e ? _.getVoiceState(e.getGuildId(), i.getId()) : null;
    return {
      selfDeaf: a.isSelfDeaf(),
      deaf: null != (t = null == l ? true : l.deaf) && t
    }
  })(e, n.A, r.A, o.default), [e])
}