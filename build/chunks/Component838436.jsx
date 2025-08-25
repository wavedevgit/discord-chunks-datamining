/** Chunk was on web.js **/
/** chunk id: 838436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => p,
  U: () => g
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk3957 = require("./3957.js"),
  Chunk279743 = require("./279743.jsx"),
  Chunk334709 = require("./334709.js"),
  Chunk702315 = require("./702315.js");

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

function p(e) {
  let {
    header: t,
    description: n,
    relatedId: i,
    disabled: s
  } = e;
  return (0, r.jsxs)("div", {
    className: d.header,
    children: [(0, r.jsx)(a.X6q, {
      variant: "text-md/medium",
      color: "header-primary",
      children: (0, r.jsx)("label", {
        htmlFor: i,
        className: o()(d.title, {
          [d.disabled]: s
        }),
        children: t
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      className: o()(d.description, {
        [d.disabled]: s
      }),
      children: n
    })]
  })
}

function h(e) {
  let {
    setting: t,
    className: n,
    children: i
  } = e;
  return (0, r.jsx)(s.F, {
    setting: t,
    children: (0, r.jsx)("div", {
      className: o()(d.container, n),
      children: i
    })
  })
}

function m(e) {
  let {
    setting: t,
    className: n,
    children: i,
    scrollPosition: a,
    scrollHighlightDelay: f
  } = e, _ = (0, l.a)(a);
  return (0, r.jsx)(s.F, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: o()(d.container, n, {
        [u.settingsBackgroundFlashElement]: null != a
      }),
      ref: _,
      children: [i, null != a ? (0, r.jsx)(c.Z, {
        animationDelay: f,
        scrollPosition: a
      }) : null]
    })
  })
}

function g(e) {
  return null != e.scrollPosition ? (0, r.jsx)(m, _({}, e)) : (0, r.jsx)(h, _({}, e))
}