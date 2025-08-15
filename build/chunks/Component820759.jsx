/** Chunk was on 30202 **/
/** chunk id: 820759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => d,
  BZ: () => u,
  E_: () => c,
  pg: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk959591 = require("./959591.js");
let o = () => (0, Chunk255367.jsx)("hr", {
    className: Chunk959591.sectionDivider
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: r = "horizontal",
      className: c
    } = e;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o, {}), (0, i.jsx)(a.Text, {
        variant: "text-md/semibold",
        className: l.labelSpacing,
        children: t
      }), (0, i.jsx)("div", {
        className: s()(l.container, c, {
          [l.verticalContainer]: "vertical" === r
        }),
        children: n
      })]
    })
  },
  d = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)("div", {
      className: l.section,
      children: t
    })
  },
  u = e => (0, i.jsx)("div", {
    className: l.inputGroup,
    children: e.children
  }),
  m = e => (0, i.jsx)("fieldset", {
    className: l.fieldset,
    children: e.children
  })