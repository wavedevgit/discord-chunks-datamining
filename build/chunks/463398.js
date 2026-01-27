/** Chunk was on web.js **/
/** chunk id: 463398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js");
require("./40185.js");
var Chunk597758 = require("./597758.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk439372.A {
  async onPostConnectionOpen() {
    (0, o.BE)(), await this.maybeFetchBogoPromotion()
  }
  onSubscriptionUpdated(e) {
    let {
      subscription: t
    } = e;
    t.type === c.rz.PREMIUM && (0, o.BE)(false)
  }
  onOfferUpdated() {
    (0, o.BE)(false)
  }
  onVCRedeemed(e) {
    let {
      entitlements: t
    } = e;
    t.some(e => e.type === l.zF_.FRACTIONAL_REDEMPTION) && (0, o.BE)(false)
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
      a.Ay.isPremiumExactly(e, s.PremiumTypes.TIER_2)
    })
  }
}
let f = new d