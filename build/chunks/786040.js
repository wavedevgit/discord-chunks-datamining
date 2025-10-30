/** Chunk was on web.js **/
/** chunk id: 786040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J7: () => v,
  LJ: () => T,
  Zh: () => b,
  rC: () => I,
  tA: () => y,
  wO: () => O
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk685816 = require("./685816.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk597688 = require("./597688.js"),
  Chunk501678 = require("./501678.jsx"),
  Chunk994587 = require("./994587.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk956472 = require("./956472.js"),
  Chunk619899 = require("./619899.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  b = function(e) {
    return e.NONE = "none", e.NEW = "new", e.ORBS_EXCLUSIVE = "orbs_exclusive", e.NEW_COLOR_VARIANT = "new_color_variant", e.LIMITED_TIME = "limited_time", e
  }({}),
  y = function(e) {
    return e.FIAT = "fiat", e.ORBS = "orbs", e
  }({});
let O = (e, t, n) => r => {
    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == n ? true : n.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == n ? true : n.pageSection,
      page_category: t === g.AW.HOME || null == n ? true : n.pageCategory,
      page_index: t === g.AW.CATALOG ? null == n ? true : n.pageIndex : true,
      page_size: t === g.AW.CATALOG ? null == n ? true : n.pageSize : true,
      tile_type: i.Z[e.type],
      tile_position: String(null == n ? true : n.tilePosition),
      cta_name: r
    })
  },
  v = (e, t, n) => {
    let i = (0, f.Nd)(),
      c = null == i ? true : i.tab,
      h = (0, d.Vc)(),
      E = null == h ? true : h.blockType,
      {
        analyticsLocations: b
      } = (0, l.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
      y = (0, o.e7)([u.Z], () => u.Z.getCategoryForProduct(e.skuId)),
      O = r.useRef(null),
      v = (0, m.G)("useHandlePreviewClick"),
      I = null != E && E === a.z.HERO && v ? g.Ch.THUMBNAIL : g.Ch.DEFAULT;
    return r.useCallback(t => r => {
      if (null == y) return;
      let i = (0, p.oQ)({
        product: e
      });
      O.current = r.currentTarget, null == n || n(), (0, _.T)({
        product: e,
        category: y,
        shouldCheckoutWithOrbs: i,
        analyticsLocations: b,
        analyticsSource: t,
        returnRef: O,
        tab: c,
        variantType: I
      })
    }, [e, c, y, b, I, n])(t)
  },
  I = e => {
    if (null == e) return null;
    if (e.type === i.Z.VARIANTS_GROUP) {
      if (null == e.variants || 0 === e.variants.length) return null;
      let t = e.variants[0];
      if (null == t) return null;
      let [n] = t.items;
      return n.type
    }
    return e.type
  },
  T = e => {
    let t = (0, o.e7)([u.Z], () => u.Z.getCategoryForProduct(e)),
      n = null == t ? true : t.products.find(t => t.skuId === e);
    return (0, h.Cr)(n)
  }