/** Chunk was on 16859 **/
/** chunk id: 680942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
let g = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: g,
    returnRef: j,
    onSuccess: h,
    tooltipDelay: v
  } = e, {
    analyticsLocations: x
  } = (0, c.ZP)(), E = l.useRef(null), P = (0, p.sp)(), _ = (0, f.Z)();
  return (0, r.jsx)(o.u, {
    text: O.intl.string(O.t["JCFN//"]),
    delay: v,
    children: (0, r.jsx)(s.hU, {
      "aria-label": O.intl.string(O.t["JCFN//"]),
      buttonRef: E,
      variant: n ? "primary" : "secondary",
      icon: s.OgN,
      size: "md",
      onClick: e => {
        e.stopPropagation(), d.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == P ? true : P.sessionId,
          sku_id: t.skuId,
          page_section: null == P ? true : P.pageSection,
          page_category: null == P ? true : P.pageCategory,
          tile_type: i.Z[t.type],
          tile_position: String(null == P ? true : P.tilePosition),
          cta_name: "gift button",
          page_type: _ || "home"
        }), (0, u.Z)({
          skuId: (0, b.S)({
            product: t,
            selectedVariantIndex: g
          }),
          isGift: true,
          giftingOrigin: m.Wt.SHOP_PAGE,
          analyticsLocations: x,
          returnRef: j,
          variantsReturnStyle: a.v.VARIANTS_GROUP,
          onClose: null != h ? e => {
            e && h()
          } : true
        })
      }
    })
  })
}