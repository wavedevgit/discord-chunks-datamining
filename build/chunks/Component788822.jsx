/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let m = e => {
  var t, n, i, m;
  let b, {
    category: E,
    subblock: S,
    badgeText: v,
    handleTransition: x
  } = e;
  null != S && (b = null == (t = g.Z.getCategoryByStoreListingId(null == S ? true : S.categoryStoreListingId)) ? true : t.skuId);
  let O = null != (n = null != b ? b : null == E ? true : E.skuId) ? n : "",
    {
      handleCardVisibilityChange: T
    } = (0, p.E)(O, "home", "marketing featured block"),
    y = (0, f.YG)(E, S),
    L = l.useRef(null),
    j = O === s.T.NAMEPLATES_V3,
    k = j ? "NAMEPLATES VOL.3" : null,
    I = null == S ? true : S.bodyText,
    P = (0, d.sp)();
  return (0, r.jsx)(o.$, {
    innerRef: L,
    onChange: T,
    threshold: 0,
    children: (0, r.jsxs)(c.P3F, {
      className: _.featuredBlock,
      innerRef: L,
      style: {
        backgroundImage: "url(".concat(y, ")")
      },
      onClick: () => {
        x("shop marketing tile", O), u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == P ? true : P.sessionId,
          sku_id: O,
          page_type: "home",
          page_section: null == P ? true : P.pageSection,
          page_category: null == P ? true : P.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == P ? true : P.tilePosition),
          cta_name: null
        })
      },
      children: [null != v && (0, r.jsx)(c.IGR, {
        disableColor: true,
        text: v,
        className: _.featuredBlockBadge
      }), (0, r.jsxs)("div", {
        className: _.featuredBlockTextContainer,
        children: [null != k && (0, r.jsx)(c.X6q, {
          lineClamp: 2,
          className: a()(_.featuredBlockTitleText, {
            [_.featuredBlockTitleTextNameplate]: j
          }),
          style: {
            color: null != (i = null == S ? true : S.bannerTextColor) ? i : "white"
          },
          variant: "heading-xl/semibold",
          children: k
        }), null != I && (0, r.jsx)(c.X6q, {
          lineClamp: null != k ? 2 : 4,
          className: _.featuredBlockBodyText,
          style: {
            color: null != (m = null == S ? true : S.bannerTextColor) ? m : "white"
          },
          variant: "heading-md/medium",
          children: I
        })]
      }), (0, r.jsx)("div", {
        className: _.featuredBlockButtonContainer,
        children: (0, r.jsx)(c.zxk, {
          variant: "overlay-primary",
          text: C.intl.string(C.t.jVcuVV),
          onClick: e => {
            x("shop marketing take me there button", O), e.stopPropagation(), u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == P ? true : P.sessionId,
              sku_id: O,
              page_type: "home",
              page_section: null == P ? true : P.pageSection,
              page_category: null == P ? true : P.pageCategory,
              tile_type: "FEATURED_BLOCK",
              tile_position: String(null == P ? true : P.tilePosition),
              cta_name: "Take me there button"
            })
          }
        })
      })]
    })
  })
}