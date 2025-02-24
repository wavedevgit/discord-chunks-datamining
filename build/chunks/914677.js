/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  Z: () => f
}), r(47120);
var n = r(200651),
  s = r(192379),
  i = r(780384),
  o = r(410030),
  l = r(119269),
  a = r(652523);
let c = "url(#gradient)",
  u = (e, t) => {
    switch (e) {
      case l.Qo.NITRO_LOGO:
        return t ? "0.3" : "0.2";
      case l.Qo.NITRO_GEM:
      case l.Qo.AVATAR_DECO:
      default:
        return
    }
  },
  d = e => {
    switch (e) {
      case l.Qo.NITRO_GEM:
      case l.Qo.AVATAR_DECO:
        return "var(--background-primary)";
      case l.Qo.NITRO_LOGO:
        return "var(--premium-tier-2-purple)";
      default:
        return
    }
  },
  p = (e, t) => {
    switch (t) {
      case l.Qo.NITRO_GEM:
      case l.Qo.AVATAR_DECO:
        return c;
      case l.Qo.NITRO_LOGO:
        return e ? "url(#gradient_nitro_logo)" : c;
      default:
        return
    }
  },
  f = e => {
    let {
      percentage: t = 0,
      children: r,
      animationClassName: c,
      initialPercentage: f = 0,
      progressCircleStrokeSize: b = 2,
      progressCircleVariation: g,
      progressCircleStroke: O
    } = e, h = 43 + b / 2, m = 2 * Math.PI * h, [x, j] = s.useState(f);
    s.useEffect(() => {
      let e = setTimeout(() => {
        j(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]);
    let y = (0, o.ZP)(),
      C = (0, i.ap)(y),
      v = d(g),
      P = u(g, C),
      _ = null != O ? O : p(C, g);
    return (0, n.jsxs)("div", {
      className: a.circleContainer,
      children: [(0, n.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: a.circleSVG,
        children: [(0, n.jsx)("circle", {
          className: g === l.Qo.NITRO_GEM || g === l.Qo.AVATAR_DECO ? a.baseProgressCircle : void 0,
          fill: "transparent",
          strokeWidth: b,
          r: "".concat(h),
          cx: "50%",
          cy: "50%",
          stroke: v,
          strokeOpacity: P
        }), (0, n.jsx)("circle", {
          stroke: _,
          strokeWidth: b,
          strokeLinecap: "round",
          strokeDasharray: "".concat(m, " ").concat(m),
          className: c,
          style: {
            strokeDashoffset: (1 - x / 100) * m
          },
          r: "".concat(h),
          cx: "50%",
          cy: "50%"
        })]
      }), (0, n.jsxs)("svg", {
        width: "0",
        height: "0",
        children: [(0, n.jsxs)("linearGradient", {
          id: "gradient",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [(0, n.jsx)("stop", {
            offset: "0%",
            style: {
              stopColor: "#FFBDF2"
            }
          }), (0, n.jsx)("stop", {
            offset: "100%",
            style: {
              stopColor: "#E742E1"
            }
          })]
        }), (0, n.jsxs)("linearGradient", {
          id: "gradient_nitro_logo",
          x1: "2.99995",
          y1: "67.6298",
          x2: "132.55",
          y2: "67.6298",
          gradientUnits: "userSpaceOnUse",
          children: [(0, n.jsx)("stop", {
            stopColor: "#F9A0E8"
          }), (0, n.jsx)("stop", {
            offset: "1",
            stopColor: "#E742E1"
          })]
        }), (0, n.jsxs)("linearGradient", {
          id: "dark-purple-gradient",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "0%",
          children: [(0, n.jsx)("stop", {
            offset: "0%",
            style: {
              stopColor: "#241731",
              stopOpacity: 1
            }
          }), (0, n.jsx)("stop", {
            offset: "100%",
            style: {
              stopColor: "#241731",
              stopOpacity: 1
            }
          })]
        })]
      }), (0, n.jsx)("div", {
        className: a.childrenContainer,
        children: r
      })]
    })
  }