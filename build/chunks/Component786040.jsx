/** Chunk was on 45620 **/
/** chunk id: 786040, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J7: () => y,
  SS: () => L,
  oc: () => T,
  rC: () => j
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
  Chunk501678 = require("./501678.jsx"),
  Chunk994587 = require("./994587.jsx"),
  Chunk429368 = require("./429368.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk201964 = require("./201964.js"),
  Chunk361110 = require("./361110.js"),
  Chunk956472 = require("./956472.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let T = (e, t, n, r) => {
    u.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == n ? true : n.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == n ? true : n.pageSection,
      page_category: t === x.AW.HOME || null == n ? true : n.pageCategory,
      page_index: t === x.AW.CATALOG ? null == n ? true : n.pageIndex : true,
      page_size: t === x.AW.CATALOG ? null == n ? true : n.pageSize : true,
      tile_type: i.Z[e.type],
      tile_position: String(null == n ? true : n.tilePosition),
      cta_name: r
    })
  },
  y = (e, t) => {
    let n = (0, h.Nd)(),
      r = null == n ? true : n.tab,
      i = (0, f.Vc)(),
      u = null == i ? true : i.blockType,
      p = (0, d.sp)(),
      {
        analyticsLocations: C
      } = (0, c.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
      m = (0, s.e7)([g.Z], () => g.Z.getCategoryForProduct(e.skuId)),
      b = l.useRef(null),
      E = (0, v.G)("useHandlePreviewClick"),
      O = null != u && u === a.z.HERO && E ? x.Ch.THUMBNAIL : x.Ch.DEFAULT;
    return l.useCallback(t => n => {
      if (null == m) return;
      let l = (0, S.oQ)({
        product: e
      });
      b.current = n.currentTarget, T(e, r, p, null), (0, _.T)({
        product: e,
        category: m,
        shouldCheckoutWithOrbs: l,
        analyticsLocations: C,
        analyticsSource: t,
        returnRef: b,
        tab: r,
        variantType: O
      })
    }, [e, r, m, C, p, O])(t)
  },
  L = e => {
    let {
      previewingVariantIndex: t,
      handleEntering: n,
      handleLeaving: a
    } = (0, E.f)(e), o = (0, s.e7)([p.Z], () => p.Z.purchases), c = (0, C.o)(e, o), u = (0, b.o)(e, o, t), [d, g] = l.useState(false);
    if (e.type === i.Z.VARIANTS_GROUP) {
      let l = (0, r.jsx)(m.P, {
        variantGroupProduct: e,
        previewingVariantIndexProps: {
          previewingVariantIndex: t,
          handleEntering: n,
          handleLeaving: a
        },
        selectedVariantIndex: c,
        setIsHoveringOnSwitch: g,
        minimal: true,
        alternativeBackgroundColor: (null == u ? true : u.type) === i.Z.PROFILE_EFFECT
      });
      return [c, l]
    }
    return [c, null]
  },
  j = e => {
    if (null == e) return null;
    if (e.type === i.Z.VARIANTS_GROUP) {
      if (null == e.variants || 0 === e.variants.length) return null;
      let t = e.variants[0];
      if (null == t) return null;
      let [n] = t.items;
      return n.type
    }
    return e.type
  }