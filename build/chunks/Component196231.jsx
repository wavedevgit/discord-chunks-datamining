/** Chunk was on 59275 **/
/** chunk id: 196231, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk597783 = require("./597783.js"),
  Chunk212407 = require("./212407.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201073 = require("./201073.js");
let f = e => {
  var t, n, f;
  let b, {
    category: h,
    subblock: _,
    badgeText: E,
    handleTransition: v
  } = e;
  null != _ && (b = null == (f = c.A.getCategoryByStoreListingId(null == _ ? true : _.categoryStoreListingId)) ? true : f.skuId);
  let C = null != (t = null != b ? b : null == h ? true : h.skuId) ? t : "",
    {
      handleCardVisibilityChange: A
    } = (0, u.Z)(C, "home", "marketing featured block"),
    x = (0, d.s4)(h, _),
    S = l.useRef(null),
    O = null == _ ? true : _.bodyText,
    y = (0, o.uM)();
  return (0, r.jsx)(s.L, {
    innerRef: S,
    onChange: A,
    threshold: 0,
    children: (0, r.jsxs)(a.DUT, {
      className: m.oT,
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
        v({
          sourceButton: "shop marketing tile",
          categorySkuId: C,
          isInternalShopDeeplink: true,
          isOrbsExclusive: null == h ? true : h.isOrbsExclusive
        }), i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == y ? true : y.sessionId,
          sku_id: C,
          page_type: "home",
          page_section: null == y ? true : y.pageSection,
          page_category: null == y ? true : y.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == y ? true : y.tilePosition),
          cta_name: null
        })
      },
      children: [null != E && (0, r.jsx)(a.LpS, {
        disableColor: true,
        text: E,
        className: m.pv
      }), (0, r.jsx)("div", {
        className: m.Gh,
        children: null != O && (0, r.jsx)(a.Heading, {
          lineClamp: 4,
          className: m.BN,
          style: {
            color: null != (n = null == _ ? true : _.bannerTextColor) ? n : "white"
          },
          variant: "heading-md/medium",
          children: O
        })
      }), (0, r.jsx)("div", {
        className: m.b2,
        children: (0, r.jsx)(a.Button, {
          variant: "overlay-primary",
          text: p.intl.string(p.t.jVcuVY),
          onClick: e => {
            v({
              sourceButton: "shop marketing take me there button",
              categorySkuId: C,
              isInternalShopDeeplink: true,
              isOrbsExclusive: null == h ? true : h.isOrbsExclusive
            }), e.stopPropagation(), i.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == y ? true : y.sessionId,
              sku_id: C,
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