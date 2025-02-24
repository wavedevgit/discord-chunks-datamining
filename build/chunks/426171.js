/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Kp: () => x,
  u9: () => g,
  xV: () => j
}), r(474991), r(398202), r(301563), r(757143), r(653041), r(47120);
var n = r(192379),
  i = r(512969),
  l = r(442837),
  o = r(493773),
  a = r(607070),
  s = r(100527),
  c = r(906732),
  d = r(597688),
  u = r(328347),
  p = r(429368),
  f = r(237031),
  h = r(981631);
let b = "".concat("#").concat("itemSkuId", "="),
  C = new RegExp("^".concat(b, "(\\d+)$")),
  m = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  g = e => {
    let t = (0, i.TH)();
    n.useEffect(() => {
      if (null != e && m.includes(t.pathname)) return window.location.replace("".concat(b).concat(e)), () => {
        window.location.hash.startsWith(b) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  v = e => {
    let {
      productSkuId: t,
      analyticsLocations: r,
      analyticsSource: n,
      initialItemCardRef: i,
      reducedMotion: l = !1
    } = e, o = d.Z.getProduct(t), a = d.Z.getCategoryForProduct(t);
    if (null != o && null != a) {
      var s;
      null === (s = i.current) || void 0 === s || s.scrollIntoView({
        behavior: l ? "instant" : "smooth",
        block: "center",
        inline: "center"
      });
      let e = o,
        c = setTimeout(() => {
          let l = document.getElementById("shop-item-".concat(e.skuId));
          if (l !== document.activeElement && (null == l || l.focus()), null != o.variantGroupStoreListingId) {
            let r = d.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
            if (null != r) {
              var s;
              e = r;
              let n = null === (s = r.variants) || void 0 === s ? void 0 : s.findIndex(e => e.skuId === t);
              null != n && n > -1 && (0, p.$)(r, n)
            }
          }(0, f.T)({
            product: e,
            category: a,
            analyticsSource: n,
            analyticsLocations: r,
            returnRef: i
          })
        }, 750 * (null != i.current));
      return () => clearTimeout(c)
    }
    return () => {}
  },
  x = e => {
    let {
      isFetchingCategories: t,
      isLayer: r,
      initialItemCardRef: d
    } = e, p = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), f = n.useRef(null), b = (0, i.TH)(), m = b.pathname === h.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : b.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: g
    } = (0, c.ZP)(m);
    (0, o.ZP)(() => {
      if (r) return;
      let e = C.exec(b.hash);
      if (null != e) {
        let t = e[1];
        f.current = t
      }
    });
    let x = (0, l.e7)([u.Z], () => u.Z.initialProductSkuId);
    n.useEffect(() => {
      if (t) return;
      let e = null;
      if (r && null != x && (e = x), r || null == f.current || (e = f.current), null != e) {
        let t = [],
          r = setTimeout(() => {
            let r = v({
              productSkuId: e,
              analyticsLocations: g,
              analyticsSource: m,
              initialItemCardRef: d,
              reducedMotion: p
            });
            t.push(r)
          }, 250);
        return t.push(() => clearTimeout(r)), () => {
          t.forEach(e => e())
        }
      }
    }, [r, g, m, t, x, d, p])
  },
  j = e => {
    let t = n.useRef({}),
      r = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
      i = (0, l.e7)([d.Z], () => d.Z.isFetchingCategories),
      [o, s] = n.useState(null),
      c = n.useCallback((e, r) => {
        t.current[e] = r
      }, []),
      u = n.useCallback(n => {
        if (i) s(n);
        else {
          let i = t.current[n];
          null != i && (null == e || e.scrollIntoViewNode({
            node: i,
            padding: 12,
            animate: !r,
            shouldScrollToStart: !0
          }))
        }
      }, [e, r, i, s]);
    return n.useEffect(() => {
      i || null == o || (u(o), s(null))
    }, [i, u, o, s]), {
      setCategoryRef: c,
      handleScrollToCategory: u
    }
  }