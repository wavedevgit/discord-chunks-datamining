/** Chunk was on web.js **/
/** chunk id: 774863, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 2,
  p = 14 * Chunk70956.Z.Millis.DAY,
  h = Object.freeze([]),
  m = {},
  g = {};

function E(e) {
  var t;
  let {
    messageId: n,
    channelId: r,
    attachments: i
  } = e, a = {
    messageId: n,
    channelId: r,
    attachments: i,
    reportSubmit: false
  }, o = null != (t = g[r]) ? t : h;
  g[r] = [...o, a], m[n] = a
}

function b(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = g[n];
  null != r && (g[n] = r.map(e => e.messageId === t ? f(u({}, e), {
    reportSubmit: true
  }) : e), m[t] = f(u({}, m[t]), {
    reportSubmit: true
  }))
}

function y() {
  v()
}

function O(e) {
  let {
    explicitContentScanVersion: t
  } = e;
  r = t, v()
}

function v() {
  m = {}, g = {}
}
class I extends(i = Chunk442837.ZP.Store) {
  getFpMessageInfo(e) {
    return m[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null != (t = g[e]) ? t : h
  }
  canSubmitFpReport(e) {
    let t = m[e];
    return null != t && !t.reportSubmit && l.default.age(t.messageId) < p
  }
  get validContentScanVersion() {
    return null != r ? r : _
  }
}
c(I, "displayName", "FalsePositiveStore");
let S = new I(Chunk570140.Z, {
  LOGOUT: y,
  CONNECTION_OPEN: O,
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: E,
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: b
})