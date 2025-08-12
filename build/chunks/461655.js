/** Chunk was on 20501 **/
/** chunk id: 461655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./997841.js");
var Chunk314877 = require("./314877.js"),
  Chunk81825 = require("./81825.js"),
  Chunk630388 = require("./630388.js"),
  Chunk46141 = require("./46141.js"),
  Chunk659181 = require("./659181.js"),
  Chunk255078 = require("./255078.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk81825.Z {
  static createFromServer(e) {
    let t = null != e.payment_source ? a.ZP.createFromServer(e.payment_source) : null,
      n = null != e.sku ? l.Z.createFromServer(e.sku) : null,
      i = null != e.subscription ? o.Z.createFromServer(e.subscription) : null;
    return new m({
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
      subscription: i,
      skuId: e.sku_id,
      skuPrice: e.sku_price,
      sku: n,
      downloadableInvoice: e.downloadable_invoice,
      downloadableRefundInvoices: e.downloadable_refund_invoices,
      hasInvoiceURL: e.has_invoice_url,
      hasRefundInvoiceURLs: e.has_refund_invoice_urls,
      premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons
    })
  }
  get isPurchasedViaApple() {
    return this.paymentGateway === Chunk981631.gg$.APPLE
  }
  get isPurchasedViaGoogle() {
    return this.paymentGateway === Chunk981631.gg$.GOOGLE
  }
  get isPurchasedExternally() {
    return this.isPurchasedViaApple || this.isPurchasedViaGoogle
  }
  get isSubscription() {
    return null != this.subscription
  }
  get isPremiumSubscription() {
    return null != this.subscription && Chunk474936.dJ.has(this.subscription.planId)
  }
  get isPremiumGuildSubscription() {
    return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
      let {
        planId: t
      } = e;
      return d.Z1.has(t)
    })
  }
  get isGift() {
    return Chunk630388.yE(this.flags, 1)
  }
  get isPremiumGift() {
    return this.isGift && Object.values(Chunk474936.Si).includes(this.skuId)
  }
  get isGuildProductPurchase() {
    return null != this.sku && (this.sku.productLine === Chunk981631.POd.GUILD_PRODUCT || Chunk630388.yE(this.sku.flags, Chunk314877.l.GUILD_PRODUCT))
  }
  get isSoftDeletedProduct() {
    var e;
    return (null == (e = this.sku) ? true : module.deleted) === true
  }
  get isCollectible() {
    return null != this.sku && this.sku.productLine === Chunk981631.POd.COLLECTIBLES
  }
  constructor(e) {
    super(), u(this, "id", true), u(this, "createdAt", true), u(this, "currency", true), u(this, "tax", true), u(this, "taxInclusive", true), u(this, "amount", true), u(this, "amountRefunded", true), u(this, "status", true), u(this, "description", true), u(this, "hasInvoiceURL", true), u(this, "hasRefundInvoiceURLs", true), u(this, "downloadableInvoice", true), u(this, "downloadableRefundInvoices", true), u(this, "flags", true), u(this, "paymentSource", true), u(this, "paymentGateway", true), u(this, "subscription", true), u(this, "skuId", true), u(this, "skuPrice", true), u(this, "sku", true), u(this, "premiumRefundDisqualificationReasons", true), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.hasInvoiceURL = e.hasInvoiceURL, this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons
  }
}