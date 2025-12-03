/** Chunk was on 384 **/
/** chunk id: 791382, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => g,
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk264451 = require("./264451.js"),
  Chunk75775 = require("./75775.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk8275 = require("./8275.js");
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
      className: d.trendContainer,
      children: [(0, r.jsx)(c.Z, {
        className: l()(d.chartLineIcon, {
          [d.chartLineIconNegative]: !a
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: d.trendDescription,
        children: u.intl.format(u.t.OTHOvZ, {
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
      className: d.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: d.labelContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            className: d.label,
            children: t
          }), null != o && (0, r.jsx)(a.u, {
            text: o,
            children: (0, r.jsx)(s.d3s, {
              size: "xs",
              color: "currentColor",
              className: d.labelTooltipIcon
            })
          }), null != n ? (0, r.jsx)(s.Text, {
            variant: "text-xs/normal",
            className: d.sublabel,
            children: n
          }) : null]
        }), (0, r.jsx)(s.Text, {
          className: d.value,
          variant: "text-sm/normal",
          children: i
        })]
      }), l]
    })
  }