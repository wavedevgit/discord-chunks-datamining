/** Chunk was on 78888 **/
/** chunk id: 80686, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk461132 = require("./461132.js");

function a(e) {
  let {
    description: t,
    icon: n,
    id: a,
    label: o,
    onChange: c,
    value: u
  } = e;
  return (0, l.jsxs)("div", {
    className: s.U,
    children: [(0, l.jsxs)(r.A, {
      justify: r.A.Justify.BETWEEN,
      align: r.A.Align.CENTER,
      children: [n, (0, l.jsx)(r.A.Child, {
        grow: 1,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: o
        })
      }), null != c && null != u && (0, l.jsx)(i.dOG, {
        id: a,
        checked: u,
        onChange: c
      })]
    }), (0, l.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: s.L,
      children: t
    })]
  })
}