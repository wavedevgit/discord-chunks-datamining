/** Chunk was on 95282 **/
/** chunk id: 472144, original params: e,o,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  d = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569379 = require("./569379.js"),
  Chunk642145 = require("./642145.js"),
  Chunk944011 = require("./944011.js");
let p = Chunk647438.forwardRef((e, o) => {
  let {
    quest: t,
    percentComplete: a,
    size: n = 42,
    strokeWidth: p = 3,
    glowBlur: _ = .4,
    percentCompleteText: C,
    percentCompleteTextVariant: u = "text-lg/medium",
    children: v
  } = e, m = (0, l.E)(t, a > 0), g = n / 2, x = n / 2 - p / 2, B = 2 * Math.PI * x, y = B - a * B, P = {
    strokeDasharray: "".concat(B, " ").concat(B),
    strokeDashoffset: y
  }, b = {
    strokeDasharray: "".concat(B, " ").concat(B),
    strokeDashoffset: -a * B
  }, T = {
    boxShadow: "0 0 30px 0px ".concat(m.glow)
  }, {
    progressTextAnimation: S
  } = (0, s.q_F)({
    progressTextAnimation: +(null != C && 1 !== a),
    config: c.Y
  });
  return (0, r.jsxs)("div", {
    className: f.outer,
    ref: o,
    children: [(0, r.jsxs)("div", {
      className: f.inner,
      style: T,
      children: [v, (0, r.jsxs)(i.animated.div, {
        style: {
          opacity: S
        },
        className: d()(f.coverContent, f.progressTextWrapper),
        children: [(0, r.jsx)("div", {
          className: d()(f.coverContent, f.progressTextOverlay)
        }), (0, r.jsx)(s.Text, {
          variant: u,
          color: "text-primary",
          className: f.progressText,
          children: C
        })]
      })]
    }), (0, r.jsxs)("svg", {
      className: f.progressBar,
      height: n,
      width: n,
      children: [(0, r.jsxs)("defs", {
        children: [(0, r.jsxs)("filter", {
          id: "glow",
          children: [(0, r.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: _
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
            stopColor: m.backgroundTop
          }), (0, r.jsx)("stop", {
            offset: "100%",
            stopColor: m.backgroundBottom
          })]
        })]
      }), (0, r.jsx)("circle", {
        className: f.progress,
        strokeWidth: p,
        fill: "transparent",
        r: x,
        cx: g,
        cy: g,
        stroke: "url(#linear)",
        style: b
      }), (0, r.jsx)("circle", {
        className: f.progress,
        strokeWidth: p,
        fill: "transparent",
        r: x,
        cx: g,
        cy: g,
        stroke: m.foreground,
        style: P
      })]
    })]
  })
})