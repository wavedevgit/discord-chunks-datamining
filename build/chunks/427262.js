/** Chunk was on web.js **/
/** chunk id: 427262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $3: () => m,
  Ay: () => w,
  G2: () => A,
  Gn: () => N,
  MU: () => O,
  QV: () => T,
  R1: () => C,
  mG: () => g,
  mv: () => I,
  tx: () => E
}), require("./65821.js");
var Chunk311907 = require("./311907.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = 864e5,
  d = "???",
  f = e => "".concat(e[0], "…"),
  p = e => "@".concat(e),
  _ = {
    mode: "full",
    decoration: "never",
    identifiable: "auto",
    forcePomelo: false
  };

function h(e) {
  return !!(null != e && e.length > 0)
}

function m(e) {
  return h(e.global_name) ? e.global_name : h(e.globalName) ? e.globalName : h(e.username) ? e.username : d
}

function g(e) {
  var t;
  if (null == e) return;
  let n = i.A.hidePersonalInformation,
    r = m(e);
  return n && r.toLocaleLowerCase() === (null == (t = e.username) ? true : t.toLocaleLowerCase()) && "0" === e.discriminator && (r = f(r)), r
}

function E(e) {
  var t;
  let n = (0, r.bG)([i.A], () => i.A.hidePersonalInformation);
  if (null == e) return;
  let a = m(e);
  return n && a.toLocaleLowerCase() === (null == (t = e.username) ? true : t.toLocaleLowerCase()) && "0" === e.discriminator && (a = f(a)), a
}

function y(e) {
  if (null != e)
    if (h(e.globalName)) return e.globalName;
    else if (h(e.global_name)) return e.global_name;
  else return
}

function b(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null == e) return d;
  let r = y(e),
    i = n ? T(e) : null != (t = e.username) ? t : d;
  return r === i ? r : null != r ? "".concat(r, " (").concat(i, ")") : i
}

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  switch (e) {
    case o.clD.ONLINE:
      return t ? s.intl.string(s.t["9hghLD"]) : s.intl.string(s.t.WbGtnH);
    case o.clD.OFFLINE:
      return s.intl.string(s.t.Vv0abJ);
    case o.clD.IDLE:
      return s.intl.string(s.t.qWbtVU);
    case o.clD.DND:
      return s.intl.string(s.t.jaNpQH);
    case o.clD.INVISIBLE:
      return s.intl.string(s.t.bg24HO);
    case o.clD.STREAMING:
      return s.intl.string(s.t.XKYej5);
    case o.clD.UNKNOWN:
    default:
      return null
  }
}

function v(e, t) {
  let {
    maxDaysOld: n,
    minDaysOld: r = 0
  } = t;
  if (null == e) returnfalse;
  let i = Date.now() - e.createdAt.getTime(),
    a = null == n || i <= u * n,
    o = i >= u * r;
  return !!a && !!o
}

function A(e) {
  return !v(e, {
    minDaysOld: 0,
    maxDaysOld: 30
  })
}

function I(e) {
  return v(e, {
    minDaysOld: 0,
    maxDaysOld: 7
  })
}

function S(e, t, n) {
  if (null == e) return s.intl.string(s.t.sKdZ6U);
  if (!h(e.username)) return d;
  let r = n;
  if ("always" === t.identifiable ? r = false : "never" === t.identifiable && (r = true), "0" !== e.discriminator && e.discriminator !== o.h3J && !t.forcePomelo) return "username" === t.mode || r ? e.username : "".concat(e.username, "#").concat(e.discriminator);
  let i = r ? f(e.username) : e.username;
  return "never" !== t.decoration ? p(i) : i
}

function T(e, t) {
  let n = c({}, _, t),
    r = "auto" !== n.identifiable || i.A.hidePersonalInformation;
  return S(e, n, r)
}

function C(e) {
  return (0, r.bG)([a.default], () => {
    if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null
  })
}

function N() {
  let e = a.default.getCurrentUser();
  return null != e && e.isStaff()
}
let w = {
  getName: g,
  useName: E,
  isNameConcealed: e => 2 === e.length && e.endsWith("…"),
  getUserTag: T,
  useUserTag: function(e, t) {
    return S(e, c({}, _, t), (0, r.bG)([i.A], () => i.A.hidePersonalInformation))
  },
  getUserIsStaff: N,
  getFormattedName: b,
  getGlobalName: y,
  humanizeStatus: O,
  useDirectMessageRecipient: C
}