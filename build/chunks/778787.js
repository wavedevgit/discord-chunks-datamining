/** Chunk was on web.js **/
/** chunk id: 778787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  q: () => v
}), require("./314940.js"), require("./539854.js");
var Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk587177 = require("./587177.js"),
  Chunk311850 = require("./311850.js"),
  Chunk803358 = require("./803358.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = e => (0, r.EQ)(e).with({
    type: i.Z.AVATAR_DECORATION
  }, e => o.Z.fromServer(e)).with({
    type: i.Z.PROFILE_EFFECT
  }, e => u.Z.fromServer(e)).with({
    type: i.Z.NAMEPLATE
  }, e => c.Z.fromServer(e)).otherwise(() => null),
  y = e => null != e ? e.reduce((e, t) => {
    let n = b(t);
    return null != n && e.push(n), e
  }, []) : [];
class O extends Chunk803358.Z {
  static fromServer(e) {
    var {
      type: t,
      premium_type: n,
      category_sku_id: r,
      prices: i,
      bundled_products: o,
      variants: l
    } = e, c = g(e, ["type", "premium_type", "category_sku_id", "prices", "bundled_products", "variants"]);
    return new O(h(_({}, super.fromServer(c)), {
      type: t,
      premiumType: n === f.WND ? null : n,
      categorySkuId: r,
      isCategoryReward: d.y8.some(e => {
        let {
          rewardSkuId: t
        } = e;
        return t === c.sku_id
      }),
      prices: (0, s.l)(i),
      items: y(c.items),
      bundledProducts: null == o ? true : o.map(a.Z.fromServer),
      variants: null == l ? true : l.map(v.fromServer),
      googleSkuIds: c.google_sku_ids,
      eligibleOffers: c.eligible_offers
    }))
  }
  constructor(e) {
    super(e), p(this, "prices", true), p(this, "type", true), p(this, "premiumType", true), p(this, "items", true), p(this, "categorySkuId", true), p(this, "isCategoryReward", true), p(this, "bundledProducts", true), p(this, "variants", true), p(this, "variantGroupStoreListingId", true), p(this, "googleSkuIds", true), p(this, "eligibleOffers", true), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.isCategoryReward = e.isCategoryReward, this.prices = e.prices, this.bundledProducts = e.bundledProducts, this.googleSkuIds = e.googleSkuIds, this.variants = e.variants, this.eligibleOffers = e.eligibleOffers
  }
}
class v extends O {
  static fromServer(e) {
    var {
      base_variant_name: t,
      base_variant_sku_id: n,
      variant_label: r,
      variant_value: i
    } = e, o = g(e, ["base_variant_name", "base_variant_sku_id", "variant_label", "variant_value"]);
    return new v(h(_({}, super.fromServer(o)), {
      baseVariantName: t,
      baseVariantSkuId: n,
      variantLabel: r,
      variantValue: i
    }))
  }
  constructor(e) {
    super(e), p(this, "baseVariantName", true), p(this, "baseVariantSkuId", true), p(this, "variantLabel", true), p(this, "variantValue", true), this.baseVariantName = e.baseVariantName, this.baseVariantSkuId = e.baseVariantSkuId, this.variantLabel = e.variantLabel, this.variantValue = e.variantValue
  }
}