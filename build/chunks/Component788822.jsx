/** Chunk was on 45620 **/
/** chunk id: 788822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => b
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
  Chunk222194 = require("./222194.js");
let b = e => {
  var t, n, b;
  let m, {
    category: C,
    subblock: h,
    badgeText: v,
    handleTransition: E
  } = e;
  null != h && (m = null == (t = c.Z.getCategoryByStoreListingId(null == h ? true : h.categoryStoreListingId)) ? true : t.skuId);
  let S = null != (n = null != m ? m : null == C ? true : C.skuId) ? n : "",
    {
      handleCardVisibilityChange: _
    } = (0, u.E)(S, "home", "marketing featured block"),
    O = (0, d.YG)(C, h),
    x = l.useRef(null),
    y = null == h ? true : h.bodyText,
    j = (0, i.sp)();
  return (0, r.jsx)(a.$, {
    innerRef: x,
    onChange: _,
    threshold: 0,
    children: (0, r.jsxs)(o.P3F, {
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
        E({
          sourceButton: "shop marketing tile",
          categorySkuId: S,
          isInternalShopDeeplink: true,
          isOrbsExclusive: null == C ? true : C.isOrbsExclusive
        }), s.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == j ? true : j.sessionId,
          sku_id: S,
          page_type: "home",
          page_section: null == j ? true : j.pageSection,
          page_category: null == j ? true : j.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == j ? true : j.tilePosition),
          cta_name: null
        })
      },
      children: [null != v && (0, r.jsx)(o.IGR, {
        disableColor: true,
        text: v,
        className: p.featuredBlockBadge
      }), (0, r.jsx)("div", {
        className: p.featuredBlockTextContainer,
        children: null != y && (0, r.jsx)(o.Heading, {
          lineClamp: 4,
          className: p.featuredBlockBodyText,
          style: {
            color: null != (b = null == h ? true : h.bannerTextColor) ? b : "white"
          },
          variant: "heading-md/medium",
          children: y
        })
      }), (0, r.jsx)("div", {
        className: p.featuredBlockButtonContainer,
        children: (0, r.jsx)(o.Button, {
          variant: "overlay-primary",
          text: g.intl.string(g.t.jVcuVY),
          onClick: e => {
            E({
              sourceButton: "shop marketing take me there button",
              categorySkuId: S,
              isInternalShopDeeplink: true,
              isOrbsExclusive: null == C ? true : C.isOrbsExclusive
            }), e.stopPropagation(), s.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == j ? true : j.sessionId,
              sku_id: S,
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