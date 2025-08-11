/** Chunk was on web.js **/
/** chunk id: 574543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => f
});
var Chunk141725 = require("./141725.js"),
  Chunk830651 = require("./830651.js"),
  Chunk164441 = require("./164441.js"),
  Chunk97820 = require("./97820.js"),
  Chunk43266 = require("./43266.js"),
  Chunk144459 = require("./144459.js");

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
    dirtyHandlerIds: (0, Chunk97820.u)(module.dirtyHandlerIds, {
      type: exports.type,
      payload: u(u({}, exports.payload), {}, {
        prevTargetIds: (0, Chunk144459.U2)(module, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: (0, Chunk141725.u)(module.dragOffset, exports),
    refCount: (0, Chunk164441.u)(module.refCount, exports),
    dragOperation: (0, Chunk830651.u)(module.dragOperation, exports),
    stateId: (0, Chunk43266.u)(module.stateId)
  }
}