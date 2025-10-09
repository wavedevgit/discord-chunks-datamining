/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
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
  Chunk659755 = require("./659755.js"),
  Chunk29121 = require("./29121.js"),
  Chunk215023 = require("./215023.js"),
  Chunk213301 = require("./213301.js");
let v = Chunk647438.memo(function(e) {
    let {
      product: t
    } = e, n = (0, u.Nd)(), a = null == n ? true : n.tab, v = (0, b.zQ)(t), x = l.useRef(null), {
      handleCardVisibilityChange: O
    } = (0, d.E)(t.skuId, a === E.AW.CATALOG ? "full" : a), y = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD), [T, L] = (0, _.SS)(t);
    return (0, r.jsx)(i.$, {
      innerRef: x,
      onChange: O,
      threshold: 0,
      children: (0, r.jsx)("div", {
        className: S.baseProductCardHoverContainer,
        children: (0, r.jsx)(o.kL8, {
          ref: x,
          onClick: y,
          "aria-label": v,
          className: S.baseProductCardContainer,
          children: (0, r.jsxs)("div", {
            className: S.baseProductCardContentContainer,
            children: [(0, r.jsx)(g.Z, {
              skuId: t.skuId
            }), (0, r.jsxs)("div", {
              className: S.innerContainer,
              children: [(0, r.jsxs)("div", {
                className: s()(S.baseProductCardDetailsContainer, {
                  [S.hasVariantSwitcher]: null != L
                }),
                children: [(0, r.jsx)(p.Z, {
                  skuId: t.skuId
                }), null != L && (0, r.jsx)("div", {
                  className: S.hoveredVariantSwitcher,
                  children: L
                })]
              }), (0, r.jsxs)("div", {
                className: S.baseProductCardFooter,
                children: [(0, r.jsx)(f.Z, {
                  skuId: t.skuId
                }), L]
              })]
            }), (0, r.jsx)("div", {
              className: S.innerHover,
              children: (0, r.jsxs)(o.hE2, {
                wrap: false,
                fullWidth: true,
                children: [(0, r.jsx)(C.Z, {
                  skuId: t.skuId,
                  cardRef: x,
                  selectedVariantIndex: T
                }), (0, r.jsx)(h.Z, {
                  skuId: t.skuId,
                  cardRef: x,
                  selectedVariantIndex: T
                })]
              })
            }), (0, r.jsx)(m.Z, {
              skuId: t.skuId
            })]
          })
        })
      })
    })
  }),
  x = e => {
    let {
      skuId: t
    } = e, n = (0, _.LJ)(t);
    return null == n ? null : (0, r.jsx)(v, {
      product: n
    })
  }