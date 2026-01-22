/** Chunk was on web.js **/
/** chunk id: 54304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => c
});
var Chunk317374 = require("./317374.js"),
  Chunk492597 = require("./492597.js");

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
      o(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};

function c() {
  var e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l,
    t = arguments.length > 1 ? arguments[1] : true,
    n = t.payload;
  switch (t.type) {
    case r.KR:
    case r.Vw:
      return {
        initialSourceClientOffset: n.sourceClientOffset, initialClientOffset: n.clientOffset, clientOffset: n.clientOffset
      };
    case r.l6:
      if ((0, i.Xf)(e.clientOffset, n.clientOffset)) return e;
      return s(s({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case r.dU:
    case r.q2:
      return l;
    default:
      return e
  }
}