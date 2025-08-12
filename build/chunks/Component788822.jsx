/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk180650 = require("./180650.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk794324 = require("./794324.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk253032 = require("./253032.js");
let _ = e => {
  var t, r, a, _;
  let v, {
    category: O,
    subblock: C,
    badgeText: E,
    handleTransition: S
  } = e;
  null != C && (v = null == (t = p.Z.getCategoryByStoreListingId(null == C ? true : C.categoryStoreListingId)) ? true : t.skuId);
  let y = null != (r = null != v ? v : null == O ? true : O.skuId) ? r : "",
    {
      handleCardVisibilityChange: x
    } = (0, g.E)(y, "home", "marketing featured block"),
    {
      featuredBlockBanner: j
    } = (0, f.YG)(O, C),
    T = l.useRef(null),
    P = y === o.T.NAMEPLATES_V3,
    L = P ? "NAMEPLATES VOL.3" : null,
    k = null == C ? true : C.bodyText,
    I = (0, d.sp)();
  return (0, n.jsx)(s.$, {
    innerRef: T,
    onChange: x,
    threshold: 0,
    children: (0, n.jsxs)(c.P3F, {
      className: m.featuredBlock,
      innerRef: T,
      style: {
        backgroundImage: "url(".concat(j, ")")
      },
      onClick: () => {
        S("shop marketing tile", y), u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == I ? true : I.sessionId,
          sku_id: y,
          page_type: "home",
          page_section: null == I ? true : I.pageSection,
          page_category: null == I ? true : I.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == I ? true : I.tilePosition),
          cta_name: null
        })
      },
      children: [null != E && (0, n.jsx)(c.IGR, {
        disableColor: true,
        text: E,
        className: m.featuredBlockBadge
      }), (0, n.jsxs)("div", {
        className: m.featuredBlockTextContainer,
        children: [null != L && (0, n.jsx)(c.X6q, {
          lineClamp: 2,
          className: i()(m.featuredBlockTitleText, {
            [m.featuredBlockTitleTextNameplate]: P
          }),
          style: {
            color: null != (a = null == C ? true : C.bannerTextColor) ? a : "white"
          },
          variant: "heading-xl/semibold",
          children: L
        }), null != k && (0, n.jsx)(c.X6q, {
          lineClamp: null != L ? 2 : 4,
          className: m.featuredBlockBodyText,
          style: {
            color: null != (_ = null == C ? true : C.bannerTextColor) ? _ : "white"
          },
          variant: "heading-md/medium",
          children: k
        })]
      }), (0, n.jsx)("div", {
        className: m.featuredBlockButtonContainer,
        children: (0, n.jsx)(c.zxk, {
          variant: "overlay-primary",
          text: h.intl.string(h.t.jVcuVV),
          onClick: e => {
            S("shop marketing take me there button", y), e.stopPropagation(), u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == I ? true : I.sessionId,
              sku_id: y,
              page_type: "home",
              page_section: null == I ? true : I.pageSection,
              page_category: null == I ? true : I.pageCategory,
              tile_type: "FEATURED_BLOCK",
              tile_position: String(null == I ? true : I.tilePosition),
              cta_name: "Take me there button"
            })
          }
        })
      })]
    })
  })
}