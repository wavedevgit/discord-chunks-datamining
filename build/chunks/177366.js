/** Chunk was on 59275 **/
/** chunk id: 177366, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  XU: () => x,
  Yr: () => A,
  k0: () => S
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk870216 = require("./870216.js"),
  Chunk298072 = require("./298072.js"),
  Chunk238184 = require("./238184.js"),
  Chunk572595 = require("./572595.jsx"),
  Chunk159439 = require("./159439.js"),
  Chunk57020 = require("./57020.js"),
  Chunk652215 = require("./652215.js");
let h = "".concat("#").concat("itemSkuId", "="),
  E = new RegExp("^".concat(h, "(\\d+)$")),
  v = [Chunk652215.BVt.COLLECTIBLES_SHOP],
  A = e => {
    let t = (0, r.zy)();
    n.useEffect(() => {
      if (null != e && v.includes(t.pathname)) return () => {
        window.location.hash.startsWith(h) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  x = () => {
    let e = (0, g.U)(),
      t = n.useRef(null),
      l = (0, r.zy)(),
      a = l.pathname === m.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
      {
        analyticsLocations: h
      } = (0, o.Ay)(a),
      v = (0, f.A)();
    n.useEffect(() => {
      let e = E.exec(l.hash);
      null != e ? t.current = e[1] : t.current = null
    }, [v, l.hash]);
    let A = (0, s.bG)([u.A], () => u.A.initialProductSkuId);
    n.useEffect(() => {
      if (e) return;
      let l = null;
      if (null != A ? l = A : null != t.current && (l = t.current), null != l) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: l,
              analyticsSource: n,
              tab: r
            } = e, s = c.A.getProduct(t), a = c.A.getCategoryForProduct(t);
            if (null != s && null != a) {
              let e = s,
                o = (0, p.Ak)({
                  product: s
                }),
                u = document.getElementById("shop-item-".concat(e.skuId));
              if (u !== document.activeElement && (null == u || u.focus()), null != s.variantGroupStoreListingId) {
                let l = c.A.getProductByStoreListingId(s.variantGroupStoreListingId);
                if (null != l) {
                  var i;
                  e = l;
                  let n = null == (i = l.variants) ? true : i.findIndex(e => e.skuId === t);
                  null != n && n > false && (0, d.n)(l, n)
                }
              }(0, b.t)({
                product: e,
                category: a,
                analyticsSource: n,
                analyticsLocations: l,
                tab: r,
                shouldCheckoutWithOrbs: o
              })
            }
          })({
            productSkuId: l,
            analyticsLocations: h,
            analyticsSource: a,
            tab: v
          })
        }, 250);
        return () => clearTimeout(e)
      }
    }, [h, a, e, A, v])
  },
  S = e => {
    let t = n.useRef({}),
      l = (0, s.bG)([a.A], () => a.A.useReducedMotion),
      r = (0, s.bG)([c.A], () => c.A.isFetchingCategories),
      [i, o] = n.useState(null),
      u = n.useCallback((e, l) => {
        t.current[e] = l
      }, []),
      d = n.useCallback(n => {
        r ? o(n) : setTimeout(() => {
          let r = t.current[n];
          null != r && (null == e || e.scrollIntoViewNode({
            node: r,
            padding: 48,
            animate: !l,
            shouldScrollToStart: true
          }))
        }, 100)
      }, [e, l, r, o]);
    return n.useEffect(() => {
      r || null == i || (d(i), o(null))
    }, [r, d, i, o]), {
      setCategoryRef: u,
      handleScrollToCategory: d
    }
  }