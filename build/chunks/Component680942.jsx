/** Chunk was on 45620 **/
/** chunk id: 680942, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    returnRef: v,
    onSuccess: O,
    tooltipDelay: C
  } = e, {
    analyticsLocations: E
  } = (0, s.ZP)(), y = l.useRef(null), S = (0, d.sp)(), x = (0, g.Z)();
  return (0, p.x6)(t) ? null : (0, n.jsx)(o.ua7, {
    text: h.intl.string(h.t["JCFN//"]),
    delay: C,
    children: e => {
      var l, s;
      return (0, n.jsx)(o.hU, (l = function(e) {
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
        "aria-label": h.intl.string(h.t["JCFN//"]),
        buttonRef: y,
        variant: r ? "primary" : "secondary",
        icon: o.OgN,
        size: "md",
        onClick: e => {
          e.stopPropagation(), u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == S ? true : S.sessionId,
            sku_id: t.skuId,
            page_section: null == S ? true : S.pageSection,
            page_category: null == S ? true : S.pageCategory,
            tile_type: a.Z[t.type],
            tile_position: String(null == S ? true : S.tilePosition),
            cta_name: "gift button",
            page_type: x || "home"
          }), (0, c.Z)({
            skuId: (0, f.S)({
              product: t,
              selectedVariantIndex: _
            }),
            isGift: true,
            giftingOrigin: b.Wt.SHOP_PAGE,
            analyticsLocations: E,
            returnRef: v,
            variantsReturnStyle: i.v.VARIANTS_GROUP,
            onClose: null != O ? e => {
              e && O()
            } : true
          })
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
      }), l))
    }
  })
}