/** Chunk was on 61924 **/
/** chunk id: 573180, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk305765 = require("./305765.js"),
  Chunk7128 = require("./7128.js"),
  Chunk689023 = require("./689023.js");

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