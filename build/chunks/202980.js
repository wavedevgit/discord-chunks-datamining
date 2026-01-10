/** Chunk was on 53870 **/
/** chunk id: 202980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk52402 = require("./52402.js"),
  Chunk495311 = require("./495311.js"),
  Chunk772567 = require("./772567.js");

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