/** Chunk was on web.js **/
/** chunk id: 654044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk315069 = require("./315069.js"),
  Chunk874638 = require("./874638.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk315069.A {
  static createInvoiceFromServer(e) {
    var t;
    return new s({
      id: e.id,
      invoiceItems: null == (t = e.invoice_items) ? true : t.map(i.c),
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
    if (null == e || 0 === e.discounts.length) return;
    let t = e.discounts[0];
    if (null != t) return t.discount_id
  }
  constructor(e) {
    super(), a(this, "id", true), a(this, "invoiceItems", true), a(this, "total", true), a(this, "subtotal", true), a(this, "currency", true), a(this, "tax", true), a(this, "taxInclusive", true), a(this, "subscriptionPeriodStart", true), a(this, "subscriptionPeriodEnd", true), a(this, "status", true), this.id = e.id, this.invoiceItems = e.invoiceItems, this.total = e.total, this.subtotal = e.subtotal, this.currency = e.currency, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscriptionPeriodStart = e.subscriptionPeriodStart, this.subscriptionPeriodEnd = e.subscriptionPeriodEnd, this.status = e.status
  }
}