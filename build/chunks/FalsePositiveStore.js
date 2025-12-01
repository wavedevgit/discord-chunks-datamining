/** Chunk was on web.js **/
/** chunk id: 774863, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk895565 = require("./895565.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 2,
  m = 3,
  h = 14 * Chunk70956.Z.Millis.DAY,
  g = Object.freeze([]),
  E = {},
  b = {};

function y(e) {
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
  }, o = null != (t = b[r]) ? t : g;
  b[r] = [...o, a], E[n] = a
}

function O(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = b[n];
  null != r && (b[n] = r.map(e => e.messageId === t ? p(d({}, e), {
    reportSubmit: true
  }) : e), E[t] = p(d({}, E[t]), {
    reportSubmit: true
  }))
}

function v() {
  I()
}

function S(e) {
  let {
    explicitContentScanVersion: t
  } = e;
  r = t, I()
}

function I() {
  E = {}, b = {}
}
class T extends(i = Chunk442837.ZP.Store) {
  getFpMessageInfo(e) {
    return E[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null != (t = b[e]) ? t : g
  }
  canSubmitFpReport(e) {
    let t = E[e];
    return null != t && !t.reportSubmit && l.default.age(t.messageId) < h
  }
  get validContentScanVersion() {
    return (0, Chunk895565.zV)("ExplicitMediaStore.validContentScanVersion") ? null != r ? r : m : Math.min(null != r ? r : _, _)
  }
}
u(T, "displayName", "FalsePositiveStore");
let A = new T(Chunk570140.Z, {
  LOGOUT: v,
  CONNECTION_OPEN: S,
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: y,
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: O
})