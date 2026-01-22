/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,a,d (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function n(e) {
  return (0, c.cf)([f.A, t.A, b.default], () => (function(e) {
    var a;
    let d = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.A,
      c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : t.A,
      n = arguments.length > 3 && true !== arguments[3] ? arguments[3] : b.default,
      r = null != e ? d.getVoiceState(e.getGuildId(), n.getId()) : null;
    return {
      selfDeaf: c.isSelfDeaf(),
      deaf: null != (a = null == r ? true : r.deaf) && a
    }
  })(e, f.A, t.A, b.default), [e])
}