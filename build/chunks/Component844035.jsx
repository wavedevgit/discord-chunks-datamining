/** Chunk was on 45620 **/
/** chunk id: 844035, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk297651 = require("./297651.js"),
  Chunk993222 = require("./993222.jsx"),
  Chunk932083 = require("./932083.jsx"),
  Chunk719075 = require("./719075.jsx"),
  Chunk558261 = require("./558261.jsx"),
  Chunk311583 = require("./311583.jsx"),
  Chunk396445 = require("./396445.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk751677 = require("./751677.js");
let E = e => {
  let {
    product: t,
    variantSwitcher: n,
    selectedVariantIndex: a
  } = e, E = (0, u.Nd)(), v = null == E ? true : E.tab, S = l.useRef(null), {
    handleCardVisibilityChange: x
  } = (0, d.E)(t.skuId, v === m.AW.CATALOG ? "full" : v), O = (0, h.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD);
  return (0, r.jsx)(s.$, {
    innerRef: S,
    onChange: x,
    threshold: 0,
    children: (0, r.jsx)("div", {
      className: b.baseProductCardHoverContainer,
      children: (0, r.jsx)(o.kL8, {
        ref: S,
        onClick: O,
        "aria-label": (0, h.NT)(t),
        className: b.baseProductCardContainer,
        children: (0, r.jsxs)("div", {
          className: b.baseProductCardContentContainer,
          children: [(0, r.jsx)(g.Z, {
            product: t
          }), (0, r.jsxs)("div", {
            className: b.innerContainer,
            children: [(0, r.jsxs)("div", {
              className: i()(b.baseProductCardDetailsContainer, {
                [b.hasVariantSwitcher]: null != n
              }),
              children: [(0, r.jsx)(p.Z, {
                product: t
              }), null != n && (0, r.jsx)("div", {
                className: b.hoveredVariantSwitcher,
                children: n
              })]
            }), (0, r.jsxs)("div", {
              className: b.baseProductCardFooter,
              children: [(0, r.jsx)(f.Z, {
                product: t
              }), n]
            })]
          }), (0, r.jsx)("div", {
            className: b.innerHover,
            children: (0, r.jsxs)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(C.Z, {
                product: t,
                cardRef: S,
                selectedVariantIndex: a
              }), (0, r.jsx)(_.Z, {
                product: t,
                cardRef: S,
                selectedVariantIndex: a
              })]
            })
          })]
        })
      })
    })
  })
}