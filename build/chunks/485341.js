/** Chunk was on web.js **/
/** chunk id: 485341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _,
  i: () => f
}), require("./953529.js");
var Chunk399606 = require("./399606.js"),
  Chunk695346 = require("./695346.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

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

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = "quest_completed",
  p = "legacy_username";

function _(e, t) {
  var n;
  let l = i.R_.useSetting(),
    u = true !== t ? t : l,
    f = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
    _ = (0, r.e7)([o.Z], () => o.Z.hidePersonalInformation);
  if (null == e) return [];
  let m = null != (n = null == e ? true : e.getBadges()) ? n : [];
  return null != f && f.id === e.userId && u && (m = m.filter(e => e.id !== p)), _ && (m = m.map(e => d(c({}, e), {
    description: e.id === p ? s.intl.string(s.t.Br1ls3) : e.description
  }))), m
}