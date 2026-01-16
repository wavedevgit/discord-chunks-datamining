/** Chunk was on web.js **/
/** chunk id: 576929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c,
  r: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk126484 = require("./126484.jsx"),
  Chunk143867 = require("./143867.js");

function c(e) {
  let {
    label: t,
    defaultExpanded: n = false,
    isDisabled: a = false,
    collapsedContent: o,
    children: c
  } = e, [u, d] = i.useState(n);
  return (0, r.jsxs)(s.UQ, {
    defaultExpanded: n,
    isDisabled: a,
    onExpandedChange: d,
    children: [(0, r.jsxs)("div", {
      className: l.header,
      children: [(0, r.jsx)(s.o4, {
        variant: "text-md/medium",
        color: u ? "text-strong" : "text-muted",
        children: t
      }), (!u || a) && o]
    }), (0, r.jsx)(s.Hk, {
      children: (0, r.jsx)("div", {
        className: l.lineItemsContainer,
        children: c
      })
    })]
  })
}

function u(e) {
  let {
    label: t,
    value: n,
    color: i = "text-muted",
    valueColor: s = "text-muted",
    icon: c,
    tooltip: u
  } = e;
  return (0, r.jsxs)("div", {
    className: l.lineItem,
    children: [(0, r.jsxs)(o.Text, {
      variant: "text-md/normal",
      color: i,
      className: l.lineItemLabel,
      children: [c, t, null != u && (0, r.jsx)(a.u, {
        text: u,
        children: (0, r.jsx)(o.idN, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: s,
      children: n
    })]
  })
}