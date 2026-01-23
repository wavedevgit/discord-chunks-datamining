/** Chunk was on 59275 **/
/** chunk id: 177366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  XU: () => C,
  Yr: () => v,
  k0: () => A
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
let b = "".concat("#").concat("itemSkuId", "="),
  h = new RegExp("^".concat(b, "(\\d+)$")),
  E = [Chunk652215.BVt.COLLECTIBLES_SHOP],
  v = e => {
    let t = (0, l.zy)();
    r.useEffect(() => {
      if (null != e && E.includes(t.pathname)) return () => {
        window.location.hash.startsWith(b) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  C = () => {
    let e = (0, m.U)(),
      t = r.useRef(null),
      n = (0, l.zy)(),
      a = n.pathname === _.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
      {
        analyticsLocations: b
      } = (0, o.Ay)(a),
      E = (0, g.A)();
    r.useEffect(() => {
      let e = h.exec(n.hash);
      null != e ? t.current = e[1] : t.current = null
    }, [E, n.hash]);
    let v = (0, s.bG)([u.A], () => u.A.initialProductSkuId);
    r.useEffect(() => {
      if (e) return;
      let n = null;
      if (null != v ? n = v : null != t.current && (n = t.current), null != n) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: l
            } = e, s = c.A.getProduct(t), a = c.A.getCategoryForProduct(t);
            if (null != s && null != a) {
              let e = s,
                o = (0, p.Ak)({
                  product: s
                }),
                u = document.getElementById("shop-item-".concat(e.skuId));
              if (u !== document.activeElement && (null == u || u.focus()), null != s.variantGroupStoreListingId) {
                let n = c.A.getProductByStoreListingId(s.variantGroupStoreListingId);
                if (null != n) {
                  var i;
                  e = n;
                  let r = null == (i = n.variants) ? true : i.findIndex(e => e.skuId === t);
                  null != r && r > false && (0, d.n)(n, r)
                }
              }(0, f.t)({
                product: e,
                category: a,
                analyticsSource: r,
                analyticsLocations: n,
                tab: l,
                shouldCheckoutWithOrbs: o
              })
            }
          })({
            productSkuId: n,
            analyticsLocations: b,
            analyticsSource: a,
            tab: E
          })
        }, 250);
        return () => clearTimeout(e)
      }
    }, [b, a, e, v, E])
  },
  A = e => {
    let t = r.useRef({}),
      n = (0, s.bG)([a.A], () => a.A.useReducedMotion),
      l = (0, s.bG)([c.A], () => c.A.isFetchingCategories),
      [i, o] = r.useState(null),
      u = r.useCallback((e, n) => {
        t.current[e] = n
      }, []),
      d = r.useCallback(r => {
        l ? o(r) : setTimeout(() => {
          let l = t.current[r];
          null != l && (null == e || e.scrollIntoViewNode({
            node: l,
            padding: 48,
            animate: !n,
            shouldScrollToStart: true
          }))
        }, 100)
      }, [e, n, l, o]);
    return r.useEffect(() => {
      l || null == i || (d(i), o(null))
    }, [l, d, i, o]), {
      setCategoryRef: u,
      handleScrollToCategory: d
    }
  }