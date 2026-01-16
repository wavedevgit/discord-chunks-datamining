/** Chunk was on web.js **/
/** chunk id: 44379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk576929 = require("./576929.jsx"),
  Chunk224319 = require("./224319.js");

function c(e) {
  let {
    label: t,
    lineItems: n,
    intervalType: c,
    intervalCount: u,
    currency: d,
    defaultExpanded: f = false
  } = e, p = i.useMemo(() => n.reduce((e, t) => e + t.amount, 0), [n]), _ = (0, o.T4)(p, d), h = (0, o.og)(_, c, u);
  return (0, r.jsxs)(s.O, {
    label: t,
    defaultExpanded: f,
    isDisabled: n.length <= 1,
    collapsedContent: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: h
    }),
    children: [n.map(e => {
      let {
        id: t,
        label: n,
        amount: i,
        icon: a,
        tooltip: l
      } = e, f = (0, o.T4)(i, d), p = (0, o.og)(f, c, u);
      return (0, r.jsx)(s.r, {
        label: n,
        value: p,
        icon: a,
        tooltip: l
      }, t)
    }), (0, r.jsx)("div", {
      className: l.separator
    }), (0, r.jsx)(s.r, {
      label: t,
      value: h,
      color: "text-strong"
    })]
  })
}