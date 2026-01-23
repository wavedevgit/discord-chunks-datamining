/** Chunk was on web.js **/
/** chunk id: 592356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  o: () => f
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk721932 = require("./721932.js"),
  Chunk67480 = require("./67480.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk916023 = require("./916023.js"),
  Chunk652215 = require("./652215.js");
let f = 6;

function p(e) {
  return new s.A({
    sku_id: e.id,
    sku_product_line: d.EZt.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })
}

function _(e) {
  let {
    applicationId: t,
    numItems: n,
    userIds: a,
    isEligible: s,
    includeWishlists: o
  } = e, u = null == a ? true : a.slice(0, l.g9), d = (0, i.bG)([c.A], () => null != t ? c.A.recommendationsByApplicationsAndUsers(t, u) : true);
  return r.useEffect(() => {
    s && null != t && null != u && 0 !== u.length && 0 !== n && (0, l.Xg)({
      applicationId: t,
      userIds: u,
      maxRecommendations: n,
      includeWishlists: o
    })
  }, [t, u, s, n, o]), r.useMemo(() => {
    let e = null == d ? "loading" : d.state;
    return null == d || "success" !== d.state ? {
      state: e,
      recommendations: [],
      skuIdToUserIdsReasons: {}
    } : {
      state: e,
      recommendations: d.data.skus.slice(0, n).map(e => p(e)),
      skuIdToUserIdsReasons: d.data.skusToRecommendationReasons
    }
  }, [d, n])
}

function h(e) {
  let {
    guildId: t,
    numItems: n,
    isEligible: a
  } = e, s = (0, i.bG)([c.A], () => null != t ? c.A.getStorefrontData(t) : true);
  r.useEffect(() => {
    a && null != t && null == c.A.getStorefrontData(t) && 0 !== n && (0, l.Rw)(t, {
      eager: false
    })
  }, [t, n, a]);
  let u = r.useMemo(() => {
      if (null == s || null == s.storefront || "loading" === s.state || "partially-fetched" === s.state) return [];
      let e = s.storefront.pages.flatMap(e => {
          var t, n;
          return [...e.skuIds, ...null != (t = null == (n = e.sections) ? true : n.flatMap(e => e.skuIds)) ? t : []]
        }),
        t = [],
        r = new Set;
      for (let i of e)
        if (!r.has(i) && (t.push(i), r.add(i), t.length >= n)) break;
      return t
    }, [s, n]),
    d = (0, i.yK)([o.A], () => u.map(e => o.A.get(e)).filter(e => null != e), [u]),
    f = r.useMemo(() => d.map(e => p(e)), [d]);
  return {
    state: r.useMemo(() => null == s || "loading" === s.state || "partially-fetched" === s.state || 0 === n ? "loading" : "error" === s.state ? "error" : "success", [s, n]),
    recommendations: f,
    skuIdToUserIdsReasons: {}
  }
}

function m(e) {
  let {
    guildId: t,
    numWishlistItems: n = f,
    location: i,
    applicationId: s,
    userIds: o,
    includeWishlists: l = false
  } = e, c = (0, u.kt)({
    location: i
  }), d = null != o && o.length > 0, [p, m] = r.useState(o);
  r.useEffect(() => {
    m(e => null == e ? o : (0, a.v)(e, o) ? e : o)
  }, [o]);
  let {
    state: g,
    recommendations: E,
    skuIdToUserIdsReasons: y
  } = _({
    applicationId: s,
    userIds: p,
    numItems: n,
    isEligible: d && c,
    includeWishlists: l
  }), b = d && "error" !== g, {
    state: O,
    recommendations: v
  } = h({
    guildId: t,
    numItems: n,
    isEligible: !b && c
  });
  return c && 0 !== n ? b ? {
    state: g,
    recommendations: E,
    skuIdToUserIdsReasons: y
  } : {
    state: O,
    recommendations: v,
    skuIdToUserIdsReasons: {}
  } : {
    state: "success",
    recommendations: [],
    skuIdToUserIdsReasons: {}
  }
}