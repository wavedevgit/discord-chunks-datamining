/** Chunk was on 90111 **/
"use strict";
r.d(t, {
  E: () => b
});
var n = r(192379),
  i = r(442837),
  o = r(626135),
  l = r(74538),
  a = r(381585),
  s = r(597688),
  c = r(884697),
  u = r(819490),
  d = r(82892),
  p = r(981631);

function b(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    b = (0, a.sp)(),
    v = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
    f = (0, d.x)(),
    m = l.ZP.canUseCollectibles(f),
    h = n.useRef(null),
    g = (0, u.B)("shop_product_card"),
    x = n.useCallback(() => {
      if (!g) return;
      let n = null != v ? (0, c.Vw)(v, m, !1) : null,
        i = null != v ? (0, c.eu)(v, m, !1) : void 0;
      o.default.track(p.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
        sku_id: e,
        display_price: null == n ? void 0 : n.amount,
        display_price_currency: null == n ? void 0 : n.currency.toString(),
        display_price_strikethrough: i,
        position: null == b ? void 0 : b.tilePosition,
        page_type: t,
        page_category: null == b ? void 0 : b.pageCategory,
        page_section: null == b ? void 0 : b.pageSection,
        type: r,
        category_position: null == b ? void 0 : b.categoryPosition
      })
    }, [null == b ? void 0 : b.sessionId, null == b ? void 0 : b.categoryPosition, null == b ? void 0 : b.pageCategory, null == b ? void 0 : b.pageSection, null == b ? void 0 : b.tilePosition, m, g, t, v, e, r]),
    _ = n.useCallback(e => {
      e ? null === h.current && (h.current = setTimeout(() => {
        x(), h.current = null
      }, 1e3)) : null !== h.current && (clearTimeout(h.current), h.current = null)
    }, [x]);
  return n.useEffect(() => () => {
    null !== h.current && (clearTimeout(h.current), h.current = null)
  }, []), {
    handleCardVisibilityChange: _
  }
}