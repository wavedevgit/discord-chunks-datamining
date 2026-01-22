/** Chunk was on 47841 **/
/** chunk id: 557420, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  d: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk40462 = require("./40462.js");

function a(e) {
  let {
    text: t,
    tooltipText: n,
    onClick: a,
    disabled: c
  } = e;
  return c ? (0, r.jsxs)("div", {
    className: s.k,
    children: [(0, r.jsx)(l.j96, {
      size: "md",
      color: "currentColor",
      className: s.K
    }), (0, r.jsx)(l.Text, {
      color: "interactive-text-active",
      variant: "text-md/semibold",
      children: t
    })]
  }) : (0, r.jsx)(i.m, {
    text: n,
    shouldShow: null != n,
    children: (0, r.jsxs)(l.DUT, {
      className: s.k,
      onClick: a,
      children: [(0, r.jsx)(l.j96, {
        size: "md",
        color: "currentColor",
        className: s.K
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-active",
        variant: "text-md/semibold",
        children: t
      })]
    })
  })
}