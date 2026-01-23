/** Chunk was on web.js **/
/** chunk id: 156603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk121090 = require("./121090.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk424994 = require("./424994.js"),
  Chunk985018 = require("./985018.jsx");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = {
    [Chunk424994.a4.SPOTIFY]: Chunk121090.A,
    [Chunk424994.a4.CRUNCHYROLL]: Chunk397927.kwD,
    [Chunk424994.a4.XBOX]: Chunk266080.A,
    [Chunk424994.a4.PLAYSTATION]: Chunk790381.A
  },
  E = {
    [Chunk424994.a4.SPOTIFY]: () => u.intl.string(u.t["0ZB/XE"]),
    [Chunk424994.a4.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYXw),
    [Chunk424994.a4.XBOX]: () => u.intl.string(u.t.Nfvo72),
    [Chunk424994.a4.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo)
  };

function y(e) {
  var t;
  let {
    type: n,
    "aria-label": i
  } = e, a = h(e, ["type", "aria-label"]), s = g[n];
  if (null == s) return null;
  let o = null != i ? i : null == (t = E[n]) ? true : t.call(E);
  return (0, r.jsx)(l.A, _(f({
    Icon: s
  }, a), {
    "aria-label": o
  }))
}