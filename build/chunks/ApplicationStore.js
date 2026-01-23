/** Chunk was on web.js **/
/** chunk id: 587895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => X
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk611010 = require("./611010.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = [],
  f = new Map,
  p = new Map,
  _ = new Map,
  h = new Map,
  m = new Map,
  g = {
    botUserIdToAppUsage: {}
  },
  E = 10;

function y(e) {
  let t = f.get(e.id);
  h.set(e.id, Date.now());
  let n = e;
  for (let r of (null != t && (n = t.mergeFromApplicationUpdate(e)), f.set(e.id, n), _.set(e.name.toLowerCase(), n), e.aliases)) _.set(r.toLowerCase(), n);
  if (null != e.linkedGames)
    for (let t of e.linkedGames) null != t.application && y(t.application instanceof s.Ay ? t.application : s.Ay.createFromServer(t.application));
  m.delete(e.id)
}

function b() {
  f.clear(), p.clear(), _.clear(), h.clear(), m.clear()
}

function O(e) {
  let {
    wishlistData: {
      applications: t
    }
  } = e;
  if (null == t || 0 === t.length) returnfalse;
  for (let e of t) y(e)
}

function v(e) {
  let {
    application: t
  } = e;
  y(t)
}

function A(e) {
  let {
    storefront: {
      application: t
    }
  } = e;
  if (null == t) returnfalse;
  y(t)
}

function I(e) {
  let {
    applications: t
  } = e;
  for (let e of t) y(new s.Ay(e))
}

function S(e) {
  let {
    applicationId: t
  } = e, n = m.get(t);
  return m.set(t, true), true !== n
}

function T(e) {
  let {
    application: t
  } = e;
  N(t)
}

function C(e) {
  let {
    application: t
  } = e;
  N(t)
}

function N(e) {
  y(s.Ay.createFromServer(e))
}

function w(e) {
  let {
    userId: t,
    applicationId: n
  } = e, r = g.botUserIdToAppUsage[t];
  null == r ? g.botUserIdToAppUsage[t] = {
    applicationId: n,
    lastUsedMs: Date.now()
  } : g.botUserIdToAppUsage[t] = {
    applicationId: n,
    lastUsedMs: r.lastUsedMs
  };
  let i = new Map;
  for (let [e, t] of Object.entries(g.botUserIdToAppUsage)) i.set(e, t);
  let a = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
  for (let e = 0; e < a.length; e++)
    if (e >= E) {
      let t = a[e][0];
      delete g.botUserIdToAppUsage[t]
    }
}

function R(e) {
  let {
    applicationId: t
  } = e, n = m.get(t);
  return m.set(t, false), false !== n
}

function P(e) {
  let {
    applicationIds: t
  } = e, n = false;
  for (let e of t) {
    let t = m.get(e);
    m.set(e, true), n = true !== t
  }
  return n
}

function D(e) {
  let {
    libraryApplications: t
  } = e;
  for (let e of t) y(s.Ay.createFromServer(e.application))
}

function x(e) {
  let {
    applications: t
  } = e;
  for (let e of t) y(s.Ay.createFromServer(e))
}

function L(e) {
  let {
    userProfile: t
  } = e, {
    user: n,
    application: r
  } = t;
  n.bot && null != r && w({
    userId: n.id,
    applicationId: r.id
  })
}

function j(e) {
  let {
    botUserId: t
  } = e, n = g.botUserIdToAppUsage[t];
  null != n && (g.botUserIdToAppUsage[t] = u(l({}, n), {
    lastUsedMs: Date.now()
  }))
}

function M(e) {
  let {
    applicationIds: t
  } = e, n = false;
  for (let e of t) {
    let t = m.get(e);
    m.set(e, false), n = false !== t
  }
  return n
}

function k(e) {
  let {
    entitlements: t
  } = e, n = false;
  for (let {
      sku: e
    }
    of t)(null == e ? true : e.application) != null && (y(s.Ay.createFromServer(e.application)), n = true);
  return n
}

function U(e) {
  let {
    guildId: t,
    applications: n
  } = e, r = [];
  for (let e of n) r.push(e.id), y(s.Ay.createFromServer(e));
  p.set(t, r)
}

function G(e) {
  let {
    payments: t
  } = e, n = new Set;
  for (let e of t) {
    var r;
    let t = null == (r = e.sku) ? true : r.application;
    null == t || n.has(t.id) || y(s.Ay.createFromServer(t))
  }
  return n.size > 0
}

function V(e) {
  var t;
  let {
    payment: n
  } = e;
  if ((null == (t = n.sku) ? true : t.application) == null) returnfalse;
  y(s.Ay.createFromServer(n.sku.application))
}

function F(e) {
  var t;
  let {
    giftCode: n
  } = e;
  if ((null == (t = n.store_listing) ? true : t.sku.application) == null) returnfalse;
  y(s.Ay.createFromServer(n.store_listing.sku.application))
}

function B(e) {
  let {
    invite: t
  } = e;
  if (null == t.target_application) returnfalse;
  y(s.Ay.createFromServer(t.target_application))
}

function H(e) {
  let {
    storeListing: t
  } = e;
  if (null == t.sku.application) returnfalse;
  y(s.Ay.createFromServer(t.sku.application))
}

function Y(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => W(e))
}

function W(e) {
  var t;
  null == (t = e.attachments) || t.forEach(e => {
    null != e.application && y(s.Ay.createFromServer(e.application))
  })
}

function K(e) {
  let {
    application: t
  } = e;
  y(s.Ay.createFromServer(t))
}

function z(e) {
  e.tokens.forEach(e => {
    y(s.Ay.createFromServer(e.application));
    let t = e.application.bot;
    null != t && w({
      userId: t.id,
      applicationId: e.application.id
    })
  })
}

function q(e) {
  e.items.forEach(e => {
    null != e.application && y(s.Ay.createFromServer(e.application))
  })
}
class Z extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e && "object" == typeof e.botUserIdToAppUsage)
      for (let t in e.botUserIdToAppUsage) {
        let n = e.botUserIdToAppUsage[t],
          r = n.applicationId,
          i = n.lastUsedMs;
        "string" == typeof r && r.length > 0 && "number" == typeof i && i > 0 && (g.botUserIdToAppUsage[t] = {
          applicationId: r,
          lastUsedMs: i
        })
      }
  }
  getState() {
    return g
  }
  _getAllApplications() {
    return Array.from(f.values())
  }
  getGuildApplication(e, t) {
    if (null != e) {
      for (let n of f.values())
        if (n.guildId === e && n.type === t) return n
    }
  }
  getGuildApplicationIds(e) {
    var t;
    return null == e ? d : null != (t = p.get(e)) ? t : d
  }
  getApplication(e) {
    if (null != e) return f.get(e)
  }
  getApplicationByName(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    return _.has(t) ? _.get(t) : true
  }
  getApplicationLastUpdated(e) {
    return h.get(e)
  }
  isFetchingApplication(e) {
    returntrue === m.get(e)
  }
  didFetchingApplicationFail(e) {
    returnfalse === m.get(e)
  }
  getFetchingOrFailedFetchingIds() {
    return Array.from(m.keys())
  }
  getAppIdForBotUserId(e) {
    var t;
    if (null != e) return null == (t = g.botUserIdToAppUsage[e]) ? true : t.applicationId
  }
}
o(Z, "displayName", "ApplicationStore"), o(Z, "persistKey", "ApplicationStore");
let X = new Z(Chunk73153.h, {
  LOGOUT: b,
  OVERLAY_INITIALIZE: I,
  APPLICATION_FETCH: S,
  APPLICATION_FETCH_SUCCESS: C,
  APPLICATION_FETCH_FAIL: R,
  APPLICATIONS_FETCH: P,
  APPLICATIONS_FETCH_SUCCESS: x,
  APPLICATIONS_FETCH_FAIL: M,
  APPLICATION_UPDATE: T,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: k,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: k,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: k,
  GUILD_APPLICATIONS_FETCH_SUCCESS: U,
  BILLING_PAYMENTS_FETCH_SUCCESS: G,
  PAYMENT_UPDATE: V,
  INVITE_RESOLVE_SUCCESS: B,
  GIFT_CODE_RESOLVE_SUCCESS: F,
  LIBRARY_FETCH_SUCCESS: D,
  STORE_LISTING_FETCH_SUCCESS: H,
  LOAD_MESSAGES_SUCCESS: Y,
  USER_PROFILE_FETCH_SUCCESS: L,
  APP_DM_OPEN: j,
  USER_AUTHORIZED_APPS_UPDATE: z,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: q,
  OAUTH2_TOKEN_CREATE: K,
  WISHLIST_FETCH_SUCCESS: O,
  WISHLIST_ADD_SKU_SUCCESS: O,
  WISHLIST_REMOVE_SKU_SUCCESS: O,
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: A,
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: v
})