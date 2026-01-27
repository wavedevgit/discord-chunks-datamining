/** Chunk was on web.js **/
/** chunk id: 768620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => l
});
var Chunk321733 = require("./321733.js"),
  Chunk420563 = require("./420563.js"),
  Chunk988440 = require("./988440.js"),
  Chunk317374 = require("./317374.js"),
  s = {
    type: Chunk317374.KR,
    payload: {
      clientOffset: null,
      sourceClientOffset: null
    }
  };

function l(e) {
  return function() {
    var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
        publishSource: true
      },
      r = n.publishSource,
      a = true === r || r,
      l = n.clientOffset,
      p = n.getSourceClientOffset,
      _ = e.getMonitor(),
      h = e.getRegistry();
    e.dispatch((0, i.P)(l)), c(t, _, h);
    var m = f(t, _);
    if (null === m) return void e.dispatch(s);
    var g = null;
    if (l) {
      if (!p) throw Error("getSourceClientOffset must be defined");
      u(p), g = p(m)
    }
    e.dispatch((0, i.P)(l, g));
    var E = h.getSource(m).beginDrag(_, m);
    if (null != E) {
      d(E), h.pinSource(m);
      var y = h.getSourceType(m);
      return {
        type: o.Vw,
        payload: {
          itemType: y,
          item: E,
          sourceId: m,
          clientOffset: l || null,
          sourceClientOffset: g || null,
          isSourcePublic: !!a
        }
      }
    }
  }
}

function c(e, t, n) {
  (0, r.V)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
    (0, r.V)(n.getSource(e), "Expected sourceIds to be registered.")
  })
}

function u(e) {
  (0, r.V)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
}

function d(e) {
  (0, r.V)((0, a.Gv)(e), "Item must be an object.")
}

function f(e, t) {
  for (var n = null, r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break
    } return n
}