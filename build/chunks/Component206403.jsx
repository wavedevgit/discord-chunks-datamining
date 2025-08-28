/** Chunk was on 47129 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk845442 = require("./845442.js");

function u(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: r,
    title: u,
    secondaryTitle: c,
    description: d,
    compact: _ = false,
    onClick: E
  } = e;
  return (0, i.jsxs)(a.P3F, {
    className: l()(s.baseControlItem, {
      [s.compact]: _
    }),
    onClick: E,
    children: [null != t && (0, i.jsx)("div", {
      className: s.baseControlItemLeadingElement,
      children: t
    }), (0, i.jsxs)("div", {
      className: s.baseControlItemContent,
      children: [(0, i.jsxs)("div", {
        className: s.baseControlItemTitle,
        children: [(0, i.jsx)(o.X6, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: u
        }), null != c && (0, i.jsx)(o.X6, {
          variant: "heading-md/semibold",
          color: "text-secondary",
          className: s.secondaryTitle,
          children: c
        })]
      }), null != d && (0, i.jsx)(o.xv, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: d
      })]
    }), (null != n || null != r) && (0, i.jsxs)("div", {
      className: s.baseControlItemTrailingElements,
      children: [n, r]
    })]
  })
}