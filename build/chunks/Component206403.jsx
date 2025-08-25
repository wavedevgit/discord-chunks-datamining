/** Chunk was on 76210 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => a
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk845442 = require("./845442.js");

function a(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: i,
    title: a,
    secondaryTitle: c,
    description: d,
    compact: f = false,
    onClick: g
  } = e;
  return (0, l.jsxs)(u.P3F, {
    className: r()(o.baseControlItem, {
      [o.compact]: f
    }),
    onClick: g,
    children: [null != t && (0, l.jsx)("div", {
      className: o.baseControlItemLeadingElement,
      children: t
    }), (0, l.jsxs)("div", {
      className: o.baseControlItemContent,
      children: [(0, l.jsxs)("div", {
        className: o.baseControlItemTitle,
        children: [(0, l.jsx)(s.X6, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: a
        }), null != c && (0, l.jsx)(s.X6, {
          variant: "heading-md/semibold",
          color: "text-secondary",
          className: o.secondaryTitle,
          children: c
        })]
      }), null != d && (0, l.jsx)(s.xv, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: d
      })]
    }), (null != n || null != i) && (0, l.jsxs)("div", {
      className: o.baseControlItemTrailingElements,
      children: [n, i]
    })]
  })
}