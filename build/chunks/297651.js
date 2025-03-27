/** Chunk was on 74249 **/
n.d(t, {
  E: () => b
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
  h = n(981631);

function b(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
    b = (0, a.sp)(),
    p = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
    f = (0, d.x)(),
    g = l.ZP.canUseCollectibles(f),
    O = r.useRef(null),
    [v, m] = r.useState(!1),
    [E, y] = r.useState(!1),
    _ = (0, u.B)("shop_product_card");
  return r.useEffect(() => (v && null === O.current ? O.current = setTimeout(() => {
    y(!0)
  }, 1e3) : v || (null !== O.current && (clearTimeout(O.current), O.current = null), y(!1)), () => {
    null !== O.current && (clearTimeout(O.current), O.current = null)
  }), [v]), r.useEffect(() => {
    if (E && _) {
      let r = null != p ? (0, c.Vw)(p, g, !1) : null,
        i = null != p ? (0, c.eu)(p, g, !1) : void 0;
      o.default.track(h.rMx.COLLECTIBLES_TILE_IMPRESSION, {
        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
        sku_id: e,
        display_price: null == r ? void 0 : r.amount,
        display_price_currency: null == r ? void 0 : r.currency.toString(),
        display_price_strikethrough: i,
        position: null == b ? void 0 : b.tilePosition,
        page_type: t,
        page_category: null == b ? void 0 : b.pageCategory,
        page_section: null == b ? void 0 : b.pageSection,
        type: n,
        category_position: null == b ? void 0 : b.categoryPosition
      })
    }
  }, [null == b ? void 0 : b.sessionId, null == b ? void 0 : b.categoryPosition, null == b ? void 0 : b.pageCategory, null == b ? void 0 : b.pageSection, null == b ? void 0 : b.tilePosition, E, g, _, t, p, e, n]), {
    handleCardVisibilityChange: e => {
      m(e)
    }
  }
}