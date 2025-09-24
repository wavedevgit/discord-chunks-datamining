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
    secondaryTrailingElement: i,
    title: u,
    secondaryTitle: c,
    description: d,
    compact: g = false,
    onClick: f
  } = e;
  return (0, r.jsxs)(s.P3F, {
    className: l()(a.baseControlItem, {
      [a.compact]: g
    }),
    onClick: f,
    children: [null != t && (0, r.jsx)("div", {
      className: a.baseControlItemLeadingElement,
      children: t
    }), (0, r.jsxs)("div", {
      className: a.baseControlItemContent,
      children: [(0, r.jsxs)("div", {
        className: a.baseControlItemTitle,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: u
        }), null != c && (0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "text-secondary",
          className: a.secondaryTitle,
          children: c
        })]
      }), null != d && (0, r.jsx)(o.xvT, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: d
      })]
    }), (null != n || null != i) && (0, r.jsxs)("div", {
      className: a.baseControlItemTrailingElements,
      children: [n, i]
    })]
  })
}