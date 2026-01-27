/** Chunk was on web.js **/
/** chunk id: 289873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => m,
  y: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk423161 = require("./423161.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var m = function(e) {
  return e.WANDERING_CUBES = "wanderingCubes", e.CHASING_DOTS = "chasingDots", e.PULSING_ELLIPSIS = "pulsingEllipsis", e.SPINNING_CIRCLE = "spinningCircle", e.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", e.LOW_MOTION = "lowMotion", e
}({});

function g(e) {
  switch (e) {
    case "wanderingCubes":
    case "chasingDots":
      return "lowMotion";
    default:
      return e
  }
}

function E(e) {
  var t;
  let {
    type: n = "wanderingCubes",
    animated: a = true,
    className: u,
    itemClassName: f
  } = e, h = _(e, ["type", "animated", "className", "itemClassName"]), {
    i18n: m
  } = (0, l.G9)(), {
    reducedMotion: E
  } = i.useContext(s.C), y = E.enabled ? g(n) : n, b = null != (t = h["aria-label"]) ? t : m.SPINNER_LOADING_LABEL;
  if ("spinningCircle" === y || "spinningCircleSimple" === y) return (0, r.jsx)("div", p(d({
    className: o()(c.spinner, c[y], u, {
      [c.stopAnimation]: !a
    }),
    role: "img"
  }, h), {
    "aria-label": b,
    children: (0, r.jsx)("div", {
      className: c.spinningCircleInner,
      children: (0, r.jsxs)("svg", {
        className: c.circular,
        viewBox: "25 25 50 50",
        children: ["spinningCircle" === y && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("circle", {
            className: o()(c.path, c.path3, f),
            cx: "50",
            cy: "50",
            r: "20"
          }), (0, r.jsx)("circle", {
            className: o()(c.path, c.path2, f),
            cx: "50",
            cy: "50",
            r: "20"
          })]
        }), (0, r.jsx)("circle", {
          className: o()(c.path, f),
          cx: "50",
          cy: "50",
          r: "20"
        })]
      })
    })
  }));
  let O = o()(c.item, f);
  return (0, r.jsx)("span", p(d({
    className: o()(c.spinner, u, {
      [c.stopAnimation]: !a
    }),
    role: "img",
    "aria-label": b
  }, h), {
    children: (0, r.jsxs)("span", {
      className: o()(c.inner, c[y]),
      children: [(0, r.jsx)("span", {
        className: O
      }), (0, r.jsx)("span", {
        className: O
      }), "pulsingEllipsis" === y || "lowMotion" === y ? (0, r.jsx)("span", {
        className: O
      }) : null]
    })
  }))
}
E.Type = m