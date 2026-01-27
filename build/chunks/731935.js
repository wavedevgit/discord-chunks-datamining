/** Chunk was on web.js **/
/** chunk id: 731935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./228524.js"), require("./896048.js"), require("./938796.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk575593 = require("./575593.js"),
  Chunk665260 = require("./665260.js"),
  Chunk315069 = require("./315069.js"),
  Chunk871123 = require("./871123.js"),
  Chunk611010 = require("./611010.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = ["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"];

function p(e) {
  if (null != e) return {
    staticImagePath: e.static_image_path,
    animatedImagePath: e.animated_image_path,
    videoPath: e.video_path
  }
}

function _(e) {
  var t, n, r;
  return {
    src: e.src,
    loop: e.loop,
    height: e.height,
    width: e.width,
    duration: null != (t = e.duration) ? t : 0,
    start: null != (n = e.start) ? n : 0,
    loopDelay: e.loop_delay,
    position: e.position,
    zIndex: e.z_index,
    randomizedSources: null == (r = e.randomized_sources) ? true : r.map(e => ({
      src: e.src
    }))
  }
}

function h(e) {
  if (null != e) {
    if (e.type === a.R.AVATAR_DECORATION) return {
      id: e.id,
      type: e.type,
      asset: e.asset,
      assets: p(e.assets),
      label: e.label,
      labelLocalized: e.label_localized
    };
    if (e.type === a.R.NAMEPLATE) return {
      id: e.id,
      type: e.type,
      asset: e.asset,
      assets: p(e.assets),
      label: e.label,
      labelLocalized: e.label_localized,
      palette: e.palette
    };
    if (e.type === a.R.PROFILE_EFFECT) {
      var t;
      return {
        id: e.id,
        type: e.type,
        title: e.title,
        titleLocalized: e.title_localized,
        description: e.description,
        descriptionLocalized: e.description_localized,
        accessibilityLabel: e.accessibility_label,
        accessibilityLabelLocalized: e.accessibility_label_localized,
        animationType: e.animation_type,
        staticFrameSrc: e.static_frame_src,
        thumbnailPreviewSrc: e.thumbnail_preview_src,
        reducedMotionSrc: e.reduced_motion_src,
        effects: null == (t = e.effects) ? true : t.map(_)
      }
    }
  }
}

function m(e) {
  if (null != e) return {
    role: e.role,
    baseVariantSkuId: e.base_variant_sku_id,
    baseVariantName: e.base_variant_name,
    value: e.value,
    label: e.label,
    collapseUnder: e.collapse_under
  }
}

function g(e) {
  if (null != e) return {
    type: e.type,
    item: h(e.item),
    categorySkuId: e.category_sku_id,
    premiumType: e.premium_type,
    expiresSecondsAfterClaim: e.expires_seconds_after_claim,
    expiresAt: null != e.expires_at ? new Date(1e3 * e.expires_at) : true,
    variant: m(e.variant),
    optionSelectorDisplayValue: e.option_selector_display_value
  }
}

function E(e) {
  if (null != e) return {
    socialLayer: (0, l.M$)(e.social_layer),
    collectibles: g(e.collectibles)
  }
}
class y extends Chunk315069.A {
  static createFromServer(e) {
    var t, n, r, a, o, s, l, u, d;
    let {
      price: f
    } = e;
    return new y({
      id: e.id,
      type: e.type,
      applicationId: e.application_id,
      application: null != e.application ? c.Ay.createFromServer(e.application) : null,
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
      price: null != f ? {
        amount: f.amount,
        currency: f.currency,
        saleAmount: f.sale_amount,
        salePercentage: f.sale_percentage,
        premium: f.premium
      } : null,
      premium: null != (r = e.premium) && r,
      showAgeGate: e.show_age_gate || false,
      restricted: e.restricted || false,
      slug: null != (a = e.slug) ? a : "",
      exclusive: e.exclusive || false,
      locales: null != (o = e.locales) ? o : ["en-US"],
      flags: e.flags,
      externalPurchaseUrl: e.external_purchase_url,
      deleted: null != (s = e.deleted) && s,
      bundledSkuIds: null != (l = e.bundled_sku_ids) ? l : [],
      bundledSkus: null != (u = null == (d = e.bundled_skus) ? true : d.map(e => y.createFromServer(e))) ? u : [],
      tenantMetadata: E(e.tenant_metadata),
      thumbnailAssetId: e.thumbnail_asset_id,
      description: e.description
    })
  }
  get supportedOperatingSystems() {
    let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
    return e.length > 0 ? e : [u.uje.WINDOWS]
  }
  get isOnSale() {
    return null != this.price && null != this.price.saleAmount
  }
  isGiftable() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.price;
    return this.type === u.Puh.DURABLE_PRIMARY && this.available && this.requiresPayment && null != e && u.Ly6.has(e.currency) && null == this.externalPurchaseUrl
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
    return f.includes(this.id)
  }
  get available() {
    return (0, o.Lt)(this.flags, u.d68.AVAILABLE) || null != this.externalPurchaseUrl
  }
  isAvailableForDistribution() {
    return this.available && null != this.getPrice() && null == this.externalPurchaseUrl && (!this.premium || (0, o.Lt)(this.flags, u.d68.PREMIUM_AND_DISTRIBUTION))
  }
  isAvailable() {
    return (0, o.Lt)(this.flags, u.d68.AVAILABLE)
  }
  isPremiumPerk() {
    return this.premium && ((0, o.Lt)(this.flags, u.d68.PREMIUM_PURCHASE) || (0, o.Lt)(this.flags, u.d68.PREMIUM_AND_DISTRIBUTION))
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  isPreorder() {
    return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate
  }
  constructor(e) {
    super(), d(this, "id", true), d(this, "type", true), d(this, "applicationId", true), d(this, "application", true), d(this, "eligiblePaymentGateways", true), d(this, "productLine", true), d(this, "name", true), d(this, "releaseDate", true), d(this, "preorderReleaseAt", true), d(this, "preorderApproximateReleaseDate", true), d(this, "summary", true), d(this, "features", true), d(this, "genres", true), d(this, "dependentSkuId", true), d(this, "manifests", true), d(this, "availableRegions", true), d(this, "accessType", true), d(this, "systemRequirements", true), d(this, "contentRating", true), d(this, "contentRatingAgency", true), d(this, "legalNotice", true), d(this, "price", true), d(this, "premium", true), d(this, "showAgeGate", true), d(this, "restricted", true), d(this, "slug", true), d(this, "exclusive", true), d(this, "locales", true), d(this, "flags", true), d(this, "externalPurchaseUrl", true), d(this, "deleted", true), d(this, "bundledSkuIds", true), d(this, "bundledSkus", true), d(this, "tenantMetadata", true), d(this, "thumbnailAssetId", true), d(this, "description", true), this.id = e.id, this.type = e.type, this.applicationId = e.applicationId, this.application = e.application, this.eligiblePaymentGateways = e.eligiblePaymentGateways, this.productLine = e.productLine, this.name = e.name, this.preorderReleaseAt = e.preorderReleaseAt, this.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate, this.releaseDate = e.releaseDate, this.summary = e.summary, this.features = e.features, this.genres = e.genres, this.dependentSkuId = e.dependentSkuId, this.manifests = e.manifests, this.availableRegions = e.availableRegions, this.accessType = e.accessType, this.systemRequirements = e.systemRequirements, this.contentRating = e.contentRating, this.contentRatingAgency = e.contentRatingAgency, this.legalNotice = e.legalNotice, this.price = e.price, this.premium = e.premium, this.showAgeGate = e.showAgeGate, this.restricted = e.restricted, this.slug = e.slug, this.exclusive = e.exclusive, this.locales = e.locales, this.flags = e.flags, this.externalPurchaseUrl = e.externalPurchaseUrl || null, this.deleted = e.deleted, this.bundledSkuIds = e.bundledSkuIds, this.bundledSkus = e.bundledSkus, this.tenantMetadata = e.tenantMetadata, this.thumbnailAssetId = e.thumbnailAssetId, this.description = e.description
  }
}