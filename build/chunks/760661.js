/** Chunk was on 53414 **/
/** chunk id: 760661, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Y: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk968611 = require("./968611.js"),
  Chunk520062 = require("./520062.js"),
  Chunk43591 = require("./43591.js");

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