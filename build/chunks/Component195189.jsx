/** Chunk was on 64523 **/
/** chunk id: 195189, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk449226 = require("./449226.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

function c(e) {
  let {
    title: t,
    details: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: o.itemContent,
      children: [(0, r.jsx)(i.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), "string" == typeof n ? (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: n
      }) : n]
    }), (0, r.jsx)(i.ua7, {
      tooltipContentClassName: o.tooltip,
      text: a.intl.string(a.t.NQ4nCg),
      children: e => (0, r.jsx)(l.Z, {
        checked: true,
        disabled: true,
        onChange: s.dG,
        className: o.bringToFront,
        tooltipProps: e
      })
    })]
  })
}