/** Chunk was on web.js **/
/** chunk id: 778787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y,
  q: () => O
}), require("./314940.js"), require("./539854.js");
var Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk587177 = require("./587177.js"),
  Chunk311850 = require("./311850.js"),
  Chunk803358 = require("./803358.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = e => (0, r.EQ)(e).with({
    type: i.Z.AVATAR_DECORATION
  }, e => a.Z.fromServer(e)).with({
    type: i.Z.PROFILE_EFFECT
  }, e => u.Z.fromServer(e)).with({
    type: i.Z.NAMEPLATE
  }, e => c.Z.fromServer(e)).otherwise(() => null),
  b = e => null != e ? e.reduce((e, t) => {
    let n = E(t);
    return null != n && e.push(n), e
  }, []) : [];
class y extends Chunk803358.Z {
  static fromServer(e) {
    var {
      type: t,
      premium_type: n,
      category_sku_id: r,
      prices: i,
      bundled_products: a,
      variants: l
    } = e, c = h(e, ["type", "premium_type", "category_sku_id", "prices", "bundled_products", "variants"]);
    return new y(m(p({}, super.fromServer(c)), {
      type: t,
      premiumType: n === d.WND ? null : n,
      categorySkuId: r,
      prices: (0, s.l)(i),
      items: b(c.items),
      bundledProducts: null == a ? true : a.map(o.Z.fromServer),
      variants: null == l ? true : l.map(O.fromServer),
      googleSkuIds: c.google_sku_ids,
      eligibleOffers: c.eligible_offers
    }))
  }
  constructor(e) {
    super(e), f(this, "prices", true), f(this, "type", true), f(this, "premiumType", true), f(this, "items", true), f(this, "categorySkuId", true), f(this, "bundledProducts", true), f(this, "variants", true), f(this, "variantGroupStoreListingId", true), f(this, "googleSkuIds", true), f(this, "eligibleOffers", true), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices, this.bundledProducts = e.bundledProducts, this.googleSkuIds = e.googleSkuIds, this.variants = e.variants, this.eligibleOffers = e.eligibleOffers
  }
}
class O extends y {
  static fromServer(e) {
    var {
      base_variant_name: t,
      base_variant_sku_id: n,
      variant_label: r,
      variant_value: i
    } = e, a = h(e, ["base_variant_name", "base_variant_sku_id", "variant_label", "variant_value"]);
    return new O(m(p({}, super.fromServer(a)), {
      baseVariantName: t,
      baseVariantSkuId: n,
      variantLabel: r,
      variantValue: i
    }))
  }
  constructor(e) {
    super(e), f(this, "baseVariantName", true), f(this, "baseVariantSkuId", true), f(this, "variantLabel", true), f(this, "variantValue", true), this.baseVariantName = e.baseVariantName, this.baseVariantSkuId = e.baseVariantSkuId, this.variantLabel = e.variantLabel, this.variantValue = e.variantValue
  }
}