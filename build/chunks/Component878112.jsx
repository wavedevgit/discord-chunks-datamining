/** Chunk was on web.js **/
/** chunk id: 878112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
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
let E = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: E,
    returnRef: y,
    onSuccess: b,
    tooltipDelay: O,
    fullWidth: v = false
  } = e, {
    analyticsLocations: A
  } = (0, c.Ay)(), I = i.useRef(null), S = (0, f.uM)(), T = (0, p.A)(), C = e => {
    e.stopPropagation(), d.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == S ? true : S.sessionId,
      sku_id: t.skuId,
      page_section: null == S ? true : S.pageSection,
      page_category: null == S ? true : S.pageCategory,
      tile_type: a.R[t.type],
      tile_position: String(null == S ? true : S.tilePosition),
      cta_name: "gift button",
      page_type: T || "home"
    }), (0, u.A)({
      skuId: (0, _.Y)({
        product: t,
        selectedVariantIndex: E
      }),
      isGift: true,
      giftingOrigin: m.vQ.SHOP_PAGE,
      analyticsLocations: A,
      returnRef: y,
      variantsReturnStyle: o.g.VARIANTS_GROUP,
      onClose: null != b ? e => {
        e && b()
      } : true
    })
  };
  return v ? (0, r.jsx)(l.Button, {
    variant: n ? "primary" : "secondary",
    icon: l.okO,
    onClick: C,
    text: g.intl.string(g.t.gmnzqM),
    fullWidth: true
  }) : (0, r.jsx)(s.m, {
    text: g.intl.string(g.t["JCFN/y"]),
    delay: O,
    children: (0, r.jsx)(l.K0, {
      "aria-label": g.intl.string(g.t["JCFN/y"]),
      buttonRef: I,
      variant: n ? "primary" : "secondary",
      icon: l.okO,
      size: "md",
      onClick: C
    })
  })
}