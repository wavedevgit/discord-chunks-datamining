/** Chunk was on web.js **/
/** chunk id: 244553, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => s
});
var Chunk321733 = require("./321733.js"),
  Chunk294292 = require("./294292.js"),
  Chunk317374 = require("./317374.js");

function s(e) {
  return function(t) {
    var n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      r = n.clientOffset;
    o(t);
    var i = t.slice(0),
      s = e.getMonitor(),
      d = e.getRegistry();
    return l(i, s, d), c(i, d, s.getItemType()), u(i, s, d), {
      type: a.l6,
      payload: {
        targetIds: i,
        clientOffset: r || null
      }
    }
  }
}

function o(e) {
  (0, r.V)(Array.isArray(e), "Expected targetIds to be an array.")
}

function l(e, t, n) {
  (0, r.V)(t.isDragging(), "Cannot call hover while not dragging."), (0, r.V)(!t.didDrop(), "Cannot call hover after drop.");
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    (0, r.V)(e.lastIndexOf(a) === i, "Expected targetIds to be unique in the passed array.");
    var s = n.getTarget(a);
    (0, r.V)(s, "Expected targetIds to be registered.")
  }
}

function c(e, t, n) {
  for (var r = e.length - 1; r >= 0; r--) {
    var a = e[r],
      s = t.getTargetType(a);
    (0, i.k)(s, n) || e.splice(r, 1)
  }
}

function u(e, t, n) {
  e.forEach(function(e) {
    n.getTarget(e).hover(t, e)
  })
}