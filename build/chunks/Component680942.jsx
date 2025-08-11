/** Chunk was on 45620 **/
/** chunk id: 680942, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk228624 = require("./228624.js"),
  Chunk410127 = require("./410127.js"),
  Chunk67409 = require("./67409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  let {
    product: t,
    primary: r,
    selectedVariantIndex: _,
    returnRef: v,
    onSuccess: O,
    tooltipDelay: C
  } = e, {
    analyticsLocations: E
  } = (0, o.ZP)(), S = l.useRef(null), y = (0, p.hv)("CollectiblesShopGiftButton"), x = (0, u.sp)(), j = (0, g.Z)();
  return (0, d.x6)(t) ? null : (0, n.jsx)(i.ua7, {
    text: m.intl.string(m.t["JCFN//"]),
    delay: C,
    children: e => {
      var l, o;
      return (0, n.jsx)(i.hU, (l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), o = o = {
        "aria-label": m.intl.string(m.t["JCFN//"]),
        buttonRef: S,
        variant: r ? "primary" : "secondary",
        icon: i.OgN,
        size: "md",
        onClick: e => {
          e.stopPropagation(), c.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == x ? true : x.sessionId,
            sku_id: t.skuId,
            page_section: null == x ? true : x.pageSection,
            page_category: null == x ? true : x.pageCategory,
            tile_type: a.Z[t.type],
            tile_position: String(null == x ? true : x.tilePosition),
            cta_name: "gift button",
            page_type: j || "home"
          }), (0, s.Z)({
            skuId: (0, f.S)({
              product: t,
              selectedVariantIndex: _
            }),
            isGift: true,
            giftingOrigin: h.Wt.SHOP_PAGE,
            analyticsLocations: E,
            returnRef: v,
            variantsReturnStyle: y,
            onClose: null != O ? e => {
              e && O()
            } : true
          })
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
      }), l))
    }
  })
}