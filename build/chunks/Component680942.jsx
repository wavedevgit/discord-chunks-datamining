/** Chunk was on 75393 **/
/** chunk id: 680942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk410127 = require("./410127.js"),
  Chunk67409 = require("./67409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let b = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: b,
    returnRef: v,
    onSuccess: j,
    tooltipDelay: _
  } = e, {
    analyticsLocations: y
  } = (0, c.ZP)(), C = l.useRef(null), S = (0, m.sp)(), E = (0, p.Z)();
  return (0, a.jsx)(s.u, {
    text: g.intl.string(g.t["JCFN/y"]),
    delay: _,
    children: (0, a.jsx)(o.hU, {
      "aria-label": g.intl.string(g.t["JCFN/y"]),
      buttonRef: C,
      variant: n ? "primary" : "secondary",
      icon: o.OgN,
      size: "md",
      onClick: e => {
        e.stopPropagation(), u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == S ? true : S.sessionId,
          sku_id: t.skuId,
          page_section: null == S ? true : S.pageSection,
          page_category: null == S ? true : S.pageCategory,
          tile_type: r.Z[t.type],
          tile_position: String(null == S ? true : S.tilePosition),
          cta_name: "gift button",
          page_type: E || "home"
        }), (0, d.Z)({
          skuId: (0, h.S)({
            product: t,
            selectedVariantIndex: b
          }),
          isGift: true,
          giftingOrigin: f.Wt.SHOP_PAGE,
          analyticsLocations: y,
          returnRef: v,
          variantsReturnStyle: i.v.VARIANTS_GROUP,
          onClose: null != j ? e => {
            e && j()
          } : true
        })
      }
    })
  })
}