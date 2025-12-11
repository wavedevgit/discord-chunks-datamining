/** Chunk was on 11941 **/
/** chunk id: 836831, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  d = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617889 = require("./617889.js"),
  Chunk642145 = require("./642145.js"),
  Chunk189140 = require("./189140.js");
let p = Chunk473749.forwardRef((e, t) => {
  let {
    quest: o,
    percentComplete: n,
    size: a = 42,
    strokeWidth: p = 3,
    glowBlur: u = .4,
    percentCompleteText: _,
    percentCompleteTextVariant: f = "text-lg/medium",
    children: C
  } = e, v = (0, b.EK)(o, n > 0), g = a / 2, m = a / 2 - p / 2, x = 2 * Math.PI * m, B = x - n * x, y = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: B
  }, P = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: -n * x
  }, T = {
    boxShadow: "0 0 20px 0px ".concat(v.glow)
  }, {
    progressTextAnimation: S
  } = (0, i.q_F)({
    progressTextAnimation: +(null != _ && 1 !== n),
    config: s.Y
  });
  return (0, r.jsxs)("div", {
    className: l.outer,
    ref: t,
    children: [(0, r.jsxs)("div", {
      className: l.inner,
      style: T,
      children: [C, (0, r.jsxs)(c.animated.div, {
        style: {
          opacity: S
        },
        className: d()(l.coverContent, l.progressTextWrapper),
        children: [(0, r.jsx)("div", {
          className: d()(l.coverContent, l.progressTextOverlay)
        }), (0, r.jsx)(i.Text, {
          variant: f,
          color: "text-strong",
          className: l.progressText,
          children: _
        })]
      })]
    }), (0, r.jsxs)("svg", {
      className: l.progressBar,
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
            stopColor: v.backgroundTop
          }), (0, r.jsx)("stop", {
            offset: "100%",
            stopColor: v.backgroundBottom
          })]
        })]
      }), (0, r.jsx)("circle", {
        className: l.progress,
        strokeWidth: p,
        fill: "transparent",
        r: m,
        cx: g,
        cy: g,
        stroke: "url(#linear)",
        style: P
      }), (0, r.jsx)("circle", {
        className: l.progress,
        strokeWidth: p,
        fill: "transparent",
        r: m,
        cx: g,
        cy: g,
        stroke: v.foreground,
        style: y
      })]
    })]
  })
})