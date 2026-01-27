/** Chunk was on 92818 **/
/** chunk id: 176448, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => f,
  ZK: () => p,
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
  p = {
    skuId: "Shop"
  },
  f = () => {
    let e = (0, i.bG)([o.A], () => o.A.purchases),
      [t, r] = (0, i.yK)([s.A], () => [s.A.categories, s.A.products]);
    return (0, l.useMemo)(() => {
      let n = (0, c.wo)(e, t).reduce((t, n) => {
        let l = e.get(n.skuId);
        return (null != l ? (0, c.gA)(l) : (0, c.G0)(r.get(n.skuId))) ? t.premium_purchase.push(n) : null != l ? t.purchase.push(n) : t.preview.push(n), t
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
      return [{
        section: "purchase",
        items: [d, p, ...n.purchase],
        height: 12,
        header: a.intl.string(a.t["9x1v/p"])
      }, {
        section: "premium_purchase",
        items: n.premium_purchase,
        height: 12,
        header: a.intl.string(a.t.TiLCgw)
      }, {
        section: "preview",
        items: n.preview,
        height: 12,
        header: a.intl.string(a.t["1vbbee"])
      }].filter(e => {
        let {
          items: t
        } = e;
        return t.length > 0
      })
    }, [t, r, e])
  }