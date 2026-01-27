/** Chunk was on web.js **/
/** chunk id: 549022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Y: () => m,
  Cs: () => g,
  Iz: () => f,
  Oz: () => u,
  WA: () => p,
  jG: () => h,
  kP: () => d,
  os: () => _
});
var Chunk353640 = require("./353640.js"),
  Chunk499867 = require("./499867.js");

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
let c = (0, Chunk353640.v)((0, Chunk499867.Zr)(e => ({
  channelDismissTimestamps: {},
  userDismissTimestamps: {},
  globalDismissTimestamp: null,
  queuedWarning: false
}), {
  name: "shared-spaces-warning-storage",
  storage: (0, Chunk499867.KU)(() => localStorage)
}));

function u(e) {
  return c.getState().channelDismissTimestamps[e]
}

function d(e) {
  return c.getState().userDismissTimestamps[e]
}

function f() {
  return c.getState().globalDismissTimestamp
}

function p() {
  return c.getState().queuedWarning
}

function _() {
  c.setState({
    queuedWarning: false
  })
}

function h(e) {
  c.setState(t => ({
    channelDismissTimestamps: l(o({}, t.channelDismissTimestamps), {
      [e]: Date.now()
    })
  }))
}

function m(e) {
  c.setState(t => ({
    userDismissTimestamps: l(o({}, t.userDismissTimestamps), {
      [e]: Date.now()
    }),
    globalDismissTimestamp: Date.now()
  }))
}

function g(e) {
  let t = Array.from(e).reduce((e, t) => (e[t] = Date.now(), e), {});
  c.setState(e => ({
    userDismissTimestamps: o({}, e.userDismissTimestamps, t),
    globalDismissTimestamp: Date.now()
  }))
}