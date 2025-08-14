/** Chunk was on 84691 **/
/** chunk id: 426171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Kp: () => O,
  u9: () => j,
  xV: () => _
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
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
let b = "".concat("#").concat("itemSkuId", "="),
  g = new RegExp("^".concat(b, "(\\d+)$")),
  x = [Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  j = e => {
    let t = (0, i.TH)();
    r.useEffect(() => {
      if (null != e && x.includes(t.pathname)) return () => {
        window.location.hash.startsWith(b) && window.location.replace("#")
      }
    }, [e, t.pathname])
  },
  O = () => {
    let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.COLLECTIBLES_SHOP)),
      t = (0, Chunk258939.R)(),
      n = Chunk73800.useRef(null),
      l = (0, Chunk114858.TH)(),
      b = Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP ? Chunk100527.Z.HOME_PAGE_SHOP_TAB : Chunk607070.pathname === Chunk981631.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? Chunk100527.Z.COLLECTIBLES_SHOP_FULLSCREEN : Chunk100527.Z.COLLECTIBLES_SHOP,
      {
        analyticsLocations: x
      } = (0, Chunk906732.ZP)(b),
      j = (0, Chunk410127.Z)();
    Chunk73800.useEffect(() => {
      if (module) return;
      let t = g.exec(Chunk607070.hash);
      null != exports ? require.current = exports[1] : require.current = null
    }, [j, module, Chunk607070.hash]);
    let O = (0, Chunk442837.e7)([Chunk328347.Z], () => Chunk328347.Z.initialProductSkuId);
    Chunk73800.useEffect(() => {
      if (exports) return;
      let r = null;
      if (null != (r = module ? O : require.current)) {
        let e = setTimeout(() => {
          (e => {
            let {
              productSkuId: t,
              analyticsLocations: n,
              analyticsSource: r,
              tab: i
            } = e, a = u.Z.getProduct(t), l = u.Z.getCategoryForProduct(t);
            if (null != a && null != l) {
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
                  null != r && r > false && (0, m.$)(n, r)
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
            productSkuId: Chunk73800,
            analyticsLocations: x,
            analyticsSource: b,
            tab: j
          })
        }, 250);
        return () => clearTimeout(module)
      }
    }, [module, x, b, exports, O, j])
  },
  _ = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
      i = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
      [o, s] = r.useState(null),
      c = r.useCallback((e, n) => {
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
      setCategoryRef: c,
      handleScrollToCategory: d
    }
  }