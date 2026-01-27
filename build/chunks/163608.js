/** Chunk was on web.js **/
/** chunk id: 163608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => o
}), require("./733351.js");
var Chunk651162 = require("./651162.js"),
  Chunk993408 = require("./993408.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  static fromServer(e) {
    return new o(e)
  }
  constructor(e) {
    a(this, "categorySkuId", true), a(this, "name", true), a(this, "summary", true), a(this, "categoryStoreListingId", true), a(this, "title", true), a(this, "rankedSkuIds", true), a(this, "unpublishedAt", true), a(this, "bannerTextColor", true), a(this, "mobileTitle", true), a(this, "mobileSummary", true), a(this, "mobileProductsTitle", true), a(this, "rewardSkuId", true), a(this, "heroBannerUrl", true), a(this, "heroBannerAnimatedUrl", true), a(this, "heroRiveUrl", true), a(this, "heroLogoUrl", true), a(this, "mobileHeroUrl", true), a(this, "mobileHeroAnimatedUrl", true), a(this, "bannerDisplayConfig", true), a(this, "logoDisplayConfig", true), this.type = r.g.REWARD_HERO, this.categorySkuId = e.category_sku_id, this.name = e.name, this.summary = e.summary.trim(), this.categoryStoreListingId = e.category_store_listing_id, this.title = e.title, this.rankedSkuIds = e.ranked_sku_ids, this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null, this.bannerTextColor = e.banner_text_color, this.mobileTitle = e.mobile_title, this.mobileSummary = e.mobile_summary, this.mobileProductsTitle = e.mobile_products_title, this.rewardSkuId = e.reward_sku_id, this.heroBannerUrl = e.hero_banner_url, this.heroBannerAnimatedUrl = e.hero_banner_animated_url, this.heroRiveUrl = e.hero_rive_url, this.heroLogoUrl = e.hero_logo_url, this.mobileHeroUrl = e.mobile_hero_url, this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url, this.logoDisplayConfig = (0, i.f6)(e.logo_display_config), this.bannerDisplayConfig = (0, i.f6)(e.banner_display_config)
  }
}