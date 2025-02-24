/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  F: () => o
});
var r = n(573654),
  i = n(964742);

function o(e) {
  return function() {
    var t = e.getMonitor(),
      n = e.getRegistry();
    a(t);
    var r = t.getSourceId();
    return null != r && (n.getSource(r, !0).endDrag(t, r), n.unpinSource()), {
      type: i.Bs
    }
  }
}

function a(e) {
  (0, r.k)(e.isDragging(), "Cannot call endDrag while not dragging.")
}