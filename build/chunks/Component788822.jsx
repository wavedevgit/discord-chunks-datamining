/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let b = e => {
  var t, n, a, b;
  let C, {
    category: E,
    subblock: S,
    badgeText: O,
    handleTransition: v
  } = e;
  null != S && (C = null == (t = g.Z.getCategoryByStoreListingId(null == S ? true : S.categoryStoreListingId)) ? true : t.skuId);
  let x = null != (n = null != C ? C : null == E ? true : E.skuId) ? n : "",
    {
      handleCardVisibilityChange: y
    } = (0, f.E)(x, "home", "marketing featured block"),
    T = (0, p.YG)(E, S),
    L = l.useRef(null),
    j = x === o.T.NAMEPLATES_V3,
    k = j ? "NAMEPLATES VOL.3" : null,
    B = null == S ? true : S.bodyText,
    I = (0, d.sp)();
  return (0, r.jsx)(i.$, {
    innerRef: L,
    onChange: y,
    threshold: 0,
    children: (0, r.jsxs)(c.P3F, {
      className: _.featuredBlock,
      innerRef: L,
      style: {
        backgroundImage: "url(".concat(T, ")")
      },
      onClick: () => {
        v("shop marketing tile", x), u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == I ? true : I.sessionId,
          sku_id: x,
          page_type: "home",
          page_section: null == I ? true : I.pageSection,
          page_category: null == I ? true : I.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == I ? true : I.tilePosition),
          cta_name: null
        })
      },
      children: [null != O && (0, r.jsx)(c.IGR, {
        disableColor: true,
        text: O,
        className: _.featuredBlockBadge
      }), (0, r.jsxs)("div", {
        className: _.featuredBlockTextContainer,
        children: [null != k && (0, r.jsx)(c.X6q, {
          lineClamp: 2,
          className: s()(_.featuredBlockTitleText, {
            [_.featuredBlockTitleTextNameplate]: j
          }),
          style: {
            color: null != (a = null == S ? true : S.bannerTextColor) ? a : "white"
          },
          variant: "heading-xl/semibold",
          children: k
        }), null != B && (0, r.jsx)(c.X6q, {
          lineClamp: null != k ? 2 : 4,
          className: _.featuredBlockBodyText,
          style: {
            color: null != (b = null == S ? true : S.bannerTextColor) ? b : "white"
          },
          variant: "heading-md/medium",
          children: B
        })]
      }), (0, r.jsx)("div", {
        className: _.featuredBlockButtonContainer,
        children: (0, r.jsx)(c.zxk, {
          variant: "overlay-primary",
          text: h.intl.string(h.t.jVcuVV),
          onClick: e => {
            v("shop marketing take me there button", x), e.stopPropagation(), u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == I ? true : I.sessionId,
              sku_id: x,
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