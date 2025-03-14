/** Chunk was on 79602 **/
n.d(e, {
  M: () => S,
  Z: () => y
}), n(47120);
var i, r, o, s, l = n(512722),
  a = n.n(l),
  c = n(442837),
  u = n(759174),
  p = n(570140),
  d = n(959546),
  _ = n(55563),
  S = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r);

function f(t) {
  return "subscription_listing:".concat(t)
}

function C(t) {
  return "application:".concat(t)
}

function I(t) {
  return "plan:".concat(t)
}

function O(t, e, n) {
  return "entitlement:".concat(t, ":").concat(n, ":").concat(e)
}

function b(t, e) {
  return "entitlement:".concat(e, ":").concat(t)
}
let T = new u.h(t => [C(t.application_id), ...t.subscription_listings_ids.map(f)], t => t.id),
  g = new u.h(t => [C(t.application_id), I(t.subscription_plans[0].id)], t => t.id),
  m = new u.h(t => [O(t.applicationId, t.isValid(null, _.Z), t.guildId), b(t.isValid(null, _.Z), t.guildId)], t => t.id),
  P = {},
  h = {};

function N(t) {
  var e, n;
  for (let i of (T.set(t.id, t), null !== (e = t.subscription_listings) && void 0 !== e ? e : [])) {
    n = i, g.set(n.id, n)
  }
}
class E extends(i = c.yh) {
  getSubscriptionGroupListingsForApplicationFetchState(t) {
    var e;
    return null !== (e = P[t]) && void 0 !== e ? e : 0
  }
  getSubscriptionGroupListing(t) {
    return T.get(t)
  }
  getSubscriptionGroupListingForSubscriptionListing(t) {
    let e = T.values(f(t));
    return a()(e.length <= 1, "Found multiple group listings for listing"), e[0]
  }
  getSubscriptionListing(t) {
    return g.get(t)
  }
  getSubscriptionListingsForApplication(t) {
    return g.values(C(t))
  }
  getEntitlementsForGuildFetchState(t) {
    var e;
    return null !== (e = h[t]) && void 0 !== e ? e : 0
  }
  getSubscriptionListingForPlan(t) {
    let e = g.values(I(t));
    return a()(e.length <= 1, "Found multiple listings for plan"), e[0]
  }
  getApplicationEntitlementsForGuild(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return m.values(O(t, n, e))
  }
  getEntitlementsForGuild(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return m.values(b(e, t))
  }
}
s = "ApplicationSubscriptionStore", (o = "displayName") in E ? Object.defineProperty(E, o, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : E[o] = s;
let y = new E(p.Z, {
  LOGOUT: function() {
    T.clear(), g.clear(), m.clear(), P = {}, h = {}
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
    let {
      applicationId: e,
      groupListingId: n
    } = t;
    P[e] = 1;
    let i = T.get(n);
    if (null != i)
      for (let t of i.subscription_listings_ids) g.delete(t)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
    let {
      applicationId: e,
      groupListing: n
    } = t;
    P[e] = 2, N(n)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
    let {
      applicationId: e
    } = t;
    P[e] = 2
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
    let {
      guildId: e
    } = t;
    h[e] = 1
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
    let {
      guildId: e,
      entitlements: n
    } = t;
    h[e] = 2, n.forEach(t => {
      let e = d.Z.createFromServer(t);
      m.set(e.id, e)
    })
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
    let {
      guildId: e
    } = t;
    h[e] = 0
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
    let {
      groupListing: e
    } = t;
    N(e)
  }
})