/** Chunk was on 13599 **/
/** chunk id: 1412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk344669 = require("./344669.js"),
  Chunk338972 = require("./338972.js"),
  Chunk219384 = require("./219384.js");

function u(e, t) {
  var n = (0, o.N)(),
    u = (0, r.useMemo)(function() {
      return new i.x(n.getBackend())
    }, [n]);
  return (0, a.L)(function() {
    return u.dragSourceOptions = e || null, u.reconnect(),
      function() {
        return u.disconnectDragSource()
      }
  }, [u, e]), (0, a.L)(function() {
    return u.dragPreviewOptions = t || null, u.reconnect(),
      function() {
        return u.disconnectDragPreview()
      }
  }, [u, t]), u
}