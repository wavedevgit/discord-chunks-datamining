/** Chunk was on 59275 **/
/** chunk id: 196231, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => m
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
let m = e => {
  var t, l, m;
  let p, {
    category: h,
    subblock: E,
    badgeText: v,
    handleTransition: A
  } = e;
  null != E && (p = null == (m = c.A.getCategoryByStoreListingId(null == E ? true : E.categoryStoreListingId)) ? true : m.skuId);
  let x = null != (t = null != p ? p : null == h ? true : h.skuId) ? t : "",
    {
      handleCardVisibilityChange: S
    } = (0, u.Z)(x, "home", "marketing featured block"),
    C = (0, d.s4)(h, E),
    O = r.useRef(null),
    _ = null == E ? true : E.bodyText,
    y = (0, o.uM)();
  return (0, n.jsx)(s.L, {
    innerRef: O,
    onChange: S,
    threshold: 0,
    children: (0, n.jsxs)(a.DUT, {
      className: g.oT,
      innerRef: O,
      style: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = l[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, null != C && {
        backgroundImage: "url(".concat(C, ")")
      }),
      onClick: () => {
        A({
          sourceButton: "shop marketing tile",
          categorySkuId: x,
          isInternalShopDeeplink: true,
          isOrbsExclusive: null == h ? true : h.isOrbsExclusive
        }), i.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == y ? true : y.sessionId,
          sku_id: x,
          page_type: "home",
          page_section: null == y ? true : y.pageSection,
          page_category: null == y ? true : y.pageCategory,
          tile_type: "FEATURED_BLOCK",
          tile_position: String(null == y ? true : y.tilePosition),
          cta_name: null
        })
      },
      children: [null != v && (0, n.jsx)(a.LpS, {
        disableColor: true,
        text: v,
        className: g.pv
      }), (0, n.jsx)("div", {
        className: g.Gh,
        children: null != _ && (0, n.jsx)(a.Heading, {
          lineClamp: 4,
          className: g.BN,
          style: {
            color: null != (l = null == E ? true : E.bannerTextColor) ? l : "white"
          },
          variant: "heading-md/medium",
          children: _
        })
      }), (0, n.jsx)("div", {
        className: g.b2,
        children: (0, n.jsx)(a.Button, {
          variant: "overlay-primary",
          text: b.intl.string(b.t.jVcuVY),
          onClick: e => {
            A({
              sourceButton: "shop marketing take me there button",
              categorySkuId: x,
              isInternalShopDeeplink: true,
              isOrbsExclusive: null == h ? true : h.isOrbsExclusive
            }), e.stopPropagation(), i.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == y ? true : y.sessionId,
              sku_id: x,
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