/** Chunk was on 1272 **/
/** chunk id: 579022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk790773 = require("./790773.js");
let o = Math.ceil(2 * Math.PI * 20),
  s = e => {
    let {
      total: t,
      used: n
    } = e, s = Math.max(0, Math.min(1, n / t)), c = "".concat(Math.floor(100 * s), "%");
    return <i.ua7 text={l.intl.formatToPlainString(l.t["2eoRMj"], {
        used: c
      })}>{e => {
        var t, n;
        return (0, r.jsxs)("div", (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          className: a.wrapper,
          role: "progressbar",
          "aria-label": l.intl.formatToPlainString(l.t["2eoRMj"], {
            used: c
          })
        }, e), n = n = {
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
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }}</i.ua7>
  }