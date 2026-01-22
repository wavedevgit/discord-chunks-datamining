/** Chunk was on web.js **/
/** chunk id: 411342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk364271 = require("./364271.js");

function l(e) {
  let {
    locked: t,
    role: n,
    textVariant: l = "text-xs/medium"
  } = e, c = (0, a.rdh)(a.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
  return (0, r.jsx)("div", {
    className: o.ex,
    children: (0, r.jsxs)("div", {
      className: o.b6,
      children: [(0, r.jsx)("div", {
        className: o.yY,
        style: {
          backgroundColor: (0, i.Hl)(n.color)
        }
      }), (0, r.jsx)(a.hKd, {
        size: 8,
        horizontal: true
      }), (0, r.jsxs)(a.Text, {
        variant: l,
        color: "text-default",
        children: [(0, r.jsx)(a.AC4, {
          children: s.intl.string(s.t.RnyseL)
        }), n.name]
      }), true === t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.hKd, {
          size: 8,
          horizontal: true
        }), (0, r.jsx)(a.XAi, {
          size: "md",
          color: c
        })]
      })]
    })
  })
}