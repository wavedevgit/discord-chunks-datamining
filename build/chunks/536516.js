/** Chunk was on 10614 **/
/** chunk id: 536516, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  D: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk848575 = require("./848575.js"),
  Chunk190334 = require("./190334.js"),
  Chunk218436 = require("./218436.js");

function u(e) {
  var t = (0, o.u)(),
    r = (0, n.useMemo)(function() {
      return new i.P(t.getBackend())
    }, [t]);
  return (0, a.E)(function() {
    return r.dropTargetOptions = e || null, r.reconnect(),
      function() {
        return r.disconnectDropTarget()
      }
  }, [e]), r
}