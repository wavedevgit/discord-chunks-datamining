/** Chunk was on web.js **/
/** chunk id: 549616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk979554 = require("./979554.js"),
  Chunk884697 = require("./884697.js"),
  Chunk27123 = require("./27123.js"),
  Chunk778787 = require("./778787.js"),
  Chunk803358 = require("./803358.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = e => e === r.Z.VARIANTS_GROUP || e === r.Z.EXTERNAL_SKU;
class h extends Chunk803358.Z {
  static fromServer(e) {
    var {
      products: t,
      hero_ranking: n,
      hero_logo_display_config: r,
      hero_banner_display_config: a,
      hero_banner_url: s,
      hero_banner_animated_url: l,
      hero_rive_url: u,
      hero_logo_url: p,
      catalog_banner_url: m,
      catalog_banner_animated_url: g,
      catalog_banner_rive_url: E,
      featured_block_url: b,
      logo_url: y,
      pdp_bg_url: O,
      mobile_banner_url: v,
      mobile_bg_url: S
    } = e, I = f(e, ["products", "hero_ranking", "hero_logo_display_config", "hero_banner_display_config", "hero_banner_url", "hero_banner_animated_url", "hero_rive_url", "hero_logo_url", "catalog_banner_url", "catalog_banner_animated_url", "catalog_banner_rive_url", "featured_block_url", "logo_url", "pdp_bg_url", "mobile_banner_url", "mobile_bg_url"]);
    return new h(d(c({}, super.fromServer(I)), {
      products: t.reduce((e, t) => {
        let n = o.Z.fromServer(t);
        return (_(n.type) || 0 !== n.items.length) && e.push(n), e
      }, []),
      heroRanking: n,
      heroBannerUrl: s,
      heroBannerAnimatedUrl: l,
      heroRiveUrl: u,
      heroLogoUrl: p,
      catalogBannerUrl: m,
      catalogBannerAnimatedUrl: g,
      catalogBannerRiveUrl: E,
      featuredBlockUrl: b,
      logoUrl: y,
      pdpBgUrl: O,
      mobileBannerUrl: v,
      mobileBgUrl: S,
      heroLogoDisplayConfig: (0, i.QG)(r),
      heroBannerDisplayConfig: (0, i.QG)(a)
    }))
  }
  constructor(e) {
    super(e), l(this, "products", true), l(this, "heroRanking", true), l(this, "isOrbsExclusive", true), l(this, "heroBannerUrl", true), l(this, "heroBannerAnimatedUrl", true), l(this, "heroRiveUrl", true), l(this, "heroLogoUrl", true), l(this, "catalogBannerUrl", true), l(this, "catalogBannerAnimatedUrl", true), l(this, "catalogBannerRiveUrl", true), l(this, "featuredBlockUrl", true), l(this, "logoUrl", true), l(this, "pdpBgUrl", true), l(this, "mobileBannerUrl", true), l(this, "mobileBgUrl", true), l(this, "heroLogoDisplayConfig", true), l(this, "heroBannerDisplayConfig", true), this.products = e.products, this.heroRanking = e.heroRanking, this.isOrbsExclusive = Array.isArray(e.products) && e.products.length > 0 && true === e.products.find(e => !(0, a.r1)(e)), this.heroBannerUrl = e.heroBannerUrl, this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl, this.heroRiveUrl = e.heroRiveUrl, this.heroLogoUrl = e.heroLogoUrl, this.catalogBannerUrl = e.catalogBannerUrl, this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl, this.catalogBannerRiveUrl = e.catalogBannerRiveUrl, this.featuredBlockUrl = e.featuredBlockUrl, this.logoUrl = e.logoUrl, this.pdpBgUrl = e.pdpBgUrl, this.mobileBannerUrl = e.mobileBannerUrl, this.mobileBgUrl = e.mobileBgUrl, this.heroLogoDisplayConfig = e.heroLogoDisplayConfig, this.heroBannerDisplayConfig = e.heroBannerDisplayConfig
  }
}