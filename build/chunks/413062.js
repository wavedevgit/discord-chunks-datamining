/** Chunk was on 96253 **/
/** chunk id: 413062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk892385 = require("./892385.js"),
  Chunk520062 = require("./520062.js"),
  Chunk43591 = require("./43591.js");

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