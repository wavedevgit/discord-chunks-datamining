/** Chunk was on 823 **/
/** chunk id: 209270, original params: r,a,e (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk653812 = require("./653812.js");
let s = r => {
  let {
    innerRingPercent: a,
    outerRingColor: e = "currentColor",
    innerRingColor: s = "currentColor",
    strokeWidth: o = 4,
    children: n,
    backgroundCircleColor: l,
    backgroundCircleBlurAmount: i = 0
  } = r, d = Math.min(Math.max(a, 0), 100), u = (100 - o) / 2, h = u * Math.PI * 2, v = (100 - o) / 2, x = v * Math.PI * 2;
  return (0, c.jsxs)("div", {
    className: t.kL,
    children: [(0, c.jsx)("svg", {
      viewBox: "0 0 ".concat(100, " ").concat(100),
      className: t.DT,
      style: null != i ? {
        "--custom-backdrop-blur-amount": "".concat(i, "px")
      } : true,
      children: (0, c.jsx)("circle", {
        cx: 50,
        cy: 50,
        r: 50,
        fill: l
      })
    }), (0, c.jsxs)("svg", {
      viewBox: "0 0 ".concat(100, " ").concat(100),
      className: t.JW,
      children: [(0, c.jsx)("circle", {
        cx: 50,
        cy: 50,
        r: u,
        strokeWidth: o,
        stroke: e,
        fill: "none",
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
        style: {
          strokeDasharray: h
        }
      }), (0, c.jsx)("circle", {
        cx: 50,
        cy: 50,
        r: v,
        strokeWidth: o,
        stroke: s,
        fill: "none",
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
        style: {
          strokeDasharray: x,
          strokeDashoffset: (1 - d / 100) * x
        }
      })]
    }), null != n && (0, c.jsx)("div", {
      className: t.Lw,
      children: n
    })]
  })
}