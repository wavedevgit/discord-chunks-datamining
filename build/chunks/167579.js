/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,a,d (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function r(e) {
  return (0, b.cf)([t.A, f.A, c.default], () => (function(e) {
    var a;
    let d = arguments.length > 1 && true !== arguments[1] ? arguments[1] : t.A,
      b = arguments.length > 2 && true !== arguments[2] ? arguments[2] : f.A,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : c.default,
      n = null != e ? d.getVoiceState(e.getGuildId(), r.getId()) : null;
    return {
      selfDeaf: b.isSelfDeaf(),
      deaf: null != (a = null == n ? true : n.deaf) && a
    }
  })(e, t.A, f.A, c.default), [e])
}