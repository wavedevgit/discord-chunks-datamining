/** Chunk was on web.js **/
/** chunk id: 381247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => c,
  i: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk297689 = require("./297689.jsx"),
  Chunk861175 = require("./861175.js");

function c(e) {
  let {
    label: t,
    defaultExpanded: n = false,
    onExpandedChange: a,
    isDisabled: s = false,
    collapsedContent: c,
    children: u
  } = e, [d, f] = i.useState(n), p = i.useCallback(e => {
    f(e), null != a && a(e)
  }, [a]);
  return (0, r.jsxs)(o.nD, {
    defaultExpanded: n,
    isDisabled: s,
    onExpandedChange: p,
    children: [(0, r.jsxs)("div", {
      className: l.wx,
      children: [(0, r.jsx)(o.$m, {
        variant: "text-md/medium",
        color: d ? "text-strong" : "text-muted",
        children: t
      }), (!d || s) && c]
    }), (0, r.jsx)(o.vr, {
      children: (0, r.jsx)("div", {
        className: l.CS,
        children: u
      })
    })]
  })
}

function u(e) {
  let {
    label: t,
    value: n,
    color: i = "text-muted",
    valueColor: o = "text-muted",
    icon: c,
    tooltip: u
  } = e;
  return (0, r.jsxs)("div", {
    className: l.Yn,
    children: [(0, r.jsxs)(s.Text, {
      variant: "text-md/normal",
      color: i,
      className: l.yB,
      children: [c, t, null != u && (0, r.jsx)(a.m_, {
        text: u,
        children: (0, r.jsx)(s.cBN, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: o,
      children: n
    })]
  })
}