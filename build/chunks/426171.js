/** Chunk was on 45620 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kp: () => E,
  u9: () => v,
  xV: () => x
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
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
  _ = new RegExp("^".concat(m, "(\\d+)$")),
  b = [Chunk981631.Z5c.COLLECTIBLES_SHOP],
  v = e => {
    let t = (0, l.TH)();
    r.useEffect(() => {
      if (null != e && b.includes(t.pathname)) return () => {
        window.location.hash.startsWith(m) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  E = () => {
    let e = (0, Chunk258939.R)(),
      t = Chunk647438.useRef(null),
      n = (0, Chunk843611.TH)(),
      s = require.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: m
      } = (0, Chunk906732.ZP)(Chunk607070),
      b = (0, Chunk410127.Z)();
    Chunk647438.useEffect(() => {
      let e = _.exec(require.hash);
      null != module ? exports.current = module[1] : exports.current = null
    }, [b, require.hash]);
    let v = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk647438.useEffect(() => {
      if (module) return;
      let n = null;
      if (null != v ? n = v : null != exports.current && (n = exports.current), null != require) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: l
            } = e, i = c.Z.getProduct(t), s = c.Z.getCategoryForProduct(t);
            if (null != i && null != s) {
              let e = i,
                o = (0, h.oQ)({
                  product: i
                }),
                u = document.getElementById("shop-item-".concat(e.skuId));
              if (u !== document.activeElement && (null == u || u.focus()), null != i.variantGroupStoreListingId) {
                let n = c.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                if (null != n) {
                  var a;
                  e = n;
                  let r = null == (a = n.variants) ? true : a.findIndex(e => e.skuId === t);
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
            productSkuId: require,
            analyticsLocations: m,
            analyticsSource: Chunk607070,
            tab: b
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [m, Chunk607070, module, v, b])
  },
  x = e => {
    let t = r.useRef({}),
      n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
      l = (0, i.e7)([c.Z], () => c.Z.isFetchingCategories),
      [a, o] = r.useState(null),
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
      l || null == a || (d(a), o(null))
    }, [l, d, a, o]), {
      setCategoryRef: u,
      handleScrollToCategory: d
    }
  }