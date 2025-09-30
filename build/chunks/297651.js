/** Chunk was on 204 **/
/** chunk id: 297651, original params: e,t,r (module,exports,require) **/
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
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    p = (0, o.sp)(),
    f = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
    b = (0, u.x)(),
    h = a.ZP.canUseCollectibles(b),
    g = n.useRef(null),
    y = n.useCallback(() => {
      let n = null != f ? (0, c.Vw)(f, h, false) : null,
        l = null != f ? (0, c.eu)(f, h, false) : true;
      i.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == p ? true : p.sessionId,
        sku_id: e,
        display_price: null == n ? true : n.amount,
        display_price_currency: null == n ? true : n.currency.toString(),
        display_price_strikethrough: l,
        position: null == p ? true : p.tilePosition,
        page_type: t,
        page_category: null == p ? true : p.pageCategory,
        page_section: null == p ? true : p.pageSection,
        type: r,
        category_position: null == p ? true : p.categoryPosition
      })
    }, [null == p ? true : p.sessionId, null == p ? true : p.categoryPosition, null == p ? true : p.pageCategory, null == p ? true : p.pageSection, null == p ? true : p.tilePosition, h, t, f, e, r]),
    v = n.useCallback(e => {
      e ? null === g.current && (g.current = setTimeout(() => {
        y(), g.current = null
      }, 1e3)) : null !== g.current && (clearTimeout(g.current), g.current = null)
    }, [y]);
  return n.useEffect(() => () => {
    null !== g.current && (clearTimeout(g.current), g.current = null)
  }, []), {
    handleCardVisibilityChange: v
  }
}