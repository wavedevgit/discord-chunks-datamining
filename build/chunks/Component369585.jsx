/** Chunk was on web.js **/
/** chunk id: 369585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => f
}), require("./856094.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356);
require("./793030.js");
var Chunk159691 = require("./159691.js");
require("./755721.js"), require("./490340.js"), require("./388032.jsx");
var Chunk525751 = require("./525751.js");

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
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function f(e) {
  let {
    leading: t,
    actions: n = [],
    actionsFullWidth: i = false
  } = e;
  if (null == t && n.length < 1) return null;
  let l = ["primary", "critical-primary", "expressive"],
    u = n.findLastIndex(e => null != e.variant && l.includes(e.variant));
  return (0, r.jsxs)("footer", {
    className: a()(s.actionBar, s.section),
    children: [null != t && (0, r.jsx)("div", {
      className: s.actionBarLeading,
      children: t
    }), (0, r.jsx)("div", {
      className: a()(s.actionBarTrailing, {
        [s.actionBarTrailingFullWidth]: i
      }),
      children: (0, r.jsx)(o.hE2, {
        fullWidth: i,
        children: null == n ? true : n.map((e, t) => {
          var n;
          return (0, r.jsx)(o.zxk, c({
            autoFocus: null != (n = e.autoFocus) ? n : u === t
          }, e), t)
        })
      })
    })]
  })
}