/** Chunk was on web.js **/
/** chunk id: 700206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73825 = require("./73825.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk636194 = require("./636194.js"),
  Chunk624456 = require("./624456.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let t = (0, i.bG)([s.A], () => s.A.getSubscriptions()),
    n = r.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === u.rzx.GUILD && (e[(0, c.M)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: d,
      activeSubscriptionListing: f
    } = (0, i.cf)([l.A], () => {
      var t;
      let r, i = null,
        a = null != e ? l.A.getSubscriptionGroupListing(e) : null;
      for (let e of null != (t = null == a ? true : a.subscription_listings_ids) ? t : []) {
        let t = l.A.getSubscriptionListing(e),
          a = null == t ? true : t.subscription_plans[0].id;
        if (null == a) continue;
        let o = n[a];
        if (null != o) {
          i = o, r = t;
          break
        }
      }
      return {
        activeSubscription: i,
        activeSubscriptionListing: r
      }
    }),
    p = null == f ? true : f.subscription_plans[0],
    _ = null == p ? true : p.id,
    h = null == p ? true : p.sku_id,
    m = (0, i.bG)([o.A], () => null != _ ? o.A.get(_) : null),
    g = null == f ? true : f.soft_deleted;
  return r.useEffect(() => {
    null != m || null == h || o.A.isFetchingForSKU(h) || (0, a.ur)(h, true, true, g)
  }, [m, h, g]), {
    activeSubscription: d,
    activeSubscriptionListing: f,
    activeSubscriptionPlanFromStore: m
  }
}