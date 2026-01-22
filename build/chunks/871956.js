/** Chunk was on 10614 **/
/** chunk id: 871956, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  e: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk541163 = require("./541163.js"),
  Chunk190334 = require("./190334.js"),
  Chunk218436 = require("./218436.js");

function u(e, t) {
  var r = (0, o.u)(),
    u = (0, n.useMemo)(function() {
      return new i.b(r.getBackend())
    }, [r]);
  return (0, a.E)(function() {
    return u.dragSourceOptions = e || null, u.reconnect(),
      function() {
        return u.disconnectDragSource()
      }
  }, [u, e]), (0, a.E)(function() {
    return u.dragPreviewOptions = t || null, u.reconnect(),
      function() {
        return u.disconnectDragPreview()
      }
  }, [u, t]), u
}