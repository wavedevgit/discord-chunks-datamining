/** Chunk was on 21738 **/
/** chunk id: 212408, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk359774 = require("./359774.js");
let s = Math.ceil(2 * Math.PI * 20),
  o = e => {
    let t, n, o, c, {
        total: u,
        used: d
      } = e,
      p = Math.max(0, Math.min(1, d / u)),
      h = "".concat(Math.floor(100 * p), "%");
    return (0, r.jsx)(i.m, {
      text: l.intl.formatToPlainString(l.t["2eoRMh"], {
        used: h
      }),
      children: (0, r.jsxs)("div", {
        className: a.iE,
        role: "progressbar",
        "aria-label": l.intl.formatToPlainString(l.t["2eoRMh"], {
          used: h
        }),
        children: [(0, r.jsxs)("svg", {
          viewBox: "25 25 50 50",
          className: a.JW,
          "aria-hidden": true,
          children: [(0, r.jsx)("circle", {
            className: a.Tp,
            cx: "50",
            cy: "50",
            r: 20
          }), (0, r.jsx)("circle", {
            className: a.CU,
            cx: "50",
            cy: "50",
            r: 20,
            stroke: (t = Math.round(false * p + 199), n = Math.round(false * p + 208), o = Math.round(false * p + 240), "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")")),
            strokeDasharray: (c = Math.floor(s * p), "".concat(c, ", ").concat(s))
          })]
        }), (0, r.jsx)("aside", {
          className: a.Y3,
          "aria-hidden": true,
          children: h
        })]
      })
    })
  }