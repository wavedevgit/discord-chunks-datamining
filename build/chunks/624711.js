/** Chunk was on web.js **/
/** chunk id: 624711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => a
});
var Chunk424918 = require("./424918.js");

function i(e, t, n) {
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
    i(this, "categoryStoreListingId", true), i(this, "name", true), i(this, "unpublishedAt", true), i(this, "bodyText", true), i(this, "bannerTextColor", true), i(this, "bannerUrl", true), i(this, "assetUrl", true), this.type = r.u.CATEGORY, this.categoryStoreListingId = e.category_store_listing_id, this.name = e.name, this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null, this.bodyText = e.body_text, this.bannerTextColor = e.banner_text_color, this.bannerUrl = e.banner_url, this.assetUrl = e.asset_url
  }
}