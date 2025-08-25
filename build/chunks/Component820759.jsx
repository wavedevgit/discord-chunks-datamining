/** Chunk was on web.js **/
/** chunk id: 820759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => u,
  BZ: () => d,
  E_: () => c,
  pg: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk959591 = require("./959591.js");
let l = () => (0, Chunk951288.jsx)("hr", {
    className: Chunk959591.sectionDivider
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: i = "horizontal",
      className: c
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l, {}), (0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        className: s.labelSpacing,
        children: t
      }), (0, r.jsx)("div", {
        className: o()(s.container, c, {
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