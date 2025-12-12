/** Chunk was on web.js **/
/** chunk id: 892264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk355467 = require("./355467.js"),
  Chunk496929 = require("./496929.js"),
  Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk351402 = require("./351402.js"),
  Chunk78839 = require("./78839.js"),
  Chunk580130 = require("./580130.js"),
  Chunk111361 = require("./111361.js"),
  Chunk474936 = require("./474936.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk147913.Z {
  constructor(...e) {
    super(...e), f(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription()
      }
    }), f(this, "maybeFetchSubscriptions", async () => {
      let e = o.default.getCurrentUser(),
        t = s.Z.isSubscriptionFetching;
      if ((0, u.I5)(e)) {
        l.Z.hasFetchedSubscriptions() || t || await (0, r.jg)();
        let e = l.Z.getPremiumSubscription();
        (null == e ? true : e.paymentSourceId) != null || c.Z.applicationIdsFetched.has(d.CL) || await (0, i.yD)(d.CL)
      }
    }), f(this, "maybeFetchMostRecentSubscription", () => {
      var e;
      let t = o.default.getCurrentUser(),
        n = (0, u.xI)(null != (e = null == t ? true : t.premiumType) ? e : null, d.PremiumTypes.TIER_1),
        i = l.Z.getIsFetchingMostRecentSubscription();
      null != t && n && t.hasHadPremium() && !i && (0, r.ou)()
    }), f(this, "maybeFetchCountryCode", async () => {
      let e = o.default.getCurrentUser();
      (0, u.I5)(e) && !s.Z.ipCountryCodeLoaded && await this.fetchCountryCode()
    }), f(this, "fetchCountryCode", async () => {
      await (0, r.GE)(), null != s.Z.ipCountryCode && await (0, r.tZ)()
    })
  }
}
let _ = new p