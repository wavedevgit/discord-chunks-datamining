/** Chunk was on 13599 **/
/** chunk id: 1412, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk344669 = require("./344669.js"),
  Chunk338972 = require("./338972.js"),
  Chunk219384 = require("./219384.js");

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