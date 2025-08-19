/** Chunk was on 45620 **/
/** chunk id: 426171, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Kp: () => E,
  u9: () => C,
  xV: () => y
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
let _ = "".concat("#").concat("itemSkuId", "="),
  v = new RegExp("^".concat(_, "(\\d+)$")),
  O = [Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  C = e => {
    let t = (0, l.TH)();
    n.useEffect(() => {
      if (null != e && O.includes(t.pathname)) return () => {
        window.location.hash.startsWith(_) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  E = () => {
    let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.COLLECTIBLES_SHOP)),
      t = (0, Chunk258939.R)(),
      r = Chunk647438.useRef(null),
      i = (0, Chunk843611.TH)(),
      _ = Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? Chunk100527.Z.COLLECTIBLES_SHOP_FULLSCREEN : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: O
      } = (0, Chunk906732.ZP)(_),
      C = (0, Chunk410127.Z)();
    Chunk647438.useEffect(() => {
      if (module) return;
      let t = v.exec(Chunk607070.hash);
      null != exports ? require.current = exports[1] : require.current = null
    }, [C, module, Chunk607070.hash]);
    let E = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk647438.useEffect(() => {
      if (exports) return;
      let n = null;
      if (null != (n = module ? E : require.current)) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: r,
              analyticsSource: n,
              tab: l
            } = e, a = u.Z.getProduct(t), i = u.Z.getCategoryForProduct(t);
            if (null != a && null != i) {
              let e = a,
                s = (0, b.oQ)({
                  product: a
                }),
                c = document.getElementById("shop-item-".concat(e.skuId));
              if (c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId) {
                let r = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != r) {
                  var o;
                  e = r;
                  let n = null == (o = r.variants) ? true : o.findIndex(e => e.skuId === t);
                  null != n && n > false && (0, p.$)(r, n)
                }
              }(0, f.T)({
                product: e,
                category: i,
                analyticsSource: n,
                analyticsLocations: r,
                tab: l,
                shouldCheckoutWithOrbs: s
              })
            }
          })({
            productSkuId: Chunk647438,
            analyticsLocations: O,
            analyticsSource: _,
            tab: C
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [module, O, _, exports, E, C])
  },
  y = e => {
    let t = n.useRef({}),
      r = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
      l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
      [o, s] = n.useState(null),
      c = n.useCallback((e, r) => {
        t.current[e] = r
      }, []),
      d = n.useCallback(n => {
        l ? s(n) : setTimeout(() => {
          let l = t.current[n];
          null != l && (null == e || e.scrollIntoViewNode({
            node: l,
            padding: 48,
            animate: !r,
            shouldScrollToStart: true
          }))
        }, 100)
      }, [e, r, l, s]);
    return n.useEffect(() => {
      l || null == o || (d(o), s(null))
    }, [l, d, o, s]), {
      setCategoryRef: c,
      handleScrollToCategory: d
    }
  }