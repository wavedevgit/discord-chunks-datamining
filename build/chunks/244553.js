/** Chunk was on web.js **/
/** chunk id: 244553, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk321733 = require("./321733.js"),
  Chunk294292 = require("./294292.js"),
  Chunk317374 = require("./317374.js");

function o(e) {
  return function(t) {
    var n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      r = n.clientOffset;
    s(t);
    var i = t.slice(0),
      o = e.getMonitor(),
      d = e.getRegistry();
    return l(i, o, d), c(i, d, o.getItemType()), u(i, o, d), {
      type: a.l6,
      payload: {
        targetIds: i,
        clientOffset: r || null
      }
    }
  }
}

function s(e) {
  (0, r.V)(Array.isArray(e), "Expected targetIds to be an array.")
}

function l(e, t, n) {
  (0, r.V)(t.isDragging(), "Cannot call hover while not dragging."), (0, r.V)(!t.didDrop(), "Cannot call hover after drop.");
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    (0, r.V)(e.lastIndexOf(a) === i, "Expected targetIds to be unique in the passed array.");
    var o = n.getTarget(a);
    (0, r.V)(o, "Expected targetIds to be registered.")
  }
}

function c(e, t, n) {
  for (var r = e.length - 1; r >= 0; r--) {
    var a = e[r],
      o = t.getTargetType(a);
    (0, i.k)(o, n) || e.splice(r, 1)
  }
}

function u(e, t, n) {
  e.forEach(function(e) {
    n.getTarget(e).hover(t, e)
  })
}