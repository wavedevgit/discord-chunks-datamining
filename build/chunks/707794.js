/** Chunk was on web.js **/
/** chunk id: 707794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk541806 = require("./541806.js"),
  Chunk765379 = require("./765379.js"),
  Chunk672979 = require("./672979.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk934173 = require("./934173.jsx"),
  Chunk534465 = require("./534465.jsx"),
  Chunk695311 = require("./695311.js");

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

function p(e) {
  let {
    location: t,
    user: n,
    currentUser: d,
    activity: p,
    application: _,
    entry: h,
    onClose: m
  } = e, g = (0, o.A)(f({
    location: t,
    source: s.Ob.UserProfile,
    trackEntryPointImpression: true
  }, (0, c.UE)({
    user: n,
    activity: p,
    entry: h
  }))), E = (0, u.A)({
    applicationId: null == _ ? true : _.id,
    onClose: m
  }), b = (0, i.A)(p);
  return b && null != _ ? E : !b && (0, a.A)(p) ? g : (0, r.A)(p) && n.id !== d.id ? () => (0, l.y)({
    activity: p,
    user: n,
    index: 0
  }) : true
}