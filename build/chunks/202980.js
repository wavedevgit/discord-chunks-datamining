/** Chunk was on 53870 **/
/** chunk id: 202980, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk52402 = require("./52402.js"),
  Chunk495311 = require("./495311.js"),
  Chunk772567 = require("./772567.js");

function u(t, n) {
  var e = (0, i.N)(),
    u = (0, r.useMemo)(function() {
      return new o.x(e.getBackend())
    }, [e]);
  return (0, a.L)(function() {
    return u.dragSourceOptions = t || null, u.reconnect(),
      function() {
        return u.disconnectDragSource()
      }
  }, [u, t]), (0, a.L)(function() {
    return u.dragPreviewOptions = n || null, u.reconnect(),
      function() {
        return u.disconnectDragPreview()
      }
  }, [u, n]), u
}