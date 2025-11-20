/** Chunk was on 78825 **/
/** chunk id: 680942, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  } = (0, c.ZP)(), P = l.useRef(null), C = (0, v.sp)(), S = (0, p.Z)();
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
          collectibles_shop_session_id: null == C ? true : C.sessionId,
          sku_id: n.skuId,
          page_section: null == C ? true : C.pageSection,
          page_category: null == C ? true : C.pageCategory,
          tile_type: i.Z[n.type],
          tile_position: String(null == C ? true : C.tilePosition),
          cta_name: "gift button",
          page_type: S || "home"
        }), (0, u.Z)({
          skuId: (0, f.S)({
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