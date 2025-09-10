/** Chunk was on 8895 **/
/** chunk id: 539530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => d,
  ZP: () => m
}), require("./388685.js"), require("./539854.js");
var l, Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  d = ((l = {}).PURCHASE = "purchase", l.PREMIUM_PURCHASE = "premium_purchase", l.PREVIEW = "preview", l);
let u = {
    id: "None"
  },
  p = {
    id: "Shop"
  },
  m = () => {
    let e = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      [t, n] = (0, Chunk399606.Wu)([Chunk597688.Z], () => [Chunk597688.Z.categories, Chunk597688.Z.products]);
    return (0, Chunk647438.useMemo)(() => {
      let l = (0, Chunk884697.Y)(module, exports).reduce((t, l) => {
        let i = e.get(l.skuId),
          r = (0, o.G1)(n.get(l.skuId));
        return r && 1 ? t.premium_purchase.push(l) : null != i ? t.purchase.push(l) : r || t.preview.push(l), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [u, p, ...l.purchase],
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["WfGV5+"])
      }, {
        section: "premium_purchase",
        items: l.premium_purchase,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.TiLCg4)
      }, {
        section: "preview",
        items: l.preview,
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