/** Chunk was on web.js **/
/** chunk id: 608413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => a
});
var Chunk685816 = require("./685816.js");

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
    i(this, "title", true), i(this, "body", true), i(this, "categoryStoreListingId", true), i(this, "bannerTextColor", true), i(this, "disableCta", true), i(this, "bannerURL", true), i(this, "bannerAnimatedURL", true), i(this, "logoURL", true), i(this, "ctaText", true), i(this, "ctaRoute", true), i(this, "isDismissible", true), i(this, "dismissibleContentVersion", true), this.type = r.z.WIDE_BANNER, this.title = e.title, this.body = e.body, this.categoryStoreListingId = e.category_store_listing_id, this.bannerTextColor = e.banner_text_color, this.disableCta = e.disable_cta, this.bannerURL = e.wide_banner_url, this.bannerAnimatedURL = e.wide_banner_animated_url, this.logoURL = e.logo_url, this.ctaText = e.cta_text, this.ctaRoute = e.cta_route, this.isDismissible = e.is_dismissible, this.dismissibleContentVersion = e.dismissible_content_version
  }
}