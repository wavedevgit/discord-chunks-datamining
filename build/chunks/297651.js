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
    g = (0, r.e7)([o.Z], () => o.Z.getProduct(e)),
    h = (0, d.x)(),
    v = a.ZP.canUseCollectibles(h),
    m = l.useRef(null),
    f = l.useCallback(() => {
      let l = null != g ? (0, u.Vw)(g, v, false) : null,
        r = null != g ? (0, u.eu)(g, v, false) : true;
      n.default.track(c.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == p ? true : p.sessionId,
        sku_id: e,
        display_price: null == l ? true : l.amount,
        display_price_currency: null == l ? true : l.currency.toString(),
        display_price_strikethrough: r,
        position: null == p ? true : p.tilePosition,
        page_type: t,
        page_category: null == p ? true : p.pageCategory,
        page_section: null == p ? true : p.pageSection,
        type: i,
        category_position: null == p ? true : p.categoryPosition
      })
    }, [null == p ? true : p.sessionId, null == p ? true : p.categoryPosition, null == p ? true : p.pageCategory, null == p ? true : p.pageSection, null == p ? true : p.tilePosition, v, t, g, e, i]),
    x = l.useCallback(e => {
      e ? null === m.current && (m.current = setTimeout(() => {
        f(), m.current = null
      }, 1e3)) : null !== m.current && (clearTimeout(m.current), m.current = null)
    }, [f]);
  return l.useEffect(() => () => {
    null !== m.current && (clearTimeout(m.current), m.current = null)
  }, []), {
    handleCardVisibilityChange: x
  }
}