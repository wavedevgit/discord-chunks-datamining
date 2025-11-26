/** Chunk was on 79589 **/
/** chunk id: 439959, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  $0: () => d,
  Tm: () => u,
  ZP: () => p,
  oT: () => m
}), require("./388685.js"), require("./539854.js");
var n, Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  d = ((n = {}).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n);
let u = {
    skuId: "None"
  },
  m = {
    skuId: "Shop"
  },
  p = () => {
    let e = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      [t, r] = (0, Chunk399606.Wu)([Chunk597688.Z], () => [Chunk597688.Z.categories, Chunk597688.Z.products]);
    return (0, Chunk473749.useMemo)(() => {
      let n = (0, Chunk884697.iC)(module, exports).reduce((t, n) => {
        let i = e.get(n.skuId);
        return (0, o.G1)(null != i ? i : r.get(n.skuId)) ? t.premium_purchase.push(n) : null != i ? t.purchase.push(n) : t.preview.push(n), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [u, m, ...n.purchase],
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.VqmVqE)
      }, {
        section: "premium_purchase",
        items: n.premium_purchase,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.TiLCgw)
      }, {
        section: "preview",
        items: n.preview,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [exports, require, module])
  }