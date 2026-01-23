/** Chunk was on web.js **/
/** chunk id: 607940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P,
  e: () => f
}), require("./896048.js");
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk557009 = require("./557009.js"),
  Chunk67480 = require("./67480.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var f = function(e) {
  return e[e.NOT_FETCHED = 0] = "NOT_FETCHED", e[e.FETCHING = 1] = "FETCHING", e[e.FETCHED = 2] = "FETCHED", e
}({});

function p(e) {
  return "subscription_listing:".concat(e)
}

function _(e) {
  return "application:".concat(e)
}

function h(e) {
  return "plan:".concat(e)
}

function m(e, t, n) {
  return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
}

function g(e, t) {
  return "entitlement:".concat(t, ":").concat(e)
}
let E = new Chunk713402.J(e => [_(e.application_id), ...e.subscription_listings_ids.map(p)], e => e.id),
  y = new Chunk713402.J(e => [_(e.application_id), h(e.subscription_plans[0].id)], e => e.id),
  b = new Chunk713402.J(e => [m(e.applicationId, e.isValid(null, u.A), e.guildId), g(e.isValid(null, u.A), e.guildId)], e => e.id),
  O = {},
  v = {};

function A(e) {
  var t;
  for (let n of (E.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) I(n)
}

function I(e) {
  y.set(e.id, e)
}

function S() {
  E.clear(), y.clear(), b.clear(), O = {}, v = {}
}

function T(e) {
  let {
    applicationId: t,
    groupListingId: n
  } = e;
  O[t] = 1;
  let r = E.get(n);
  if (null != r)
    for (let e of r.subscription_listings_ids) y.delete(e)
}

function C(e) {
  let {
    applicationId: t,
    groupListing: n
  } = e;
  O[t] = 2, A(n)
}

function N(e) {
  let {
    applicationId: t
  } = e;
  O[t] = 2
}

function R(e) {
  let {
    groupListing: t
  } = e;
  A(t)
}
class w extends(r = Chunk311907.il) {
  getSubscriptionGroupListingsForApplicationFetchState(e) {
    var t;
    return null != (t = O[e]) ? t : 0
  }
  getSubscriptionGroupListing(e) {
    return E.get(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = E.values(p(e));
    return a()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return y.get(e)
  }
  getSubscriptionListingsForApplication(e) {
    return y.values(_(e))
  }
  getEntitlementsForGuildFetchState(e) {
    var t;
    return null != (t = v[e]) ? t : 0
  }
  getSubscriptionListingForPlan(e) {
    let t = y.values(h(e));
    return a()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getApplicationEntitlementsForGuild(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    return b.values(m(e, n, t))
  }
  getEntitlementsForGuild(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return b.values(g(t, e))
  }
}
d(w, "displayName", "ApplicationSubscriptionStore");
let P = new w(Chunk73153.h, {
  LOGOUT: S,
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: T,
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: C,
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: N,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
    let {
      guildId: t
    } = e;
    v[t] = 1
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
    let {
      guildId: t,
      entitlements: n
    } = e;
    v[t] = 2, n.forEach(e => {
      let t = c.A.createFromServer(e);
      b.set(t.id, t)
    })
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
    let {
      guildId: t
    } = e;
    v[t] = 0
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: R
})