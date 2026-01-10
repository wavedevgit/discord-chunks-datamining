/** Chunk was on 53870 **/
/** chunk id: 591029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk471256 = require("./471256.js"),
  Chunk495311 = require("./495311.js"),
  Chunk772567 = require("./772567.js");

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