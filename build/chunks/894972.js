/** Chunk was on web.js **/
/** chunk id: 894972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => s
});
var Chunk315069 = require("./315069.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk315069.A {
  static createFromServer(e) {
    return new a({
      userId: e.user_id,
      subscriptionId: e.subscription_id,
      oldCurrency: e.old_currency,
      oldPrice: e.old_price,
      newCurrency: e.new_currency,
      newPrice: e.new_price,
      priceChangeMode: e.price_change_mode,
      expectedChargeTime: e.expected_charge_time,
      priceChangeId: e.price_change_id
    })
  }
  get isPriceIncrease() {
    return "PRICE_INCREASE" === this.priceChangeMode || "OPT_OUT_PRICE_INCREASE" === this.priceChangeMode
  }
  get isOptOutPriceIncrease() {
    return "OPT_OUT_PRICE_INCREASE" === this.priceChangeMode
  }
  get isPriceDecrease() {
    return "PRICE_DECREASE" === this.priceChangeMode
  }
  get isInFuture() {
    return this.expectedChargeTime > new Date().toISOString()
  }
  constructor(e) {
    super(), i(this, "userId", true), i(this, "subscriptionId", true), i(this, "oldCurrency", true), i(this, "oldPrice", true), i(this, "newCurrency", true), i(this, "newPrice", true), i(this, "priceChangeMode", true), i(this, "expectedChargeTime", true), i(this, "priceChangeId", true), this.userId = e.userId, this.subscriptionId = e.subscriptionId, this.oldCurrency = e.oldCurrency, this.oldPrice = e.oldPrice, this.newCurrency = e.newCurrency, this.newPrice = e.newPrice, this.priceChangeMode = e.priceChangeMode, this.expectedChargeTime = e.expectedChargeTime, this.priceChangeId = e.priceChangeId
  }
}
let s = a