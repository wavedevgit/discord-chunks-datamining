/** Chunk was on 39048 **/
/** chunk id: 18743, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk796416 = require("./796416.js");

function a(e) {
  let {
    label: t,
    sublabel: n,
    value: a,
    additionalContent: o,
    tooltip: c
  } = e;
  return (0, r.jsxs)("div", {
    className: s.l9,
    "aria-label": t,
    children: [(0, r.jsxs)("div", {
      className: s.gA,
      children: [(0, r.jsx)(l.Text, {
        className: s.HW,
        variant: "text-xs/medium",
        color: "interactive-text-default",
        "aria-hidden": true,
        children: t
      }), null != c && (0, r.jsx)(i.m, {
        text: c,
        children: (0, r.jsx)(l.mir, {
          size: "xs",
          color: "currentColor",
          className: s.__invalid_labelTooltipIcon
        })
      }), null != n ? (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: n
      }) : null]
    }), (0, r.jsx)(l.Text, {
      tag: "span",
      variant: "heading-xl/medium",
      color: "text-strong",
      children: a
    }), o]
  })
}