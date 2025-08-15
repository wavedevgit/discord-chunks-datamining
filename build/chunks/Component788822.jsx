/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk310582 = require("./310582.js");
let _ = e => {
  var t, r, a, _;
  let v, {
    category: O,
    subblock: C,
    badgeText: E,
    handleTransition: y
  } = e;
  null != C && (v = null == (t = p.Z.getCategoryByStoreListingId(null == C ? true : C.categoryStoreListingId)) ? true : t.skuId);
  let S = null != (r = null != v ? v : null == O ? true : O.skuId) ? r : "",
    {
      handleCardVisibilityChange: x
    } = (0, g.E)(S, "home", "marketing featured block"),
    {
      featuredBlockBanner: j
    } = (0, f.YG)(O, C),
    P = l.useRef(null),
    T = S === o.T.NAMEPLATES_V3,
    L = T ? "NAMEPLATES VOL.3" : null,
    k = null == C ? true : C.bodyText,
    I = (0, d.sp)();
  return (0, n.jsx)(s.$, {
    innerRef: P,
    onChange: x,
    threshold: 0,
    children: (0, n.jsxs)(c.P3F, {
      className: h.featuredBlock,
      innerRef: P,
      style: {
        backgroundImage: "url(".concat(j, ")")
      },
      onClick: () => {
        y("shop marketing tile", S), u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == I ? true : I.sessionId,
          sku_id: S,
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
        className: h.featuredBlockBadge
      }), (0, n.jsxs)("div", {
        className: h.featuredBlockTextContainer,
        children: [null != L && (0, n.jsx)(c.X6q, {
          lineClamp: 2,
          className: i()(h.featuredBlockTitleText, {
            [h.featuredBlockTitleTextNameplate]: T
          }),
          style: {
            color: null != (a = null == C ? true : C.bannerTextColor) ? a : "white"
          },
          variant: "heading-xl/semibold",
          children: L
        }), null != k && (0, n.jsx)(c.X6q, {
          lineClamp: null != L ? 2 : 4,
          className: h.featuredBlockBodyText,
          style: {
            color: null != (_ = null == C ? true : C.bannerTextColor) ? _ : "white"
          },
          variant: "heading-md/medium",
          children: k
        })]
      }), (0, n.jsx)("div", {
        className: h.featuredBlockButtonContainer,
        children: (0, n.jsx)(c.zxk, {
          variant: "overlay-primary",
          text: m.intl.string(m.t.jVcuVV),
          onClick: e => {
            y("shop marketing take me there button", S), e.stopPropagation(), u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == I ? true : I.sessionId,
              sku_id: S,
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