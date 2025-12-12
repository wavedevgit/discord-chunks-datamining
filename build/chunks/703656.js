/** Chunk was on web.js **/
/** chunk id: 703656, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o;
require.d(exports, {
  At: () => I,
  DB: () => N,
  DR: () => T,
  Wf: () => A,
  XU: () => y,
  dL: () => v,
  eH: () => R,
  m1: () => C,
  op: () => P,
  s1: () => S,
  uL: () => b,
  uv: () => O,
  x3: () => g
}), require("./539854.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./49124.js"), require("./704826.js");
var Chunk539528 = require("./539528.js"),
  Chunk710845 = require("./710845.js"),
  Chunk585483 = require("./585483.js"),
  Chunk143816 = require("./143816.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = new Chunk710845.Z("Routing/Utils"),
  _ = [Chunk981631.E07.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, Chunk539528.PP)() : (0, Chunk539528.lX)();
let m = false,
  h = r.listen((e, t) => {
    "REPLACE" !== t && (m = true, h())
  });

function g() {
  if (Chunk585483.S.hasSubscribers(Chunk981631.CkL.MODAL_CLOSE)) {
    letChunk952265 = require("./952265.js");
    if (!module()) returnfalse
  }
  return require("./574254.js").Z.close(), true
}

function E(e, t) {
  return !!("string" == typeof e && _.some(t => e.startsWith(t))) && (p.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), true)
}

function b(e, t) {
  if (E(e, "assign")) return;
  p.log("transitionTo - Transitioning to ".concat(e));
  let n = null == t ? true : t.source;
  null == t || delete t.source;
  let a = null == t ? true : t.sourceLocationStack;
  if (null == t || delete t.sourceLocationStack, null == t) r.push(e);
  else {
    let n = new URL(e, "https:".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT));
    r.push(f({
      pathname: n.pathname,
      search: n.search,
      hash: n.hash
    }, t))
  }
  i = n, o = a
}

function y(e, t, n, r) {
  p.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
    guildId: e,
    channelId: t,
    messageId: n
  }))), b(u.Z5c.CHANNEL(e, t, n), r)
}

function O() {
  return null != i && Chunk143816.H.has(i)
}

function v(e, t, n) {
  E(e, "replace") || (p.log("Replacing route with ".concat(e)), "string" == typeof e ? r.replace(e, t) : r.replace(e), i = n)
}

function S() {
  return r
}

function I() {
  return i
}

function T() {
  return o
}

function C(e) {
  if (null == e) {
    var t;
    e = null != (t = r.location.pathname) ? t : ""
  }
  return !e.startsWith(u.Z5c.HANDOFF)
}

function A(e) {
  if (null == e) {
    var t;
    e = null != (t = r.location.pathname) ? t : ""
  }
  if (e.startsWith(u.Z5c.LOGIN)) return u.Usc.LOGIN;
  if (e.startsWith(u.Z5c.REGISTER)) return u.Usc.REGISTER;
  if (e.startsWith(u.Z5c.INVITE(""))) return u.Usc.INVITE;
  if (e.startsWith(u.Z5c.VERIFY)) return u.Usc.VERIFY;
  if (e.startsWith(u.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return u.Usc.DISABLE_EMAIL_NOTIFICATIONS;
  else if (e.startsWith(u.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return u.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  else if (e.startsWith(u.Z5c.REJECT_IP)) return u.Usc.REJECT_IP;
  else if (e.startsWith(u.Z5c.REJECT_MFA)) return u.Usc.REJECT_MFA;
  else if (e.startsWith(u.Z5c.AUTHORIZE_IP)) return u.Usc.AUTHORIZE_IP;
  else if (e.startsWith(u.Z5c.AUTHORIZE_PAYMENT)) return u.Usc.AUTHORIZE_PAYMENT;
  else if (e.startsWith(u.Z5c.RESET)) return u.Usc.RESET;
  else if (e.startsWith(u.Z5c.REPORT)) return u.Usc.REPORT;
  else if (e.startsWith(u.Z5c.REPORT_SECOND_LOOK)) return u.Usc.REPORT_SECOND_LOOK;
  else if (e.startsWith(u.Z5c.ACCOUNT_REVERT(""))) return u.Usc.ACCOUNT_REVERT;
  return e
}

function N() {
  return m
}

function P() {
  g() && (i = null, r.goBack())
}

function R() {
  g() && (i = null, r.goForward())
}