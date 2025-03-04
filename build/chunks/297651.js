/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  E: () => f
}), r(47120);
var n = r(192379),
  l = r(442837),
  i = r(626135),
  o = r(74538),
  s = r(381585),
  a = r(597688),
  c = r(884697),
  u = r(819490),
  d = r(82892),
  p = r(981631);

function f(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    f = (0, s.sp)(),
    b = (0, l.e7)([a.Z], () => a.Z.getProduct(e)),
    h = (0, d.x)(),
    m = o.ZP.canUseCollectibles(h),
    C = n.useRef(null),
    [g, v] = n.useState(!1),
    [x, j] = n.useState(!1),
    _ = (0, u.B)("shop_product_card");
  return n.useEffect(() => (g && null === C.current ? C.current = setTimeout(() => {
    j(!0)
  }, 1e3) : g || (null !== C.current && (clearTimeout(C.current), C.current = null), j(!1)), () => {
    null !== C.current && (clearTimeout(C.current), C.current = null)
  }), [g]), n.useEffect(() => {
    if (x && _) {
      let n = null != b ? (0, c.Vw)(b, m, !1) : null,
        l = null != b ? (0, c.eu)(b, m, !1) : void 0;
      i.default.track(p.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == f ? void 0 : f.sessionId,
        sku_id: e,
        display_price: null == n ? void 0 : n.amount,
        display_price_currency: null == n ? void 0 : n.currency.toString(),
        display_price_strikethrough: l,
        position: null == f ? void 0 : f.tilePosition,
        page_type: t,
        page_category: null == f ? void 0 : f.pageCategory,
        page_section: null == f ? void 0 : f.pageSection,
        type: r,
        category_position: null == f ? void 0 : f.categoryPosition
      })
    }
  }, [null == f ? void 0 : f.sessionId, null == f ? void 0 : f.categoryPosition, null == f ? void 0 : f.pageCategory, null == f ? void 0 : f.pageSection, null == f ? void 0 : f.tilePosition, x, m, _, t, b, e, r]), {
    handleCardVisibilityChange: e => {
      v(e)
    }
  }
}