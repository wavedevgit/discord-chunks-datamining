/** Chunk was on 7685 **/
/** chunk id: 576692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk250402 = require("./250402.js");

function o(e) {
  let {
    size: t,
    lowerBadge: n,
    lowerBadgeSize: i = {
      width: 16,
      height: 16
    },
    children: o,
    className: u,
    innerClassName: c,
    rounded: d = true,
    "aria-hidden": h
  } = e, g = null != n, f = r.useId(), p = "".concat(f, "-lower_badge_masks"), I = "".concat(f, "-shape_mask"), m = "".concat(f, "-stroke_mask"), E = (null == i ? true : i.width) != null ? i.width : 16, A = (null == i ? true : i.height) != null ? i.height : 16, y = {
    width: t + 8,
    height: t + 8,
    x: false,
    y: false
  }, S = d ? (0, l.jsx)("circle", {
    id: I,
    cx: t / 2,
    cy: t / 2,
    r: t / 2
  }) : (0, l.jsx)("rect", {
    id: I,
    x: 0,
    y: 0,
    width: t,
    height: t,
    rx: 8,
    ry: 8
  });
  return (0, l.jsxs)("div", {
    className: s()(u, a.iE),
    style: {
      width: t,
      height: t
    },
    "aria-hidden": h,
    children: [(0, l.jsxs)("svg", {
      width: y.width,
      height: y.height,
      viewBox: "".concat(y.x, " ").concat(y.y, " ").concat(y.width, " ").concat(y.height),
      className: s()(a.JW, a.Pm),
      overflow: "visible",
      role: "none",
      children: [(0, l.jsxs)("defs", {
        children: [S, g ? (0, l.jsx)("rect", {
          id: p,
          x: t - (E + 4) + 2,
          y: t - (A + 4) + 2,
          width: E + 4,
          height: A + 4,
          rx: t / 4,
          ry: t / 4
        }) : null]
      }), (0, l.jsxs)("mask", {
        id: f,
        fill: "black",
        x: 0,
        y: 0,
        width: t,
        height: t,
        children: [(0, l.jsx)("use", {
          href: "#".concat(I),
          fill: "white"
        }), g ? (0, l.jsx)("use", {
          href: "#".concat(p),
          fill: "black"
        }) : null]
      }), g ? (0, l.jsxs)("mask", {
        id: m,
        children: [(0, l.jsx)("rect", {
          width: "150%",
          height: "150%",
          x: "-25%",
          y: "-25%",
          fill: "white"
        }), (0, l.jsx)("use", {
          href: "#".concat(p),
          fill: "black"
        })]
      }) : null, (0, l.jsx)("foreignObject", {
        mask: "url(#".concat(f, ")"),
        x: 0,
        y: 0,
        className: c,
        width: t,
        height: t,
        children: o
      })]
    }), g ? (0, l.jsx)("div", {
      className: a.H7,
      children: n
    }) : null]
  }, f)
}