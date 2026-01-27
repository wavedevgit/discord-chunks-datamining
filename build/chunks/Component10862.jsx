/** Chunk was on web.js **/
/** chunk id: 10862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk148719 = require("./148719.js"),
  Chunk576705 = require("./576705.js"),
  Chunk818348 = require("./818348.js");

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
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function p(e) {
  let {
    channel: t
  } = e, n = d(e, ["channel"]), c = (0, i.bG)([s.A], () => t.isPrivate() || s.A.can(l.xB.CONNECT, t));
  if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(a._jp, u({}, n));
  let f = t.isGuildStageVoice(),
    p = !c || (0, o.A)(t);
  return f && p ? (0, r.jsx)(a.DC, u({}, n)) : f ? (0, r.jsx)(a.qux, u({}, n)) : t.isNSFW() ? (0, r.jsx)(a.Ob$, u({}, n)) : p ? (0, r.jsx)(a.trU, u({}, n)) : (0, r.jsx)(a.HKD, u({}, n))
}