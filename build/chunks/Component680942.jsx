/** Chunk was on 78825 **/
/** chunk id: 680942, original params: e,n,t (module,exports,require) **/
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
  Chunk410127 = require("./410127.js"),
  Chunk67409 = require("./67409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let h = e => {
  let {
    product: n,
    primary: t,
    selectedVariantIndex: h,
    returnRef: x,
    onSuccess: j,
    tooltipDelay: y
  } = e, {
    analyticsLocations: O
  } = (0, u.ZP)(), P = l.useRef(null), S = (0, v.sp)(), C = (0, f.Z)();
  return (0, r.jsx)(o.u, {
    text: m.intl.string(m.t["JCFN/y"]),
    delay: y,
    children: (0, r.jsx)(s.hU, {
      "aria-label": m.intl.string(m.t["JCFN/y"]),
      buttonRef: P,
      variant: t ? "primary" : "secondary",
      icon: s.OgN,
      size: "md",
      onClick: e => {
        e.stopPropagation(), d.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == S ? true : S.sessionId,
          sku_id: n.skuId,
          page_section: null == S ? true : S.pageSection,
          page_category: null == S ? true : S.pageCategory,
          tile_type: i.Z[n.type],
          tile_position: String(null == S ? true : S.tilePosition),
          cta_name: "gift button",
          page_type: C || "home"
        }), (0, c.Z)({
          skuId: (0, p.S)({
            product: n,
            selectedVariantIndex: h
          }),
          isGift: true,
          giftingOrigin: b.Wt.SHOP_PAGE,
          analyticsLocations: O,
          returnRef: x,
          variantsReturnStyle: a.v.VARIANTS_GROUP,
          onClose: null != j ? e => {
            e && j()
          } : true
        })
      }
    })
  })
}