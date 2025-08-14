/** Chunk was on 25548 **/
/** chunk id: 934826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk289393 = require("./289393.js"),
  Chunk697227 = require("./697227.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = (0, r.e7)([s.Z], () => s.Z.getSubscriptions()),
    n = i.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === d.NYc.GUILD && (e[(0, c.W)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: u,
      activeSubscriptionListing: m
    } = (0, r.cj)([o.Z], () => {
      var t;
      let i, r = null,
        l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
      for (let e of null != (t = null == l ? true : l.subscription_listings_ids) ? t : []) {
        let t = o.Z.getSubscriptionListing(e),
          l = null == t ? true : t.subscription_plans[0].id;
        if (null == l) continue;
        let a = n[l];
        if (null != a) {
          r = a, i = t;
          break
        }
      }
      return {
        activeSubscription: r,
        activeSubscriptionListing: i
      }
    }),
    f = null == m ? true : m.subscription_plans[0],
    g = null == f ? true : f.id,
    h = null == f ? true : f.sku_id,
    p = (0, r.e7)([a.Z], () => null != g ? a.Z.get(g) : null),
    v = null == m ? true : m.soft_deleted;
  return i.useEffect(() => {
    null != p || null == h || a.Z.isFetchingForSKU(h) || (0, l.GZ)(h, true, true, v)
  }, [p, h, v]), {
    activeSubscription: u,
    activeSubscriptionListing: m,
    activeSubscriptionPlanFromStore: p
  }
}