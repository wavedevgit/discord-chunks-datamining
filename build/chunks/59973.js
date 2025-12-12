/** Chunk was on web.js **/
/** chunk id: 59973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => l
});
var Chunk573654 = require("./573654.js"),
  Chunk158545 = require("./158545.js"),
  Chunk144459 = require("./144459.js"),
  Chunk964742 = require("./964742.js"),
  s = {
    type: Chunk964742.TL,
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
      m = e.getRegistry();
    e.dispatch((0, i.T)(l)), c(t, _, m);
    var h = f(t, _);
    if (null === h) return void e.dispatch(s);
    var g = null;
    if (l) {
      if (!p) throw Error("getSourceClientOffset must be defined");
      u(p), g = p(h)
    }
    e.dispatch((0, i.T)(l, g));
    var E = m.getSource(h).beginDrag(_, h);
    if (null != E) {
      d(E), m.pinSource(h);
      var b = m.getSourceType(h);
      return {
        type: o.qu,
        payload: {
          itemType: b,
          item: E,
          sourceId: h,
          clientOffset: l || null,
          sourceClientOffset: g || null,
          isSourcePublic: !!a
        }
      }
    }
  }
}

function c(e, t, n) {
  (0, r.k)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
    (0, r.k)(n.getSource(e), "Expected sourceIds to be registered.")
  })
}

function u(e) {
  (0, r.k)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
}

function d(e) {
  (0, r.k)((0, a.Kn)(e), "Item must be an object.")
}

function f(e, t) {
  for (var n = null, r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break
    } return n
}