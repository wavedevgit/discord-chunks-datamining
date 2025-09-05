/** Chunk was on web.js **/
/** chunk id: 369585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => y,
  G: () => b
}), require("./856094.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk614177 = require("./614177.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456208 = require("./456208.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    leading: t,
    actions: n = [],
    actionsFullWidth: i = false
  } = e;
  if (null == t && n.length < 1) return null;
  let o = ["primary", "critical-primary", "expressive"],
    c = n.findLastIndex(e => null != e.variant && o.includes(e.variant));
  return (0, r.jsxs)("footer", {
    className: a()(f.actionBar, f.section),
    children: [null != t && (0, r.jsx)("div", {
      className: f.actionBarLeading,
      children: t
    }), (0, r.jsx)("div", {
      className: a()(f.actionBarTrailing, {
        [f.actionBarTrailingFullWidth]: i
      }),
      children: (0, r.jsx)(l.h, {
        fullWidth: i,
        children: null == n ? true : n.map((e, t) => {
          var n;
          return (0, r.jsx)(s.z, p({
            autoFocus: null != (n = e.autoFocus) ? n : c === t
          }, e), t)
        })
      })
    })]
  })
}

function y(e) {
  var {
    text: t
  } = e, n = g(e, ["text"]);
  return (0, r.jsx)(c.$q, m(p({}, n), {
    children: (0, r.jsx)(o.xv, {
      variant: "text-sm/normal",
      children: null != t ? t : d.intl.string(u.default.m3Vfcn)
    })
  }))
}