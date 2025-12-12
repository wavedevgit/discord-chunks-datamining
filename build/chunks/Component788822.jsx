/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  var t, n, m;
  let C, {
    category: h,
    subblock: _,
    badgeText: b,
    handleTransition: v
  } = e;
  null != _ && (C = null == (t = c.Z.getCategoryByStoreListingId(null == _ ? true : _.categoryStoreListingId)) ? true : t.skuId);
  let E = null != (n = null != C ? C : null == h ? true : h.skuId) ? n : "",
    {
      handleCardVisibilityChange: S
    } = (0, u.E)(E, "home", "marketing featured block"),
    O = (0, d.YG)(h, _),
    x = l.useRef(null),
    y = null == _ ? true : _.bodyText,
    j = (0, a.sp)();
  return (0, r.jsx)(o.$, {
    innerRef: x,
    onChange: S,
    threshold: 0,
    children: (0, r.jsxs)(i.P3F, {
      className: p.featuredBlock,
      innerRef: x,
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
      }({}, null != O && {
        backgroundImage: "url(".concat(O, ")")
      }),
      onClick: () => {
        v({
          sourceButton: "shop marketing tile",
          categorySkuId: E,
          isInternalShopDeeplink: true,
          isOrbsExclusive: null == h ? true : h.isOrbsExclusive
        }), s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == j ? true : j.sessionId,
          sku_id: E,
          page_type: "home",
          page_section: null == j ? true : j.pageSection,
          page_category: null == j ? true : j.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == j ? true : j.tilePosition),
          cta_name: null
        })
      },
      children: [null != b && (0, r.jsx)(i.IGR, {
        disableColor: true,
        text: b,
        className: p.featuredBlockBadge
      }), (0, r.jsx)("div", {
        className: p.featuredBlockTextContainer,
        children: null != y && (0, r.jsx)(i.Heading, {
          lineClamp: 4,
          className: p.featuredBlockBodyText,
          style: {
            color: null != (m = null == _ ? true : _.bannerTextColor) ? m : "white"
          },
          variant: "heading-md/medium",
          children: y
        })
      }), (0, r.jsx)("div", {
        className: p.featuredBlockButtonContainer,
        children: (0, r.jsx)(i.Button, {
          variant: "overlay-primary",
          text: f.intl.string(f.t.jVcuVY),
          onClick: e => {
            v({
              sourceButton: "shop marketing take me there button",
              categorySkuId: E,
              isInternalShopDeeplink: true,
              isOrbsExclusive: null == h ? true : h.isOrbsExclusive
            }), e.stopPropagation(), s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == j ? true : j.sessionId,
              sku_id: E,
              page_type: "home",
              page_section: null == j ? true : j.pageSection,
              page_category: null == j ? true : j.pageCategory,
              tile_type: "FEATURED_BLOCK",
              tile_position: String(null == j ? true : j.tilePosition),
              cta_name: "Take me there button"
            })
          }
        })
      })]
    })
  })
}