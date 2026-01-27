/** Chunk was on web.js **/
/** chunk id: 561769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AW: () => y,
  Hi: () => b,
  UU: () => O,
  Vm: () => A,
  ql: () => v,
  sC: () => E,
  v3: () => m
});
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk417597 = require("./417597.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk590180 = require("./590180.js"),
  Chunk161918 = require("./161918.jsx"),
  Chunk572595 = require("./572595.jsx"),
  Chunk57020 = require("./57020.js"),
  Chunk940622 = require("./940622.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js");
let m = Chunk64700.createContext({
  flattenProductVariants: false
});

function g() {
  return r.useContext(m).flattenProductVariants
}

function E() {
  return r.useContext(m).rentalDuration
}
var y = function(e) {
    return e.NONE = "none", e.NEW = "new", e.ORBS_EXCLUSIVE = "orbs_exclusive", e.LIMITED_TIME = "limited_time", e.NITRO_EXCLUSIVE = "nitro_exclusive", e.THREE_DAY_RENTAL = "three_day_rental", e.SEVEN_DAY_RENTAL = "seven_day_rental", e.RENTAL = "rental", e
  }({}),
  b = function(e) {
    return e.FIAT = "fiat", e.ORBS = "orbs", e
  }({});
let O = (e, t, n) => r => {
    l.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == n ? true : n.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == n ? true : n.pageSection,
      page_category: t === _.G2.HOME || null == n ? true : n.pageCategory,
      page_index: t === _.G2.CATALOG ? null == n ? true : n.pageIndex : true,
      page_size: t === _.G2.CATALOG ? null == n ? true : n.pageSize : true,
      tile_type: i.R[e.type],
      tile_position: String(null == n ? true : n.tilePosition),
      cta_name: r
    })
  },
  v = (e, t, n, i) => {
    let l = (0, u.Mk)(),
      p = null == l ? true : l.tab,
      {
        analyticsLocations: _
      } = (0, s.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
      h = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
      m = r.useRef(null);
    return r.useCallback(t => r => {
      if (null == h) return;
      let a = (0, f.Ak)({
        product: e
      });
      m.current = r.currentTarget, null == n || n(), (0, d.t)({
        product: e,
        category: h,
        shouldCheckoutWithOrbs: a,
        analyticsLocations: _,
        analyticsSource: t,
        returnRef: m,
        tab: p,
        rentalDuration: i
      })
    }, [e, p, h, _, n, i])(t)
  },
  A = e => {
    let t = g(),
      n = (0, a.bG)([c.A], () => {
        var n;
        return t ? c.A.getProduct(e) : null == (n = c.A.getCategoryForProduct(e)) ? true : n.products.find(t => t.skuId === e)
      });
    return (0, p.Iv)(n)
  }