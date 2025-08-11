/** Chunk was on web.js **/
/** chunk id: 417153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CF: () => u,
  Es: () => c,
  z5: () => d
}), require("./388685.js");
var Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
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
let c = (0, Chunk97519.U)(() => ({
  currentToast: null,
  queuedToasts: []
}));

function u(e) {
  (0, i.j)(() => {
    c.setState(t => null != t.currentToast ? l(a({}, t), {
      queuedToasts: [...t.queuedToasts, e]
    }) : {
      currentToast: e,
      queuedToasts: []
    })
  })
}

function d() {
  (0, Chunk731965.j)(() => {
    c.setState(e => {
      let t = e.queuedToasts;
      return t.length > 0 ? {
        currentToast: t[0],
        queuedToasts: t.slice(1)
      } : {
        currentToast: null,
        queuedToasts: []
      }
    })
  })
}