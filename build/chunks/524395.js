/** Chunk was on 61924 **/
/** chunk id: 524395, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk734540 = require("./734540.js"),
  Chunk7128 = require("./7128.js"),
  Chunk689023 = require("./689023.js");

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