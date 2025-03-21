/** Chunk was on 18475 **/
n.d(t, {
  E: () => f
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
  p = n(981631);

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    f = (0, a.sp)(),
    h = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
    _ = (0, d.x)(),
    m = l.ZP.canUseCollectibles(_),
    b = r.useRef(null),
    [g, E] = r.useState(!1),
    [v, O] = r.useState(!1),
    y = (0, u.B)("shop_product_card");
  return r.useEffect(() => (g && null === b.current ? b.current = setTimeout(() => {
    O(!0)
  }, 1e3) : g || (null !== b.current && (clearTimeout(b.current), b.current = null), O(!1)), () => {
    null !== b.current && (clearTimeout(b.current), b.current = null)
  }), [g]), r.useEffect(() => {
    if (v && y) {
      let r = null != h ? (0, c.Vw)(h, m, !1) : null,
        i = null != h ? (0, c.eu)(h, m, !1) : void 0;
      o.default.track(p.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == f ? void 0 : f.sessionId,
        sku_id: e,
        display_price: null == r ? void 0 : r.amount,
        display_price_currency: null == r ? void 0 : r.currency.toString(),
        display_price_strikethrough: i,
        position: null == f ? void 0 : f.tilePosition,
        page_type: t,
        page_category: null == f ? void 0 : f.pageCategory,
        page_section: null == f ? void 0 : f.pageSection,
        type: n,
        category_position: null == f ? void 0 : f.categoryPosition
      })
    }
  }, [null == f ? void 0 : f.sessionId, null == f ? void 0 : f.categoryPosition, null == f ? void 0 : f.pageCategory, null == f ? void 0 : f.pageSection, null == f ? void 0 : f.tilePosition, v, m, y, t, h, e, n]), {
    handleCardVisibilityChange: e => {
      E(e)
    }
  }
}