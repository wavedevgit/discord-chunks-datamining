/** Chunk was on web.js **/
/** chunk id: 423117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AE: () => O,
  FP: () => g,
  I1: () => v,
  O0: () => T,
  Qb: () => m,
  W2: () => h,
  Xj: () => A,
  _d: () => y,
  dA: () => I,
  uw: () => E,
  vY: () => b
}), require("./388685.js");
var Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk295141 = require("./295141.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = 3;
async function m(e) {
  let t = await u.X2(e);
  i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: t
  })
}
async function h(e, t) {
  let n = await u.ci(e, t);
  i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: n
  })
}
async function g(e) {
  let {
    includeSoftDeleted: t = true,
    countryCode: n
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
    guildId: e
  });
  try {
    let [r, o, s] = await Promise.all([u.rD(e, {
      includeSoftDeleted: t,
      countryCode: n
    }), u.X2(e), u.eI(e), (0, a.jg)()]);
    i.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      guildId: e,
      groupListings: r,
      settings: o,
      subscriptionTrials: s
    })
  } catch (t) {
    i.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      guildId: e
    })
  }
}
async function E(e, t) {
  let n = await u.bg(e, t);
  return i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: n
  }), n
}
async function b(e) {
  var t;
  i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
    planId: e
  });
  let n = await u.iW(e);
  for (let r of (i.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
      groupListing: n
    }), null != (t = n.subscription_listings) ? t : [])) r.subscription_plans[0].id === e && await o.GZ(r.id, true, true, true)
}
async function y(e, t, n) {
  await u.es(e, t, n), i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
    listingId: n
  })
}
async function O(e, t, n) {
  let r = await u.V_(e, t, n);
  i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: r
  })
}
async function v(e, t, n) {
  let r = await u.MI(e, t, n);
  i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
    subscriptionTrial: r
  })
}
async function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = await u.K5(e, t, n);
  return i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: r
  }), r
}
async function I(e) {
  let {
    guildId: t,
    groupListingId: n,
    data: r,
    analyticsContext: a,
    onBeforeDispatchNewListing: o
  } = e, c = await u.aG(t, n, r);
  return l.default.track(d.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED, p({
    role_subscription_listing_id: c.id,
    role_subscription_group_listing_id: n,
    template_name: a.templateCategory,
    has_change_from_template: a.hasChangeFromTemplate
  }, (0, s.hH)(t))), await S(t, n, {
    includeArchivedListings: true
  }), null == o || o(c), i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: c
  }), c
}
async function T(e) {
  let {
    guildId: t,
    listingId: n,
    groupListingId: r,
    data: a
  } = e, o = await u.nU(t, r, n, a);
  return i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: o
  }), await S(t, r, {
    includeArchivedListings: true
  }), o
}
async function A(e) {
  let {
    signal: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = false;
  for (let a = 0; a < _; a++) try {
    if (null == t ? true : t.aborted) return void i.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
      guildId: e
    });
    i.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
      guildId: e
    });
    let {
      restrictions: r
    } = await u.j8(e, {
      signal: t
    });
    i.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
      guildId: e,
      restrictions: null != r ? r : []
    }), n = true;
    break
  } catch (e) {
    await (0, r._v)((a + 1) * c.Z.Millis.SECOND)
  }
  n || i.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
    guildId: e
  })
}