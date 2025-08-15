/** Chunk was on 74891 **/
/** chunk id: 106976, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  i1: () => d,
  rx: () => c,
  sB: () => p,
  vY: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk307643 = require("./307643.js"),
  Chunk981631 = require("./981631.js");

function a(t) {
  return {
    id: t.id,
    type: o.epS.SUBSCRIPTION,
    application_id: t.application_id,
    product_line: o.POd.APPLICATION,
    name: t.name,
    summary: "",
    description: t.description,
    flags: t.sku_flags,
    manifests: [],
    available_regions: [],
    legal_notice: "",
    deleted: t.soft_deleted,
    price_tier: 0,
    show_age_gate: false,
    restricted: false
  }
}

function u(t) {
  var e;
  return {
    id: t.id,
    sku: a(t),
    summary: t.description,
    description: t.description,
    benefits: null != (e = t.store_listing_benefits) ? e : [],
    thumbnail: t.image_asset,
    published: t.published
  }
}

function s(t) {
  for (let e of (i.Z.dispatch({
      type: "SKUS_FETCH_SUCCESS",
      skus: t.map(a)
    }), i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: t.map(u)
    }), t)) i.Z.dispatch({
    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
    skuId: e.id,
    subscriptionPlans: e.subscription_plans
  })
}
async function c(t, e) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
    applicationId: t,
    groupListingId: e
  });
  try {
    var n;
    let r = await l.jz(t, e);
    return i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      applicationId: t,
      groupListing: r
    }), s(null != (n = r.subscription_listings) ? n : []), r
  } catch (e) {
    i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      applicationId: t
    })
  }
}
async function d(t) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
    guildId: t
  });
  try {
    let e = await l.GF(t);
    i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
      guildId: t,
      entitlements: e
    })
  } catch (e) {
    i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
      guildId: t
    })
  }
}

function p(t) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
    guildId: t
  })
}
async function f(t) {
  let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
    planId: t
  });
  try {
    var n;
    let e = await l.a_(t);
    i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
      groupListing: e
    });
    let o = null != (n = e.subscription_listings) ? n : [];
    await Promise.all(o.map(e => {
      if (e.subscription_plans[0].id === t) return r.GZ(e.id, true, true, true)
    })), s(o)
  } catch (n) {
    if ("status" in n && 429 === n.status && e < 10) await f(t, ++e);
    else throw n
  }
}