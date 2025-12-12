/** Chunk was on web.js **/
/** chunk id: 198647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => a
}), require("./781311.js");
var Chunk685816 = require("./685816.js"),
  Chunk884697 = require("./884697.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static fromServer(e) {
    return new a(e)
  }
  constructor(e) {
    o(this, "categorySkuId", true), o(this, "name", true), o(this, "summary", true), o(this, "categoryStoreListingId", true), o(this, "bannerAsset", true), o(this, "logoUrl", true), o(this, "title", true), o(this, "rankedSkuIds", true), o(this, "unpublishedAt", true), o(this, "bannerTextColor", true), o(this, "bannerDisplayConfig", true), o(this, "logoDisplayConfig", true), o(this, "mobileHeroPath", true), o(this, "mobileHeroAnimatedPath", true), o(this, "mobileTitle", true), o(this, "mobileSummary", true), o(this, "mobileProductsTitle", true), o(this, "heroBannerUrl", true), o(this, "heroBannerAnimatedUrl", true), o(this, "heroRiveUrl", true), o(this, "heroLogoUrl", true), o(this, "mobileHeroUrl", true), o(this, "mobileHeroAnimatedUrl", true), this.type = r.z.HERO, this.categorySkuId = e.category_sku_id, this.name = e.name, this.summary = e.summary.trim(), this.categoryStoreListingId = e.category_store_listing_id, this.bannerAsset = e.banner_asset, this.logoUrl = e.logo_url, this.title = e.title, this.rankedSkuIds = e.ranked_sku_ids, this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null, this.bannerTextColor = e.banner_text_color, this.logoDisplayConfig = (0, i.QG)(e.logo_display_config), this.bannerDisplayConfig = (0, i.QG)(e.banner_display_config), this.heroRiveUrl = e.hero_rive_url, this.mobileTitle = e.mobile_title, this.mobileSummary = e.mobile_summary, this.mobileProductsTitle = e.mobile_products_title, this.heroBannerUrl = e.hero_banner_url, this.heroBannerAnimatedUrl = e.hero_banner_animated_url, this.heroRiveUrl = e.hero_rive_url, this.heroLogoUrl = e.hero_logo_url, this.mobileHeroUrl = e.mobile_hero_url, this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url
  }
}