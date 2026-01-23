/** Chunk was on web.js **/
/** chunk id: 597783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let f = 1e3;

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    p = (0, o.uM)(),
    _ = (0, i.bG)([l.A], () => l.A.getProduct(e)),
    h = (0, u.i)(),
    m = s.Ay.canUseCollectibles(h),
    g = r.useRef(null),
    E = r.useCallback(() => {
      let r = null != _ ? (0, c.Br)(_, m, false) : null,
        i = null != _ ? (0, c.c7)(_, m, false) : true;
      a.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == p ? true : p.sessionId,
        sku_id: e,
        display_price: null == r ? true : r.amount,
        display_price_currency: null == r ? true : r.currency.toString(),
        display_price_strikethrough: i,
        position: null == p ? true : p.tilePosition,
        page_type: t,
        page_category: null == p ? true : p.pageCategory,
        page_section: null == p ? true : p.pageSection,
        type: n,
        category_position: null == p ? true : p.categoryPosition
      })
    }, [null == p ? true : p.sessionId, null == p ? true : p.categoryPosition, null == p ? true : p.pageCategory, null == p ? true : p.pageSection, null == p ? true : p.tilePosition, m, t, _, e, n]),
    y = r.useCallback(e => {
      e ? null === g.current && (g.current = setTimeout(() => {
        E(), g.current = null
      }, f)) : null !== g.current && (clearTimeout(g.current), g.current = null)
    }, [E]);
  return r.useEffect(() => () => {
    null !== g.current && (clearTimeout(g.current), g.current = null)
  }, []), {
    handleCardVisibilityChange: y
  }
}