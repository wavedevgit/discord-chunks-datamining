/** Chunk was on web.js **/
/** chunk id: 713011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => o
});
var Chunk573654 = require("./573654.js"),
  Chunk964742 = require("./964742.js");

function o(e) {
  return function() {
    var t = e.getMonitor(),
      n = e.getRegistry();
    a(t);
    var r = t.getSourceId();
    return null != r && (n.getSource(r, true).endDrag(t, r), n.unpinSource()), {
      type: i.Bs
    }
  }
}

function a(e) {
  (0, r.k)(e.isDragging(), "Cannot call endDrag while not dragging.")
}