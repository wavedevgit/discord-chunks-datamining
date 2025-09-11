/** Chunk was on web.js **/
/** chunk id: 369585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => b,
  G: () => E
}), require("./856094.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk525751 = require("./525751.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  let {
    leading: t,
    actions: n = [],
    actionsFullWidth: i = false
  } = e;
  if (null == t && n.length < 1) return null;
  let o = ["primary", "critical-primary", "expressive"],
    l = n.findLastIndex(e => null != e.variant && o.includes(e.variant));
  return (0, r.jsxs)("footer", {
    className: a()(d.actionBar, d.section),
    children: [null != t && (0, r.jsx)("div", {
      className: d.actionBarLeading,
      children: t
    }), (0, r.jsx)("div", {
      className: a()(d.actionBarTrailing, {
        [d.actionBarTrailingFullWidth]: i
      }),
      children: (0, r.jsx)(s.hE2, {
        fullWidth: i,
        children: null == n ? true : n.map((e, t) => {
          var n;
          return (0, r.jsx)(s.zxk, _({
            autoFocus: null != (n = e.autoFocus) ? n : l === t
          }, e), t)
        })
      })
    })]
  })
}

function b(e) {
  var {
    text: t
  } = e, n = m(e, ["text"]);
  return (0, r.jsx)(l.$q, h(_({}, n), {
    children: (0, r.jsx)(o.xvT, {
      variant: "text-sm/normal",
      children: null != t ? t : u.intl.string(c.default.m3Vfcn)
    })
  }))
}