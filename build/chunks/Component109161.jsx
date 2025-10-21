/** Chunk was on web.js **/
/** chunk id: 109161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => _,
  x: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk865672 = require("./865672.jsx"),
  Chunk218634 = require("./218634.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  var t;
  let {
    color: n,
    colors: a,
    className: s,
    background: u = true,
    hoverOverride: d
  } = e, [f, _] = i.useState(false), p = null != (t = null == a ? true : a.primaryColor) ? t : n, {
    hasGradient: h,
    stops: m,
    gradientId: g,
    animatedGradientId: E
  } = (0, l.De)(p, null == a ? true : a.secondaryColor, null == a ? true : a.tertiaryColor);
  return null == p ? null : (0, r.jsxs)("svg", {
    className: o()(c.svg, s),
    viewBox: "0 0 20 20",
    fill: "none",
    onMouseEnter: () => {
      _(true)
    },
    onMouseLeave: () => {
      _(false)
    },
    children: [h && (0, r.jsxs)("defs", {
      children: [(0, r.jsx)("linearGradient", {
        id: g,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        spreadMethod: "reflect",
        children: m
      }), (0, r.jsxs)("linearGradient", {
        id: E,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        spreadMethod: "reflect",
        children: [m, (0, r.jsx)("animate", {
          attributeName: "x1",
          from: "0%",
          to: "200%",
          dur: "3s",
          repeatCount: "indefinite"
        }), (0, r.jsx)("animate", {
          attributeName: "x2",
          from: "100%",
          to: "300%",
          dur: "3s",
          repeatCount: "indefinite"
        })]
      })]
    }), u && (0, r.jsx)("path", {
      className: c.background,
      d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
    }), (0, r.jsx)("circle", {
      className: c.dotBorderBase,
      cx: "10",
      cy: "10",
      r: "6"
    }), (0, r.jsx)("circle", {
      className: c.dotBorderColor,
      cx: "10",
      cy: "10",
      r: "6",
      fill: h ? "url(#".concat(g, ")") : p
    }), (0, r.jsx)("circle", {
      className: c.dot,
      cx: "10",
      cy: "10",
      r: "5",
      fill: h ? "url(#".concat(d || f ? E : g, ")") : p
    })]
  })
}

function _(e) {
  let {
    color: t,
    colors: n,
    name: i,
    tooltip: a = true
  } = e;
  return null == t && null == n ? null : a ? (0, r.jsx)(s.u, {
    __unsupportedReactNodeAsText: i,
    children: (0, r.jsx)("span", {
      "aria-hidden": true,
      children: (0, r.jsx)(f, d({}, e))
    })
  }) : (0, r.jsx)(f, d({}, e))
}

function p(e) {
  let {
    color: t,
    colors: n,
    className: i
  } = e, {
    gradientStyle: a,
    gradientClassname: s
  } = (0, l.Ic)({
    colorStrings: n,
    roleStyle: "dot"
  });
  if (null == t && null == n) return null;
  let u = null != n && null != n.primaryColor && null != n.secondaryColor,
    f = d({}, u ? a : {
      backgroundColor: null != t ? t : true
    });
  return (0, r.jsx)("span", {
    className: o()(c.roleCircle, i, {
      [s]: u
    }),
    style: f
  })
}