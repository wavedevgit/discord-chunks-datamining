/** Chunk was on web.js **/
/** chunk id: 769411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk344904 = require("./344904.jsx"),
  Chunk584878 = require("./584878.js");
let c = "0.3",
  u = "0.2",
  d = "var(--premium-tier-2-purple)",
  f = "var(--background-base-low)",
  p = "url(#gradient)",
  _ = "url(#gradient_nitro_logo)",
  h = (e, t) => {
    switch (e) {
      case o.BN.NITRO_LOGO:
        return t ? c : u;
      case o.BN.NITRO_GEM:
      case o.BN.AVATAR_DECO:
      default:
        return
    }
  },
  m = e => {
    switch (e) {
      case o.BN.NITRO_GEM:
      case o.BN.AVATAR_DECO:
        return f;
      case o.BN.NITRO_LOGO:
        return d;
      default:
        return
    }
  },
  g = (e, t) => {
    switch (t) {
      case o.BN.NITRO_GEM:
      case o.BN.AVATAR_DECO:
        return p;
      case o.BN.NITRO_LOGO:
        return e ? _ : p;
      default:
        return
    }
  },
  E = e => {
    let {
      percentage: t = 0,
      children: n,
      animationClassName: c,
      initialPercentage: u = 0,
      progressCircleStrokeSize: d = 2,
      progressCircleVariation: f,
      progressCircleStroke: p
    } = e, _ = 43 + d / 2, E = 2 * Math.PI * _, [y, b] = i.useState(u);
    i.useEffect(() => {
      let e = setTimeout(() => {
        b(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]);
    let O = (0, s.Ay)(),
      v = (0, a.qB)(O),
      A = (1 - y / 100) * E,
      I = m(f),
      S = h(f, v),
      T = null != p ? p : g(v, f);
    return (0, r.jsxs)("div", {
      className: l.Ap,
      children: [(0, r.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: l.fB,
        children: [(0, r.jsx)("circle", {
          className: f === o.BN.NITRO_GEM || f === o.BN.AVATAR_DECO ? l.F3 : true,
          fill: "transparent",
          strokeWidth: d,
          r: "".concat(_),
          cx: "50%",
          cy: "50%",
          stroke: I,
          strokeOpacity: S
        }), (0, r.jsx)("circle", {
          stroke: T,
          strokeWidth: d,
          strokeLinecap: "round",
          strokeDasharray: "".concat(E, " ").concat(E),
          className: c,
          style: {
            strokeDashoffset: A
          },
          r: "".concat(_),
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
        className: l.Vw,
        children: n
      })]
    })
  }