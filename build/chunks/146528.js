/** Chunk was on web.js **/
/** chunk id: 146528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js"),
  Chunk591548 = require("./591548.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  static createInvoiceFromServer(e) {
    var t;
    return new a({
      id: e.id,
      invoiceItems: null == (t = e.invoice_items) ? true : t.map(i.H),
      total: e.total,
      subtotal: e.subtotal,
      currency: e.currency,
      tax: e.tax,
      taxInclusive: e.tax_inclusive,
      subscriptionPeriodStart: new Date(e.subscription_period_start),
      subscriptionPeriodEnd: new Date(e.subscription_period_end),
      status: e.status
    })
  }
  findInvoiceItemByPlanId(e) {
    var t;
    return null != (t = this.invoiceItems.find(t => t.subscriptionPlanId === e)) ? t : null
  }
  getDiscountIdIfExists() {
    let e = this.invoiceItems.find(e => e.discounts.length > 0);
    if (null == module || 0 === module.discounts.length) return;
    let t = module.discounts[0];
    if (null != exports) return exports.discount_id
  }
  constructor(e) {
    super(), o(this, "id", true), o(this, "invoiceItems", true), o(this, "total", true), o(this, "subtotal", true), o(this, "currency", true), o(this, "tax", true), o(this, "taxInclusive", true), o(this, "subscriptionPeriodStart", true), o(this, "subscriptionPeriodEnd", true), o(this, "status", true), this.id = e.id, this.invoiceItems = e.invoiceItems, this.total = e.total, this.subtotal = e.subtotal, this.currency = e.currency, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscriptionPeriodStart = e.subscriptionPeriodStart, this.subscriptionPeriodEnd = e.subscriptionPeriodEnd, this.status = e.status
  }
}