/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Kp: () => x,
  u9: () => v,
  xV: () => j
}), n(474991), n(398202), n(301563), n(757143), n(653041), n(47120);
var r = n(192379),
  l = n(512969),
  a = n(442837),
  o = n(493773),
  s = n(607070),
  i = n(100527),
  c = n(906732),
  d = n(597688),
  u = n(328347),
  g = n(429368),
  f = n(410127),
  h = n(237031),
  m = n(956472),
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
  k = e => {
    let {
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: r,
      initialItemCardRef: l,
      reducedMotion: a = !1,
      tab: o
    } = e, s = d.Z.getProduct(t), i = d.Z.getCategoryForProduct(t);
    if (null != s && null != i) {
      var c;
      null === (c = l.current) || void 0 === c || c.scrollIntoView({
        behavior: a ? "instant" : "smooth",
        block: "center",
        inline: "center"
      });
      let e = s,
        u = (0, m.oQ)({
          product: s,
          tab: o
        }),
        f = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(e.skuId));
          if (a !== document.activeElement && (null == a || a.focus()), null != s.variantGroupStoreListingId) {
            let n = d.Z.getProductByStoreListingId(s.variantGroupStoreListingId);
            if (null != n) {
              var c;
              e = n;
              let r = null === (c = n.variants) || void 0 === c ? void 0 : c.findIndex(e => e.skuId === t);
              null != r && r > -1 && (0, g.$)(n, r)
            }
          }(0, h.T)({
            product: e,
            category: i,
            analyticsSource: r,
            analyticsLocations: n,
            returnRef: l,
            tab: o,
            shouldCheckoutWithOrbs: u
          })
        }, 750 * (null != l.current));
      return () => clearTimeout(f)
    }
    return () => {}
  },
  x = e => {
    let {
      isFetchingCategories: t,
      isLayer: n,
      initialItemCardRef: d
    } = e, g = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), h = r.useRef(null), m = (0, l.TH)(), b = m.pathname === p.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : m.pathname === p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: _
    } = (0, c.ZP)(b), v = (0, f.Z)();
    (0, o.ZP)(() => {
      if (n) return;
      let e = C.exec(m.hash);
      if (null != e) {
        let t = e[1];
        h.current = t
      }
    });
    let x = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
    r.useEffect(() => {
      if (t) return;
      let e = null;
      if (n && null != x && (e = x), n || null == h.current || (e = h.current), null != e) {
        let t = [],
          n = setTimeout(() => {
            let n = k({
              productSkuId: e,
              analyticsLocations: _,
              analyticsSource: b,
              initialItemCardRef: d,
              reducedMotion: g,
              tab: v
            });
            t.push(n)
          }, 250);
        return t.push(() => clearTimeout(n)), () => {
          t.forEach(e => e())
        }
      }
    }, [n, _, b, t, x, d, g, v])
  },
  j = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
      l = (0, a.e7)([d.Z], () => d.Z.isFetchingCategories),
      [o, i] = r.useState(null),
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
      l || null == o || (u(o), i(null))
    }, [l, u, o, i]), {
      setCategoryRef: c,
      handleScrollToCategory: u
    }
  }