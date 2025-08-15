/** Chunk was on web.js **/
/** chunk id: 209747, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk81825 = require("./81825.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  static createFromServer(e, t) {
    return new a({
      id: e.id,
      subscriptionId: e.subscription_id,
      premiumGuildSubscription: null != e.premium_guild_subscription ? {
        id: e.premium_guild_subscription.id,
        guildId: e.premium_guild_subscription.guild_id
      } : null,
      canceled: e.canceled,
      cooldownEndsAt: e.cooldown_ends_at,
      subscription: t
    })
  }
  isOnCooldown() {
    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
  }
  isAvailable() {
    return null == this.premiumGuildSubscription && !this.isOnCooldown()
  }
  constructor(e) {
    super(), i(this, "id", true), i(this, "subscriptionId", true), i(this, "premiumGuildSubscription", true), i(this, "canceled", true), i(this, "cooldownEndsAt", true), i(this, "subscription", true), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
  }
}
let o = a