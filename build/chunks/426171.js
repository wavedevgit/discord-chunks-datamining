/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Kp: () => k,
  u9: () => x,
  xV: () => j
}), n(474991), n(398202), n(301563), n(757143), n(653041), n(47120);
var r = n(192379),
  l = n(512969),
  a = n(442837),
  s = n(493773),
  o = n(607070),
  i = n(100527),
  d = n(906732),
  c = n(597688),
  u = n(328347),
  g = n(429368),
  h = n(410127),
  f = n(237031),
  m = n(956472),
  p = n(981631);
let b = "".concat("#").concat("itemSkuId", "="),
  C = new RegExp("^".concat(b, "(\\d+)$")),
  _ = [p.Z5c.COLLECTIBLES_SHOP, p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  x = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && _.includes(t.pathname)) return () => {
        window.location.hash.startsWith(b) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  v = e => {
    let {
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: r,
      initialItemCardRef: l,
      reducedMotion: a = !1,
      tab: s
    } = e, o = c.Z.getProduct(t), i = c.Z.getCategoryForProduct(t);
    if (null != o && null != i) {
      var d;
      null === (d = l.current) || void 0 === d || d.scrollIntoView({
        behavior: a ? "instant" : "smooth",
        block: "center",
        inline: "center"
      });
      let e = o,
        u = (0, m.oQ)({
          product: o,
          tab: s
        }),
        h = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(e.skuId));
          if (a !== document.activeElement && (null == a || a.focus()), null != o.variantGroupStoreListingId) {
            let n = c.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
            if (null != n) {
              var d;
              e = n;
              let r = null === (d = n.variants) || void 0 === d ? void 0 : d.findIndex(e => e.skuId === t);
              null != r && r > -1 && (0, g.$)(n, r)
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
      return () => clearTimeout(h)
    }
    return () => {}
  },
  k = e => {
    let {
      isFetchingCategories: t,
      isLayer: n,
      initialItemCardRef: c
    } = e, g = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), f = r.useRef(null), m = (0, l.TH)(), b = m.pathname === p.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : m.pathname === p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: _
    } = (0, d.ZP)(b), x = (0, h.Z)();
    (0, s.ZP)(() => {
      if (n) return;
      let e = C.exec(m.hash);
      if (null != e) {
        let t = e[1];
        f.current = t
      }
    });
    let k = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
    r.useEffect(() => {
      if (t) return;
      let e = null;
      if (n && null != k && (e = k), n || null == f.current || (e = f.current), null != e) {
        let t = [],
          n = setTimeout(() => {
            let n = v({
              productSkuId: e,
              analyticsLocations: _,
              analyticsSource: b,
              initialItemCardRef: c,
              reducedMotion: g,
              tab: x
            });
            t.push(n)
          }, 250);
        return t.push(() => clearTimeout(n)), () => {
          t.forEach(e => e())
        }
      }
    }, [n, _, b, t, k, c, g, x])
  },
  j = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
      l = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
      [s, i] = r.useState(null),
      d = r.useCallback((e, n) => {
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
      setCategoryRef: d,
      handleScrollToCategory: u
    }
  }