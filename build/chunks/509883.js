/** Chunk was on web.js **/
/** chunk id: 509883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => c
});
var Chunk573654 = require("./573654.js"),
  Chunk964742 = require("./964742.js"),
  Chunk144459 = require("./144459.js");

function a(e, t) {
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
    t % 2 ? a(Object(n), true).forEach(function(t) {
      l(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
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
    u(n), p(n).forEach(function(o, a) {
      var l = d(o, a, r, n),
        c = {
          type: i.rp,
          payload: {
            dropResult: s(s({}, t), l)
          }
        };
      e.dispatch(c)
    })
  }
}

function u(e) {
  (0, r.k)(e.isDragging(), "Cannot call drop while not dragging."), (0, r.k)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
}

function d(e, t, n, r) {
  var i = n.getTarget(e),
    o = i ? i.drop(r, e) : true;
  return f(o), true === o && (o = 0 === t ? {} : r.getDropResult()), o
}

function f(e) {
  (0, r.k)(true === e || (0, o.Kn)(e), "Drop result must either be an object or undefined.")
}

function p(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t
}