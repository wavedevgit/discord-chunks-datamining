/** Chunk was on web.js **/
/** chunk id: 934826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk289393 = require("./289393.js"),
  Chunk697227 = require("./697227.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.getSubscriptions()),
    n = r.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: d,
      activeSubscriptionListing: f
    } = (0, i.cj)([l.Z], () => {
      var t;
      let r, i = null,
        a = null != e ? l.Z.getSubscriptionGroupListing(e) : null;
      for (let e of null != (t = null == a ? true : a.subscription_listings_ids) ? t : []) {
        let t = l.Z.getSubscriptionListing(e),
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
    m = (0, i.e7)([o.Z], () => null != _ ? o.Z.get(_) : null),
    g = null == f ? true : f.soft_deleted;
  return r.useEffect(() => {
    null != m || null == h || o.Z.isFetchingForSKU(h) || (0, a.GZ)(h, true, true, g)
  }, [m, h, g]), {
    activeSubscription: d,
    activeSubscriptionListing: f,
    activeSubscriptionPlanFromStore: m
  }
}