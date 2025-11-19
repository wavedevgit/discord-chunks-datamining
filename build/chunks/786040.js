/** Chunk was on web.js **/
/** chunk id: 786040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J7: () => v,
  LJ: () => T,
  Zh: () => b,
  jB: () => E,
  rC: () => I,
  tA: () => y,
  wO: () => O,
  zp: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk597688 = require("./597688.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk956472 = require("./956472.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let m = Chunk473749.createContext({
  flattenProductVariants: false
});

function g() {
  return Chunk473749.useContext(m).flattenProductVariants
}

function E() {
  return Chunk473749.useContext(m).rentalDuration
}
var b = function(e) {
    return e.NONE = "none", e.NEW = "new", e.ORBS_EXCLUSIVE = "orbs_exclusive", e.LIMITED_TIME = "limited_time", e.NITRO_EXCLUSIVE = "nitro_exclusive", e.ONE_DAY_RENTAL = "one_day_rental", e.THREE_DAY_RENTAL = "three_day_rental", e.RENTAL = "rental", e
  }({}),
  y = function(e) {
    return e.FIAT = "fiat", e.ORBS = "orbs", e
  }({});
let O = (e, t, n) => r => {
    l.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == n ? true : n.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == n ? true : n.pageSection,
      page_category: t === p.AW.HOME || null == n ? true : n.pageCategory,
      page_index: t === p.AW.CATALOG ? null == n ? true : n.pageIndex : true,
      page_size: t === p.AW.CATALOG ? null == n ? true : n.pageSize : true,
      tile_type: i.Z[e.type],
      tile_position: String(null == n ? true : n.tilePosition),
      cta_name: r
    })
  },
  v = (e, t, n, i) => {
    let l = (0, u.Nd)(),
      _ = null == l ? true : l.tab,
      {
        analyticsLocations: p
      } = (0, s.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
      h = (0, a.e7)([c.Z], () => c.Z.getCategoryForProduct(e.skuId)),
      m = r.useRef(null);
    return r.useCallback(t => r => {
      if (null == h) return;
      let a = (0, f.oQ)({
        product: e
      });
      m.current = r.currentTarget, null == n || n(), (0, d.T)({
        product: e,
        category: h,
        shouldCheckoutWithOrbs: a,
        analyticsLocations: p,
        analyticsSource: t,
        returnRef: m,
        tab: _,
        rentalDuration: i
      })
    }, [e, _, h, p, n, i])(t)
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
    let t = g(),
      n = (0, a.e7)([c.Z], () => {
        var n;
        return t ? c.Z.getProduct(e) : null == (n = c.Z.getCategoryForProduct(e)) ? true : n.products.find(t => t.skuId === e)
      });
    return (0, _.Cr)(n)
  }