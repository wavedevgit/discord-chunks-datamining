/** Chunk was on 68406 **/
/** chunk id: 196026, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => p,
  ZK: () => m,
  dP: () => d,
  wn: () => u
}), require("./896048.js"), require("./321073.js");
var n, Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk993408 = require("./993408.js"),
  Chunk985018 = require("./985018.jsx"),
  u = ((n = {}).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n);
let d = {
    skuId: "None"
  },
  m = {
    skuId: "Shop"
  },
  p = () => {
    let e = (0, i.bG)([s.A], () => s.A.purchases),
      [t, r] = (0, i.yK)([a.A], () => [a.A.categories, a.A.products]);
    return (0, l.useMemo)(() => {
      let n = (0, c.ps)(e, t).reduce((t, n) => {
        let l = e.get(n.skuId);
        return (null != l ? (0, c.gA)(l) : (0, c.G0)(r.get(n.skuId))) ? t.premium_purchase.push(n) : null != l ? t.purchase.push(n) : t.preview.push(n), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [d, m, ...n.purchase],
        height: 12,
        header: o.intl.string(o.t.VqmVqE)
      }, {
        section: "premium_purchase",
        items: n.premium_purchase,
        height: 12,
        header: o.intl.string(o.t.TiLCgw)
      }, {
        section: "preview",
        items: n.preview,
        height: 12,
        header: o.intl.string(o.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [t, r, e])
  }