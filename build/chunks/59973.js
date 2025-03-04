/** Chunk was on web.js **/
"use strict";
n.d(t, {
  m: () => l
});
var r = n(573654),
  i = n(158545),
  o = n(144459),
  a = n(964742),
  s = {
    type: a.TL,
    payload: {
      clientOffset: null,
      sourceClientOffset: null
    }
  };

function l(e) {
  return function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        publishSource: !0
      },
      r = n.publishSource,
      o = void 0 === r || r,
      l = n.clientOffset,
      _ = n.getSourceClientOffset,
      p = e.getMonitor(),
      h = e.getRegistry();
    e.dispatch((0, i.T)(l)), c(t, p, h);
    var g = f(t, p);
    if (null === g) {
      e.dispatch(s);
      return
    }
    var m = null;
    if (l) {
      if (!_) throw Error("getSourceClientOffset must be defined");
      u(_), m = _(g)
    }
    e.dispatch((0, i.T)(l, m));
    var E = h.getSource(g).beginDrag(p, g);
    if (null != E) {
      d(E), h.pinSource(g);
      var v = h.getSourceType(g);
      return {
        type: a.qu,
        payload: {
          itemType: v,
          item: E,
          sourceId: g,
          clientOffset: l || null,
          sourceClientOffset: m || null,
          isSourcePublic: !!o
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
  (0, r.k)((0, o.Kn)(e), "Item must be an object.")
}

function f(e, t) {
  for (var n = null, r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break
    } return n
}