/** Chunk was on web.js **/
/** chunk id: 301766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q0: () => l,
  ZP: () => c,
  kH: () => s
}), require("./388685.js");
var Chunk81825 = require("./81825.js"),
  Chunk474936 = require("./474936.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  static createFromServer(e) {
    let t = {};
    return null != e.prices && (t = Object.keys(e.prices).reduce((t, n) => {
      if (null == e.prices) return t;
      let r = e.prices[n];
      return t[n] = {
        countryPrices: {
          countryCode: r.country_prices.country_code,
          prices: r.country_prices.prices.map(t => s(t, e.tax_inclusive))
        },
        paymentSourcePrices: Object.entries(r.payment_source_prices).reduce((t, n) => {
          let [r, i] = n;
          return t[r] = i.map(t => s(t, e.tax_inclusive)), t
        }, {})
      }, t
    }, {})), new a({
      id: e.id,
      name: e.name,
      interval: e.interval,
      intervalCount: e.interval_count,
      taxInclusive: e.tax_inclusive,
      skuId: e.sku_id,
      currency: e.currency,
      price: e.price,
      prices: t
    })
  }
  get premiumSubscriptionType() {
    switch (this.skuId) {
      case Chunk474936.Si.LEGACY:
      case Chunk474936.Si.TIER_2:
        return Chunk474936.PremiumTypes.TIER_2;
      case Chunk474936.Si.TIER_1:
        return Chunk474936.PremiumTypes.TIER_1;
      case Chunk474936.Si.TIER_0:
        return Chunk474936.PremiumTypes.TIER_0;
      default:
        return null
    }
  }
  toServerData() {
    let e = {};
    return Object.keys(this.prices).forEach(t => {
      let n = this.prices[t];
      e[t] = {
        country_prices: {
          country_code: n.countryPrices.countryCode,
          prices: n.countryPrices.prices
        },
        payment_source_prices: n.paymentSourcePrices
      }
    }), {
      id: this.id,
      name: this.name,
      sku_id: this.skuId,
      interval: this.interval,
      interval_count: this.intervalCount,
      tax_inclusive: this.taxInclusive,
      currency: this.currency,
      price: this.price,
      prices: module,
      price_tier: this.price
    }
  }
  constructor(e) {
    super(), o(this, "id", true), o(this, "name", true), o(this, "interval", true), o(this, "intervalCount", true), o(this, "taxInclusive", true), o(this, "skuId", true), o(this, "currency", true), o(this, "price", true), o(this, "prices", true), this.id = e.id, this.name = e.name, this.interval = e.interval, this.intervalCount = e.intervalCount, this.taxInclusive = e.taxInclusive, this.skuId = e.skuId, this.currency = e.currency, this.price = e.price, this.prices = e.prices
  }
}

function s(e, t) {
  return {
    amount: e.amount,
    currency: e.currency,
    tax: 0,
    taxInclusive: t
  }
}

function l(e) {
  return [i.Xh.NONE_MONTH, i.Xh.NONE_3_MONTH, i.Xh.NONE_6_MONTH, i.Xh.NONE_YEAR].includes(e)
}
let c = a