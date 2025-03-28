/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Kp: () => O,
  u9: () => C,
  xV: () => y
}), n(474991), n(398202), n(301563), n(757143), n(653041), n(47120);
var r = n(192379),
  l = n(512969),
  o = n(442837),
  a = n(493773),
  i = n(607070),
  s = n(100527),
  c = n(906732),
  u = n(597688),
  d = n(328347),
  b = n(429368),
  p = n(410127),
  f = n(237031),
  g = n(956472),
  h = n(981631);
let m = "".concat("#").concat("itemSkuId", "="),
  v = new RegExp("^".concat(m, "(\\d+)$")),
  _ = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  C = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && _.includes(t.pathname)) return () => {
        window.location.hash.startsWith(m) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  x = e => {
    let {
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: r,
      initialItemCardRef: l,
      reducedMotion: o = !1,
      tab: a
    } = e, i = u.Z.getProduct(t), s = u.Z.getCategoryForProduct(t);
    if (null != i && null != s) {
      var c;
      null === (c = l.current) || void 0 === c || c.scrollIntoView({
        behavior: o ? "instant" : "smooth",
        block: "center",
        inline: "center"
      });
      let e = i,
        d = (0, g.oQ)({
          product: i,
          tab: a
        }),
        p = setTimeout(() => {
          let o = document.getElementById("shop-item-".concat(e.skuId));
          if (o !== document.activeElement && (null == o || o.focus()), null != i.variantGroupStoreListingId) {
            let n = u.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
            if (null != n) {
              var c;
              e = n;
              let r = null === (c = n.variants) || void 0 === c ? void 0 : c.findIndex(e => e.skuId === t);
              null != r && r > -1 && (0, b.$)(n, r)
            }
          }(0, f.T)({
            product: e,
            category: s,
            analyticsSource: r,
            analyticsLocations: n,
            returnRef: l,
            tab: a,
            shouldCheckoutWithOrbs: d
          })
        }, 750 * (null != l.current));
      return () => clearTimeout(p)
    }
    return () => {}
  },
  O = e => {
    let {
      isFetchingCategories: t,
      isLayer: n,
      initialItemCardRef: u
    } = e, b = (0, o.e7)([i.Z], () => i.Z.useReducedMotion), f = r.useRef(null), g = (0, l.TH)(), m = g.pathname === h.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : g.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: _
    } = (0, c.ZP)(m), C = (0, p.Z)();
    (0, a.ZP)(() => {
      if (n) return;
      let e = v.exec(g.hash);
      if (null != e) {
        let t = e[1];
        f.current = t
      }
    });
    let O = (0, o.e7)([d.Z], () => d.Z.initialProductSkuId);
    r.useEffect(() => {
      if (t) return;
      let e = null;
      if (n && null != O && (e = O), n || null == f.current || (e = f.current), null != e) {
        let t = [],
          n = setTimeout(() => {
            let n = x({
              productSkuId: e,
              analyticsLocations: _,
              analyticsSource: m,
              initialItemCardRef: u,
              reducedMotion: b,
              tab: C
            });
            t.push(n)
          }, 250);
        return t.push(() => clearTimeout(n)), () => {
          t.forEach(e => e())
        }
      }
    }, [n, _, m, t, O, u, b, C])
  },
  y = e => {
    let t = r.useRef({}),
      n = (0, o.e7)([i.Z], () => i.Z.useReducedMotion),
      l = (0, o.e7)([u.Z], () => u.Z.isFetchingCategories),
      [a, s] = r.useState(null),
      c = r.useCallback((e, n) => {
        t.current[e] = n
      }, []),
      d = r.useCallback(r => {
        if (l) s(r);
        else {
          let l = t.current[r];
          null != l && (null == e || e.scrollIntoViewNode({
            node: l,
            padding: 12,
            animate: !n,
            shouldScrollToStart: !0
          }))
        }
      }, [e, n, l, s]);
    return r.useEffect(() => {
      l || null == a || (d(a), s(null))
    }, [l, d, a, s]), {
      setCategoryRef: c,
      handleScrollToCategory: d
    }
  }