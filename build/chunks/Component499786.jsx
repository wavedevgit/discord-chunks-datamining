/** Chunk was on web.js **/
/** chunk id: 499786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => u,
  BZ: () => d,
  E_: () => c,
  dv: () => l,
  pg: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk534924 = require("./534924.js");
let l = () => (0, Chunk54381.jsx)("hr", {
    className: Chunk534924.sectionDivider
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: i = "horizontal",
      className: c
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l, {}), (0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        className: s.labelSpacing,
        children: t
      }), (0, r.jsx)("div", {
        className: a()(s.container, c, {
          [s.verticalContainer]: "vertical" === i
        }),
        children: n
      })]
    })
  },
  u = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: s.section,
      children: t
    })
  },
  d = e => (0, r.jsx)("div", {
    className: s.inputGroup,
    children: e.children
  }),
  f = e => (0, r.jsx)("fieldset", {
    className: s.fieldset,
    children: e.children
  })