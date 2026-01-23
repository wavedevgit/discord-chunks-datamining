/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function l(e) {
  return (0, r.cf)([o.A, _.A, n.default], () => (function(e) {
    var t;
    let a = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.A,
      r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : _.A,
      l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : n.default,
      i = null != e ? a.getVoiceState(e.getGuildId(), l.getId()) : null;
    return {
      selfDeaf: r.isSelfDeaf(),
      deaf: null != (t = null == i ? true : i.deaf) && t
    }
  })(e, o.A, _.A, n.default), [e])
}