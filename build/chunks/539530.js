/** Chunk was on 57902 **/
/** chunk id: 539530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => u,
  ZP: () => m
}), require("./388685.js"), require("./539854.js");
var i, Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk235897 = require("./235897.js"),
  Chunk388032 = require("./388032.jsx"),
  u = ((i = {}).PURCHASE = "purchase", i.PREMIUM_PURCHASE = "premium_purchase", i.PREVIEW = "preview", i);
let p = {
    id: "None"
  },
  _ = {
    id: "Shop"
  },
  m = () => {
    let e = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      [t, n] = (0, Chunk399606.Wu)([Chunk597688.Z], () => [Chunk597688.Z.categories, Chunk597688.Z.products]);
    return Chunk235897.Z.useConfig({
      location: "use nameplate sections"
    }), (0, Chunk647438.useMemo)(() => {
      let i = (0, Chunk884697.Y)(module, exports).reduce((t, i) => {
        let r = e.get(i.skuId),
          a = (0, s.G1)(null != r ? r : n.get(i.skuId));
        return a ? t.premium_purchase.push(i) : null != r ? t.purchase.push(i) : a || t.preview.push(i), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [p, _, ...i.purchase],
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["WfGV5+"])
      }, {
        section: "premium_purchase",
        items: i.premium_purchase,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.TiLCg4)
      }, {
        section: "preview",
        items: i.preview,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["1vbbeX"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [exports, module, require])
  }