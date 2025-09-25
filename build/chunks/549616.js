/** Chunk was on web.js **/
/** chunk id: 549616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk979554 = require("./979554.js"),
  Chunk778787 = require("./778787.js"),
  Chunk803358 = require("./803358.js"),
  Chunk194165 = require("./194165.js"),
  Chunk889577 = require("./889577.js");

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
      mobile_bg: l,
      mobile_banner: u,
      catalog_banner_asset: _,
      hero_banner: m,
      hero_banner_asset: g,
      featured_block: E,
      hero_logo: b,
      hero_banner_config: y,
      hero_logo_display_config: O,
      mobile_hero_path: v,
      mobile_hero_animated_path: I
    } = e, T = f(e, ["products", "logo", "hero_ranking", "pdp_bg", "mobile_bg", "mobile_banner", "catalog_banner_asset", "hero_banner", "hero_banner_asset", "featured_block", "hero_logo", "hero_banner_config", "hero_logo_display_config", "mobile_hero_path", "mobile_hero_animated_path"]);
    return new h(d(c({}, super.fromServer(T)), {
      products: t.reduce((e, t) => {
        let n = i.Z.fromServer(t);
        return (p(n.type) || 0 !== n.items.length) && e.push(n), e
      }, []),
      logo: n,
      heroRanking: r,
      pdpBg: a,
      mobileBg: l,
      mobileBanner: u,
      catalogBannerAsset: _,
      heroBanner: m,
      heroBannerAsset: g,
      featuredBlock: E,
      heroLogo: b,
      heroBannerConfig: null != y ? o.Z.fromServer(y) : true,
      heroLogoDisplayConfig: null != O ? s.X.fromServer(O) : true,
      mobileHeroPath: v,
      mobileHeroAnimatedPath: I
    }))
  }
  constructor(e) {
    super(e), l(this, "products", true), l(this, "logo", true), l(this, "heroRanking", true), l(this, "pdpBg", true), l(this, "mobileBg", true), l(this, "mobileBanner", true), l(this, "catalogBannerAsset", true), l(this, "heroBanner", true), l(this, "heroBannerAsset", true), l(this, "featuredBlock", true), l(this, "heroLogo", true), l(this, "heroBannerConfig", true), l(this, "heroLogoDisplayConfig", true), l(this, "mobileHeroPath", true), l(this, "mobileHeroAnimatedPath", true), this.products = e.products, this.logo = e.logo, this.heroRanking = e.heroRanking, this.pdpBg = e.pdpBg, this.mobileBg = e.mobileBg, this.mobileBanner = e.mobileBanner, this.catalogBannerAsset = e.catalogBannerAsset, this.heroBanner = e.heroBanner, this.featuredBlock = e.featuredBlock, this.heroLogo = e.heroLogo, this.heroBannerAsset = e.heroBannerAsset, this.heroBannerConfig = e.heroBannerConfig, this.heroLogoDisplayConfig = e.heroLogoDisplayConfig, this.mobileHeroPath = e.mobileHeroPath, this.mobileHeroAnimatedPath = e.mobileHeroAnimatedPath
  }
}