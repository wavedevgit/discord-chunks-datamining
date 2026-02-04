/** Chunk was on web.js **/
/** chunk id: 592356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  o: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk721932 = require("./721932.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk916023 = require("./916023.js"),
  Chunk652215 = require("./652215.js");
let d = 6;

function f(e) {
  return new o.A({
    sku_id: e.id,
    sku_product_line: u.EZt.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })
}

function p(e) {
  let {
    applicationId: t,
    numItems: n,
    userIds: a,
    isEligible: o,
    includeWishlists: c
  } = e, u = null == a ? true : a.slice(0, s.g9), d = (0, i.bG)([l.A], () => null != t ? l.A.recommendationsByApplicationsAndUsers(t, u) : true), p = r.useMemo(() => !o || null == t || null == u || 0 === u.length || 0 === n, [o, t, u, n]);
  return r.useEffect(() => {
    p || (0, s.Xg)({
      applicationId: t,
      userIds: u,
      maxRecommendations: n,
      includeWishlists: c
    })
  }, [p, t, u, c, n]), r.useMemo(() => {
    if (p) return {
      state: "success",
      recommendations: [],
      skuIdToUserIdsReasons: {}
    };
    let e = null == d ? "loading" : d.state;
    return null == d || "success" !== d.state ? {
      state: e,
      recommendations: [],
      skuIdToUserIdsReasons: {}
    } : {
      state: e,
      recommendations: d.data.skus.slice(0, n).map(e => f(e)),
      skuIdToUserIdsReasons: d.data.skusToRecommendationReasons
    }
  }, [d, n, p])
}

function _(e) {
  let {
    numWishlistItems: t = d,
    location: n,
    applicationId: i,
    userIds: o,
    includeWishlists: s = false
  } = e, l = (0, c.kt)({
    location: n
  }), [u, f] = r.useState(o);
  r.useEffect(() => {
    f(e => null == e ? o : (0, a.v)(e, o) ? e : o)
  }, [o]);
  let {
    state: _,
    recommendations: h,
    skuIdToUserIdsReasons: m
  } = p({
    applicationId: i,
    userIds: u,
    numItems: t,
    isEligible: l,
    includeWishlists: s
  });
  return l && 0 !== t ? {
    state: _,
    recommendations: h,
    skuIdToUserIdsReasons: m
  } : {
    state: "success",
    recommendations: [],
    skuIdToUserIdsReasons: {}
  }
}