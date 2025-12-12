/** Chunk was on 1272 **/
/** chunk id: 579022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk41440 = require("./41440.js");
let s = Math.ceil(2 * Math.PI * 20),
  o = e => {
    let {
      total: t,
      used: n
    } = e, o = Math.max(0, Math.min(1, n / t)), c = "".concat(Math.floor(100 * o), "%");
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
            }(o),
            strokeDasharray: function(e) {
              let t = Math.floor(s * e);
              return "".concat(t, ", ").concat(s)
            }(o)
          })]
        }), (0, r.jsx)("aside", {
          className: a.usageInfo,
          "aria-hidden": true,
          children: c
        })]
      })
    })
  }