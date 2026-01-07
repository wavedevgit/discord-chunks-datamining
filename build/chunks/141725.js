/** Chunk was on web.js **/
/** chunk id: 141725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => c
});
var Chunk964742 = require("./964742.js"),
  Chunk304832 = require("./304832.js");

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

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? a(Object(n), true).forEach(function(t) {
      s(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function s(e, t, n) {
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
    case r.TL:
    case r.qu:
      return {
        initialSourceClientOffset: n.sourceClientOffset, initialClientOffset: n.clientOffset, clientOffset: n.clientOffset
      };
    case r.$T:
      if ((0, i.YJ)(e.clientOffset, n.clientOffset)) return e;
      return o(o({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case r.Bs:
    case r.rp:
      return l;
    default:
      return e
  }
}