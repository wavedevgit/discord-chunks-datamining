/** Chunk was on 36878 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk450515 = require("./450515.js");

function u(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: l,
    title: u,
    secondaryTitle: c,
    description: d,
    compact: f = false,
    onClick: g
  } = e;
  return (0, i.jsxs)(a.P3F, {
    className: s()(r.baseControlItem, {
      [r.compact]: f
    }),
    onClick: g,
    children: [null != t && (0, i.jsx)("div", {
      className: r.baseControlItemLeadingElement,
      children: t
    }), (0, i.jsxs)("div", {
      className: r.baseControlItemContent,
      children: [(0, i.jsxs)("div", {
        className: r.baseControlItemTitle,
        children: [(0, i.jsx)(o.X6, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: u
        }), null != c && (0, i.jsx)(o.X6, {
          variant: "heading-md/semibold",
          color: "text-secondary",
          className: r.secondaryTitle,
          children: c
        })]
      }), null != d && (0, i.jsx)(o.xv, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: d
      })]
    }), (null != n || null != l) && (0, i.jsxs)("div", {
      className: r.baseControlItemTrailingElements,
      children: [n, l]
    })]
  })
}