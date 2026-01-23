/** Chunk was on 21724 **/
/** chunk id: 878112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk635358 = require("./635358.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk238184 = require("./238184.js"),
  Chunk766172 = require("./766172.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let g = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: g,
    returnRef: h,
    onSuccess: O,
    tooltipDelay: j,
    fullWidth: x = false
  } = e, {
    analyticsLocations: P
  } = (0, c.Ay)(), A = l.useRef(null), C = (0, p.uM)(), k = (0, v.A)(), R = e => {
    e.stopPropagation(), d.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == C ? true : C.sessionId,
      sku_id: t.skuId,
      page_section: null == C ? true : C.pageSection,
      page_category: null == C ? true : C.pageCategory,
      tile_type: a.R[t.type],
      tile_position: String(null == C ? true : C.tilePosition),
      cta_name: "gift button",
      page_type: k || "home"
    }), (0, u.A)({
      skuId: (0, b.Y)({
        product: t,
        selectedVariantIndex: g
      }),
      isGift: true,
      giftingOrigin: y.vQ.SHOP_PAGE,
      analyticsLocations: P,
      returnRef: h,
      variantsReturnStyle: i.g.VARIANTS_GROUP,
      onClose: null != O ? e => {
        e && O()
      } : true
    })
  };
  return x ? (0, r.jsx)(s.Button, {
    variant: n ? "primary" : "secondary",
    icon: s.okO,
    onClick: R,
    text: f.intl.string(f.t.gmnzqM),
    fullWidth: true
  }) : (0, r.jsx)(o.m, {
    text: f.intl.string(f.t["JCFN/y"]),
    delay: j,
    children: (0, r.jsx)(s.K0, {
      "aria-label": f.intl.string(f.t["JCFN/y"]),
      buttonRef: A,
      variant: n ? "primary" : "secondary",
      icon: s.okO,
      size: "md",
      onClick: R
    })
  })
}