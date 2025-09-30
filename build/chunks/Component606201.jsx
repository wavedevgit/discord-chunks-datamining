/** Chunk was on 52461 **/
/** chunk id: 606201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => d,
  BZ: () => u,
  E_: () => c,
  pg: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk295136 = require("./295136.js");
let o = () => (0, Chunk951288.jsx)("hr", {
    className: Chunk295136.sectionDivider
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: r = "horizontal",
      className: c
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o, {}), (0, a.jsx)(l.Text, {
        variant: "text-md/semibold",
        className: s.labelSpacing,
        children: t
      }), (0, a.jsx)("div", {
        className: i()(s.container, c, {
          [s.verticalContainer]: "vertical" === r
        }),
        children: n
      })]
    })
  },
  d = e => {
    let {
      children: t
    } = e;
    return (0, a.jsx)("div", {
      className: s.section,
      children: t
    })
  },
  u = e => (0, a.jsx)("div", {
    className: s.inputGroup,
    children: e.children
  }),
  m = e => (0, a.jsx)("fieldset", {
    className: s.fieldset,
    children: e.children
  })