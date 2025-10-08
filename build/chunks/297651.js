/** Chunk was on 204 **/
/** chunk id: 297651, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  E: () => p
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk82892 = require("./82892.js"),
  Chunk981631 = require("./981631.js");

function p(e, t) {
  let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    p = (0, s.sp)(),
    g = (0, n.e7)([o.Z], () => o.Z.getProduct(e)),
    h = (0, u.x)(),
    m = a.ZP.canUseCollectibles(h),
    v = l.useRef(null),
    x = l.useCallback(() => {
      let l = null != g ? (0, d.Vw)(g, m, false) : null,
        n = null != g ? (0, d.eu)(g, m, false) : true;
      r.default.track(c.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == p ? true : p.sessionId,
        sku_id: e,
        display_price: null == l ? true : l.amount,
        display_price_currency: null == l ? true : l.currency.toString(),
        display_price_strikethrough: n,
        position: null == p ? true : p.tilePosition,
        page_type: t,
        page_category: null == p ? true : p.pageCategory,
        page_section: null == p ? true : p.pageSection,
        type: i,
        category_position: null == p ? true : p.categoryPosition
      })
    }, [null == p ? true : p.sessionId, null == p ? true : p.categoryPosition, null == p ? true : p.pageCategory, null == p ? true : p.pageSection, null == p ? true : p.tilePosition, m, t, g, e, i]),
    f = l.useCallback(e => {
      e ? null === v.current && (v.current = setTimeout(() => {
        x(), v.current = null
      }, 1e3)) : null !== v.current && (clearTimeout(v.current), v.current = null)
    }, [x]);
  return l.useEffect(() => () => {
    null !== v.current && (clearTimeout(v.current), v.current = null)
  }, []), {
    handleCardVisibilityChange: f
  }
}