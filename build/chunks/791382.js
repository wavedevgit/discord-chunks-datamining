/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  H: () => d,
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(264451),
  o = n(75775),
  A = n(388032),
  c = n(971966);
let d = e => {
    let {
      value: t,
      isPercent: n
    } = e;
    if (null == t) return null;
    let {
      formattedValue: i,
      isPositive: d
    } = (0, l.m5)(t, n);
    return (0, r.jsxs)("div", {
      className: c.trendContainer,
      children: [(0, r.jsx)(o.Z, {
        className: s()(c.chartLineIcon, {
          [c.chartLineIconNegative]: !d
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: c.trendDescription,
        children: A.NW.format(A.t.OTHOvb, {
          value: i
        })
      })]
    })
  },
  u = e => {
    let {
      label: t,
      sublabel: n,
      value: i,
      additionalContent: s,
      tooltip: l
    } = e;
    return (0, r.jsxs)("div", {
      className: c.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: c.labelContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            className: c.label,
            children: t
          }), null != l && (0, r.jsx)(a.ua7, {
            text: l,
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
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : e[t] = r
                })
              }
              return e
            }({
              size: "xs",
              color: "currentColor",
              className: c.labelTooltipIcon
            }, e))
          }), null != n ? (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: c.sublabel,
            children: n
          }) : null]
        }), (0, r.jsx)(a.Text, {
          className: c.value,
          variant: "text-sm/normal",
          children: i
        })]
      }), s]
    })
  }