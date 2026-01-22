/** Chunk was on web.js **/
/** chunk id: 731935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./938796.js"), require("./228524.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk665260 = require("./665260.js"),
  Chunk315069 = require("./315069.js"),
  Chunk871123 = require("./871123.js"),
  Chunk611010 = require("./611010.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = ["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"];

function f(e) {
  if (null != e && null != e.social_layer) return {
    socialLayer: (0, o.M$)(e.social_layer)
  }
}
class p extends Chunk315069.A {
  static createFromServer(e) {
    var t, n, r, a, s, o, c;
    let {
      price: u
    } = e;
    return new p({
      id: e.id,
      type: e.type,
      applicationId: e.application_id,
      application: null != e.application ? l.Ay.createFromServer(e.application) : null,
      eligiblePaymentGateways: null != (t = e.eligible_payment_gateways) ? t : null,
      productLine: e.product_line,
      name: null != (n = e.name) ? n : "",
      releaseDate: null != e.release_date ? i()(e.release_date) : null,
      preorderReleaseAt: null != e.preorder_release_at ? i()(e.preorder_release_at) : null,
      preorderApproximateReleaseDate: e.preorder_approximate_release_date,
      summary: e.summary,
      features: new Set(e.features),
      genres: new Set(e.genres),
      dependentSkuId: e.dependent_sku_id,
      manifests: e.manifests,
      availableRegions: e.available_regions,
      accessType: e.access_type,
      systemRequirements: e.system_requirements,
      contentRating: e.content_rating,
      contentRatingAgency: e.content_rating_agency,
      legalNotice: e.legal_notice,
      price: null != u ? {
        amount: u.amount,
        currency: u.currency,
        saleAmount: u.sale_amount,
        salePercentage: u.sale_percentage,
        premium: u.premium
      } : null,
      premium: null != (r = e.premium) && r,
      showAgeGate: e.show_age_gate || false,
      restricted: e.restricted || false,
      slug: null != (a = e.slug) ? a : "",
      exclusive: e.exclusive || false,
      locales: null != (s = e.locales) ? s : ["en-US"],
      flags: e.flags,
      externalPurchaseUrl: e.external_purchase_url,
      deleted: null != (o = e.deleted) && o,
      bundledSkuIds: null != (c = e.bundled_sku_ids) ? c : [],
      tenantMetadata: f(e.tenant_metadata),
      thumbnailAssetId: e.thumbnail_asset_id,
      description: e.description
    })
  }
  get supportedOperatingSystems() {
    let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
    return e.length > 0 ? e : [c.uje.WINDOWS]
  }
  get isOnSale() {
    return null != this.price && null != this.price.saleAmount
  }
  isGiftable() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.price;
    return this.type === c.Puh.DURABLE_PRIMARY && this.available && this.requiresPayment && null != e && c.Ly6.has(e.currency) && null == this.externalPurchaseUrl
  }
  getPrice() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      {
        price: n
      } = this;
    if (null == n) return null;
    if (null != e) {
      var r;
      let t = null == (r = n.premium) ? true : r[e];
      if (null != t) return {
        amount: t.amount,
        currency: n.currency
      }
    }
    return t && null != n.saleAmount ? {
      amount: n.saleAmount,
      currency: n.currency
    } : {
      amount: n.amount,
      currency: n.currency
    }
  }
  getDisplaySalePercentage() {
    return null == this.price || null == this.price.salePercentage ? null : "-".concat(this.price.salePercentage, "%")
  }
  get requiresPayment() {
    let e = this.getPrice();
    return !this.premium && null != e && e.amount > 0
  }
  get isTheGameAwardsWinner() {
    return d.includes(this.id)
  }
  get available() {
    return (0, a.Lt)(this.flags, c.d68.AVAILABLE) || null != this.externalPurchaseUrl
  }
  isAvailableForDistribution() {
    return this.available && null != this.getPrice() && null == this.externalPurchaseUrl && (!this.premium || (0, a.Lt)(this.flags, c.d68.PREMIUM_AND_DISTRIBUTION))
  }
  isAvailable() {
    return (0, a.Lt)(this.flags, c.d68.AVAILABLE)
  }
  isPremiumPerk() {
    return this.premium && ((0, a.Lt)(this.flags, c.d68.PREMIUM_PURCHASE) || (0, a.Lt)(this.flags, c.d68.PREMIUM_AND_DISTRIBUTION))
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  isPreorder() {
    return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate
  }
  constructor(e) {
    super(), u(this, "id", true), u(this, "type", true), u(this, "applicationId", true), u(this, "application", true), u(this, "eligiblePaymentGateways", true), u(this, "productLine", true), u(this, "name", true), u(this, "releaseDate", true), u(this, "preorderReleaseAt", true), u(this, "preorderApproximateReleaseDate", true), u(this, "summary", true), u(this, "features", true), u(this, "genres", true), u(this, "dependentSkuId", true), u(this, "manifests", true), u(this, "availableRegions", true), u(this, "accessType", true), u(this, "systemRequirements", true), u(this, "contentRating", true), u(this, "contentRatingAgency", true), u(this, "legalNotice", true), u(this, "price", true), u(this, "premium", true), u(this, "showAgeGate", true), u(this, "restricted", true), u(this, "slug", true), u(this, "exclusive", true), u(this, "locales", true), u(this, "flags", true), u(this, "externalPurchaseUrl", true), u(this, "deleted", true), u(this, "bundledSkuIds", true), u(this, "tenantMetadata", true), u(this, "thumbnailAssetId", true), u(this, "description", true), this.id = e.id, this.type = e.type, this.applicationId = e.applicationId, this.application = e.application, this.eligiblePaymentGateways = e.eligiblePaymentGateways, this.productLine = e.productLine, this.name = e.name, this.preorderReleaseAt = e.preorderReleaseAt, this.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate, this.releaseDate = e.releaseDate, this.summary = e.summary, this.features = e.features, this.genres = e.genres, this.dependentSkuId = e.dependentSkuId, this.manifests = e.manifests, this.availableRegions = e.availableRegions, this.accessType = e.accessType, this.systemRequirements = e.systemRequirements, this.contentRating = e.contentRating, this.contentRatingAgency = e.contentRatingAgency, this.legalNotice = e.legalNotice, this.price = e.price, this.premium = e.premium, this.showAgeGate = e.showAgeGate, this.restricted = e.restricted, this.slug = e.slug, this.exclusive = e.exclusive, this.locales = e.locales, this.flags = e.flags, this.externalPurchaseUrl = e.externalPurchaseUrl || null, this.deleted = e.deleted, this.bundledSkuIds = e.bundledSkuIds, this.tenantMetadata = e.tenantMetadata, this.thumbnailAssetId = e.thumbnailAssetId, this.description = e.description
  }
}