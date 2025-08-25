/** Chunk was on web.js **/
/** chunk id: 297651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _
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
let f = 1e3;

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "product",
    _ = (0, s.sp)(),
    p = (0, i.e7)([l.Z], () => l.Z.getProduct(e)),
    h = (0, u.x)(),
    m = a.ZP.canUseCollectibles(h),
    g = r.useRef(null),
    E = r.useCallback(() => {
      let r = null != p ? (0, c.Vw)(p, m, false) : null,
        i = null != p ? (0, c.eu)(p, m, false) : true;
      o.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == _ ? true : _.sessionId,
        sku_id: e,
        display_price: null == r ? true : r.amount,
        display_price_currency: null == r ? true : r.currency.toString(),
        display_price_strikethrough: i,
        position: null == _ ? true : _.tilePosition,
        page_type: t,
        page_category: null == _ ? true : _.pageCategory,
        page_section: null == _ ? true : _.pageSection,
        type: n,
        category_position: null == _ ? true : _.categoryPosition
      })
    }, [null == _ ? true : _.sessionId, null == _ ? true : _.categoryPosition, null == _ ? true : _.pageCategory, null == _ ? true : _.pageSection, null == _ ? true : _.tilePosition, m, t, p, e, n]),
    b = r.useCallback(e => {
      e ? null === g.current && (g.current = setTimeout(() => {
        E(), g.current = null
      }, f)) : null !== g.current && (clearTimeout(g.current), g.current = null)
    }, [E]);
  return r.useEffect(() => () => {
    null !== g.current && (clearTimeout(g.current), g.current = null)
  }, []), {
    handleCardVisibilityChange: b
  }
}