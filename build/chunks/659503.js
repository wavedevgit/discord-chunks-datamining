/** Chunk was on 23321 **/
/** chunk id: 659503, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Ay: () => x,
  wn: () => d
}), require("./896048.js"), require("./321073.js");
var n, Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk993408 = require("./993408.js"),
  Chunk638242 = require("./638242.js"),
  Chunk985018 = require("./985018.jsx"),
  d = ((n = {}).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n);
let p = {
    skuId: "None"
  },
  m = {
    skuId: "Shop"
  },
  x = () => {
    let e = (0, i.bG)([a.A], () => a.A.purchases),
      [t, l] = (0, i.yK)([s.A], () => [s.A.categories, s.A.products]);
    return c.A.useConfig({
      location: "use nameplate sections"
    }), (0, r.useMemo)(() => {
      let n = (0, o.zd)(e, t).reduce((t, n) => {
        var r;
        let i = e.get(n.skuId),
          s = l.get(n.skuId),
          a = null != i ? (0, o.gA)(i) : (0, o.G0)(s),
          c = null != (r = null == s ? true : s.isCategoryReward) && r;
        return a ? t.premium_purchase.push(n) : null != i ? t.purchase.push(n) : a || c || t.preview.push(n), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [p, m, ...n.purchase],
        height: 12,
        header: u.intl.string(u.t.WfGV52)
      }, {
        section: "premium_purchase",
        items: n.premium_purchase,
        height: 12,
        header: u.intl.string(u.t.TiLCgw)
      }, {
        section: "preview",
        items: n.preview,
        height: 12,
        header: u.intl.string(u.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [t, e, l])
  }