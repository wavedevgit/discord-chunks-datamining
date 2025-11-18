/** Chunk was on 48899 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Kp: () => _,
  u9: () => P,
  xV: () => j
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
let g = "".concat("#").concat("itemSkuId", "="),
  b = new RegExp("^".concat(g, "(\\d+)$")),
  x = [Chunk981631.Z5c.COLLECTIBLES_SHOP],
  P = e => {
    let t = (0, i.TH)();
    r.useEffect(() => {
      if (null != e && x.includes(t.pathname)) return () => {
        window.location.hash.startsWith(g) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  _ = () => {
    let e = (0, Chunk258939.R)(),
      t = Chunk473749.useRef(null),
      n = (0, Chunk828700.TH)(),
      l = require.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: g
      } = (0, Chunk906732.ZP)(Chunk607070),
      x = (0, Chunk410127.Z)();
    Chunk473749.useEffect(() => {
      let e = b.exec(require.hash);
      null != module ? exports.current = module[1] : exports.current = null
    }, [x, require.hash]);
    let P = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk473749.useEffect(() => {
      if (module) return;
      let n = null;
      if (null != P ? n = P : null != exports.current && (n = exports.current), null != require) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: i
            } = e, a = c.Z.getProduct(t), l = c.Z.getCategoryForProduct(t);
            if (null != a && null != l) {
              let e = a,
                s = (0, v.oQ)({
                  product: a
                }),
                u = document.getElementById("shop-item-".concat(e.skuId));
              if (u !== document.activeElement && (null == u || u.focus()), null != a.variantGroupStoreListingId) {
                let n = c.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                  var o;
                  e = n;
                  let r = null == (o = n.variants) ? true : o.findIndex(e => e.skuId === t);
                  null != r && r > false && (0, d.$)(n, r)
                }
              }(0, p.T)({
                product: e,
                category: l,
                analyticsSource: r,
                analyticsLocations: n,
                tab: i,
                shouldCheckoutWithOrbs: s
              })
            }
          })({
            productSkuId: require,
            analyticsLocations: g,
            analyticsSource: Chunk607070,
            tab: x
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [g, Chunk607070, module, P, x])
  },
  j = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
      i = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
      [o, s] = r.useState(null),
      u = r.useCallback((e, n) => {
        t.current[e] = n
      }, []),
      d = r.useCallback(r => {
        i ? s(r) : setTimeout(() => {
          let i = t.current[r];
          null != i && (null == e || e.scrollIntoViewNode({
            node: i,
            padding: 48,
            animate: !n,
            shouldScrollToStart: true
          }))
        }, 100)
      }, [e, n, i, s]);
    return r.useEffect(() => {
      i || null == o || (d(o), s(null))
    }, [i, d, o, s]), {
      setCategoryRef: u,
      handleScrollToCategory: d
    }
  }