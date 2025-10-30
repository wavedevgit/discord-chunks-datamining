/** Chunk was on web.js **/
/** chunk id: 916001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk207516 = require("./207516.js");

function l(e) {
  let {
    locked: t,
    role: n,
    textVariant: l = "text-xs/medium"
  } = e, c = (0, a.dQu)(a.TVs.colors.INTERACTIVE_NORMAL).hex();
  return (0, r.jsx)("div", {
    className: s.roleTagContainer,
    children: (0, r.jsxs)("div", {
      className: s.roleTag,
      children: [(0, r.jsx)("div", {
        className: s.roleColor,
        style: {
          backgroundColor: (0, i.Rf)(n.color)
        }
      }), (0, r.jsx)(a.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsxs)(a.Text, {
        variant: l,
        color: "text-default",
        children: [(0, r.jsx)(a.nn4, {
          children: o.intl.string(o.t.RnyseL)
        }), n.name]
      }), true === t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.LZC, {
          size: 8,
          horizontal: true
        }), (0, r.jsx)(a.mBM, {
          size: "md",
          color: c
        })]
      })]
    })
  })
}