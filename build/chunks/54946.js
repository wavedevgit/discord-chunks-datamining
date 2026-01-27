/** Chunk was on web.js **/
/** chunk id: 54946, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => c
});
var Chunk321733 = require("./321733.js"),
  Chunk317374 = require("./317374.js"),
  Chunk988440 = require("./988440.js");

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? o(Object(n), true).forEach(function(t) {
      l(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  return function() {
    var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      n = e.getMonitor(),
      r = e.getRegistry();
    u(n), p(n).forEach(function(a, o) {
      var l = d(a, o, r, n),
        c = {
          type: i.q2,
          payload: {
            dropResult: s(s({}, t), l)
          }
        };
      e.dispatch(c)
    })
  }
}

function u(e) {
  (0, r.V)(e.isDragging(), "Cannot call drop while not dragging."), (0, r.V)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
}

function d(e, t, n, r) {
  var i = n.getTarget(e),
    a = i ? i.drop(r, e) : true;
  return f(a), true === a && (a = 0 === t ? {} : r.getDropResult()), a
}

function f(e) {
  (0, r.V)(true === e || (0, a.Gv)(e), "Drop result must either be an object or undefined.")
}

function p(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t
}