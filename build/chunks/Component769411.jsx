/** Chunk was on 2827 **/
/** chunk id: 769411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk344904 = require("./344904.jsx"),
  Chunk584878 = require("./584878.js");
let c = "url(#gradient)",
  d = e => {
    let {
      percentage: t = 0,
      children: n,
      animationClassName: d,
      initialPercentage: u = 0,
      progressCircleStrokeSize: _ = 2,
      progressCircleVariation: p,
      progressCircleStroke: m
    } = e, g = 43 + _ / 2, A = 2 * Math.PI * g, [f, b] = i.useState(u);
    i.useEffect(() => {
      let e = setTimeout(() => {
        b(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]);
    let h = (0, s.Ay)(),
      E = (0, l.qB)(h),
      O = (e => {
        switch (e) {
          case a.BN.NITRO_GEM:
          case a.BN.AVATAR_DECO:
            return "var(--background-base-low)";
          case a.BN.NITRO_LOGO:
            return "var(--premium-tier-2-purple)";
          default:
            return
        }
      })(p),
      C = ((e, t) => {
        switch (e) {
          case a.BN.NITRO_LOGO:
            return t ? "0.3" : "0.2";
          case a.BN.NITRO_GEM:
          case a.BN.AVATAR_DECO:
          default:
            return
        }
      })(p, E),
      x = null != m ? m : ((e, t) => {
        switch (t) {
          case a.BN.NITRO_GEM:
          case a.BN.AVATAR_DECO:
            return c;
          case a.BN.NITRO_LOGO:
            return e ? "url(#gradient_nitro_logo)" : c;
          default:
            return
        }
      })(E, p);
    return (0, r.jsxs)("div", {
      className: o.Ap,
      children: [(0, r.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: o.fB,
        children: [(0, r.jsx)("circle", {
          className: p === a.BN.NITRO_GEM || p === a.BN.AVATAR_DECO ? o.F3 : true,
          fill: "transparent",
          strokeWidth: _,
          r: "".concat(g),
          cx: "50%",
          cy: "50%",
          stroke: O,
          strokeOpacity: C
        }), (0, r.jsx)("circle", {
          stroke: x,
          strokeWidth: _,
          strokeLinecap: "round",
          strokeDasharray: "".concat(A, " ").concat(A),
          className: d,
          style: {
            strokeDashoffset: (1 - f / 100) * A
          },
          r: "".concat(g),
          cx: "50%",
          cy: "50%"
        })]
      }), (0, r.jsxs)("svg", {
        width: "0",
        height: "0",
        children: [(0, r.jsxs)("linearGradient", {
          id: "gradient",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [(0, r.jsx)("stop", {
            offset: "0%",
            style: {
              stopColor: "#FFBDF2"
            }
          }), (0, r.jsx)("stop", {
            offset: "100%",
            style: {
              stopColor: "#E742E1"
            }
          })]
        }), (0, r.jsxs)("linearGradient", {
          id: "gradient_nitro_logo",
          x1: "2.99995",
          y1: "67.6298",
          x2: "132.55",
          y2: "67.6298",
          gradientUnits: "userSpaceOnUse",
          children: [(0, r.jsx)("stop", {
            stopColor: "#F9A0E8"
          }), (0, r.jsx)("stop", {
            offset: "1",
            stopColor: "#E742E1"
          })]
        }), (0, r.jsxs)("linearGradient", {
          id: "dark-purple-gradient",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "0%",
          children: [(0, r.jsx)("stop", {
            offset: "0%",
            style: {
              stopColor: "#241731",
              stopOpacity: 1
            }
          }), (0, r.jsx)("stop", {
            offset: "100%",
            style: {
              stopColor: "#241731",
              stopOpacity: 1
            }
          })]
        })]
      }), (0, r.jsx)("div", {
        className: o.Vw,
        children: n
      })]
    })
  }