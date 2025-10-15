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
  let h, {
    category: _,
    subblock: m,
    badgeText: b,
    handleTransition: v
  } = e;
  null != m && (h = null == (t = c.Z.getCategoryByStoreListingId(null == m ? true : m.categoryStoreListingId)) ? true : t.skuId);
  let E = null != (n = null != h ? h : null == _ ? true : _.skuId) ? n : "",
    {
      handleCardVisibilityChange: O
    } = (0, u.E)(E, "home", "marketing featured block"),
    x = (0, d.YG)(_, m),
    S = l.useRef(null),
    y = null == m ? true : m.bodyText,
    k = (0, a.sp)();
  return (0, r.jsx)(i.$, {
    innerRef: S,
    onChange: O,
    threshold: 0,
    children: (0, r.jsxs)(o.P3F, {
      className: p.featuredBlock,
      innerRef: S,
      style: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, null != x && {
        backgroundImage: "url(".concat(x, ")")
      }),
      onClick: () => {
        v("shop marketing tile", E, true, true), s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == k ? true : k.sessionId,
          sku_id: E,
          page_type: "home",
          page_section: null == k ? true : k.pageSection,
          page_category: null == k ? true : k.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == k ? true : k.tilePosition),
          cta_name: null
        })
      },
      children: [null != b && (0, r.jsx)(o.IGR, {
        disableColor: true,
        text: b,
        className: p.featuredBlockBadge
      }), (0, r.jsx)("div", {
        className: p.featuredBlockTextContainer,
        children: null != y && (0, r.jsx)(o.Heading, {
          lineClamp: 4,
          className: p.featuredBlockBodyText,
          style: {
            color: null != (C = null == m ? true : m.bannerTextColor) ? C : "white"
          },
          variant: "heading-md/medium",
          children: y
        })
      }), (0, r.jsx)("div", {
        className: p.featuredBlockButtonContainer,
        children: (0, r.jsx)(o.Button, {
          variant: "overlay-primary",
          text: f.intl.string(f.t.jVcuVV),
          onClick: e => {
            v("shop marketing take me there button", E, true, true), e.stopPropagation(), s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == k ? true : k.sessionId,
              sku_id: E,
              page_type: "home",
              page_section: null == k ? true : k.pageSection,
              page_category: null == k ? true : k.pageCategory,
              tile_type: "FEATURED_BLOCK",
              tile_position: String(null == k ? true : k.tilePosition),
              cta_name: "Take me there button"
            })
          }
        })
      })]
    })
  })
}