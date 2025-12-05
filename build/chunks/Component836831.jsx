/** Chunk was on 90499 **/
/** chunk id: 836831, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617889 = require("./617889.js"),
  Chunk642145 = require("./642145.js"),
  Chunk316464 = require("./316464.js");
let p = Chunk473749.forwardRef((e, t) => {
  let {
    quest: o,
    percentComplete: n,
    size: a = 42,
    strokeWidth: p = 3,
    glowBlur: u = .4,
    percentCompleteText: C,
    percentCompleteTextVariant: v = "text-lg/medium",
    children: m
  } = e, g = (0, _.EK)(o, n > 0), x = a / 2, f = a / 2 - p / 2, B = 2 * Math.PI * f, y = B - n * B, P = {
    strokeDasharray: "".concat(B, " ").concat(B),
    strokeDashoffset: y
  }, b = {
    strokeDasharray: "".concat(B, " ").concat(B),
    strokeDashoffset: -n * B
  }, T = {
    boxShadow: "0 0 20px 0px ".concat(g.glow)
  }, {
    progressTextAnimation: S
  } = (0, d.q_F)({
    progressTextAnimation: +(null != C && 1 !== n),
    config: l.Y
  });
  return (0, r.jsxs)("div", {
    className: c.outer,
    ref: t,
    children: [(0, r.jsxs)("div", {
      className: c.inner,
      style: T,
      children: [m, (0, r.jsxs)(s.animated.div, {
        style: {
          opacity: S
        },
        className: i()(c.coverContent, c.progressTextWrapper),
        children: [(0, r.jsx)("div", {
          className: i()(c.coverContent, c.progressTextOverlay)
        }), (0, r.jsx)(d.Text, {
          variant: v,
          color: "text-strong",
          className: c.progressText,
          children: C
        })]
      })]
    }), (0, r.jsxs)("svg", {
      className: c.progressBar,
      height: a,
      width: a,
      children: [(0, r.jsxs)("defs", {
        children: [(0, r.jsxs)("filter", {
          id: "glow",
          children: [(0, r.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: u
          }), (0, r.jsxs)("feMerge", {
            children: [(0, r.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, r.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, r.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, r.jsx)("feMergeNode", {
              in: "SourceGraphic"
            })]
          })]
        }), (0, r.jsxs)("linearGradient", {
          id: "linear",
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%",
          children: [(0, r.jsx)("stop", {
            offset: "0%",
            stopColor: g.backgroundTop
          }), (0, r.jsx)("stop", {
            offset: "100%",
            stopColor: g.backgroundBottom
          })]
        })]
      }), (0, r.jsx)("circle", {
        className: c.progress,
        strokeWidth: p,
        fill: "transparent",
        r: f,
        cx: x,
        cy: x,
        stroke: "url(#linear)",
        style: b
      }), (0, r.jsx)("circle", {
        className: c.progress,
        strokeWidth: p,
        fill: "transparent",
        r: f,
        cx: x,
        cy: x,
        stroke: g.foreground,
        style: P
      })]
    })]
  })
})