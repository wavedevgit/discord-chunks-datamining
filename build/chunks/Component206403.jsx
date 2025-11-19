/** Chunk was on 16985 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => s
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk845442 = require("./845442.js");

function s(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: l,
    title: s,
    secondaryTitle: u,
    description: d,
    compact: f = false,
    onClick: b
  } = e;
  return (0, r.jsxs)(a.P3F, {
    className: i()(c.baseControlItem, {
      [c.compact]: f,
      [c.clickable]: null != b
    }),
    onClick: b,
    children: [null != t && (0, r.jsx)("div", {
      className: c.baseControlItemLeadingElement,
      children: t
    }), (0, r.jsxs)("div", {
      className: c.baseControlItemContent,
      children: [(0, r.jsxs)("div", {
        className: c.baseControlItemTitle,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/medium",
          color: "text-primary",
          children: s
        }), null != u && (0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "text-secondary",
          className: c.secondaryTitle,
          children: u
        })]
      }), null != d && (0, r.jsx)(o.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        className: c.baseControlItemDescription,
        children: d
      })]
    }), (null != n || null != l) && (0, r.jsxs)("div", {
      className: c.baseControlItemTrailingElements,
      children: [n, l]
    })]
  })
}