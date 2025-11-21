/** Chunk was on 8895 **/
/** chunk id: 539530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => p,
  ZP: () => g
}), require("./388685.js"), require("./539854.js");
var l, Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk235897 = require("./235897.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  p = ((l = {}).PURCHASE = "purchase", l.PREMIUM_PURCHASE = "premium_purchase", l.PREVIEW = "preview", l);
let m = {
    skuId: "None"
  },
  h = {
    skuId: "Shop"
  },
  g = () => {
    let e = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      [t, n] = (0, Chunk399606.Wu)([Chunk597688.Z], () => [Chunk597688.Z.categories, Chunk597688.Z.products]);
    return Chunk235897.Z.useConfig({
      location: "use nameplate sections"
    }), (0, Chunk473749.useMemo)(() => {
      let l = (0, Chunk884697.Y)(module, exports).reduce((t, l) => {
          let r = e.get(l.skuId),
            i = (0, o.G1)(null != r ? r : n.get(l.skuId));
          return i ? t.premium_purchase.push(l) : null != r ? t.purchase.push(l) : i || t.preview.push(l), t
        }, {
          purchase: [],
          premium_purchase: [],
          preview: []
        }),
        r = l.preview.filter(e => !u.y8.some(t => {
          let {
            rewardSkuId: n
          } = t;
          return n === e.skuId
        }));
      return [{
        section: "purchase",
        items: [m, h, ...l.purchase],
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.WfGV52)
      }, {
        section: "premium_purchase",
        items: l.premium_purchase,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.TiLCgw)
      }, {
        section: "preview",
        items: Chunk473749,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [exports, module, require])
  }