/** Chunk was on web.js **/
/** chunk id: 786040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J7: () => N,
  LJ: () => w,
  SS: () => R,
  Zh: () => S,
  rC: () => P,
  tA: () => A,
  wO: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk685816 = require("./685816.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
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
  Chunk619899 = require("./619899.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  S = function(e) {
    return e.NONE = "none", e.NEW = "new", e.ORBS_EXCLUSIVE = "orbs_exclusive", e.NEW_COLOR_VARIANT = "new_color_variant", e.LIMITED_TIME = "limited_time", e
  }({}),
  A = function(e) {
    return e.FIAT = "fiat", e.ORBS = "orbs", e
  }({});
let C = (e, t, n) => r => {
    u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == n ? true : n.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == n ? true : n.pageSection,
      page_category: t === I.AW.HOME || null == n ? true : n.pageCategory,
      page_index: t === I.AW.CATALOG ? null == n ? true : n.pageIndex : true,
      page_size: t === I.AW.CATALOG ? null == n ? true : n.pageSize : true,
      tile_type: a.Z[e.type],
      tile_position: String(null == n ? true : n.tilePosition),
      cta_name: r
    })
  },
  N = (e, t, n) => {
    let r = (0, p.Nd)(),
      a = null == r ? true : r.tab,
      u = (0, _.Vc)(),
      f = null == u ? true : u.blockType,
      {
        analyticsLocations: h
      } = (0, c.ZP)(l.Z.COLLECTIBLES_SHOP_CARD),
      g = (0, s.e7)([d.Z], () => d.Z.getCategoryForProduct(e.skuId)),
      E = i.useRef(null),
      b = (0, v.G)("useHandlePreviewClick"),
      O = null != f && f === o.z.HERO && b ? I.Ch.THUMBNAIL : I.Ch.DEFAULT;
    return i.useCallback(t => r => {
      if (null == g) return;
      let i = (0, y.oQ)({
        product: e
      });
      E.current = r.currentTarget, null == n || n(), (0, m.T)({
        product: e,
        category: g,
        shouldCheckoutWithOrbs: i,
        analyticsLocations: h,
        analyticsSource: t,
        returnRef: E,
        tab: a,
        variantType: O
      })
    }, [e, a, g, h, O, n])(t)
  },
  R = e => {
    let {
      previewingVariantIndex: t,
      handleEntering: n,
      handleLeaving: o
    } = (0, b.f)(e), l = (0, s.e7)([f.Z], () => f.Z.purchases), c = (0, h.o)(e, l), u = (0, E.o)(e, l, t), [d, _] = i.useState(false);
    if (e.type === a.Z.VARIANTS_GROUP) {
      let i = (0, r.jsx)(g.P, {
        variantGroupProduct: e,
        previewingVariantIndexProps: {
          previewingVariantIndex: t,
          handleEntering: n,
          handleLeaving: o
        },
        selectedVariantIndex: c,
        setIsHoveringOnSwitch: _,
        minimal: true,
        alternativeBackgroundColor: (null == u ? true : u.type) === a.Z.PROFILE_EFFECT
      });
      return [c, i]
    }
    return [c, null]
  },
  P = e => {
    if (null == e) return null;
    if (e.type === a.Z.VARIANTS_GROUP) {
      if (null == e.variants || 0 === e.variants.length) return null;
      let t = e.variants[0];
      if (null == t) return null;
      let [n] = t.items;
      return n.type
    }
    return e.type
  },
  w = e => {
    let t = (0, s.e7)([d.Z], () => d.Z.getCategoryForProduct(e)),
      n = null == t ? true : t.products.find(t => t.skuId === e);
    return (0, O.Cr)(n)
  }