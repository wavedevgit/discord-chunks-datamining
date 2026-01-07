/** Chunk was on web.js **/
/** chunk id: 578976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JE: () => s,
  Kd: () => l,
  nW: () => o
});
var Chunk311570 = require("./311570.js");
require("./46973.js"), require("./357352.js");
var Chunk975298 = require("./975298.js");
require("./768581.js");
var Chunk55935 = require("./55935.js");
require("./922347.js"), require("./135483.js"), require("./212161.js"), require("./37113.js");
let o = (e, t) => {
    let n = {};
    return null != t && (n.tab = t), null == e || (true === e.noCache && (n.no_cache = true), true === e.includeUnpublished && (n.include_unpublished = true), true === e.includeBundles && (n.include_bundles = true), true === e.includeDynamicBlocks && (n.include_dynamic_blocks = true), null != e.countryCode && "" !== e.countryCode && (n.country_code = e.countryCode), null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway), e.variantsReturnStyle === r.v.VARIANTS_GROUP && (n.variants_return_style = r.v.VARIANTS_GROUP), null != e.shopHomeConfig && (n.shop_home_config = e.shopHomeConfig), null != e.skipNumCategories && (n.skip_num_categories = e.skipNumCategories), true === e.includeNameplatesOnMobile && (n.include_nameplates_on_mobile = true)), n
  },
  s = e => {
    if (null != e) return "".concat(e, "?width=100&height=195")
  },
  l = () => {
    let e = (0, i.Z)({
        forceFetch: true
      }),
      t = (0, a.vc)(e.endsAt, "L");
    return {
      isLoading: !e.fetched,
      isFractionalPremiumActive: e.isFractionalPremiumActive,
      expiresAt: t
    }
  }