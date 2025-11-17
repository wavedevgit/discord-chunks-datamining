/** Chunk was on web.js **/
/** chunk id: 527685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c,
  y: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356);
require("./512722.js");
var Chunk49552 = require("./49552.js"),
  l = function(e) {
    return e.UNSET = "unset", e.BLUE = "blue", e.ORANGE = "orange", e
  }({});
let c = e => {
  let {
    progress: t,
    minimum: n = 0,
    maximum: a = 100,
    variant: l,
    override: c,
    labelledBy: u
  } = e, d = null != c && "unset" === l, f = i.useMemo(() => (t - n) / (a - n) * 100, [t, n, a]), _ = 24 + f / 100 * 30, p = (_ - 10) / 2, h = t === n;
  return (0, r.jsx)("div", {
    className: o()(s.progressContainer, s[l]),
    style: {
      background: d ? null == c ? true : c.background : true
    },
    children: (0, r.jsxs)("div", {
      className: o()(s.progress, {
        [s.empty]: h
      }),
      style: {
        width: "".concat(f, "%")
      },
      role: "meter",
      "aria-valuenow": t,
      "aria-valuemin": n,
      "aria-valuemax": a,
      "aria-labelledby": u,
      children: [(0, r.jsxs)("svg", {
        width: "100%",
        height: _,
        style: {
          transform: "translate(0, -".concat(p, "px)")
        },
        className: o()(s.glow, {
          [s.empty]: h
        }),
        viewBox: "0 0 220 24",
        preserveAspectRatio: "none",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("g", {
          filter: "url(#filter0_f_650_66545)",
          children: (0, r.jsx)("path", {
            className: o()(s.fill, s[l]),
            d: "M220 6.70215L220 16.7021L115.211 12.3494L6.70215 11.7022L115.211 11.0549L220 6.70215Z",
            fill: d ? null == c ? true : c.gradientEnd : true
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
        className: o()(s.bar, s[l], {
          [s.empty]: h
        }),
        style: {
          background: d ? h ? null == c ? true : c.gradientEnd : "linear-gradient(90deg, ".concat(null == c ? true : c.gradientStart, " 0%, ").concat(null == c ? true : c.gradientEnd, " 100%)") : true
        }
      })]
    })
  })
}