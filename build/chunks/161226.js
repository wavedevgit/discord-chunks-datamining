/** Chunk was on web.js **/
/** chunk id: 161226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk587177 = require("./587177.js"),
  Chunk718424 = require("./718424.js"),
  Chunk311850 = require("./311850.js"),
  Chunk778787 = require("./778787.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");

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
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class f {
  static fromServer(e) {
    var {
      type: t,
      sku_id: n,
      name: c,
      premium_type: d,
      category_sku_id: p,
      prices: _,
      bundled_products: m,
      variants: h,
      base_variant_name: g,
      base_variant_sku_id: E,
      variant_label: b,
      variant_value: y,
      purchased_at: O,
      purchase_type: v,
      expires_at: S
    } = e, I = u(e, ["type", "sku_id", "name", "premium_type", "category_sku_id", "prices", "bundled_products", "variants", "base_variant_name", "base_variant_sku_id", "variant_label", "variant_value", "purchased_at", "purchase_type", "expires_at"]);
    return new f({
      type: t,
      name: c,
      skuId: n,
      premiumType: d === l.WND ? null : d,
      categorySkuId: p,
      isCategoryReward: s.y8.some(e => {
        let {
          rewardSkuId: t
        } = e;
        return t === n
      }),
      prices: (0, a.l)(_),
      items: (0, i.i)(I.items),
      bundledProducts: null == m ? true : m.map(r.Z.fromServer),
      variants: null == h ? true : h.map(o.q.fromServer),
      googleSkuIds: I.google_sku_ids,
      eligibleOffers: I.eligible_offers,
      baseVariantName: g,
      baseVariantSkuId: E,
      variantLabel: b,
      variantValue: y,
      purchaseType: v,
      purchasedAt: null != O ? new Date(O) : O,
      expiresAt: null != S ? new Date(S) : null
    })
  }
  constructor(e) {
    c(this, "skuId", true), c(this, "name", true), c(this, "type", true), c(this, "premiumType", true), c(this, "items", true), c(this, "categorySkuId", true), c(this, "isCategoryReward", true), c(this, "prices", true), c(this, "bundledProducts", true), c(this, "variants", true), c(this, "variantGroupStoreListingId", true), c(this, "googleSkuIds", true), c(this, "eligibleOffers", true), c(this, "baseVariantName", true), c(this, "baseVariantSkuId", true), c(this, "variantLabel", true), c(this, "variantValue", true), c(this, "purchaseType", true), c(this, "purchasedAt", true), c(this, "expiresAt", true), this.skuId = e.skuId, this.name = e.name, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.isCategoryReward = e.isCategoryReward, this.prices = e.prices, this.bundledProducts = e.bundledProducts, this.googleSkuIds = e.googleSkuIds, this.variants = e.variants, this.eligibleOffers = e.eligibleOffers, this.baseVariantName = e.baseVariantName, this.baseVariantSkuId = e.baseVariantSkuId, this.variantLabel = e.variantLabel, this.variantValue = e.variantValue, this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType, this.expiresAt = e.expiresAt
  }
}