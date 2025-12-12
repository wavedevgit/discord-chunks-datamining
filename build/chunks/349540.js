/** Chunk was on web.js **/
/** chunk id: 349540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js");
require("./367074.js");
var Chunk748770 = require("./748770.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk147913.Z {
  async onPostConnectionOpen() {
    (0, Chunk748770.Pu)(), await this.maybeFetchBogoPromotion()
  }
  onSubscriptionUpdated(e) {
    let {
      subscription: t
    } = e;
    t.type === c.NY.PREMIUM && (0, a.Pu)(false)
  }
  onOfferUpdated() {
    (0, Chunk748770.Pu)(false)
  }
  onVCRedeemed(e) {
    let {
      entitlements: t
    } = e;
    t.some(e => e.type === l.qc2.FRACTIONAL_REDEMPTION) && (0, a.Pu)(false)
  }
  constructor(...e) {
    super(...e), u(this, "actions", {
      POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
      EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this),
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionUpdated.bind(this),
      BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
      BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: this.onOfferUpdated.bind(this),
      VIRTUAL_CURRENCY_REDEEM_SUCCESS: this.onVCRedeemed.bind(this)
    }), u(this, "maybeFetchBogoPromotion", async () => {
      let e = i.default.getCurrentUser();
      o.ZP.isPremiumExactly(e, s.PremiumTypes.TIER_2)
    })
  }
}
let f = new d