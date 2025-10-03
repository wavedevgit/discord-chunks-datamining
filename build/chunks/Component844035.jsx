/** Chunk was on 45620 **/
/** chunk id: 844035, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk297651 = require("./297651.js"),
  Chunk993222 = require("./993222.jsx"),
  Chunk932083 = require("./932083.jsx"),
  Chunk719075 = require("./719075.jsx"),
  Chunk558261 = require("./558261.jsx"),
  Chunk819882 = require("./819882.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk29121 = require("./29121.js"),
  Chunk215023 = require("./215023.js"),
  Chunk217726 = require("./217726.js");
let S = e => {
  let {
    product: t,
    variantSwitcher: n,
    selectedVariantIndex: a
  } = e, S = (0, u.Nd)(), v = null == S ? true : S.tab, x = (0, m.zQ)(t), O = l.useRef(null), {
    handleCardVisibilityChange: T
  } = (0, d.E)(t.skuId, v === b.AW.CATALOG ? "full" : v), y = (0, h.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD);
  return (0, r.jsx)(i.$, {
    innerRef: O,
    onChange: T,
    threshold: 0,
    children: (0, r.jsx)("div", {
      className: E.baseProductCardHoverContainer,
      children: (0, r.jsx)(o.kL8, {
        ref: O,
        onClick: y,
        "aria-label": x,
        className: E.baseProductCardContainer,
        children: (0, r.jsxs)("div", {
          className: E.baseProductCardContentContainer,
          children: [(0, r.jsx)(g.Z, {
            product: t
          }), (0, r.jsxs)("div", {
            className: E.innerContainer,
            children: [(0, r.jsxs)("div", {
              className: s()(E.baseProductCardDetailsContainer, {
                [E.hasVariantSwitcher]: null != n
              }),
              children: [(0, r.jsx)(p.Z, {
                product: t
              }), null != n && (0, r.jsx)("div", {
                className: E.hoveredVariantSwitcher,
                children: n
              })]
            }), (0, r.jsxs)("div", {
              className: E.baseProductCardFooter,
              children: [(0, r.jsx)(f.Z, {
                product: t
              }), n]
            })]
          }), (0, r.jsx)("div", {
            className: E.innerHover,
            children: (0, r.jsxs)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(C.Z, {
                product: t,
                cardRef: O,
                selectedVariantIndex: a
              }), (0, r.jsx)(_.Z, {
                product: t,
                cardRef: O,
                selectedVariantIndex: a
              })]
            })
          })]
        })
      })
    })
  })
}