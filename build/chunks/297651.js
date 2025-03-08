/** Chunk was on 74329 **/
n.d(t, {
  E: () => p
}), n(47120);
var r = n(192379),
  i = n(442837),
  o = n(626135),
  l = n(74538),
  a = n(381585),
  s = n(597688),
  c = n(884697),
  u = n(819490),
  d = n(82892),
  _ = n(981631);

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    p = (0, a.sp)(),
    E = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
    f = (0, d.x)(),
    m = l.ZP.canUseCollectibles(f),
    h = r.useRef(null),
    [b, g] = r.useState(!1),
    [O, N] = r.useState(!1),
    I = (0, u.B)("shop_product_card");
  return r.useEffect(() => (b && null === h.current ? h.current = setTimeout(() => {
    N(!0)
  }, 1e3) : b || (null !== h.current && (clearTimeout(h.current), h.current = null), N(!1)), () => {
    null !== h.current && (clearTimeout(h.current), h.current = null)
  }), [b]), r.useEffect(() => {
    if (O && I) {
      let r = null != E ? (0, c.Vw)(E, m, !1) : null,
        i = null != E ? (0, c.eu)(E, m, !1) : void 0;
      o.default.track(_.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
        sku_id: e,
        display_price: null == r ? void 0 : r.amount,
        display_price_currency: null == r ? void 0 : r.currency.toString(),
        display_price_strikethrough: i,
        position: null == p ? void 0 : p.tilePosition,
        page_type: t,
        page_category: null == p ? void 0 : p.pageCategory,
        page_section: null == p ? void 0 : p.pageSection,
        type: n,
        category_position: null == p ? void 0 : p.categoryPosition
      })
    }
  }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, O, m, I, t, E, e, n]), {
    handleCardVisibilityChange: e => {
      g(e)
    }
  }
}