/** Chunk was on web.js **/
/** chunk id: 881530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk394821 = require("./394821.js"),
  Chunk841784 = require("./841784.js"),
  Chunk833664 = require("./833664.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk103479 = require("./103479.jsx"),
  Chunk553375 = require("./553375.jsx"),
  Chunk614716 = require("./614716.js");

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
    entry: m,
    onClose: h
  } = e, g = (0, s.Z)(f({
    location: t,
    source: o.m1.UserProfile,
    trackEntryPointImpression: true
  }, (0, c.nK)({
    user: n,
    activity: p,
    entry: m
  }))), E = (0, u.Z)({
    applicationId: null == _ ? true : _.id,
    onClose: h
  }), b = (0, i.Z)(p);
  return b && null != _ ? E : !b && (0, a.Z)(p) ? g : (0, r.Z)(p) && n.id !== d.id ? () => (0, l.s)({
    activity: p,
    user: n,
    index: 0
  }) : true
}