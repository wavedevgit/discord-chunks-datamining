/** Chunk was on 45620 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kp: () => x,
  u9: () => v,
  xV: () => S
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk328347 = require("./328347.js"),
  Chunk429368 = require("./429368.js"),
  Chunk410127 = require("./410127.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk258939 = require("./258939.js"),
  Chunk956472 = require("./956472.js"),
  Chunk981631 = require("./981631.js");
let m = "".concat("#").concat("itemSkuId", "="),
  C = new RegExp("^".concat(m, "(\\d+)$")),
  E = [Chunk981631.Z5c.COLLECTIBLES_SHOP],
  v = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && E.includes(t.pathname)) return () => {
        window.location.hash.startsWith(m) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  x = () => {
    let e = (0, b.R)(),
      t = r.useRef(null),
      n = (0, l.TH)(),
      s = n.pathname === h.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : i.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: m
      } = (0, o.ZP)(s),
      E = (0, f.Z)();
    r.useEffect(() => {
      let e = C.exec(n.hash);
      null != e ? t.current = e[1] : t.current = null
    }, [E, n.hash]);
    let v = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
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
            } = e, a = c.Z.getProduct(t), s = c.Z.getCategoryForProduct(t);
            if (null != a && null != s) {
              let e = a,
                o = (0, p.oQ)({
                  product: a
                }),
                u = document.getElementById("shop-item-".concat(e.skuId));
              if (u !== document.activeElement && (null == u || u.focus()), null != a.variantGroupStoreListingId) {
                let n = c.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                  var i;
                  e = n;
                  let r = null == (i = n.variants) ? true : i.findIndex(e => e.skuId === t);
                  null != r && r > false && (0, d.$)(n, r)
                }
              }(0, g.T)({
                product: e,
                category: s,
                analyticsSource: r,
                analyticsLocations: n,
                tab: l,
                shouldCheckoutWithOrbs: o
              })
            }
          })({
            productSkuId: n,
            analyticsLocations: m,
            analyticsSource: s,
            tab: E
          })
        }, 250);
        return () => clearTimeout(e)
      }
    }, [m, s, e, v, E])
  },
  S = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
      l = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
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