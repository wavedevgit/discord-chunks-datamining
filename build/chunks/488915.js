/** Chunk was on 70420 **/
n.d(t, {
  M: () => f,
  Z: () => O
}), n(47120);
var i, o, r, a, l = n(512722),
  c = n.n(l),
  s = n(442837),
  _ = n(759174),
  d = n(570140),
  u = n(959546),
  p = n(55563),
  f = ((o = {})[o.NOT_FETCHED = 0] = "NOT_FETCHED", o[o.FETCHING = 1] = "FETCHING", o[o.FETCHED = 2] = "FETCHED", o);

function I(e) {
  return "subscription_listing:".concat(e)
}

function m(e) {
  return "application:".concat(e)
}

function S(e) {
  return "plan:".concat(e)
}

function b(e, t, n) {
  return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
}

function C(e, t) {
  return "entitlement:".concat(t, ":").concat(e)
}
let T = new _.h(e => [m(e.application_id), ...e.subscription_listings_ids.map(I)], e => e.id),
  g = new _.h(e => [m(e.application_id), S(e.subscription_plans[0].id)], e => e.id),
  h = new _.h(e => [b(e.applicationId, e.isValid(null, p.Z), e.guildId), C(e.isValid(null, p.Z), e.guildId)], e => e.id),
  y = {},
  v = {};

function N(e) {
  var t, n;
  for (let i of (T.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) {
    n = i, g.set(n.id, n)
  }
}
class x extends(i = s.yh) {
  getSubscriptionGroupListingsForApplicationFetchState(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t ? t : 0
  }
  getSubscriptionGroupListing(e) {
    return T.get(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = T.values(I(e));
    return c()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return g.get(e)
  }
  getSubscriptionListingsForApplication(e) {
    return g.values(m(e))
  }
  getEntitlementsForGuildFetchState(e) {
    var t;
    return null !== (t = v[e]) && void 0 !== t ? t : 0
  }
  getSubscriptionListingForPlan(e) {
    let t = g.values(S(e));
    return c()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getApplicationEntitlementsForGuild(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return h.values(b(e, n, t))
  }
  getEntitlementsForGuild(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return h.values(C(t, e))
  }
}
a = "ApplicationSubscriptionStore", (r = "displayName") in x ? Object.defineProperty(x, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : x[r] = a;
let O = new x(d.Z, {
  LOGOUT: function() {
    T.clear(), g.clear(), h.clear(), y = {}, v = {}
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
    let {
      applicationId: t,
      groupListingId: n
    } = e;
    y[t] = 1;
    let i = T.get(n);
    if (null != i)
      for (let e of i.subscription_listings_ids) g.delete(e)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
    let {
      applicationId: t,
      groupListing: n
    } = e;
    y[t] = 2, N(n)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    y[t] = 2
  },
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
      let t = u.Z.createFromServer(e);
      h.set(t.id, t)
    })
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
    let {
      guildId: t
    } = e;
    v[t] = 0
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
    let {
      groupListing: t
    } = e;
    N(t)
  }
})