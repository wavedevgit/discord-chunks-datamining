/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let C = e => {
  var t, n, C;
  let _, {
    category: h,
    subblock: m,
    badgeText: b,
    handleTransition: E
  } = e;
  null != m && (_ = null == (t = c.Z.getCategoryByStoreListingId(null == m ? true : m.categoryStoreListingId)) ? true : t.skuId);
  let v = null != (n = null != _ ? _ : null == h ? true : h.skuId) ? n : "",
    {
      handleCardVisibilityChange: S
    } = (0, u.E)(v, "home", "marketing featured block"),
    x = (0, d.YG)(h, m),
    O = l.useRef(null),
    T = null == m ? true : m.bodyText,
    y = (0, o.sp)();
  return (0, r.jsx)(a.$, {
    innerRef: O,
    onChange: S,
    threshold: 0,
    children: (0, r.jsxs)(i.P3F, {
      className: f.featuredBlock,
      innerRef: O,
      style: {
        backgroundImage: "url(".concat(x, ")")
      },
      onClick: () => {
        E("shop marketing tile", v), s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == y ? true : y.sessionId,
          sku_id: v,
          page_type: "home",
          page_section: null == y ? true : y.pageSection,
          page_category: null == y ? true : y.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == y ? true : y.tilePosition),
          cta_name: null
        })
      },
      children: [null != b && (0, r.jsx)(i.IGR, {
        disableColor: true,
        text: b,
        className: f.featuredBlockBadge
      }), (0, r.jsx)("div", {
        className: f.featuredBlockTextContainer,
        children: null != T && (0, r.jsx)(i.X6q, {
          lineClamp: 4,
          className: f.featuredBlockBodyText,
          style: {
            color: null != (C = null == m ? true : m.bannerTextColor) ? C : "white"
          },
          variant: "heading-md/medium",
          children: T
        })
      }), (0, r.jsx)("div", {
        className: f.featuredBlockButtonContainer,
        children: (0, r.jsx)(i.zxk, {
          variant: "overlay-primary",
          text: p.intl.string(p.t.jVcuVV),
          onClick: e => {
            E("shop marketing take me there button", v), e.stopPropagation(), s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == y ? true : y.sessionId,
              sku_id: v,
              page_type: "home",
              page_section: null == y ? true : y.pageSection,
              page_category: null == y ? true : y.pageCategory,
              tile_type: "FEATURED_BLOCK",
              tile_position: String(null == y ? true : y.tilePosition),
              cta_name: "Take me there button"
            })
          }
        })
      })]
    })
  })
}