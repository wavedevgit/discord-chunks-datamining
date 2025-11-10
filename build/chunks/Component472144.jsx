/** Chunk was on 50433 **/
/** chunk id: 472144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569379 = require("./569379.js"),
  Chunk642145 = require("./642145.js"),
  Chunk184128 = require("./184128.js");
let p = Chunk647438.forwardRef((e, t) => {
  let {
    quest: n,
    percentComplete: s,
    size: o = 42,
    strokeWidth: p = 3,
    glowBlur: m = .4,
    percentCompleteText: g,
    percentCompleteTextVariant: f = "text-lg/medium",
    children: h
  } = e, x = (0, c.E)(n, s > 0), b = o / 2, _ = o / 2 - p / 2, j = 2 * Math.PI * _, v = j - s * j, C = {
    strokeDasharray: "".concat(j, " ").concat(j),
    strokeDashoffset: v
  }, y = {
    strokeDasharray: "".concat(j, " ").concat(j),
    strokeDashoffset: -s * j
  }, E = {
    boxShadow: "0 0 30px 0px ".concat(x.glow)
  }, {
    progressTextAnimation: O
  } = (0, l.q_F)({
    progressTextAnimation: +(null != g && 1 !== s),
    config: d.Y
  });
  return (0, r.jsxs)("div", {
    className: u.outer,
    ref: t,
    children: [(0, r.jsxs)("div", {
      className: u.inner,
      style: E,
      children: [h, (0, r.jsxs)(i.animated.div, {
        style: {
          opacity: O
        },
        className: a()(u.coverContent, u.progressTextWrapper),
        children: [(0, r.jsx)("div", {
          className: a()(u.coverContent, u.progressTextOverlay)
        }), (0, r.jsx)(l.Text, {
          variant: f,
          color: "text-primary",
          className: u.progressText,
          children: g
        })]
      })]
    }), (0, r.jsxs)("svg", {
      className: u.progressBar,
      height: o,
      width: o,
      children: [(0, r.jsxs)("defs", {
        children: [(0, r.jsxs)("filter", {
          id: "glow",
          children: [(0, r.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: m
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
            stopColor: x.backgroundTop
          }), (0, r.jsx)("stop", {
            offset: "100%",
            stopColor: x.backgroundBottom
          })]
        })]
      }), (0, r.jsx)("circle", {
        className: u.progress,
        strokeWidth: p,
        fill: "transparent",
        r: _,
        cx: b,
        cy: b,
        stroke: "url(#linear)",
        style: y
      }), (0, r.jsx)("circle", {
        className: u.progress,
        strokeWidth: p,
        fill: "transparent",
        r: _,
        cx: b,
        cy: b,
        stroke: x.foreground,
        style: C
      })]
    })]
  })
})