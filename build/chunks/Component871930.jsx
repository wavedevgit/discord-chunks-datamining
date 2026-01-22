/** Chunk was on web.js **/
/** chunk id: 871930, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => _,
  h: () => E
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk725010 = require("./725010.js"),
  Chunk446541 = require("./446541.jsx"),
  Chunk480357 = require("./480357.js"),
  Chunk606360 = require("./606360.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let {
    header: t,
    description: n,
    relatedId: i,
    disabled: o
  } = e;
  return (0, r.jsxs)("div", {
    className: d.wx,
    children: [(0, r.jsx)(s.Heading, {
      variant: "text-md/medium",
      color: "text-strong",
      children: (0, r.jsx)("label", {
        htmlFor: i,
        className: a()(d.DD, {
          [d.r9]: o
        }),
        children: t
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: a()(d.h_, {
        [d.r9]: o
      }),
      children: n
    })]
  })
}

function h(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(d.kL, t),
    children: n
  })
}

function m(e) {
  let {
    setting: t,
    className: n,
    children: i
  } = e;
  return (0, r.jsx)(o.x, {
    setting: t,
    children: (0, r.jsx)("div", {
      className: a()(d.kL, n),
      children: i
    })
  })
}

function g(e) {
  let {
    setting: t,
    className: n,
    children: i,
    scrollPosition: s,
    scrollHighlightDelay: f
  } = e, p = (0, l.s)(s);
  return (0, r.jsx)(o.x, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: a()(d.kL, n, {
        [u.m]: null != s
      }),
      ref: p,
      children: [i, null != s ? (0, r.jsx)(c.A, {
        animationDelay: f,
        scrollPosition: s
      }) : null]
    })
  })
}

function E(e) {
  return null != e.scrollPosition ? (0, r.jsx)(g, p({}, e)) : null != e.setting ? (0, r.jsx)(m, p({}, e)) : (0, r.jsx)(h, p({}, e))
}