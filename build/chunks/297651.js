/** Chunk was on 24389 **/
n.d(t, {
  E: () => h
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
  b = n(981631);

function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    h = (0, a.sp)(),
    p = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
    f = (0, d.x)(),
    g = l.ZP.canUseCollectibles(f),
    O = r.useRef(null),
    [v, m] = r.useState(!1),
    [y, E] = r.useState(!1),
    _ = (0, u.B)("shop_product_card");
  return r.useEffect(() => (v && null === O.current ? O.current = setTimeout(() => {
    E(!0)
  }, 1e3) : v || (null !== O.current && (clearTimeout(O.current), O.current = null), E(!1)), () => {
    null !== O.current && (clearTimeout(O.current), O.current = null)
  }), [v]), r.useEffect(() => {
    if (y && _) {
      let r = null != p ? (0, c.Vw)(p, g, !1) : null,
        i = null != p ? (0, c.eu)(p, g, !1) : void 0;
      o.default.track(b.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
        sku_id: e,
        display_price: null == r ? void 0 : r.amount,
        display_price_currency: null == r ? void 0 : r.currency.toString(),
        display_price_strikethrough: i,
        position: null == h ? void 0 : h.tilePosition,
        page_type: t,
        page_category: null == h ? void 0 : h.pageCategory,
        page_section: null == h ? void 0 : h.pageSection,
        type: n,
        category_position: null == h ? void 0 : h.categoryPosition
      })
    }
  }, [null == h ? void 0 : h.sessionId, null == h ? void 0 : h.categoryPosition, null == h ? void 0 : h.pageCategory, null == h ? void 0 : h.pageSection, null == h ? void 0 : h.tilePosition, y, g, _, t, p, e, n]), {
    handleCardVisibilityChange: e => {
      m(e)
    }
  }
}