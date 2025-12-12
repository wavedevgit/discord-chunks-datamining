/** Chunk was on web.js **/
/** chunk id: 488915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => f,
  Z: () => w
}), require("./388685.js");
var r, Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959546 = require("./959546.js"),
  Chunk55563 = require("./55563.js");

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

function m(e) {
  return "plan:".concat(e)
}

function h(e, t, n) {
  return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
}

function g(e, t) {
  return "entitlement:".concat(t, ":").concat(e)
}
let E = new Chunk759174.h(e => [_(e.application_id), ...e.subscription_listings_ids.map(p)], e => e.id),
  b = new Chunk759174.h(e => [_(e.application_id), m(e.subscription_plans[0].id)], e => e.id),
  y = new Chunk759174.h(e => [h(e.applicationId, e.isValid(null, u.Z), e.guildId), g(e.isValid(null, u.Z), e.guildId)], e => e.id),
  O = {},
  v = {};

function S(e) {
  var t;
  for (let n of (E.set(e.id, e), null != (t = e.subscription_listings) ? t : [])) I(n)
}

function I(e) {
  b.set(e.id, e)
}

function T() {
  E.clear(), b.clear(), y.clear(), O = {}, v = {}
}

function C(e) {
  let {
    applicationId: t,
    groupListingId: n
  } = e;
  O[t] = 1;
  let r = E.get(n);
  if (null != r)
    for (let e of r.subscription_listings_ids) b.delete(e)
}

function A(e) {
  let {
    applicationId: t,
    groupListing: n
  } = e;
  O[t] = 2, S(n)
}

function N(e) {
  let {
    applicationId: t
  } = e;
  O[t] = 2
}

function P(e) {
  let {
    groupListing: t
  } = e;
  S(t)
}
class R extends(r = Chunk442837.yh) {
  getSubscriptionGroupListingsForApplicationFetchState(e) {
    var t;
    return null != (t = O[e]) ? t : 0
  }
  getSubscriptionGroupListing(e) {
    return E.get(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = E.values(p(e));
    return o()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return b.get(e)
  }
  getSubscriptionListingsForApplication(e) {
    return b.values(_(e))
  }
  getEntitlementsForGuildFetchState(e) {
    var t;
    return null != (t = v[e]) ? t : 0
  }
  getSubscriptionListingForPlan(e) {
    let t = b.values(m(e));
    return o()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getApplicationEntitlementsForGuild(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    return y.values(h(e, n, t))
  }
  getEntitlementsForGuild(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return y.values(g(t, e))
  }
}
d(R, "displayName", "ApplicationSubscriptionStore");
let w = new R(Chunk570140.Z, {
  LOGOUT: T,
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: C,
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: A,
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
      let t = c.Z.createFromServer(e);
      y.set(t.id, t)
    })
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
    let {
      guildId: t
    } = e;
    v[t] = 0
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: P
})