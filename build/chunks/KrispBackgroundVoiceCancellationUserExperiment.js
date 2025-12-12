/** Chunk was on web.js **/
/** chunk id: 621413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => c
});
var Chunk818083 = require("./818083.js");

function i(e, t, n) {
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
      i(e, t, n[t])
    })
  }
  return e
}

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

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let l = {
    allowBVC: false
  },
  c = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_krisp_background_voice_cancellation",
    label: "Krisp Background Voice Cancellation",
    defaultConfig: l,
    treatments: [{
      id: 1,
      label: "Use BVC for allowed devices",
      config: s(a({}, l), {
        allowBVC: true
      })
    }]
  })