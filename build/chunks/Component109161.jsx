/** Chunk was on web.js **/
/** chunk id: 109161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => h,
  x: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk981729 = require("./981729.jsx"),
  Chunk865672 = require("./865672.jsx"),
  Chunk563373 = require("./563373.js");

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

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  var t;
  let {
    color: n,
    colors: o,
    className: s,
    background: u = true,
    hoverOverride: d
  } = e, [f, _] = i.useState(false), p = null != (t = null == o ? true : o.primaryColor) ? t : n, {
    hasGradient: h,
    stops: m,
    gradientId: g,
    animatedGradientId: E
  } = (0, l.De)(p, null == o ? true : o.secondaryColor, null == o ? true : o.tertiaryColor);
  return null == p ? null : (0, r.jsxs)("svg", {
    className: a()(c.svg, s),
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

function h(e) {
  let {
    color: t,
    colors: n,
    name: i,
    tooltip: o = true
  } = e;
  return null == t && null == n ? null : o ? (0, r.jsx)(s.u, {
    text: i,
    children: t => (0, r.jsx)("span", _(d({}, t), {
      "aria-hidden": true,
      children: (0, r.jsx)(p, d({}, e))
    }))
  }) : (0, r.jsx)(p, d({}, e))
}

function m(e) {
  let {
    color: t,
    colors: n,
    className: i
  } = e, {
    gradientStyle: o,
    gradientClassname: s
  } = (0, l.Ic)({
    colorStrings: n,
    roleStyle: "dot"
  });
  if (null == t && null == n) return null;
  let u = null != n && null != n.primaryColor && null != n.secondaryColor,
    f = d({}, u ? o : {
      backgroundColor: null != t ? t : true
    });
  return (0, r.jsx)("span", {
    className: a()(c.roleCircle, i, {
      [s]: u
    }),
    style: f
  })
}