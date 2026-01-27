/** Chunk was on web.js **/
/** chunk id: 976860, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  EL: () => O,
  JK: () => A,
  MX: () => N,
  PR: () => I,
  SB: () => C,
  TX: () => g,
  UC: () => S,
  aX: () => w,
  bG: () => v,
  m: () => T,
  pX: () => y,
  sY: () => R,
  uh: () => b
}), require("./321073.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./457529.js"), require("./812715.js");
var Chunk830845 = require("./830845.js"),
  Chunk626584 = require("./626584.js"),
  Chunk203982 = require("./203982.js"),
  Chunk824865 = require("./824865.js"),
  Chunk652215 = require("./652215.js");

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
let p = new Chunk626584.A("Routing/Utils"),
  _ = [Chunk652215.dSh.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, Chunk830845.sC)() : (0, Chunk830845.zR)();
let h = false,
  m = r.listen((e, t) => {
    "REPLACE" !== t && (h = true, m())
  });

function g() {
  if (l._.hasSubscribers(u.jej.MODAL_CLOSE)) {
    let {
      doesTopModalAllowNavigation: e
    } = n(192308);
    if (!e()) returnfalse
  }
  return n(712687).A.close(), true
}

function E(e, t) {
  return !!("string" == typeof e && _.some(t => e.startsWith(t))) && (p.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), true)
}

function y(e, t) {
  if (E(e, "assign")) return;
  p.log("transitionTo - Transitioning to ".concat(e));
  let n = null == t ? true : t.source,
    o = null == t ? true : t.sourceLocationStack;
  if (null == t) r.push(e);
  else {
    let n = new URL(e, "https:".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT));
    r.push(f({
      pathname: n.pathname,
      search: n.search,
      hash: n.hash
    }, t))
  }
  i = n, a = o
}

function b(e, t, n, r) {
  p.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
    guildId: e,
    channelId: t,
    messageId: n
  }))), y(u.BVt.CHANNEL(e, t, n), r)
}

function O() {
  return null != i && c.n.has(i)
}

function v(e, t, n) {
  E(e, "replace") || (p.log("Replacing route with ".concat(e)), "string" == typeof e ? r.replace(e, t) : r.replace(e), i = n)
}

function A() {
  return r
}

function I() {
  return i
}

function S() {
  return a
}

function T(e) {
  if (null == e) {
    var t;
    e = null != (t = r.location.pathname) ? t : ""
  }
  return !e.startsWith(u.BVt.HANDOFF)
}

function C(e) {
  if (null == e) {
    var t;
    e = null != (t = r.location.pathname) ? t : ""
  }
  if (e.startsWith(u.BVt.LOGIN)) return u.S3d.LOGIN;
  if (e.startsWith(u.BVt.REGISTER)) return u.S3d.REGISTER;
  if (e.startsWith(u.BVt.INVITE(""))) return u.S3d.INVITE;
  if (e.startsWith(u.BVt.VERIFY)) return u.S3d.VERIFY;
  if (e.startsWith(u.BVt.DISABLE_EMAIL_NOTIFICATIONS)) return u.S3d.DISABLE_EMAIL_NOTIFICATIONS;
  else if (e.startsWith(u.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return u.S3d.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  else if (e.startsWith(u.BVt.REJECT_IP)) return u.S3d.REJECT_IP;
  else if (e.startsWith(u.BVt.REJECT_MFA)) return u.S3d.REJECT_MFA;
  else if (e.startsWith(u.BVt.AUTHORIZE_IP)) return u.S3d.AUTHORIZE_IP;
  else if (e.startsWith(u.BVt.AUTHORIZE_PAYMENT)) return u.S3d.AUTHORIZE_PAYMENT;
  else if (e.startsWith(u.BVt.RESET)) return u.S3d.RESET;
  else if (e.startsWith(u.BVt.REPORT)) return u.S3d.REPORT;
  else if (e.startsWith(u.BVt.REPORT_SECOND_LOOK)) return u.S3d.REPORT_SECOND_LOOK;
  else if (e.startsWith(u.BVt.ACCOUNT_REVERT(""))) return u.S3d.ACCOUNT_REVERT;
  return e
}

function N() {
  return h
}

function w() {
  g() && (i = null, r.goBack())
}

function R() {
  g() && (i = null, r.goForward())
}