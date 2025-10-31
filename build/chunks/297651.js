/** Chunk was on 30372 **/
/** chunk id: 297651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => m
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

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    m = (0, o.sp)(),
    p = (0, r.e7)([s.Z], () => s.Z.getProduct(e)),
    h = (0, d.x)(),
    x = i.ZP.canUseCollectibles(h),
    g = a.useRef(null),
    f = a.useCallback(() => {
      let a = null != p ? (0, c.Vw)(p, x, false) : null,
        r = null != p ? (0, c.eu)(p, x, false) : true;
      l.default.track(u.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == m ? true : m.sessionId,
        sku_id: e,
        display_price: null == a ? true : a.amount,
        display_price_currency: null == a ? true : a.currency.toString(),
        display_price_strikethrough: r,
        position: null == m ? true : m.tilePosition,
        page_type: t,
        page_category: null == m ? true : m.pageCategory,
        page_section: null == m ? true : m.pageSection,
        type: n,
        category_position: null == m ? true : m.categoryPosition
      })
    }, [null == m ? true : m.sessionId, null == m ? true : m.categoryPosition, null == m ? true : m.pageCategory, null == m ? true : m.pageSection, null == m ? true : m.tilePosition, x, t, p, e, n]),
    b = a.useCallback(e => {
      e ? null === g.current && (g.current = setTimeout(() => {
        f(), g.current = null
      }, 1e3)) : null !== g.current && (clearTimeout(g.current), g.current = null)
    }, [f]);
  return a.useEffect(() => () => {
    null !== g.current && (clearTimeout(g.current), g.current = null)
  }, []), {
    handleCardVisibilityChange: b
  }
}