/** Chunk was on web.js **/
/** chunk id: 777334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  St: () => d,
  pj: () => u
});
var Chunk728458 = require("./728458.js"),
  Chunk41984 = require("./41984.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
    n = arguments.length > 1 ? arguments[1] : true;
  return l(o({}, n), {
    tags: o({
      source: __OVERLAY__ ? "overlay" : "legacy-overlay",
      overlayMethod: "".concat(null == t ? null : i.Ue[null != t ? t : i.Ue.Disabled])
    }, null != (e = null == n ? true : n.tags) ? e : {})
  })
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : true;
  r.A.captureException(e, c(t, n))
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : true;
  return r.A.captureCrash(e, c(t, n))
}