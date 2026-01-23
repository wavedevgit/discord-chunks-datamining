/** Chunk was on 77313 **/
/** chunk id: 177366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XU: () => A,
  Yr: () => j,
  k0: () => _
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
let v = "".concat("#").concat("itemSkuId", "="),
  g = new RegExp("^".concat(v, "(\\d+)$")),
  b = [Chunk652215.BVt.COLLECTIBLES_SHOP],
  j = e => {
    let t = (0, l.zy)();
    r.useEffect(() => {
      if (null != e && b.includes(t.pathname)) return () => {
        window.location.hash.startsWith(v) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  A = () => {
    let e = (0, f.U)(),
      t = r.useRef(null),
      n = (0, l.zy)(),
      a = n.pathname === h.BVt.COLLECTIBLES_SHOP ? s.A.HOME_PAGE_SHOP_TAB : s.A.COLLECTIBLES_SHOP,
      {
        analyticsLocations: v
      } = (0, o.Ay)(a),
      b = (0, m.A)();
    r.useEffect(() => {
      let e = g.exec(n.hash);
      null != e ? t.current = e[1] : t.current = null
    }, [b, n.hash]);
    let j = (0, i.bG)([u.A], () => u.A.initialProductSkuId);
    r.useEffect(() => {
      if (e) return;
      let n = null;
      if (null != j ? n = j : null != t.current && (n = t.current), null != n) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: l
            } = e, i = c.A.getProduct(t), a = c.A.getCategoryForProduct(t);
            if (null != i && null != a) {
              let e = i,
                o = (0, x.Ak)({
                  product: i
                }),
                u = document.getElementById("shop-item-".concat(e.skuId));
              if (u !== document.activeElement && (null == u || u.focus()), null != i.variantGroupStoreListingId) {
                let n = c.A.getProductByStoreListingId(i.variantGroupStoreListingId);
                if (null != n) {
                  var s;
                  e = n;
                  let r = null == (s = n.variants) ? true : s.findIndex(e => e.skuId === t);
                  null != r && r > false && (0, d.n)(n, r)
                }
              }(0, p.t)({
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
            analyticsLocations: v,
            analyticsSource: a,
            tab: b
          })
        }, 250);
        return () => clearTimeout(e)
      }
    }, [v, a, e, j, b])
  },
  _ = e => {
    let t = r.useRef({}),
      n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
      l = (0, i.bG)([c.A], () => c.A.isFetchingCategories),
      [s, o] = r.useState(null),
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
      l || null == s || (d(s), o(null))
    }, [l, d, s, o]), {
      setCategoryRef: u,
      handleScrollToCategory: d
    }
  }