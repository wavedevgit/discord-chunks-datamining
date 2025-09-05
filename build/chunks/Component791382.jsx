/** Chunk was on 54052 **/
/** chunk id: 791382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => u,
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk264451 = require("./264451.js"),
  Chunk75775 = require("./75775.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk985043 = require("./985043.js");
let u = e => {
    let {
      value: t,
      isPercent: n
    } = e;
    if (null == t) return null;
    let {
      formattedValue: i,
      isPositive: u
    } = (0, s.m5)(t, n);
    return (0, r.jsxs)("div", {
      className: d.trendContainer,
      children: [(0, r.jsx)(o.Z, {
        className: l()(d.chartLineIcon, {
          [d.chartLineIconNegative]: !u
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: d.trendDescription,
        children: c.intl.format(c.t.OTHOvb, {
          value: i
        })
      })]
    })
  },
  m = e => {
    let {
      label: t,
      sublabel: n,
      value: i,
      additionalContent: l,
      tooltip: s
    } = e;
    return (0, r.jsxs)("div", {
      className: d.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: d.labelContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            className: d.label,
            children: t
          }), null != s && (0, r.jsx)(a.ua7, {
            text: s,
            children: e => (0, r.jsx)(a.d3s, function(e) {
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
              size: "xs",
              color: "currentColor",
              className: d.labelTooltipIcon
            }, e))
          }), null != n ? (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: d.sublabel,
            children: n
          }) : null]
        }), (0, r.jsx)(a.Text, {
          className: d.value,
          variant: "text-sm/normal",
          children: i
        })]
      }), l]
    })
  }