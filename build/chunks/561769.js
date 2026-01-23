/** Chunk was on 58197 **/
/** chunk id: 561769, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  AW: () => I,
  Hi: () => y,
  UU: () => C,
  Vm: () => v,
  ql: () => j,
  sC: () => O,
  v3: () => b
});
var n, r, Chunk64700 = require("./64700.js"),
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
let b = Chunk64700.createContext({
  flattenProductVariants: false
});

function O() {
  return l.useContext(b).rentalDuration
}
var I = ((n = {}).NONE = "none", n.NEW = "new", n.ORBS_EXCLUSIVE = "orbs_exclusive", n.LIMITED_TIME = "limited_time", n.NITRO_EXCLUSIVE = "nitro_exclusive", n.THREE_DAY_RENTAL = "three_day_rental", n.SEVEN_DAY_RENTAL = "seven_day_rental", n.RENTAL = "rental", n),
  y = ((r = {}).FIAT = "fiat", r.ORBS = "orbs", r);
let C = (e, t, i) => n => {
    u.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == i ? true : i.sessionId,
      sku_id: e.skuId,
      page_type: t,
      page_section: null == i ? true : i.pageSection,
      page_category: t === f.G2.HOME || null == i ? true : i.pageCategory,
      page_index: t === f.G2.CATALOG ? null == i ? true : i.pageIndex : true,
      page_size: t === f.G2.CATALOG ? null == i ? true : i.pageSize : true,
      tile_type: s.R[e.type],
      tile_position: String(null == i ? true : i.tilePosition),
      cta_name: n
    })
  },
  j = (e, t, i, n) => {
    let r = (0, p.Mk)(),
      s = null == r ? true : r.tab,
      {
        analyticsLocations: u
      } = (0, c.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
      h = (0, o.bG)([d.A], () => d.A.getCategoryForProduct(e.skuId)),
      f = l.useRef(null);
    return l.useCallback(t => r => {
      if (null == h) return;
      let l = (0, g.Ak)({
        product: e
      });
      f.current = r.currentTarget, null == i || i(), (0, m.t)({
        product: e,
        category: h,
        shouldCheckoutWithOrbs: l,
        analyticsLocations: u,
        analyticsSource: t,
        returnRef: f,
        tab: s,
        rentalDuration: n
      })
    }, [e, s, h, u, i, n])(t)
  },
  v = e => {
    let t = l.useContext(b).flattenProductVariants,
      i = (0, o.bG)([d.A], () => {
        var i;
        return t ? d.A.getProduct(e) : null == (i = d.A.getCategoryForProduct(e)) ? true : i.products.find(t => t.skuId === e)
      });
    return (0, h.Iv)(i)
  }