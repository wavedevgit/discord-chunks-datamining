/** Chunk was on 53870 **/
/** chunk id: 591029, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk471256 = require("./471256.js"),
  Chunk495311 = require("./495311.js"),
  Chunk772567 = require("./772567.js");

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