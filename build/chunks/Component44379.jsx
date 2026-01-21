/** Chunk was on web.js **/
/** chunk id: 44379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk576929 = require("./576929.jsx"),
  Chunk224319 = require("./224319.js");

function d(e) {
  let {
    label: t,
    totalLineItemLabel: n,
    lineItems: a,
    intervalType: d,
    intervalCount: f,
    currency: p,
    defaultExpanded: _ = false
  } = e, [h, m] = i.useState(_), g = i.useMemo(() => a.reduce((e, t) => e + t.amount, 0), [a]), E = (0, l.T4)(g, p), b = (0, l.og)(E, d, f), y = (0, r.jsxs)(c.O, {
    label: t,
    defaultExpanded: _,
    isDisabled: a.length <= 0,
    onExpandedChange: m,
    collapsedContent: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: b
    }),
    children: [a.map(e => {
      let {
        id: t,
        label: n,
        amount: i,
        icon: a,
        tooltip: o
      } = e, s = (0, l.T4)(i, p), u = (0, l.og)(s, d, f);
      return (0, r.jsx)(c.r, {
        label: n,
        value: u,
        icon: a,
        tooltip: o
      }, t)
    }), (0, r.jsx)("div", {
      className: u.separator
    }), (0, r.jsx)(c.r, {
      label: null != n ? n : t,
      value: b,
      color: "text-strong"
    })]
  });
  return (0, r.jsx)("div", {
    className: o()({
      [u.container]: h
    }),
    children: y
  })
}