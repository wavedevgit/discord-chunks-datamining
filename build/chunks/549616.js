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
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = e => e === r.Z.VARIANTS_GROUP || e === r.Z.EXTERNAL_SKU;
class h extends Chunk803358.Z {
  static fromServer(e) {
    var {
      products: t,
      logo: n,
      hero_ranking: r,
      pdp_bg: a,
      mobile_bg: s,
      mobile_banner: l,
      catalog_banner_asset: u,
      hero_banner_asset: _,
      featured_block: m,
      hero_logo: g,
      hero_logo_display_config: E,
      hero_banner_display_config: b,
      hero_banner_url: y,
      hero_banner_animated_url: O,
      hero_rive_url: v,
      hero_logo_url: I,
      catalog_banner_url: S,
      catalog_banner_animated_url: T,
      featured_block_url: A,
      logo_url: C,
      pdp_bg_url: N,
      mobile_banner_url: R,
      mobile_bg_url: P
    } = e, w = f(e, ["products", "logo", "hero_ranking", "pdp_bg", "mobile_bg", "mobile_banner", "catalog_banner_asset", "hero_banner_asset", "featured_block", "hero_logo", "hero_logo_display_config", "hero_banner_display_config", "hero_banner_url", "hero_banner_animated_url", "hero_rive_url", "hero_logo_url", "catalog_banner_url", "catalog_banner_animated_url", "featured_block_url", "logo_url", "pdp_bg_url", "mobile_banner_url", "mobile_bg_url"]);
    return new h(d(c({}, super.fromServer(w)), {
      products: t.reduce((e, t) => {
        let n = o.Z.fromServer(t);
        return (p(n.type) || 0 !== n.items.length) && e.push(n), e
      }, []),
      logo: n,
      heroRanking: r,
      pdpBg: a,
      mobileBg: s,
      mobileBanner: l,
      catalogBannerAsset: u,
      heroBannerAsset: _,
      featuredBlock: m,
      heroLogo: g,
      heroLogoDisplayConfig: (0, i.QG)(E),
      heroBannerDisplayConfig: (0, i.QG)(b),
      heroBannerUrl: y,
      heroBannerAnimatedUrl: O,
      heroRiveUrl: v,
      heroLogoUrl: I,
      catalogBannerUrl: S,
      catalogBannerAnimatedUrl: T,
      featuredBlockUrl: A,
      logoUrl: C,
      pdpBgUrl: N,
      mobileBannerUrl: R,
      mobileBgUrl: P
    }))
  }
  constructor(e) {
    super(e), l(this, "products", true), l(this, "heroRanking", true), l(this, "logo", true), l(this, "pdpBg", true), l(this, "mobileBg", true), l(this, "mobileBanner", true), l(this, "catalogBannerAsset", true), l(this, "heroBannerAsset", true), l(this, "featuredBlock", true), l(this, "isOrbsExclusive", true), l(this, "heroLogo", true), l(this, "heroLogoDisplayConfig", true), l(this, "heroBannerDisplayConfig", true), l(this, "heroBannerUrl", true), l(this, "heroBannerAnimatedUrl", true), l(this, "heroRiveUrl", true), l(this, "heroLogoUrl", true), l(this, "catalogBannerUrl", true), l(this, "catalogBannerAnimatedUrl", true), l(this, "featuredBlockUrl", true), l(this, "logoUrl", true), l(this, "pdpBgUrl", true), l(this, "mobileBannerUrl", true), l(this, "mobileBgUrl", true), this.products = e.products, this.logo = e.logo, this.heroRanking = e.heroRanking, this.pdpBg = e.pdpBg, this.mobileBg = e.mobileBg, this.mobileBanner = e.mobileBanner, this.catalogBannerAsset = e.catalogBannerAsset, this.featuredBlock = e.featuredBlock, this.isOrbsExclusive = Array.isArray(e.products) && e.products.length > 0 && true === e.products.find(e => !(0, a.r1)(e)), this.heroLogo = e.heroLogo, this.heroBannerAsset = e.heroBannerAsset, this.heroLogoDisplayConfig = e.heroLogoDisplayConfig, this.heroBannerDisplayConfig = e.heroBannerDisplayConfig, this.heroBannerUrl = e.heroBannerUrl, this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl, this.heroRiveUrl = e.heroRiveUrl, this.heroLogoUrl = e.heroLogoUrl, this.catalogBannerUrl = e.catalogBannerUrl, this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl, this.featuredBlockUrl = e.featuredBlockUrl, this.logoUrl = e.logoUrl, this.pdpBgUrl = e.pdpBgUrl, this.mobileBannerUrl = e.mobileBannerUrl, this.mobileBgUrl = e.mobileBgUrl
  }
}