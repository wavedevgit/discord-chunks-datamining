/** Chunk was on web.js **/
/** chunk id: 510801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./321073.js");
var Chunk575593 = require("./575593.js"),
  Chunk993408 = require("./993408.js"),
  Chunk623373 = require("./623373.js"),
  Chunk986630 = require("./986630.js"),
  Chunk931772 = require("./931772.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let _ = e => e === r.R.VARIANTS_GROUP || e === r.R.EXTERNAL_SKU;
class h extends Chunk931772.A {
  static fromServer(e) {
    let {
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
      featured_block_url: y,
      logo_url: b,
      pdp_bg_url: O,
      mobile_banner_url: v,
      mobile_bg_url: A
    } = e, I = f(e, ["products", "hero_ranking", "hero_logo_display_config", "hero_banner_display_config", "hero_banner_url", "hero_banner_animated_url", "hero_rive_url", "hero_logo_url", "catalog_banner_url", "catalog_banner_animated_url", "catalog_banner_rive_url", "featured_block_url", "logo_url", "pdp_bg_url", "mobile_banner_url", "mobile_bg_url"]);
    return new h(d(c({}, super.fromServer(I)), {
      products: t.reduce((e, t) => {
        let n = o.A.fromServer(t);
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
      featuredBlockUrl: y,
      logoUrl: b,
      pdpBgUrl: O,
      mobileBannerUrl: v,
      mobileBgUrl: A,
      heroLogoDisplayConfig: (0, i.f6)(r),
      heroBannerDisplayConfig: (0, i.f6)(a)
    }))
  }
  constructor(e) {
    super(e), l(this, "products", true), l(this, "heroRanking", true), l(this, "isOrbsExclusive", true), l(this, "heroBannerUrl", true), l(this, "heroBannerAnimatedUrl", true), l(this, "heroRiveUrl", true), l(this, "heroLogoUrl", true), l(this, "catalogBannerUrl", true), l(this, "catalogBannerAnimatedUrl", true), l(this, "catalogBannerRiveUrl", true), l(this, "featuredBlockUrl", true), l(this, "logoUrl", true), l(this, "pdpBgUrl", true), l(this, "mobileBannerUrl", true), l(this, "mobileBgUrl", true), l(this, "heroLogoDisplayConfig", true), l(this, "heroBannerDisplayConfig", true), this.products = e.products, this.heroRanking = e.heroRanking, this.isOrbsExclusive = Array.isArray(e.products) && e.products.length > 0 && true === e.products.find(e => !(0, a.Ab)(e)), this.heroBannerUrl = e.heroBannerUrl, this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl, this.heroRiveUrl = e.heroRiveUrl, this.heroLogoUrl = e.heroLogoUrl, this.catalogBannerUrl = e.catalogBannerUrl, this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl, this.catalogBannerRiveUrl = e.catalogBannerRiveUrl, this.featuredBlockUrl = e.featuredBlockUrl, this.logoUrl = e.logoUrl, this.pdpBgUrl = e.pdpBgUrl, this.mobileBannerUrl = e.mobileBannerUrl, this.mobileBgUrl = e.mobileBgUrl, this.heroLogoDisplayConfig = e.heroLogoDisplayConfig, this.heroBannerDisplayConfig = e.heroBannerDisplayConfig
  }
}