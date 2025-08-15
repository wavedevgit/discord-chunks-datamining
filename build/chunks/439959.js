/** Chunk was on web.js **/
/** chunk id: 439959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => c,
  Tm: () => u,
  ZP: () => f,
  oT: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  c = function(e) {
    return e.PURCHASE = "purchase", e.PREMIUM_PURCHASE = "premium_purchase", e.PREVIEW = "preview", e
  }({});
let u = {
    id: "None"
  },
  d = {
    id: "Shop"
  },
  f = () => {
    let e = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      [t, n] = (0, Chunk399606.Wu)([Chunk597688.Z], () => [Chunk597688.Z.categories, Chunk597688.Z.products]);
    return (0, Chunk647438.useMemo)(() => {
      let r = (0, Chunk884697.iC)(module, exports).reduce((t, r) => {
        let i = e.get(r.skuId);
        return (0, s.G1)(n.get(r.skuId)) ? t.premium_purchase.push(r) : null != i ? t.purchase.push(r) : t.preview.push(r), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [u, d, ...Chunk647438.purchase],
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.VqmVqK)
      }, {
        section: "premium_purchase",
        items: Chunk647438.premium_purchase,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.TiLCg4)
      }, {
        section: "preview",
        items: Chunk647438.preview,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["1vbbeX"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [exports, require, module])
  }