/** Chunk was on 86915 **/
/** chunk id: 415236, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk488127 = require("./488127.js");

function o(e) {
  let {
    description: t,
    icon: n,
    id: o,
    label: c,
    onChange: d,
    value: u
  } = e;
  return (0, i.jsxs)("div", {
    className: a.cardContent,
    children: [(0, i.jsxs)(s.Z, {
      justify: s.Z.Justify.BETWEEN,
      align: s.Z.Align.CENTER,
      children: [n, (0, i.jsx)(s.Z.Child, {
        grow: 1,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/semibold",
          children: c
        })
      }), null != d && null != u && (0, i.jsx)(l.T2, {
        id: o,
        checked: u,
        onChange: d
      })]
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      className: a.cardDescription,
      children: t
    })]
  })
}