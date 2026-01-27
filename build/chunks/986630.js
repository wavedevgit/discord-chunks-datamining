/** Chunk was on web.js **/
/** chunk id: 986630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  x: () => m
});
var Chunk696444 = require("./696444.js"),
  Chunk474012 = require("./474012.js"),
  Chunk935816 = require("./935816.js"),
  Chunk931772 = require("./931772.js"),
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

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class h extends Chunk931772.A {
  static fromServer(e) {
    let {
      type: t,
      premium_type: n,
      category_sku_id: o,
      prices: c,
      bundled_products: d,
      variants: _
    } = e, g = p(e, ["type", "premium_type", "category_sku_id", "prices", "bundled_products", "variants"]);
    return new h(f(u({}, super.fromServer(g)), {
      type: t,
      premiumType: n === l.oA2 ? null : n,
      categorySkuId: o,
      isCategoryReward: s.MS.some(e => {
        let {
          rewardSkuId: t
        } = e;
        return t === g.sku_id
      }),
      prices: (0, a.m)(c),
      items: (0, i.K)(g.items),
      bundledProducts: null == d ? true : d.map(r.A.fromServer),
      variants: null == _ ? true : _.map(m.fromServer),
      googleSkuIds: g.google_sku_ids,
      eligibleOffers: g.eligible_offers
    }))
  }
  constructor(e) {
    super(e), c(this, "prices", true), c(this, "type", true), c(this, "premiumType", true), c(this, "items", true), c(this, "categorySkuId", true), c(this, "isCategoryReward", true), c(this, "bundledProducts", true), c(this, "variants", true), c(this, "variantGroupStoreListingId", true), c(this, "googleSkuIds", true), c(this, "eligibleOffers", true), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.isCategoryReward = e.isCategoryReward, this.prices = e.prices, this.bundledProducts = e.bundledProducts, this.googleSkuIds = e.googleSkuIds, this.variants = e.variants, this.eligibleOffers = e.eligibleOffers
  }
}
class m extends h {
  static fromServer(e) {
    let {
      base_variant_name: t,
      base_variant_sku_id: n,
      variant_label: r,
      variant_value: i
    } = e, a = p(e, ["base_variant_name", "base_variant_sku_id", "variant_label", "variant_value"]);
    return new m(f(u({}, super.fromServer(a)), {
      baseVariantName: t,
      baseVariantSkuId: n,
      variantLabel: r,
      variantValue: i
    }))
  }
  constructor(e) {
    super(e), c(this, "baseVariantName", true), c(this, "baseVariantSkuId", true), c(this, "variantLabel", true), c(this, "variantValue", true), this.baseVariantName = e.baseVariantName, this.baseVariantSkuId = e.baseVariantSkuId, this.variantLabel = e.variantLabel, this.variantValue = e.variantValue
  }
}