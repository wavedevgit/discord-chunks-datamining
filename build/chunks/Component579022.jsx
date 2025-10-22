/** Chunk was on 1272 **/
/** chunk id: 579022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk41440 = require("./41440.js");
let o = Math.ceil(2 * Math.PI * 20),
  s = e => {
    let {
      total: t,
      used: n
    } = e, s = Math.max(0, Math.min(1, n / t)), c = "".concat(Math.floor(100 * s), "%");
    return (0, r.jsx)(i.u, {
      text: l.intl.formatToPlainString(l.t["2eoRMh"], {
        used: c
      }),
      children: (0, r.jsxs)("div", {
        className: a.wrapper,
        role: "progressbar",
        "aria-label": l.intl.formatToPlainString(l.t["2eoRMh"], {
          used: c
        }),
        children: [(0, r.jsxs)("svg", {
          viewBox: "25 25 50 50",
          className: a.svg,
          "aria-hidden": true,
          children: [(0, r.jsx)("circle", {
            className: a.background,
            cx: "50",
            cy: "50",
            r: 20
          }), (0, r.jsx)("circle", {
            className: a.foreground,
            cx: "50",
            cy: "50",
            r: 20,
            stroke: function(e) {
              let t = Math.round(false * e + 199),
                n = Math.round(false * e + 208),
                r = Math.round(false * e + 240);
              return "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")")
            }(s),
            strokeDasharray: function(e) {
              let t = Math.floor(o * e);
              return "".concat(t, ", ").concat(o)
            }(s)
          })]
        }), (0, r.jsx)("aside", {
          className: a.usageInfo,
          "aria-hidden": true,
          children: c
        })]
      })
    })
  }