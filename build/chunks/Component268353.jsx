/** Chunk was on web.js **/
/** chunk id: 268353, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk928518 = require("./928518.js"),
  Chunk451478 = require("./451478.js"),
  Chunk228488 = require("./228488.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  var {
    enabled: t
  } = e, n = p(e, ["enabled"]);
  let i = t ? u.intl.string(u.t.Z7MyNB) : u.intl.string(u.t.OIDkcp),
    o = t ? a.wvt : a.NpZ;
  return (0, r.jsx)(c.Z, f({
    label: i,
    iconComponent: o
  }, n))
}
let h = Chunk442837.ZP.connectStores([Chunk451478.Z, Chunk928518.Z], e => {
  let {
    node: t,
    guestWindow: n
  } = e;
  return {
    enabled: (0, l.rB)(t, null == n ? true : n.document)
  }
})(m)