/** Chunk was on 55183 **/
/** chunk id: 528439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => u,
  Tm: () => d,
  ZP: () => p,
  oT: () => f
}), require("./388685.js"), require("./539854.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  u = ((r = {}).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview", r);
let d = {
    skuId: "None"
  },
  f = {
    skuId: "Shop"
  },
  p = () => {
    let e = (0, l.e7)([s.Z], () => s.Z.purchases),
      [t, n] = (0, l.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
    return (0, i.useMemo)(() => {
      let r = (0, c.yn)(e, t).reduce((t, r) => {
        let i = e.get(r.skuId);
        return (null != i ? (0, c.qS)(i) : (0, c.G1)(n.get(r.skuId))) ? t.premium_purchase.push(r) : null != i ? t.purchase.push(r) : t.preview.push(r), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [d, f, ...r.purchase],
        height: 12,
        header: a.intl.string(a.t["9x1v/p"])
      }, {
        section: "premium_purchase",
        items: r.premium_purchase,
        height: 12,
        header: a.intl.string(a.t.TiLCgw)
      }, {
        section: "preview",
        items: r.preview,
        height: 12,
        header: a.intl.string(a.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [t, n, e])
  }