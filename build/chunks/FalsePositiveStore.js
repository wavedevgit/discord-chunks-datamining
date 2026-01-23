/** Chunk was on web.js **/
/** chunk id: 900819, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => T
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk605510 = require("./605510.js");

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
let _ = 3,
  h = 4,
  m = 14 * Chunk927813.A.Millis.DAY,
  g = Object.freeze([]),
  E = {},
  y = {};

function b(e) {
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
  }, s = null != (t = y[r]) ? t : g;
  y[r] = [...s, a], E[n] = a
}

function O(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = y[n];
  null != r && (y[n] = r.map(e => e.messageId === t ? p(d({}, e), {
    reportSubmit: true
  }) : e), E[t] = p(d({}, E[t]), {
    reportSubmit: true
  }))
}

function v() {
  I()
}

function A(e) {
  let {
    explicitContentScanVersion: t
  } = e;
  r = t, I()
}

function I() {
  E = {}, y = {}
}
class S extends(i = Chunk311907.Ay.Store) {
  getFpMessageInfo(e) {
    return E[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null != (t = y[e]) ? t : g
  }
  canSubmitFpReport(e) {
    let t = E[e];
    return null != t && !t.reportSubmit && l.default.age(t.messageId) < m
  }
  get validContentScanVersion() {
    return (0, c.jV)("ExplicitMediaStore.validContentScanVersion") ? null != r ? r : h : Math.min(null != r ? r : _, _)
  }
}
u(S, "displayName", "FalsePositiveStore");
let T = new S(Chunk73153.h, {
  LOGOUT: v,
  CONNECTION_OPEN: A,
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: b,
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: O
})