/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(928518),
  s = n(451478),
  l = n(228488),
  c = n(871499),
  u = n(388032);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    enabled: t
  } = e, n = _(e, ["enabled"]);
  let i = t ? u.NW.string(u.t.Z7MyND) : u.NW.string(u.t.OIDkcn),
    a = t ? o.wvt : o.NpZ;
  return (0, r.jsx)(c.Z, f({
    label: i,
    iconComponent: a
  }, n))
}
let m = i.ZP.connectStores([s.Z, a.Z], e => {
  let {
    node: t,
    guestWindow: n
  } = e;
  return {
    enabled: (0, l.rB)(t, null == n ? void 0 : n.document)
  }
})(h)