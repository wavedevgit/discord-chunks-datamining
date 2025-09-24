/** Chunk was on 45620 **/
/** chunk id: 844035, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk297651 = require("./297651.js"),
  Chunk993222 = require("./993222.jsx"),
  Chunk932083 = require("./932083.jsx"),
  Chunk719075 = require("./719075.jsx"),
  Chunk558261 = require("./558261.jsx"),
  Chunk819882 = require("./819882.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk217726 = require("./217726.js");
let b = e => {
  let {
    product: t,
    variantSwitcher: n,
    selectedVariantIndex: a,
    config: b
  } = e, E = l.useRef(null), S = l.useMemo(() => ({
    tab: b.tab,
    shopBlockType: b.shopBlockType
  }), [b.tab, b.shopBlockType]), {
    handleCardVisibilityChange: x
  } = (0, u.E)(t.skuId, S.tab === _.AW.CATALOG ? "full" : S.tab), v = (0, C.J7)(t, S, c.Z.COLLECTIBLES_SHOP_CARD);
  return (0, r.jsx)(s.$, {
    innerRef: E,
    onChange: x,
    threshold: 0,
    children: (0, r.jsx)(o.tEY, {
      children: (0, r.jsx)(o.kL8, {
        ref: E,
        onClick: v,
        "aria-label": t.name,
        children: (0, r.jsxs)("div", {
          className: m.baseProductCardContainer,
          children: [(0, r.jsx)(d.Z, {
            product: t,
            config: S
          }), (0, r.jsxs)("div", {
            className: m.innerContainer,
            children: [(0, r.jsxs)("div", {
              className: i()(m.baseProductCardDetailsContainer, {
                [m.hasVariantSwitcher]: null != n
              }),
              children: [(0, r.jsx)(g.Z, {
                product: t
              }), null != n && (0, r.jsx)("div", {
                className: m.hoveredVariantSwitcher,
                children: n
              })]
            }), (0, r.jsxs)("div", {
              className: m.baseProductCardFooter,
              children: [(0, r.jsx)(p.Z, {
                product: t,
                config: S
              }), n]
            })]
          }), (0, r.jsx)("div", {
            className: m.innerHover,
            children: (0, r.jsxs)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(f.Z, {
                product: t,
                cardRef: E,
                config: S,
                selectedVariantIndex: a
              }), (0, r.jsx)(h.Z, {
                product: t,
                cardRef: E,
                config: S,
                selectedVariantIndex: a
              })]
            })
          })]
        })
      })
    })
  })
}