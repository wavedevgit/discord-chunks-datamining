/** Chunk was on 5606 **/
/** chunk id: 380098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./228524.js"), require("./938796.js");
var Chunk122817 = require("./122817.js"),
  Chunk665260 = require("./665260.js"),
  Chunk315069 = require("./315069.js"),
  Chunk557009 = require("./557009.js"),
  Chunk202613 = require("./202613.js"),
  Chunk731935 = require("./731935.js"),
  Chunk272207 = require("./272207.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk315069.A {
  static createFromServer(e) {
    let t = null != e.payment_source ? a.Ay.createFromServer(e.payment_source) : null,
      n = null != e.sku ? o.A.createFromServer(e.sku) : null,
      r = null != e.subscription ? c.A.createFromServer(e.subscription) : null;
    return new _({
      id: e.id,
      createdAt: new Date(e.created_at),
      currency: e.currency,
      tax: e.tax,
      taxInclusive: e.tax_inclusive,
      amount: e.amount,
      amountRefunded: e.amount_refunded,
      status: e.status,
      metadata: e.metadata,
      description: e.description,
      paymentSource: t,
      paymentGateway: e.payment_gateway,
      flags: e.flags,
      subscription: r,
      skuId: e.sku_id,
      skuPrice: e.sku_price,
      sku: n,
      downloadableInvoice: e.downloadable_invoice,
      downloadableRefundInvoices: e.downloadable_refund_invoices,
      hasInvoiceURL: e.has_invoice_url,
      hasRefundInvoiceURLs: e.has_refund_invoice_urls,
      premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
      entitlements: null != e.entitlements ? e.entitlements.map(e => s.A.createFromServer(e)) : true
    })
  }
  get isPurchasedViaApple() {
    return this.paymentGateway === d.kM_.APPLE
  }
  get isPurchasedViaGoogle() {
    return this.paymentGateway === d.kM_.GOOGLE
  }
  get isPurchasedExternally() {
    return this.isPurchasedViaApple || this.isPurchasedViaGoogle
  }
  get isSubscription() {
    return null != this.subscription
  }
  get isPremiumSubscription() {
    return null != this.subscription && u.JM.has(this.subscription.planId)
  }
  get isPremiumGuildSubscription() {
    return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
      let {
        planId: t
      } = e;
      return u.pW.has(t)
    })
  }
  get isGift() {
    return i.Lt(this.flags, 1)
  }
  get isPremiumGift() {
    return this.isGift && Object.values(u.pe).includes(this.skuId)
  }
  get isGuildProductPurchase() {
    return null != this.sku && (this.sku.productLine === d.EZt.GUILD_PRODUCT || i.Lt(this.sku.flags, r.d.GUILD_PRODUCT))
  }
  get isSoftDeletedProduct() {
    var e;
    return (null == (e = this.sku) ? true : e.deleted) === true
  }
  get isCollectible() {
    return null != this.sku && this.sku.productLine === d.EZt.COLLECTIBLES
  }
  constructor(e) {
    super(), p(this, "id", true), p(this, "createdAt", true), p(this, "currency", true), p(this, "tax", true), p(this, "taxInclusive", true), p(this, "amount", true), p(this, "amountRefunded", true), p(this, "status", true), p(this, "description", true), p(this, "hasInvoiceURL", true), p(this, "hasRefundInvoiceURLs", true), p(this, "downloadableInvoice", true), p(this, "downloadableRefundInvoices", true), p(this, "flags", true), p(this, "paymentSource", true), p(this, "paymentGateway", true), p(this, "subscription", true), p(this, "skuId", true), p(this, "skuPrice", true), p(this, "sku", true), p(this, "premiumRefundDisqualificationReasons", true), p(this, "entitlements", true), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.hasInvoiceURL = e.hasInvoiceURL, this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons, this.entitlements = e.entitlements
  }
}