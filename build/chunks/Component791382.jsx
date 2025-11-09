/** Chunk was on 29679 **/
/** chunk id: 791382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => g,
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk264451 = require("./264451.js"),
  Chunk75775 = require("./75775.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk985043 = require("./985043.js");
let g = e => {
    let {
      value: t,
      isPercent: n
    } = e;
    if (null == t) return null;
    let {
      formattedValue: i,
      isPositive: a
    } = (0, o.m5)(t, n);
    return (0, r.jsxs)("div", {
      className: u.trendContainer,
      children: [(0, r.jsx)(c.Z, {
        className: l()(u.chartLineIcon, {
          [u.chartLineIconNegative]: !a
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: u.trendDescription,
        children: d.intl.format(d.t.OTHOvZ, {
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
      tooltip: o
    } = e;
    return (0, r.jsxs)("div", {
      className: u.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: u.labelContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            className: u.label,
            children: t
          }), null != o && (0, r.jsx)(a.u, {
            text: o,
            children: (0, r.jsx)(s.d3s, {
              size: "xs",
              color: "currentColor",
              className: u.labelTooltipIcon
            })
          }), null != n ? (0, r.jsx)(s.Text, {
            variant: "text-xs/normal",
            className: u.sublabel,
            children: n
          }) : null]
        }), (0, r.jsx)(s.Text, {
          className: u.value,
          variant: "text-sm/normal",
          children: i
        })]
      }), l]
    })
  }