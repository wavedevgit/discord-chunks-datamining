/** Chunk was on 92078 **/
/** chunk id: 967727, original params: n,r,t (module,exports,require) **/
require.d(exports, {
  Y: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk63222 = require("./63222.js"),
  Chunk74463 = require("./74463.js"),
  Chunk541568 = require("./541568.js");

function a(n, r) {
  var t = (0, i.N)(),
    a = (0, e.useMemo)(function() {
      return new o.x(t.getBackend())
    }, [t]);
  return (0, u.L)(function() {
    return a.dragSourceOptions = n || null, a.reconnect(),
      function() {
        return a.disconnectDragSource()
      }
  }, [a, n]), (0, u.L)(function() {
    return a.dragPreviewOptions = r || null, a.reconnect(),
      function() {
        return a.disconnectDragPreview()
      }
  }, [a, r]), a
}