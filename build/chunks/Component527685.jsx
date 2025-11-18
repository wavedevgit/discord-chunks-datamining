/** Chunk was on web.js **/
/** chunk id: 527685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u,
  y: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356);
require("./512722.js");
var Chunk410030 = require("./410030.js"),
  Chunk49552 = require("./49552.js"),
  c = function(e) {
    return e.UNSET = "unset", e.BLUE = "blue", e.ORANGE = "orange", e
  }({});
let u = e => {
  var t;
  let {
    progress: n,
    minimum: a = 0,
    maximum: c = 100,
    variant: u,
    override: d,
    labelledBy: f
  } = e, _ = null != d && "unset" === u, p = (0, s.ZP)(), h = null != (t = null == d ? true : d[p]) ? t : null == d ? true : d.default, m = i.useMemo(() => (n - a) / (c - a) * 100, [n, a, c]), g = 24 + m / 100 * 30, E = (g - 10) / 2, b = n === a;
  return (0, r.jsx)("div", {
    className: o()(l.progressContainer, l[u]),
    style: {
      background: _ ? null == h ? true : h.background : true
    },
    children: (0, r.jsxs)("div", {
      className: o()(l.progress, {
        [l.empty]: b
      }),
      style: {
        width: "".concat(m, "%")
      },
      role: "meter",
      "aria-valuenow": n,
      "aria-valuemin": a,
      "aria-valuemax": c,
      "aria-labelledby": f,
      children: [(0, r.jsxs)("svg", {
        width: "100%",
        height: g,
        style: {
          transform: "translate(0, -".concat(E, "px)")
        },
        className: o()(l.glow, {
          [l.empty]: b
        }),
        viewBox: "0 0 220 24",
        preserveAspectRatio: "none",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("g", {
          filter: "url(#filter0_f_650_66545)",
          children: (0, r.jsx)("path", {
            className: o()(l.fill, l[u]),
            d: "M220 6.70215L220 16.7021L115.211 12.3494L6.70215 11.7022L115.211 11.0549L220 6.70215Z",
            fill: _ ? null == h ? true : h.gradientEnd : true
          })
        }), (0, r.jsx)("defs", {
          children: (0, r.jsxs)("filter", {
            id: "filter0_f_650_66545",
            x: "-10",
            y: "-15",
            width: "240",
            height: "54",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [(0, r.jsx)("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }), (0, r.jsx)("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }), (0, r.jsx)("feGaussianBlur", {
              stdDeviation: "3.35106",
              result: "effect1_foregroundBlur_650_66545"
            })]
          })
        })]
      }), (0, r.jsx)("div", {
        className: o()(l.bar, l[u], {
          [l.empty]: b
        }),
        style: {
          background: _ ? b ? null == h ? true : h.gradientEnd : "linear-gradient(90deg, ".concat(null == h ? true : h.gradientStart, " 0%, ").concat(null == h ? true : h.gradientEnd, " 100%)") : true
        }
      })]
    })
  })
}