/** Chunk was on web.js **/
/** chunk id: 832163, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => V
}), require("./65821.js"), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk773669 = require("./773669.js"),
  Chunk961350 = require("./961350.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  if (0 === e.length) throw Error("No user IDs provided");
  return e.length > 1 ? [...e].join(",") : e[0]
}
let _ = {},
  h = {},
  m = {},
  g = {},
  E = {},
  y = {};

function b() {
  m = {}, E = {}, y = {}
}

function O(e) {
  let {
    skuId: t
  } = e;
  E = f(u({}, E), {
    [t]: "checking"
  })
}

function v(e) {
  let {
    skuId: t,
    interactionId: n
  } = e;
  if ("checking" !== E[t]) returnfalse;
  y[n] = t
}

function A(e) {
  let {
    skuId: t
  } = e;
  E = f(u({}, E), {
    [t]: "error"
  })
}

function I(e) {
  let {
    skuId: t,
    recipientId: n,
    eligible: r
  } = e;
  if (l.default.getId() !== n) returnfalse;
  E = f(u({}, E), {
    [t]: r ? "eligible" : "ineligible"
  })
}

function S(e) {
  let {
    entitlement: t
  } = e;
  if (null == E[t.sku_id]) returnfalse;
  E = u({}, E), delete E[t.sku_id]
}

function T(e) {
  let {
    interactionId: t
  } = e;
  if (null == y[t]) returnfalse;
  delete y[t]
}

function C(e) {
  let {
    interactionId: t
  } = e;
  if (null == t) returnfalse;
  let n = y[t];
  if (null == n) returnfalse;
  E = f(u({}, E), {
    [n]: "error"
  }), delete y[t]
}

function N() {
  E = {}, y = {}
}

function w(e) {
  var t;
  let {
    applicationId: n,
    userIds: r
  } = e;
  m = f(u({}, m), {
    [n]: f(u({}, null != (t = m[n]) ? t : {}), {
      [p(r)]: {
        state: "loading"
      }
    })
  })
}

function R(e) {
  var t;
  let {
    skus: n,
    skusToRecommendationReasons: r,
    userIds: i,
    application: a,
    numItemsRequested: o
  } = e;
  m = f(u({}, m), {
    [a.id]: f(u({}, null != (t = m[a.id]) ? t : {}), {
      [p(i)]: {
        state: "success",
        data: {
          skus: n,
          skusToRecommendationReasons: r,
          numItemsRequested: o
        }
      }
    })
  })
}

function P(e) {
  var t;
  let {
    applicationId: n,
    userIds: r
  } = e, i = p(r);
  if (null != m[n] && null != m[n][i] && "success" === m[n][i].state) returnfalse;
  m = f(u({}, m), {
    [n]: f(u({}, null != (t = m[n]) ? t : {}), {
      [i]: {
        state: "error"
      }
    })
  })
}

function D(e) {
  let {
    guildId: t
  } = e, n = h[t];
  h[t] = f(u({}, n), {
    state: "loading"
  }), h = u({}, h)
}

function L(e) {
  let {
    guildId: t,
    storefront: n
  } = e;
  h[t] = {
    storefront: n,
    state: "fetched",
    fetchedAt: Date.now()
  }, h = u({}, h)
}

function x(e) {
  let {
    guildId: t,
    storefront: n
  } = e, r = h[t];
  (null == r ? true : r.storefront) != null ? h[t] = f(u({}, r), {
    storefront: f(u({}, r.storefront), {
      assets: u({}, r.storefront.assets, n.assets)
    })
  }) : h[t] = {
    storefront: n,
    state: "partially-fetched",
    fetchedAt: null
  }, h = u({}, h)
}

function M(e) {
  let {
    guildId: t,
    eager: n
  } = e;
  if (n) {
    let e = h[t];
    (null == e ? true : e.state) === "loading" && (null == e ? true : e.storefront) != null ? h[t] = f(u({}, e), {
      state: "fetched"
    }) : delete h[t]
  } else h[t] = {
    storefront: null,
    state: "error",
    fetchedAt: Date.now()
  };
  h = u({}, h)
}

function j(e) {
  let {
    guildId: t,
    pageIndex: n,
    skuId: r
  } = e;
  _[t] = {
    activePage: n,
    activeSkuId: r
  }, _ = u({}, _)
}

function k(e) {
  let {
    guildId: t,
    announcement: n
  } = e;
  g[t] = n, g = u({}, g)
}

function U() {
  if (r === s.default.locale) returnfalse;
  r = s.default.locale, _ = {}, h = {}, m = {}
}
class G extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default, s.default), this.syncWith([s.default], U), r = s.default.locale
  }
  getStorefrontData(e) {
    return h[e]
  }
  getStorefrontState(e) {
    return _[e]
  }
  recommendationsByApplicationsAndUsers(e, t) {
    var n;
    if (null != t && 0 !== t.length) return null == (n = m[e]) ? true : n[p(t)]
  }
  getAnnouncement(e) {
    return g[e]
  }
  getSKUEligibility(e) {
    return E[e]
  }
  getNormalizedSKUEligibility(e) {
    return "ineligible" !== E[e]
  }
}
c(G, "displayName", "SocialLayerStorefrontStore");
let V = new G(Chunk73153.h, {
  LOGOUT: b,
  POST_CONNECTION_OPEN: N,
  ENTITLEMENT_CREATE: S,
  INTERACTION_FAILURE: C,
  INTERACTION_SUCCESS: T,
  SOCIAL_LAYER_STOREFRONT_LOAD: D,
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: L,
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: x,
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: M,
  SET_SOCIAL_LAYER_STOREFRONT_STATE: j,
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: R,
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE: P,
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START: w,
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: k,
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: O,
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: v,
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: A,
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: I
})