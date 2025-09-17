/** Chunk was on web.js **/
/** chunk id: 578976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kd: () => _,
  SQ: () => f,
  nW: () => d
});
var Chunk311570 = require("./311570.js");
require("./46973.js");
var Chunk357352 = require("./357352.js"),
  Chunk975298 = require("./975298.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js");
require("./37113.js");
let d = (e, t) => {
    let n = {};
    return null != t && (n.tab = t), null == e || (true === e.noCache && (n.no_cache = true), true === e.includeUnpublished && (n.include_unpublished = true), true === e.includeBundles && (n.include_bundles = true), true === e.includePopularPicks && (n.include_popular_picks = true), true === e.includeDynamicBlocks && (n.include_dynamic_blocks = true), null != e.countryCode && "" !== e.countryCode && (n.country_code = e.countryCode), null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway), e.variantsReturnStyle === r.v.VARIANTS_GROUP && (n.variants_return_style = r.v.VARIANTS_GROUP), null != e.shopHomeConfig && (n.shop_home_config = e.shopHomeConfig), null != e.skipNumCategories && (n.skip_num_categories = e.skipNumCategories), true === e.includeNameplatesOnMobile && (n.include_nameplates_on_mobile = true)), n
  },
  f = e => {
    var t;
    let n = null == (t = e.items) ? true : t[0];
    if (null == n) return "";
    if ((0, l.M)(n)) {
      let e = (0, o.NZ)({
        avatarDecoration: n,
        size: 40,
        canAnimate: false
      });
      return null != e ? e : ""
    }
    if ((0, u.H)(n)) {
      let e = n.staticFrameSrc,
        t = n.thumbnailPreviewSrc;
      return null != e && "" !== e ? e : null != t && "" !== t ? t : ""
    }
    return (0, c.k)(n) ? (0, i.b)("collectibles/".concat(n.asset, "static.png")) : ""
  },
  _ = () => {
    let e = (0, Chunk975298.Z)({
        forceFetch: true
      }),
      t = (0, Chunk55935.vc)(module.endsAt, "L");
    return {
      isLoading: !module.fetched,
      isFractionalPremiumActive: module.isFractionalPremiumActive,
      expiresAt: exports
    }
  }