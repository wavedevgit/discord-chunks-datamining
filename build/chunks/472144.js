/** Chunk was on 56627 (40b4d129d5695ad7.js) **/
t.d(n, {
  Z: () => u
});
var r = t(200651),
  o = t(192379),
  a = t(120356),
  i = t.n(a),
  d = t(642128),
  s = t(481060),
  c = t(569379),
  l = t(642145),
  f = t(500098);
let u = o.forwardRef((e, n) => {
  let {
    quest: t,
    percentComplete: o,
    size: a = 42,
    strokeWidth: u = 3,
    glowBlur: p = .4,
    percentCompleteText: _,
    percentCompleteTextVariant: C = "text-lg/medium",
    children: b
  } = e, g = (0, c.E)(t, o > 0), v = a / 2, m = a / 2 - u / 2, x = 2 * Math.PI * m, S = x - o * x, y = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: S
  }, B = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: -o * x
  }, k = {
    boxShadow: "0 0 30px 0px ".concat(g.glow)
  }, {
    progressTextAnimation: h
  } = (0, s.q_F)({
    progressTextAnimation: +(null != _ && 1 !== o),
    config: l.Y
  });
  return (0, r.jsxs)("div", {
    className: f.outer,
    ref: n,
    children: [(0, r.jsxs)("div", {
      className: f.inner,
      style: k,
      children: [b, (0, r.jsxs)(d.animated.div, {
        style: {
          opacity: h
        },
        className: i()(f.coverContent, f.progressTextWrapper),
        children: [(0, r.jsx)("div", {
          className: i()(f.coverContent, f.progressTextOverlay)
        }), (0, r.jsx)(s.Text, {
          variant: C,
          color: "text-primary",
          className: f.progressText,
          children: _
        })]
      })]
    }), (0, r.jsxs)("svg", {
      className: f.progressBar,
      height: a,
      width: a,
      children: [(0, r.jsxs)("defs", {
        children: [(0, r.jsxs)("filter", {
          id: "glow",
          children: [(0, r.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: p
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
        className: f.progress,
        strokeWidth: u,
        fill: "transparent",
        r: m,
        cx: v,
        cy: v,
        stroke: "url(#linear)",
        style: B
      }), (0, r.jsx)("circle", {
        className: f.progress,
        strokeWidth: u,
        fill: "transparent",
        r: m,
        cx: v,
        cy: v,
        stroke: g.foreground,
        style: y
      })]
    })]
  })
})