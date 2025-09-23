/** Chunk was on 13599 **/
/** chunk id: 937614, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk257439 = require("./257439.js"),
  Chunk338972 = require("./338972.js"),
  Chunk219384 = require("./219384.js");

function u(t) {
  var n = (0, i.N)(),
    e = (0, r.useMemo)(function() {
      return new o.Y(n.getBackend())
    }, [n]);
  return (0, a.L)(function() {
    return e.dropTargetOptions = t || null, e.reconnect(),
      function() {
        return e.disconnectDropTarget()
      }
  }, [t]), e
}