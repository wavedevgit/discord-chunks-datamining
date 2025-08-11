/** Chunk was on 92078 **/
/** chunk id: 221918, original params: n,r,t (module,exports,require) **/
require.d(exports, {
  H: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk373425 = require("./373425.js"),
  Chunk74463 = require("./74463.js"),
  Chunk541568 = require("./541568.js");

function a(n) {
  var r = (0, i.N)(),
    t = (0, e.useMemo)(function() {
      return new o.Y(r.getBackend())
    }, [r]);
  return (0, u.L)(function() {
    return t.dropTargetOptions = n || null, t.reconnect(),
      function() {
        return t.disconnectDropTarget()
      }
  }, [n]), t
}