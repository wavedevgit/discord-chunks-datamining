/** Chunk was on 45620 **/
/** chunk id: 786040, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J7: () => O,
  SS: () => T,
  oc: () => v,
  rC: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk685816 = require("./685816.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk201964 = require("./201964.js"),
  Chunk361110 = require("./361110.js"),
  Chunk956472 = require("./956472.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let v = (e, t, n, r) => {
    u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == n ? true : n.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == n ? true : n.pageSection,
      page_category: t === S.AW.HOME || null == n ? true : n.pageCategory,
      page_index: t === S.AW.CATALOG ? null == n ? true : n.pageIndex : true,
      page_size: t === S.AW.CATALOG ? null == n ? true : n.pageSize : true,
      tile_type: a.Z[e.type],
      tile_position: String(null == n ? true : n.tilePosition),
      cta_name: r
    })
  },
  O = (e, t, n) => {
    let r = (0, d.sp)(),
      {
        analyticsLocations: a
      } = (0, c.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
      u = (0, s.e7)([g.Z], () => g.Z.getCategoryForProduct(e.skuId)),
      p = l.useRef(null),
      f = (0, E.G)("useHandlePreviewClick"),
      C = null != t.shopBlockType && t.shopBlockType === i.z.HERO && f ? S.Ch.THUMBNAIL : S.Ch.DEFAULT;
    return l.useCallback(n => l => {
      if (null == u) return;
      let i = (0, b.oQ)({
        product: e
      });
      p.current = l.currentTarget, v(e, t.tab, r, null), (0, h.T)({
        product: e,
        category: u,
        shouldCheckoutWithOrbs: i,
        analyticsLocations: a,
        analyticsSource: n,
        returnRef: p,
        tab: t.tab,
        variantType: C
      })
    }, [e, t.tab, u, a, r, C])(n)
  },
  T = e => {
    let {
      previewingVariantIndex: t,
      handleEntering: n,
      handleLeaving: i
    } = (0, m.f)(e), o = (0, s.e7)([p.Z], () => p.Z.purchases), c = (0, f.o)(e, o), u = (0, _.o)(e, o, t), [d, g] = l.useState(false);
    if (e.type === a.Z.VARIANTS_GROUP) {
      let l = (0, r.jsx)(C.P, {
        variantGroupProduct: e,
        previewingVariantIndexProps: {
          previewingVariantIndex: t,
          handleEntering: n,
          handleLeaving: i
        },
        selectedVariantIndex: c,
        setIsHoveringOnSwitch: g,
        minimal: true,
        alternativeBackgroundColor: (null == u ? true : u.type) === a.Z.PROFILE_EFFECT
      });
      return [c, l]
    }
    return [c, null]
  },
  y = e => {
    if (null == e) return null;
    if (e.type === a.Z.VARIANTS_GROUP) {
      if (null == e.variants || 0 === e.variants.length) return null;
      let t = e.variants[0];
      if (null == t) return null;
      let [n] = t.items;
      return n.type
    }
    return e.type
  }