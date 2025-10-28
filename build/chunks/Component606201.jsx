/** Chunk was on 96604 **/
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
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk295136 = require("./295136.js");
let s = () => (0, Chunk951288.jsx)("hr", {
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
      children: [(0, a.jsx)(s, {}), (0, a.jsx)(i.Text, {
        variant: "text-md/semibold",
        className: o.labelSpacing,
        children: t
      }), (0, a.jsx)("div", {
        className: l()(o.container, c, {
          [o.verticalContainer]: "vertical" === r
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
      className: o.section,
      children: t
    })
  },
  u = e => (0, a.jsx)("div", {
    className: o.inputGroup,
    children: e.children
  }),
  m = e => (0, a.jsx)("fieldset", {
    className: o.fieldset,
    children: e.children
  })