/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  E: () => f
}), r(47120);
var n = r(192379),
  i = r(442837),
  l = r(626135),
  o = r(74538),
  a = r(381585),
  s = r(597688),
  c = r(884697),
  d = r(819490),
  u = r(82892),
  p = r(981631);

function f(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    f = (0, a.sp)(),
    h = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
    b = (0, u.x)(),
    C = o.ZP.canUseCollectibles(b),
    m = n.useRef(null),
    [g, v] = n.useState(!1),
    [x, _] = n.useState(!1),
    j = (0, d.B)("shop_product_card");
  return n.useEffect(() => (g && null === m.current ? m.current = setTimeout(() => {
    _(!0)
  }, 1e3) : g || (null !== m.current && (clearTimeout(m.current), m.current = null), _(!1)), () => {
    null !== m.current && (clearTimeout(m.current), m.current = null)
  }), [g]), n.useEffect(() => {
    if (x && j) {
      let n = null != h ? (0, c.Vw)(h, C, !1) : null,
        i = null != h ? (0, c.eu)(h, C, !1) : void 0;
      l.default.track(p.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == f ? void 0 : f.sessionId,
        sku_id: e,
        display_price: null == n ? void 0 : n.amount,
        display_price_currency: null == n ? void 0 : n.currency.toString(),
        display_price_strikethrough: i,
        position: null == f ? void 0 : f.tilePosition,
        page_type: t,
        page_category: null == f ? void 0 : f.pageCategory,
        page_section: null == f ? void 0 : f.pageSection,
        type: r,
        category_position: null == f ? void 0 : f.categoryPosition
      })
    }
  }, [null == f ? void 0 : f.sessionId, null == f ? void 0 : f.categoryPosition, null == f ? void 0 : f.pageCategory, null == f ? void 0 : f.pageSection, null == f ? void 0 : f.tilePosition, x, C, j, t, h, e, r]), {
    handleCardVisibilityChange: e => {
      v(e)
    }
  }
}