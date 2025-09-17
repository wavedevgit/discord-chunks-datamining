/** Chunk was on 45620 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kp: () => O,
  u9: () => S,
  xV: () => v
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
let C = "".concat("#").concat("itemSkuId", "="),
  b = new RegExp("^".concat(C, "(\\d+)$")),
  E = [Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  S = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && E.includes(t.pathname)) return () => {
        window.location.hash.startsWith(C) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  O = () => {
    let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.COLLECTIBLES_SHOP)),
      t = (0, Chunk258939.R)(),
      n = Chunk647438.useRef(null),
      o = (0, Chunk843611.TH)(),
      C = Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? Chunk100527.Z.COLLECTIBLES_SHOP_FULLSCREEN : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: E
      } = (0, Chunk906732.ZP)(C),
      S = (0, Chunk410127.Z)();
    Chunk647438.useEffect(() => {
      if (module) return;
      let t = b.exec(Chunk607070.hash);
      null != exports ? require.current = exports[1] : require.current = null
    }, [S, module, Chunk607070.hash]);
    let O = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk647438.useEffect(() => {
      if (exports) return;
      let r = null;
      if (null != (r = module ? O : require.current)) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: l
            } = e, a = u.Z.getProduct(t), o = u.Z.getCategoryForProduct(t);
            if (null != a && null != o) {
              let e = a,
                i = (0, m.oQ)({
                  product: a
                }),
                c = document.getElementById("shop-item-".concat(e.skuId));
              if (c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId) {
                let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                  var s;
                  e = n;
                  let r = null == (s = n.variants) ? true : s.findIndex(e => e.skuId === t);
                  null != r && r > false && (0, g.$)(n, r)
                }
              }(0, p.T)({
                product: e,
                category: o,
                analyticsSource: r,
                analyticsLocations: n,
                tab: l,
                shouldCheckoutWithOrbs: i
              })
            }
          })({
            productSkuId: Chunk647438,
            analyticsLocations: E,
            analyticsSource: C,
            tab: S
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [module, E, C, exports, O, S])
  },
  v = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
      l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
      [s, i] = r.useState(null),
      c = r.useCallback((e, n) => {
        t.current[e] = n
      }, []),
      d = r.useCallback(r => {
        l ? i(r) : setTimeout(() => {
          let l = t.current[r];
          null != l && (null == e || e.scrollIntoViewNode({
            node: l,
            padding: 48,
            animate: !n,
            shouldScrollToStart: true
          }))
        }, 100)
      }, [e, n, l, i]);
    return r.useEffect(() => {
      l || null == s || (d(s), i(null))
    }, [l, d, s, i]), {
      setCategoryRef: c,
      handleScrollToCategory: d
    }
  }