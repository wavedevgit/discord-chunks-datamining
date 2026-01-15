/** Chunk was on web.js **/
/** chunk id: 927613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => f,
  Z: () => m
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk321947 = require("./321947.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk699955 = require("./699955.js"),
  Chunk981631 = require("./981631.js");
let f = 6;

function p(e) {
  return new o.Z({
    sku_id: e.id,
    sku_product_line: d.POd.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })
}

function _(e) {
  let {
    applicationId: t,
    numItems: n,
    userIds: a,
    isEligible: o,
    includeWishlists: s
  } = e, u = null == a ? true : a.slice(0, l.JR), d = (0, i.e7)([c.Z], () => null != t ? c.Z.recommendationsByApplicationsAndUsers(t, u) : true);
  return r.useEffect(() => {
    o && null != t && null != u && 0 !== u.length && 0 !== n && (0, l.g$)({
      applicationId: t,
      userIds: u,
      maxRecommendations: n,
      includeWishlists: s
    })
  }, [t, u, o, n, s]), r.useMemo(() => {
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
  } = e, o = (0, i.e7)([c.Z], () => null != t ? c.Z.getStorefrontData(t) : true);
  r.useEffect(() => {
    a && null != t && null == c.Z.getStorefrontData(t) && 0 !== n && (0, l.YL)(t, {
      eager: false
    })
  }, [t, n, a]);
  let u = r.useMemo(() => {
      if (null == o || null == o.storefront || "loading" === o.state || "partially-fetched" === o.state) return [];
      let e = o.storefront.pages.flatMap(e => {
          var t, n;
          return [...e.skuIds, ...null != (n = null == (t = e.sections) ? true : t.flatMap(e => e.skuIds)) ? n : []]
        }),
        t = [],
        r = new Set;
      for (let i of e)
        if (!r.has(i) && (t.push(i), r.add(i), t.length >= n)) break;
      return t
    }, [o, n]),
    d = (0, i.Wu)([s.Z], () => u.map(e => s.Z.get(e)).filter(e => null != e), [u]),
    f = r.useMemo(() => d.map(e => p(e)), [d]);
  return {
    state: r.useMemo(() => null == o || "loading" === o.state || "partially-fetched" === o.state || 0 === n ? "loading" : "error" === o.state ? "error" : "success", [o, n]),
    recommendations: f,
    skuIdToUserIdsReasons: {}
  }
}

function m(e) {
  let {
    guildId: t,
    numWishlistItems: n = f,
    location: i,
    applicationId: o,
    userIds: s,
    includeWishlists: l = false
  } = e, c = (0, u.cZ)({
    location: i
  }), d = null != s && s.length > 0, [p, m] = r.useState(s);
  r.useEffect(() => {
    m(e => null == e ? s : (0, a.E)(e, s) ? e : s)
  }, [s]);
  let {
    state: g,
    recommendations: E,
    skuIdToUserIdsReasons: b
  } = _({
    applicationId: o,
    userIds: p,
    numItems: n,
    isEligible: d && c,
    includeWishlists: l
  }), y = d && "error" !== g, {
    state: O,
    recommendations: v
  } = h({
    guildId: t,
    numItems: n,
    isEligible: !y && c
  });
  return c && 0 !== n ? y ? {
    state: g,
    recommendations: E,
    skuIdToUserIdsReasons: b
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