/** Chunk was on 79589 **/
/** chunk id: 439959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => d,
  Tm: () => u,
  ZP: () => p,
  oT: () => m
}), require("./388685.js"), require("./539854.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  d = ((r = {}).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview", r);
let u = {
    skuId: "None"
  },
  m = {
    skuId: "Shop"
  },
  p = () => {
    let e = (0, l.e7)([s.Z], () => s.Z.purchases),
      [t, n] = (0, l.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
    return (0, i.useMemo)(() => {
      let r = (0, o.iC)(e, t).reduce((t, r) => {
        let i = e.get(r.skuId);
        return (null != i ? (0, o.qS)(i) : (0, o.G1)(n.get(r.skuId))) ? t.premium_purchase.push(r) : null != i ? t.purchase.push(r) : t.preview.push(r), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [u, m, ...r.purchase],
        height: 12,
        header: c.intl.string(c.t.VqmVqE)
      }, {
        section: "premium_purchase",
        items: r.premium_purchase,
        height: 12,
        header: c.intl.string(c.t.TiLCgw)
      }, {
        section: "preview",
        items: r.preview,
        height: 12,
        header: c.intl.string(c.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [t, n, e])
  }