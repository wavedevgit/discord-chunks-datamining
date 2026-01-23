/** Chunk was on 65599 **/
/** chunk id: 597783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk993408 = require("./993408.js"),
  Chunk331884 = require("./331884.js"),
  Chunk652215 = require("./652215.js");

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    m = (0, s.uM)(),
    p = (0, l.bG)([o.A], () => o.A.getProduct(e)),
    h = (0, d.i)(),
    x = i.Ay.canUseCollectibles(h),
    g = a.useRef(null),
    f = a.useCallback(() => {
      let a = null != p ? (0, c.Br)(p, x, false) : null,
        l = null != p ? (0, c.c7)(p, x, false) : true;
      r.default.track(u.HAw.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == m ? true : m.sessionId,
        sku_id: e,
        display_price: null == a ? true : a.amount,
        display_price_currency: null == a ? true : a.currency.toString(),
        display_price_strikethrough: l,
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