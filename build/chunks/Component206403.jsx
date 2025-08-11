/** Chunk was on 36878 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk788551 = require("./788551.js");

function c(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: o,
    title: c,
    secondaryTitle: u,
    description: d,
    compact: f = false,
    onClick: m
  } = e;
  return (0, i.jsxs)(a.P3F, {
    className: l()(s.baseControlItem, {
      [s.compact]: f
    }),
    onClick: m,
    children: [null != t && (0, i.jsx)("div", {
      className: s.baseControlItemLeadingElement,
      children: t
    }), (0, i.jsxs)("div", {
      className: s.baseControlItemContent,
      children: [(0, i.jsxs)("div", {
        className: s.baseControlItemTitle,
        children: [(0, i.jsx)(r.X6, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: c
        }), null != u && (0, i.jsx)(r.X6, {
          variant: "heading-md/semibold",
          color: "text-secondary",
          className: s.secondaryTitle,
          children: u
        })]
      }), null != d && (0, i.jsx)(r.xv, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: d
      })]
    }), (null != n || null != o) && (0, i.jsxs)("div", {
      className: s.baseControlItemTrailingElements,
      children: [n, o]
    })]
  })
}