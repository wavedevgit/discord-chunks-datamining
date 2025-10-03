/** Chunk was on 70820 **/
/** chunk id: 680942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk410127 = require("./410127.js"),
  Chunk67409 = require("./67409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let j = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: j,
    returnRef: v,
    onSuccess: h,
    tooltipDelay: x
  } = e, {
    analyticsLocations: E
  } = (0, c.ZP)(), P = l.useRef(null), _ = (0, p.sp)(), C = (0, b.Z)();
  return (0, f.x6)(t) ? null : (0, r.jsx)(o.u, {
    text: g.intl.string(g.t["JCFN//"]),
    delay: x,
    children: (0, r.jsx)(s.hU, {
      "aria-label": g.intl.string(g.t["JCFN//"]),
      buttonRef: P,
      variant: n ? "primary" : "secondary",
      icon: s.OgN,
      size: "md",
      onClick: e => {
        e.stopPropagation(), d.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == _ ? true : _.sessionId,
          sku_id: t.skuId,
          page_section: null == _ ? true : _.pageSection,
          page_category: null == _ ? true : _.pageCategory,
          tile_type: i.Z[t.type],
          tile_position: String(null == _ ? true : _.tilePosition),
          cta_name: "gift button",
          page_type: C || "home"
        }), (0, u.Z)({
          skuId: (0, y.S)({
            product: t,
            selectedVariantIndex: j
          }),
          isGift: true,
          giftingOrigin: O.Wt.SHOP_PAGE,
          analyticsLocations: E,
          returnRef: v,
          variantsReturnStyle: a.v.VARIANTS_GROUP,
          onClose: null != h ? e => {
            e && h()
          } : true
        })
      }
    })
  })
}