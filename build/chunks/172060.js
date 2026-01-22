/** Chunk was on web.js **/
/** chunk id: 172060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk321733 = require("./321733.js"),
  Chunk317374 = require("./317374.js");

function a(e) {
  return function() {
    var t = e.getMonitor(),
      n = e.getRegistry();
    s(t);
    var r = t.getSourceId();
    return null != r && (n.getSource(r, true).endDrag(t, r), n.unpinSource()), {
      type: i.dU
    }
  }
}

function s(e) {
  (0, r.V)(e.isDragging(), "Cannot call endDrag while not dragging.")
}