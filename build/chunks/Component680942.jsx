/** Chunk was on 14209 **/
/** chunk id: 680942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk152563 = require("./152563.js"),
  Chunk410127 = require("./410127.js"),
  Chunk67409 = require("./67409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let h = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: h,
    returnRef: v,
    onSuccess: x,
    tooltipDelay: E
  } = e, {
    analyticsLocations: _
  } = (0, c.ZP)(), P = l.useRef(null), C = (0, p.sp)(), A = (0, y.Z)(), S = (0, b.t)("collectibles-shop-gift-button");
  return (0, f.x6)(t) && !S ? null : (0, r.jsx)(o.u, {
    text: j.intl.string(j.t["JCFN//"]),
    delay: E,
    children: (0, r.jsx)(s.hU, {
      "aria-label": j.intl.string(j.t["JCFN//"]),
      buttonRef: P,
      variant: n ? "primary" : "secondary",
      icon: s.OgN,
      size: "md",
      onClick: e => {
        e.stopPropagation(), d.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == C ? true : C.sessionId,
          sku_id: t.skuId,
          page_section: null == C ? true : C.pageSection,
          page_category: null == C ? true : C.pageCategory,
          tile_type: i.Z[t.type],
          tile_position: String(null == C ? true : C.tilePosition),
          cta_name: "gift button",
          page_type: A || "home"
        }), (0, u.Z)({
          skuId: (0, m.S)({
            product: t,
            selectedVariantIndex: h
          }),
          isGift: true,
          giftingOrigin: g.Wt.SHOP_PAGE,
          analyticsLocations: _,
          returnRef: v,
          variantsReturnStyle: a.v.VARIANTS_GROUP,
          onClose: null != x ? e => {
            e && x()
          } : true
        })
      }
    })
  })
}