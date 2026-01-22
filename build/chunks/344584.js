/** Chunk was on web.js **/
/** chunk id: 344584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk384904 = require("./384904.js"),
  Chunk339048 = require("./339048.js"),
  Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk615405 = require("./615405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk469778 = require("./469778.js"),
  Chunk474090 = require("./474090.js"),
  Chunk788868 = require("./788868.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk439372.A {
  constructor(...e) {
    super(...e), f(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription()
      }
    }), f(this, "maybeFetchSubscriptions", async () => {
      let e = s.default.getCurrentUser(),
        t = o.A.isSubscriptionFetching;
      if ((0, u.ki)(e)) {
        l.A.hasFetchedSubscriptions() || t || await (0, r.hP)();
        let e = l.A.getPremiumSubscription();
        (null == e ? true : e.paymentSourceId) != null || c.A.applicationIdsFetched.has(d.tv) || await (0, i.LM)(d.tv)
      }
    }), f(this, "maybeFetchMostRecentSubscription", () => {
      var e;
      let t = s.default.getCurrentUser(),
        n = (0, u.cr)(null != (e = null == t ? true : t.premiumType) ? e : null, d.PremiumTypes.TIER_1),
        i = l.A.getIsFetchingMostRecentSubscription();
      null != t && n && t.hasHadPremium() && !i && (0, r.I8)()
    }), f(this, "maybeFetchCountryCode", async () => {
      let e = s.default.getCurrentUser();
      (0, u.ki)(e) && !o.A.ipCountryCodeLoaded && await this.fetchCountryCode()
    }), f(this, "fetchCountryCode", async () => {
      await (0, r.xe)(), null != o.A.ipCountryCode && await (0, r.$o)()
    })
  }
}
let _ = new p