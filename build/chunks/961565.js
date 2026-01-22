/** Chunk was on web.js **/
/** chunk id: 961565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => f
});
var Chunk54304 = require("./54304.js"),
  Chunk607490 = require("./607490.js"),
  Chunk970585 = require("./970585.js"),
  Chunk780439 = require("./780439.js"),
  Chunk8041 = require("./8041.js"),
  Chunk988440 = require("./988440.js");

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? c(Object(n), true).forEach(function(t) {
      d(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f() {
  var e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : true;
  return {
    dirtyHandlerIds: (0, s.T)(e.dirtyHandlerIds, {
      type: t.type,
      payload: u(u({}, t.payload), {}, {
        prevTargetIds: (0, l.Jt)(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: (0, r.T)(e.dragOffset, t),
    refCount: (0, a.T)(e.refCount, t),
    dragOperation: (0, i.T)(e.dragOperation, t),
    stateId: (0, o.T)(e.stateId)
  }
}