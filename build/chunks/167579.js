/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,_,t (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk977997 = require("./977997.js");

function i(e) {
  return (0, a.cf)([r.A, n.A, o.default], () => (function(e) {
    var _;
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.A,
      a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : n.A,
      i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.default,
      c = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
    return {
      selfDeaf: a.isSelfDeaf(),
      deaf: null != (_ = null == c ? true : c.deaf) && _
    }
  })(e, r.A, n.A, o.default), [e])
}