/** Chunk was on 89929 **/
/** chunk id: 680942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let m = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: m,
    returnRef: y,
    onSuccess: j,
    tooltipDelay: x,
    fullWidth: O = false
  } = e, {
    analyticsLocations: P
  } = (0, c.ZP)(), C = l.useRef(null), S = (0, p.sp)(), k = (0, v.Z)(), _ = e => {
    e.stopPropagation(), d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == S ? true : S.sessionId,
      sku_id: t.skuId,
      page_section: null == S ? true : S.pageSection,
      page_category: null == S ? true : S.pageCategory,
      tile_type: i.Z[t.type],
      tile_position: String(null == S ? true : S.tilePosition),
      cta_name: "gift button",
      page_type: k || "home"
    }), (0, u.Z)({
      skuId: (0, f.S)({
        product: t,
        selectedVariantIndex: m
      }),
      isGift: true,
      giftingOrigin: g.Wt.SHOP_PAGE,
      analyticsLocations: P,
      returnRef: y,
      variantsReturnStyle: a.v.VARIANTS_GROUP,
      onClose: null != j ? e => {
        e && j()
      } : true
    })
  };
  return O ? (0, r.jsx)(s.Button, {
    variant: n ? "primary" : "secondary",
    icon: s.OgN,
    onClick: _,
    text: h.intl.string(h.t.gmnzqM),
    fullWidth: true
  }) : (0, r.jsx)(o.u, {
    text: h.intl.string(h.t["JCFN/y"]),
    delay: x,
    children: (0, r.jsx)(s.hU, {
      "aria-label": h.intl.string(h.t["JCFN/y"]),
      buttonRef: C,
      variant: n ? "primary" : "secondary",
      icon: s.OgN,
      size: "md",
      onClick: _
    })
  })
}