/** Chunk was on 45620 **/
/** chunk id: 297651, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => p
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk82892 = require("./82892.js"),
  Chunk981631 = require("./981631.js");

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    p = (0, o.sp)(),
    g = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
    f = (0, u.x)(),
    b = i.ZP.canUseCollectibles(f),
    h = r.useRef(null),
    m = r.useCallback(() => {
      let r = null != g ? (0, c.Vw)(g, b, false) : null,
        l = null != g ? (0, c.eu)(g, b, false) : true;
      a.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == p ? true : p.sessionId,
        sku_id: e,
        display_price: null == r ? true : r.amount,
        display_price_currency: null == r ? true : r.currency.toString(),
        display_price_strikethrough: l,
        position: null == p ? true : p.tilePosition,
        page_type: t,
        page_category: null == p ? true : p.pageCategory,
        page_section: null == p ? true : p.pageSection,
        type: n,
        category_position: null == p ? true : p.categoryPosition
      })
    }, [null == p ? true : p.sessionId, null == p ? true : p.categoryPosition, null == p ? true : p.pageCategory, null == p ? true : p.pageSection, null == p ? true : p.tilePosition, b, t, g, e, n]),
    _ = r.useCallback(e => {
      e ? null === h.current && (h.current = setTimeout(() => {
        m(), h.current = null
      }, 1e3)) : null !== h.current && (clearTimeout(h.current), h.current = null)
    }, [m]);
  return r.useEffect(() => () => {
    null !== h.current && (clearTimeout(h.current), h.current = null)
  }, []), {
    handleCardVisibilityChange: _
  }
}