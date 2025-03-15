/** Chunk was on 79602 **/
n.d(e, {
  i1: () => p,
  rx: () => u,
  sB: () => d,
  vY: () => _
}), n(266796), n(47120);
var i = n(570140),
  r = n(821849),
  o = n(307643),
  s = n(981631);

function l(t) {
  return {
    id: t.id,
    type: s.epS.SUBSCRIPTION,
    application_id: t.application_id,
    product_line: s.POd.APPLICATION,
    name: t.name,
    summary: "",
    description: t.description,
    flags: t.sku_flags,
    manifests: [],
    available_regions: [],
    legal_notice: "",
    deleted: t.soft_deleted,
    price_tier: 0,
    show_age_gate: !1,
    restricted: !1
  }
}

function a(t) {
  var e;
  return {
    id: t.id,
    sku: l(t),
    summary: t.description,
    description: t.description,
    benefits: null !== (e = t.store_listing_benefits) && void 0 !== e ? e : [],
    thumbnail: t.image_asset,
    published: t.published
  }
}

function c(t) {
  for (let e of (i.Z.dispatch({
      type: "SKUS_FETCH_SUCCESS",
      skus: t.map(l)
    }), i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: t.map(a)
    }), t)) i.Z.dispatch({
    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
    skuId: e.id,
    subscriptionPlans: e.subscription_plans
  })
}
async function u(t, e) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
    applicationId: t,
    groupListingId: e
  });
  try {
    var n;
    let r = await o.jz(t, e);
    return i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      applicationId: t,
      groupListing: r
    }), c(null !== (n = r.subscription_listings) && void 0 !== n ? n : []), r
  } catch (e) {
    i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      applicationId: t
    })
  }
}
async function p(t) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
    guildId: t
  });
  try {
    let e = await o.GF(t);
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

function d(t) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
    guildId: t
  })
}
async function _(t) {
  i.Z.dispatch({
    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
    planId: t
  });
  try {
    var e;
    let n = await o.a_(t);
    i.Z.dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
      groupListing: n
    });
    let s = null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
    await Promise.all(s.map(e => {
      if (e.subscription_plans[0].id === t) return r.GZ(e.id, void 0, void 0, !0)
    })), c(s)
  } catch (t) {}
}