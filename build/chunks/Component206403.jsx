/** Chunk was on 46984 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk845442 = require("./845442.js");

function c(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: l,
    title: c,
    description: u,
    onClick: d,
    ref: f,
    style: b
  } = e;
  return (0, r.jsxs)(a.P3F, {
    className: i()(s.baseControlItem, {
      [s.clickable]: null != d
    }),
    onClick: d,
    innerRef: f,
    style: b,
    children: [null != t && (0, r.jsx)("div", {
      className: s.baseControlItemLeadingElement,
      children: t
    }), (0, r.jsxs)("div", {
      className: s.baseControlItemContent,
      children: [(0, r.jsx)("div", {
        className: s.baseControlItemTitle,
        children: (0, r.jsx)(o.X6q, {
          variant: "heading-md/medium",
          color: "text-primary",
          children: c
        })
      }), null != u && (0, r.jsx)(o.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        className: s.baseControlItemDescription,
        children: u
      })]
    }), (null != n || null != l) && (0, r.jsxs)("div", {
      className: s.baseControlItemTrailingElements,
      children: [n, l]
    })]
  })
}