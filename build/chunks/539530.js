/** Chunk was on 5873 **/
/** chunk id: 539530, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $0: () => u,
  ZP: () => m
}), require("./388685.js"), require("./539854.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk235897 = require("./235897.js"),
  Chunk388032 = require("./388032.jsx"),
  u = ((r = {}).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview", r);
let p = {
    skuId: "None"
  },
  _ = {
    skuId: "Shop"
  },
  m = () => {
    let e = (0, Chunk399606.e7)([Chunk1870.Z], () => Chunk1870.Z.purchases),
      [t, n] = (0, Chunk399606.Wu)([Chunk597688.Z], () => [Chunk597688.Z.categories, Chunk597688.Z.products]);
    return Chunk235897.Z.useConfig({
      location: "use nameplate sections"
    }), (0, Chunk647438.useMemo)(() => {
      let r = (0, Chunk884697.Y)(module, exports).reduce((t, r) => {
        let i = e.get(r.skuId),
          a = (0, o.G1)(null != i ? i : n.get(r.skuId));
        return a ? t.premium_purchase.push(r) : null != i ? t.purchase.push(r) : a || t.preview.push(r), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [p, _, ...r.purchase],
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t["WfGV5+"])
      }, {
        section: "premium_purchase",
        items: r.premium_purchase,
        height: 12,
        header: Chunk388032.intl.string(Chunk388032.t.TiLCg4)
      }, {
        section: "preview",
        items: r.preview,
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