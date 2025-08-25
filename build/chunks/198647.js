/** Chunk was on web.js **/
/** chunk id: 198647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
}), require("./781311.js");
var Chunk685816 = require("./685816.js"),
  Chunk194165 = require("./194165.js"),
  Chunk889577 = require("./889577.js");

function a(e, t, n) {
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
    a(this, "categorySkuId", true), a(this, "name", true), a(this, "summary", true), a(this, "categoryStoreListingId", true), a(this, "fallbackBannerUrl", true), a(this, "bannerAsset", true), a(this, "logoUrl", true), a(this, "title", true), a(this, "rankedSkuIds", true), a(this, "unpublishedAt", true), a(this, "bannerTextColor", true), a(this, "bannerConfig", true), a(this, "logoConfig", true), this.type = r.z.HERO, this.categorySkuId = e.category_sku_id, this.name = e.name, this.summary = e.summary.trim(), this.categoryStoreListingId = e.category_store_listing_id, this.fallbackBannerUrl = e.fallback_banner_url, this.bannerAsset = e.banner_asset, this.logoUrl = e.logo_url, this.title = e.title, this.rankedSkuIds = e.ranked_sku_ids, this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null, this.bannerTextColor = e.banner_text_color, this.bannerConfig = null != e.config ? i.Z.fromServer(e.config) : true, this.logoConfig = null != e.logo_display_config ? o.X.fromServer(e.logo_display_config) : true
  }
}