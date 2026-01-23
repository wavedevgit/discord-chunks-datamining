/** Chunk was on web.js **/
/** chunk id: 739380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk696444 = require("./696444.js"),
  Chunk474012 = require("./474012.js"),
  Chunk935816 = require("./935816.js"),
  Chunk986630 = require("./986630.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = d(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class f {
  static fromServer(e) {
    let {
      type: t,
      sku_id: n,
      name: c,
      premium_type: d,
      category_sku_id: p,
      prices: _,
      bundled_products: h,
      variants: m,
      base_variant_name: g,
      base_variant_sku_id: E,
      variant_label: y,
      variant_value: b,
      purchased_at: O,
      purchase_type: v,
      expires_at: A
    } = e, I = u(e, ["type", "sku_id", "name", "premium_type", "category_sku_id", "prices", "bundled_products", "variants", "base_variant_name", "base_variant_sku_id", "variant_label", "variant_value", "purchased_at", "purchase_type", "expires_at"]);
    return new f({
      type: t,
      name: c,
      skuId: n,
      premiumType: d === l.oA2 ? null : d,
      categorySkuId: p,
      isCategoryReward: o.MS.some(e => {
        let {
          rewardSkuId: t
        } = e;
        return t === n
      }),
      prices: (0, a.m)(_),
      items: (0, i.K)(I.items),
      bundledProducts: null == h ? true : h.map(r.A.fromServer),
      variants: null == m ? true : m.map(s.x.fromServer),
      googleSkuIds: I.google_sku_ids,
      eligibleOffers: I.eligible_offers,
      baseVariantName: g,
      baseVariantSkuId: E,
      variantLabel: y,
      variantValue: b,
      purchaseType: v,
      purchasedAt: null != O ? new Date(O) : O,
      expiresAt: null != A ? new Date(A) : null
    })
  }
  constructor(e) {
    c(this, "skuId", true), c(this, "name", true), c(this, "type", true), c(this, "premiumType", true), c(this, "items", true), c(this, "categorySkuId", true), c(this, "isCategoryReward", true), c(this, "prices", true), c(this, "bundledProducts", true), c(this, "variants", true), c(this, "variantGroupStoreListingId", true), c(this, "googleSkuIds", true), c(this, "eligibleOffers", true), c(this, "baseVariantName", true), c(this, "baseVariantSkuId", true), c(this, "variantLabel", true), c(this, "variantValue", true), c(this, "purchaseType", true), c(this, "purchasedAt", true), c(this, "expiresAt", true), this.skuId = e.skuId, this.name = e.name, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.isCategoryReward = e.isCategoryReward, this.prices = e.prices, this.bundledProducts = e.bundledProducts, this.googleSkuIds = e.googleSkuIds, this.variants = e.variants, this.eligibleOffers = e.eligibleOffers, this.baseVariantName = e.baseVariantName, this.baseVariantSkuId = e.baseVariantSkuId, this.variantLabel = e.variantLabel, this.variantValue = e.variantValue, this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType, this.expiresAt = e.expiresAt
  }
}