/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => f
}), n(411104);
var r = n(200651);
n(192379);
var i = n(758426),
  o = n(973675),
  a = n(949605),
  s = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function f(e) {
  var {
    tier: t
  } = e, n = u(e, ["tier"]);
  switch (t) {
    case s.Eu4.NONE:
    case s.Eu4.TIER_1:
      return (0, r.jsx)(i.Z, c({}, n));
    case s.Eu4.TIER_2:
      return (0, r.jsx)(o.Z, c({}, n));
    case s.Eu4.TIER_3:
      return (0, r.jsx)(a.Z, c({}, n));
    default:
      throw Error("Not a valid tier type")
  }
}