/** Chunk was on web.js **/
/** chunk id: 669510, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk381247 = require("./381247.jsx"),
  Chunk361728 = require("./361728.js");

function d(e) {
  let {
    label: t,
    totalLineItemLabel: n,
    lineItems: a,
    intervalType: d,
    intervalCount: f,
    currency: p,
    defaultExpanded: _ = false
  } = e, [h, m] = i.useState(_), g = i.useMemo(() => a.reduce((e, t) => e + t.amount, 0), [a]), E = (0, l.$g)(g, p), y = (0, l.CE)(E, d, f), b = (0, r.jsxs)(c.h, {
    label: t,
    defaultExpanded: _,
    isDisabled: a.length <= 0,
    onExpandedChange: m,
    collapsedContent: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: y
    }),
    children: [a.map(e => {
      let {
        id: t,
        label: n,
        amount: i,
        icon: a,
        tooltip: o
      } = e, s = (0, l.$g)(i, p), u = (0, l.CE)(s, d, f);
      return (0, r.jsx)(c.i, {
        label: n,
        value: u,
        icon: a,
        tooltip: o
      }, t)
    }), (0, r.jsx)("div", {
      className: u.m
    }), (0, r.jsx)(c.i, {
      label: null != n ? n : t,
      value: y,
      color: "text-strong"
    })]
  });
  return (0, r.jsx)("div", {
    className: o()({
      [u.k]: h
    }),
    children: b
  })
}