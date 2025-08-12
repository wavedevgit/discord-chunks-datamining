/** Chunk was on 20501 **/
/** chunk id: 838436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => p,
  U: () => f
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk3957 = require("./3957.js"),
  Chunk279743 = require("./279743.jsx"),
  Chunk257368 = require("./257368.js"),
  Chunk620288 = require("./620288.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function p(e) {
  let {
    header: t,
    description: n,
    relatedId: r,
    disabled: l
  } = e;
  return (0, i.jsxs)("div", {
    className: u.header,
    children: [(0, i.jsx)(a.X6q, {
      variant: "text-md/medium",
      color: "header-primary",
      children: (0, i.jsx)("label", {
        htmlFor: r,
        className: s()(u.title, {
          [u.disabled]: l
        }),
        children: t
      })
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      className: s()(u.description, {
        [u.disabled]: l
      }),
      children: n
    })]
  })
}

function g(e) {
  let {
    setting: t,
    className: n,
    children: r
  } = e;
  return (0, i.jsx)(l.F, {
    setting: t,
    children: (0, i.jsx)("div", {
      className: s()(u.container, n),
      children: r
    })
  })
}

function h(e) {
  let {
    setting: t,
    className: n,
    children: r,
    scrollPosition: a,
    scrollHighlightDelay: m
  } = e, p = (0, o.a)(a);
  return (0, i.jsx)(l.F, {
    setting: t,
    children: (0, i.jsxs)("div", {
      className: s()(u.container, n, {
        [d.settingsBackgroundFlashElement]: null != a
      }),
      ref: p,
      children: [r, null != a ? (0, i.jsx)(c.Z, {
        animationDelay: m,
        scrollPosition: a
      }) : null]
    })
  })
}

function f(e) {
  return null != e.scrollPosition ? (0, i.jsx)(h, m({}, e)) : (0, i.jsx)(g, m({}, e))
}