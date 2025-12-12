/** Chunk was on 86915 **/
/** chunk id: 415236, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk488127 = require("./488127.js");

function s(e) {
  let {
    description: t,
    icon: n,
    id: s,
    label: o,
    onChange: c,
    value: d
  } = e;
  return (0, i.jsxs)("div", {
    className: a.cardContent,
    children: [(0, i.jsxs)(r.Z, {
      justify: r.Z.Justify.BETWEEN,
      align: r.Z.Align.CENTER,
      children: [n, (0, i.jsx)(r.Z.Child, {
        grow: 1,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: o
        })
      }), null != c && null != d && (0, i.jsx)(l.rsf, {
        id: s,
        checked: d,
        onChange: c
      })]
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: a.cardDescription,
      children: t
    })]
  })
}