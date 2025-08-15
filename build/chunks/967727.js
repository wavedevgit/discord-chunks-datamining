/** Chunk was on 44947 **/
/** chunk id: 967727, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Y: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk63222 = require("./63222.js"),
  Chunk74463 = require("./74463.js"),
  Chunk541568 = require("./541568.js");

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