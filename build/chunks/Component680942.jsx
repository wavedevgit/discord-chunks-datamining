/** Chunk was on 86031 **/
/** chunk id: 680942, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
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
    returnRef: g,
    onSuccess: O,
    tooltipDelay: y
  } = e, {
    analyticsLocations: C
  } = (0, s.ZP)(), j = a.useRef(null), P = (0, d.sp)(), E = (0, b.Z)();
  return (0, p.x6)(t) ? null : (0, n.jsx)(o.ua7, {
    text: m.intl.string(m.t["JCFN//"]),
    delay: y,
    children: e => {
      var a, s;
      return (0, n.jsx)(o.hU, (a = function(e) {
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
      }({}, e), s = s = {
        "aria-label": m.intl.string(m.t["JCFN//"]),
        buttonRef: j,
        variant: r ? "primary" : "secondary",
        icon: o.OgN,
        size: "md",
        onClick: e => {
          e.stopPropagation(), u.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == P ? true : P.sessionId,
            sku_id: t.skuId,
            page_section: null == P ? true : P.pageSection,
            page_category: null == P ? true : P.pageCategory,
            tile_type: i.Z[t.type],
            tile_position: String(null == P ? true : P.tilePosition),
            cta_name: "gift button",
            page_type: E || "home"
          }), (0, c.Z)({
            skuId: (0, h.S)({
              product: t,
              selectedVariantIndex: _
            }),
            isGift: true,
            giftingOrigin: v.Wt.SHOP_PAGE,
            analyticsLocations: C,
            returnRef: g,
            variantsReturnStyle: l.v.VARIANTS_GROUP,
            onClose: null != O ? e => {
              e && O()
            } : true
          })
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
      }), a))
    }
  })
}