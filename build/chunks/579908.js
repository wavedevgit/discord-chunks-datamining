/** Chunk was on web.js **/
/** chunk id: 579908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DO: () => m,
  H7: () => b,
  J1: () => v,
  J4: () => E,
  K0: () => I,
  LJ: () => T,
  W5: () => h,
  WA: () => g,
  _R: () => y,
  mK: () => O,
  vW: () => S
}), require("./896048.js");
var Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk695825 = require("./695825.js"),
  Chunk652215 = require("./652215.js");

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
async function h(e) {
  let t = await u.b3(e);
  i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: t
  })
}
async function m(e, t) {
  let n = await u.ux(e, t);
  i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: n
  })
}
async function g(e) {
  let {
    includeSoftDeleted: t = true,
    countryCode: n
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
    guildId: e
  });
  try {
    let [r, o, s] = await Promise.all([u.z9(e, {
      includeSoftDeleted: t,
      countryCode: n
    }), u.b3(e), u.AE(e), (0, a.hP)()]);
    i.h.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      guildId: e,
      groupListings: r,
      settings: o,
      subscriptionTrials: s
    })
  } catch (t) {
    i.h.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      guildId: e
    })
  }
}
async function E(e, t) {
  let n = await u.aC(e, t);
  return i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: n
  }), n
}
async function y(e) {
  var t;
  i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
    planId: e
  });
  let n = await u.Nb(e);
  for (let r of (i.h.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
      groupListing: n
    }), null != (t = n.subscription_listings) ? t : [])) r.subscription_plans[0].id === e && await o.ur(r.id, true, true, true)
}
async function b(e, t, n) {
  await u.wJ(e, t, n), i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
    listingId: n
  })
}
async function O(e, t, n) {
  let r = await u.PC(e, t, n);
  i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: r
  })
}
async function v(e, t, n) {
  let r = await u.D7(e, t, n);
  i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
    subscriptionTrial: r
  })
}
async function A(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = await u.WV(e, t, n);
  return i.h.dispatch({
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
  } = e, c = await u.DQ(t, n, r);
  return l.default.track(d.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED, p({
    role_subscription_listing_id: c.id,
    role_subscription_group_listing_id: n,
    template_name: a.templateCategory,
    has_change_from_template: a.hasChangeFromTemplate
  }, (0, s.H$)(t))), await A(t, n, {
    includeArchivedListings: true
  }), null == o || o(c), i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: c
  }), c
}
async function S(e) {
  let {
    guildId: t,
    listingId: n,
    groupListingId: r,
    data: a
  } = e, o = await u.qt(t, r, n, a);
  return i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: o
  }), await A(t, r, {
    includeArchivedListings: true
  }), o
}
async function T(e) {
  let {
    signal: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = false;
  for (let a = 0; a < _; a++) try {
    if (null == t ? true : t.aborted) return void i.h.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
      guildId: e
    });
    i.h.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
      guildId: e
    });
    let {
      restrictions: r
    } = await u.iG(e, {
      signal: t
    });
    i.h.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
      guildId: e,
      restrictions: null != r ? r : []
    }), n = true;
    break
  } catch (e) {
    await (0, r.yy)((a + 1) * c.A.Millis.SECOND)
  }
  n || i.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
    guildId: e
  })
}