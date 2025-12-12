/** Chunk was on web.js **/
/** chunk id: 435439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk908841 = require("./908841.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk206583 = require("./206583.js"),
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
    [Chunk206583.kG.SPOTIFY]: Chunk908841.Z,
    [Chunk206583.kG.CRUNCHYROLL]: Chunk481060.omf,
    [Chunk206583.kG.XBOX]: Chunk639351.Z,
    [Chunk206583.kG.PLAYSTATION]: Chunk374129.Z
  },
  E = {
    [Chunk206583.kG.SPOTIFY]: () => Chunk388032.intl.string(Chunk388032.t["0ZB/XE"]),
    [Chunk206583.kG.CRUNCHYROLL]: () => Chunk388032.intl.string(Chunk388032.t.jdJYXw),
    [Chunk206583.kG.XBOX]: () => Chunk388032.intl.string(Chunk388032.t.Nfvo72),
    [Chunk206583.kG.PLAYSTATION]: () => Chunk388032.intl.string(Chunk388032.t.fFl4jo)
  };

function b(e) {
  var t, {
      type: n,
      "aria-label": i
    } = e,
    o = m(e, ["type", "aria-label"]);
  let a = g[n];
  if (null == a) return null;
  let s = null != i ? i : null == (t = E[n]) ? true : t.call(E);
  return (0, r.jsx)(l.Z, _(f({
    Icon: a
  }, o), {
    "aria-label": s
  }))
}