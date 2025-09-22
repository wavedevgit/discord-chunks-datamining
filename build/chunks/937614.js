/** Chunk was on 13599 **/
/** chunk id: 937614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk257439 = require("./257439.js"),
  Chunk338972 = require("./338972.js"),
  Chunk219384 = require("./219384.js");

function u(e) {
  var t = (0, o.N)(),
    n = (0, r.useMemo)(function() {
      return new i.Y(t.getBackend())
    }, [t]);
  return (0, a.L)(function() {
    return n.dropTargetOptions = e || null, n.reconnect(),
      function() {
        return n.disconnectDropTarget()
      }
  }, [e]), n
}