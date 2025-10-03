/** Chunk was on 45620 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kp: () => v,
  u9: () => S,
  xV: () => x
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk597688 = require("./597688.js"),
  Chunk328347 = require("./328347.js"),
  Chunk429368 = require("./429368.js"),
  Chunk410127 = require("./410127.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk258939 = require("./258939.js"),
  Chunk956472 = require("./956472.js"),
  Chunk981631 = require("./981631.js");
let m = "".concat("#").concat("itemSkuId", "="),
  b = new RegExp("^".concat(m, "(\\d+)$")),
  E = [Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  S = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && E.includes(t.pathname)) return () => {
        window.location.hash.startsWith(m) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  v = () => {
    let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.COLLECTIBLES_SHOP)),
      t = (0, Chunk258939.R)(),
      n = Chunk647438.useRef(null),
      s = (0, Chunk843611.TH)(),
      m = Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? Chunk100527.Z.COLLECTIBLES_SHOP_FULLSCREEN : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: E
      } = (0, Chunk906732.ZP)(m),
      S = (0, Chunk410127.Z)();
    Chunk647438.useEffect(() => {
      if (module) return;
      let t = b.exec(Chunk607070.hash);
      null != exports ? require.current = exports[1] : require.current = null
    }, [S, module, Chunk607070.hash]);
    let v = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk647438.useEffect(() => {
      if (exports) return;
      let r = null;
      if (null != (r = module ? v : require.current)) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: l
            } = e, a = u.Z.getProduct(t), s = u.Z.getCategoryForProduct(t);
            if (null != a && null != s) {
              let e = a,
                o = (0, _.oQ)({
                  product: a
                }),
                c = document.getElementById("shop-item-".concat(e.skuId));
              if (c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId) {
                let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                  var i;
                  e = n;
                  let r = null == (i = n.variants) ? true : i.findIndex(e => e.skuId === t);
                  null != r && r > false && (0, g.$)(n, r)
                }
              }(0, f.T)({
                product: e,
                category: s,
                analyticsSource: r,
                analyticsLocations: n,
                tab: l,
                shouldCheckoutWithOrbs: o
              })
            }
          })({
            productSkuId: Chunk647438,
            analyticsLocations: E,
            analyticsSource: m,
            tab: S
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [module, E, m, exports, v, S])
  },
  x = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
      l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
      [i, o] = r.useState(null),
      c = r.useCallback((e, n) => {
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
      setCategoryRef: c,
      handleScrollToCategory: d
    }
  }