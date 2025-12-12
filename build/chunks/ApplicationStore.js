/** Chunk was on web.js **/
/** chunk id: 812206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk973616 = require("./973616.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
  m = new Map,
  h = new Map,
  g = {
    botUserIdToAppUsage: {}
  },
  E = 10;

function b(e) {
  let t = f.get(e.id);
  m.set(e.id, Date.now());
  let n = e;
  for (let r of (null != t && (n = t.mergeFromApplicationUpdate(e)), f.set(e.id, n), _.set(e.name.toLowerCase(), n), e.aliases)) _.set(r.toLowerCase(), n);
  if (null != e.linkedGames)
    for (let t of e.linkedGames) null != t.application && b(t.application instanceof a.ZP ? t.application : a.ZP.createFromServer(t.application));
  h.delete(e.id)
}

function y() {
  f.clear(), p.clear(), _.clear(), m.clear(), h.clear()
}

function O(e) {
  let {
    wishlistData: {
      applications: t
    }
  } = e;
  if (null == t || 0 === t.length) returnfalse;
  for (let e of t) b(e)
}

function v(e) {
  let {
    storefront: {
      application: t
    }
  } = e;
  if (null == t) returnfalse;
  b(t)
}

function S(e) {
  let {
    applications: t
  } = e;
  for (let e of t) b(new a.ZP(e))
}

function I(e) {
  let {
    applicationId: t
  } = e, n = h.get(t);
  return h.set(t, true), true !== n
}

function T(e) {
  let {
    application: t
  } = e;
  A(t)
}

function C(e) {
  let {
    application: t
  } = e;
  A(t)
}

function A(e) {
  b(a.ZP.createFromServer(e))
}

function N(e) {
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
  let o = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
  for (let e = 0; e < o.length; e++)
    if (e >= E) {
      let t = o[e][0];
      delete g.botUserIdToAppUsage[t]
    }
}

function P(e) {
  let {
    applicationId: t
  } = e, n = h.get(t);
  return h.set(t, false), false !== n
}

function R(e) {
  let {
    applicationIds: t
  } = e, n = false;
  for (let e of t) {
    let t = h.get(e);
    h.set(e, true), n = true !== t
  }
  return n
}

function w(e) {
  let {
    libraryApplications: t
  } = e;
  for (let e of t) b(a.ZP.createFromServer(e.application))
}

function D(e) {
  let {
    applications: t
  } = e;
  for (let e of t) b(a.ZP.createFromServer(e))
}

function x(e) {
  let {
    userProfile: t
  } = e, {
    user: n,
    application: r
  } = t;
  n.bot && null != r && N({
    userId: n.id,
    applicationId: r.id
  })
}

function L(e) {
  let {
    botUserId: t
  } = e, n = g.botUserIdToAppUsage[t];
  null != n && (g.botUserIdToAppUsage[t] = u(l({}, n), {
    lastUsedMs: Date.now()
  }))
}

function j(e) {
  let {
    applicationIds: t
  } = e, n = false;
  for (let e of t) {
    let t = h.get(e);
    h.set(e, false), n = false !== t
  }
  return n
}

function M(e) {
  let {
    entitlements: t
  } = e, n = false;
  for (let {
      sku: e
    }
    of t)(null == e ? true : e.application) != null && (b(a.ZP.createFromServer(e.application)), n = true);
  return n
}

function k(e) {
  let {
    guildId: t,
    applications: n
  } = e, r = [];
  for (let e of n) r.push(e.id), b(a.ZP.createFromServer(e));
  p.set(t, r)
}

function U(e) {
  let {
    payments: t
  } = e, n = new Set;
  for (let e of t) {
    var r;
    let t = null == (r = e.sku) ? true : r.application;
    null == t || n.has(t.id) || b(a.ZP.createFromServer(t))
  }
  return n.size > 0
}

function G(e) {
  var t;
  let {
    payment: n
  } = e;
  if ((null == (t = n.sku) ? true : t.application) == null) returnfalse;
  b(a.ZP.createFromServer(n.sku.application))
}

function Z(e) {
  var t;
  let {
    giftCode: n
  } = e;
  if ((null == (t = n.store_listing) ? true : t.sku.application) == null) returnfalse;
  b(a.ZP.createFromServer(n.store_listing.sku.application))
}

function F(e) {
  let {
    invite: t
  } = e;
  if (null == t.target_application) returnfalse;
  b(a.ZP.createFromServer(t.target_application))
}

function B(e) {
  let {
    storeListing: t
  } = e;
  if (null == t.sku.application) returnfalse;
  b(a.ZP.createFromServer(t.sku.application))
}

function V(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => H(e))
}

function H(e) {
  var t;
  null == (t = e.attachments) || t.forEach(e => {
    null != e.application && b(a.ZP.createFromServer(e.application))
  })
}

function Y(e) {
  let {
    application: t
  } = e;
  b(a.ZP.createFromServer(t))
}

function W(e) {
  e.tokens.forEach(e => {
    b(a.ZP.createFromServer(e.application));
    let t = e.application.bot;
    null != t && N({
      userId: t.id,
      applicationId: e.application.id
    })
  })
}

function K(e) {
  e.items.forEach(e => {
    null != e.application && b(a.ZP.createFromServer(e.application))
  })
}
class z extends(r = Chunk442837.ZP.PersistedStore) {
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
    return m.get(e)
  }
  isFetchingApplication(e) {
    returntrue === h.get(e)
  }
  didFetchingApplicationFail(e) {
    returnfalse === h.get(e)
  }
  getFetchingOrFailedFetchingIds() {
    return Array.from(h.keys())
  }
  getAppIdForBotUserId(e) {
    var t;
    if (null != e) return null == (t = g.botUserIdToAppUsage[e]) ? true : t.applicationId
  }
}
s(z, "displayName", "ApplicationStore"), s(z, "persistKey", "ApplicationStore");
let q = new z(Chunk570140.Z, {
  LOGOUT: y,
  OVERLAY_INITIALIZE: S,
  APPLICATION_FETCH: I,
  APPLICATION_FETCH_SUCCESS: C,
  APPLICATION_FETCH_FAIL: P,
  APPLICATIONS_FETCH: R,
  APPLICATIONS_FETCH_SUCCESS: D,
  APPLICATIONS_FETCH_FAIL: j,
  APPLICATION_UPDATE: T,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: M,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: M,
  GUILD_APPLICATIONS_FETCH_SUCCESS: k,
  BILLING_PAYMENTS_FETCH_SUCCESS: U,
  PAYMENT_UPDATE: G,
  INVITE_RESOLVE_SUCCESS: F,
  GIFT_CODE_RESOLVE_SUCCESS: Z,
  LIBRARY_FETCH_SUCCESS: w,
  STORE_LISTING_FETCH_SUCCESS: B,
  LOAD_MESSAGES_SUCCESS: V,
  USER_PROFILE_FETCH_SUCCESS: x,
  APP_DM_OPEN: L,
  USER_AUTHORIZED_APPS_UPDATE: W,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: K,
  OAUTH2_TOKEN_CREATE: Y,
  WISHLIST_FETCH_SUCCESS: O,
  WISHLIST_ADD_SKU_SUCCESS: O,
  WISHLIST_REMOVE_SKU_SUCCESS: O,
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: v
})