/** Chunk was on 76346 **/
r.d(t, {
  Z: () => f
}), r(388685);
var n = r(200651),
  s = r(192379),
  i = r(780384),
  l = r(410030),
  o = r(119269),
  a = r(3504);
let c = "url(#gradient)",
  u = (e, t) => {
    switch (e) {
      case o.Qo.NITRO_LOGO:
        return t ? "0.3" : "0.2";
      case o.Qo.NITRO_GEM:
      case o.Qo.AVATAR_DECO:
      default:
        return
    }
  },
  d = e => {
    switch (e) {
      case o.Qo.NITRO_GEM:
      case o.Qo.AVATAR_DECO:
        return "var(--background-primary)";
      case o.Qo.NITRO_LOGO:
        return "var(--premium-tier-2-purple)";
      default:
        return
    }
  },
  p = (e, t) => {
    switch (t) {
      case o.Qo.NITRO_GEM:
      case o.Qo.AVATAR_DECO:
        return c;
      case o.Qo.NITRO_LOGO:
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
      progressCircleStrokeSize: g = 2,
      progressCircleVariation: y,
      progressCircleStroke: C
    } = e, x = 43 + g / 2, j = 2 * Math.PI * x, [h, O] = s.useState(f);
    s.useEffect(() => {
      let e = setTimeout(() => {
        O(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]);
    let _ = (0, l.ZP)(),
      m = (0, i.ap)(_),
      b = d(y),
      S = u(y, m),
      E = null != C ? C : p(m, y);
    return (0, n.jsxs)("div", {
      className: a.circleContainer,
      children: [(0, n.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: a.circleSVG,
        children: [(0, n.jsx)("circle", {
          className: y === o.Qo.NITRO_GEM || y === o.Qo.AVATAR_DECO ? a.baseProgressCircle : void 0,
          fill: "transparent",
          strokeWidth: g,
          r: "".concat(x),
          cx: "50%",
          cy: "50%",
          stroke: b,
          strokeOpacity: S
        }), (0, n.jsx)("circle", {
          stroke: E,
          strokeWidth: g,
          strokeLinecap: "round",
          strokeDasharray: "".concat(j, " ").concat(j),
          className: c,
          style: {
            strokeDashoffset: (1 - h / 100) * j
          },
          r: "".concat(x),
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