/** Chunk was on 84735 **/
/** chunk id: 457082, original params: e,r,a (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk106184 = require("./106184.js");
let o = e => {
  let {
    innerRingPercent: r,
    outerRingColor: a = "currentColor",
    innerRingColor: o = "currentColor",
    strokeWidth: t = 4,
    children: s,
    backgroundCircleColor: i,
    backgroundCircleBlurAmount: l = 0
  } = e, d = Math.min(Math.max(r, 0), 100), g = (100 - t) / 2, u = g * Math.PI * 2, v = (100 - t) / 2, b = v * Math.PI * 2;
  return (0, c.jsxs)("div", {
    className: n.container,
    children: [(0, c.jsx)("svg", {
      viewBox: "0 0 ".concat(100, " ").concat(100),
      className: n.backgroundSvg,
      style: null != l ? {
        "--custom-backdrop-blur-amount": "".concat(l, "px")
      } : true,
      children: (0, c.jsx)("circle", {
        cx: 50,
        cy: 50,
        r: 50,
        fill: i
      })
    }), (0, c.jsxs)("svg", {
      viewBox: "0 0 ".concat(100, " ").concat(100),
      className: n.svg,
      children: [(0, c.jsx)("circle", {
        cx: 50,
        cy: 50,
        r: g,
        strokeWidth: t,
        stroke: a,
        fill: "none",
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
        style: {
          strokeDasharray: u
        }
      }), (0, c.jsx)("circle", {
        cx: 50,
        cy: 50,
        r: v,
        strokeWidth: t,
        stroke: o,
        fill: "none",
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
        style: {
          strokeDasharray: b,
          strokeDashoffset: (1 - d / 100) * b
        }
      })]
    }), null != s && (0, c.jsx)("div", {
      className: n.overlay,
      children: s
    })]
  })
}