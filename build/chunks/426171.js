/** Chunk was on 45620 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kp: () => S,
  u9: () => C,
  xV: () => y
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
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
    r.useEffect(() => {
      if (null != e && O.includes(t.pathname)) return () => {
        window.location.hash.startsWith(_) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  E = e => {
    let {
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: r,
      tab: l
    } = e, a = u.Z.getProduct(t), i = u.Z.getCategoryForProduct(t);
    if (null != a && null != i) {
      let e = a,
        s = (0, h.oQ)({
          product: a
        }),
        c = document.getElementById("shop-item-".concat(e.skuId));
      if (c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId) {
        let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
        if (null != n) {
          var o;
          e = n;
          let r = null == (o = n.variants) ? true : o.findIndex(e => e.skuId === t);
          null != r && r > false && (0, p.$)(n, r)
        }
      }(0, f.T)({
        product: e,
        category: i,
        analyticsSource: r,
        analyticsLocations: n,
        tab: l,
        shouldCheckoutWithOrbs: s
      })
    }
  },
  S = () => {
    let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.COLLECTIBLES_SHOP)),
      t = (0, Chunk258939.R)(),
      n = Chunk73800.useRef(null),
      i = (0, Chunk114858.TH)(),
      u = Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? Chunk100527.Z.COLLECTIBLES_SHOP_FULLSCREEN : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: p
      } = (0, Chunk906732.ZP)(Chunk597688),
      f = (0, Chunk410127.Z)();
    Chunk73800.useEffect(() => {
      if (module) return;
      let t = v.exec(Chunk607070.hash);
      null != exports ? require.current = exports[1] : require.current = null
    }, [Chunk237031, module, Chunk607070.hash]);
    let h = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk73800.useEffect(() => {
      if (exports) return;
      let r = null;
      if (null != (r = module ? Chunk956472 : require.current)) {
        let e = setTimeout(() => {
          E({
            productSkuId: Chunk73800,
            analyticsLocations: Chunk429368,
            analyticsSource: Chunk597688,
            tab: Chunk237031
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [module, Chunk429368, Chunk597688, exports, Chunk956472, Chunk237031])
  },
  y = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
      l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
      [o, s] = r.useState(null),
      c = r.useCallback((e, n) => {
        t.current[e] = n
      }, []),
      d = r.useCallback(r => {
        l ? s(r) : setTimeout(() => {
          let l = t.current[r];
          null != l && (null == e || e.scrollIntoViewNode({
            node: l,
            padding: 48,
            animate: !n,
            shouldScrollToStart: true
          }))
        }, 100)
      }, [e, n, l, s]);
    return r.useEffect(() => {
      l || null == o || (d(o), s(null))
    }, [l, d, o, s]), {
      setCategoryRef: c,
      handleScrollToCategory: d
    }
  }