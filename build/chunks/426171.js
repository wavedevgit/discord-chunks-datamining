/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Kp: () => j,
  u9: () => v,
  xV: () => k
}), n(474991), n(398202), n(301563), n(757143), n(653041), n(47120);
var r = n(192379),
  l = n(512969),
  a = n(442837),
  s = n(493773),
  o = n(607070),
  i = n(100527),
  c = n(906732),
  d = n(597688),
  u = n(328347),
  m = n(429368),
  g = n(410127),
  f = n(237031),
  h = n(956472),
  p = n(981631);
let b = "".concat("#").concat("itemSkuId", "="),
  C = new RegExp("^".concat(b, "(\\d+)$")),
  _ = [p.Z5c.COLLECTIBLES_SHOP, p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  v = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && _.includes(t.pathname)) return () => {
        window.location.hash.startsWith(b) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  x = e => {
    let {
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: r,
      initialItemCardRef: l,
      reducedMotion: a = !1,
      tab: s
    } = e, o = d.Z.getProduct(t), i = d.Z.getCategoryForProduct(t);
    if (null != o && null != i) {
      var c;
      null === (c = l.current) || void 0 === c || c.scrollIntoView({
        behavior: a ? "instant" : "smooth",
        block: "center",
        inline: "center"
      });
      let e = o,
        u = (0, h.oQ)({
          product: o,
          tab: s
        }),
        g = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(e.skuId));
          if (a !== document.activeElement && (null == a || a.focus()), null != o.variantGroupStoreListingId) {
            let n = d.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
            if (null != n) {
              var c;
              e = n;
              let r = null === (c = n.variants) || void 0 === c ? void 0 : c.findIndex(e => e.skuId === t);
              null != r && r > -1 && (0, m.$)(n, r)
            }
          }(0, f.T)({
            product: e,
            category: i,
            analyticsSource: r,
            analyticsLocations: n,
            returnRef: l,
            tab: s,
            shouldCheckoutWithOrbs: u
          })
        }, 750 * (null != l.current));
      return () => clearTimeout(g)
    }
    return () => {}
  },
  j = e => {
    let {
      isFetchingCategories: t,
      isLayer: n,
      initialItemCardRef: d
    } = e, m = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), f = r.useRef(null), h = (0, l.TH)(), b = h.pathname === p.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : h.pathname === p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: _
    } = (0, c.ZP)(b), v = (0, g.Z)();
    (0, s.ZP)(() => {
      if (n) return;
      let e = C.exec(h.hash);
      if (null != e) {
        let t = e[1];
        f.current = t
      }
    });
    let j = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
    r.useEffect(() => {
      if (t) return;
      let e = null;
      if (n && null != j && (e = j), n || null == f.current || (e = f.current), null != e) {
        let t = [],
          n = setTimeout(() => {
            let n = x({
              productSkuId: e,
              analyticsLocations: _,
              analyticsSource: b,
              initialItemCardRef: d,
              reducedMotion: m,
              tab: v
            });
            t.push(n)
          }, 250);
        return t.push(() => clearTimeout(n)), () => {
          t.forEach(e => e())
        }
      }
    }, [n, _, b, t, j, d, m, v])
  },
  k = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
      l = (0, a.e7)([d.Z], () => d.Z.isFetchingCategories),
      [s, i] = r.useState(null),
      c = r.useCallback((e, n) => {
        t.current[e] = n
      }, []),
      u = r.useCallback(r => {
        if (l) i(r);
        else {
          let l = t.current[r];
          null != l && (null == e || e.scrollIntoViewNode({
            node: l,
            padding: 12,
            animate: !n,
            shouldScrollToStart: !0
          }))
        }
      }, [e, n, l, i]);
    return r.useEffect(() => {
      l || null == s || (u(s), i(null))
    }, [l, u, s, i]), {
      setCategoryRef: c,
      handleScrollToCategory: u
    }
  }