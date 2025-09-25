/** Chunk was on web.js **/
/** chunk id: 198647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
}), require("./781311.js");
var Chunk685816 = require("./685816.js"),
  Chunk194165 = require("./194165.js"),
  Chunk889577 = require("./889577.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
  static fromServer(e) {
    return new s(e)
  }
  constructor(e) {
    o(this, "categorySkuId", true), o(this, "name", true), o(this, "summary", true), o(this, "categoryStoreListingId", true), o(this, "fallbackBannerUrl", true), o(this, "bannerAsset", true), o(this, "logoUrl", true), o(this, "title", true), o(this, "rankedSkuIds", true), o(this, "unpublishedAt", true), o(this, "bannerTextColor", true), o(this, "bannerConfig", true), o(this, "logoConfig", true), o(this, "mobileHeroPath", true), o(this, "mobileHeroAnimatedPath", true), o(this, "mobileTitle", true), o(this, "mobileSummary", true), o(this, "mobileProductsTitle", true), this.type = r.z.HERO, this.categorySkuId = e.category_sku_id, this.name = e.name, this.summary = e.summary.trim(), this.categoryStoreListingId = e.category_store_listing_id, this.fallbackBannerUrl = e.fallback_banner_url, this.bannerAsset = e.banner_asset, this.logoUrl = e.logo_url, this.title = e.title, this.rankedSkuIds = e.ranked_sku_ids, this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null, this.bannerTextColor = e.banner_text_color, this.bannerConfig = null != e.config ? i.Z.fromServer(e.config) : true, this.logoConfig = null != e.logo_display_config ? a.X.fromServer(e.logo_display_config) : true, this.mobileTitle = e.mobile_title, this.mobileSummary = e.mobile_summary, this.mobileProductsTitle = e.mobile_products_title, this.mobileHeroPath = e.mobile_hero_path, this.mobileHeroAnimatedPath = e.mobile_hero_animated_path
  }
}