/** Chunk was on 30243 **/
r.d(t, {
  s: () => h
}), r(789020);
var n = r(200651),
  l = r(192379),
  i = r(442837),
  o = r(544891),
  a = r(481060),
  c = r(570140),
  s = r(171246),
  u = r(509545),
  d = r(55563),
  p = r(551428),
  f = r(74538),
  b = r(937615),
  O = r(147496),
  y = r(519896),
  m = r(981631),
  j = r(388032);
let g = (0, i.Kb)([d.Z, u.Z, p.Z], {
  queryId: e => m.McO.APP_PREMIUM_BUTTON(e),
  get: e => {
    var t;
    if (null == e) return;
    let r = d.Z.get(e),
      n = null !== (t = u.Z.getForSKU(e)) && void 0 !== t ? t : [],
      l = p.Z.getForSKU(e),
      i = d.Z.getParentSKU(e);
    if (null != r && null != l && (null == r || r.type !== m.epS.SUBSCRIPTION || null != i)) return {
      parentSku: i,
      sku: r,
      storeListing: l,
      subscriptionPlans: n
    }
  },
  load: async (e, t) => {
    if (null == t) return;
    let r = {
        url: m.ANM.STOREFRONT_PREMIUM_BUTTON(t),
        rejectWithError: !1
      },
      {
        body: n
      } = await o.tn.get(r);
    c.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: n.store_listings
    }), null != n.subscription_plans && c.Z.dispatch({
      type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
      skuId: t,
      subscriptionPlans: n.subscription_plans
    }), null != n.skus && n.skus.forEach(e => {
      c.Z.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: e
      })
    })
  },
  useStateHook: i.cj
});

function h(e, t) {
  let {
    data: r
  } = g(e), i = null == r ? void 0 : r.parentSku, o = null == r ? void 0 : r.sku, c = null == r ? void 0 : r.storeListing, u = null == r ? void 0 : r.subscriptionPlans, d = l.useCallback(() => {
    if ((null == o ? void 0 : o.applicationId) == null || (null == o ? void 0 : o.id) == null || (null == o ? void 0 : o.flags) == null || o.applicationId !== t) return null;
    (0, a.h7j)(e => {
      let {
        onClose: t,
        transitionState: r
      } = e;
      return (0, n.jsx)(y.SubscriptionDetailsModal, {
        appId: o.applicationId,
        subscriptionType: (0, s.KW)(o.flags) ? "user" : "guild",
        onClose: t,
        skuId: o.id,
        transitionState: r,
        guildId: null
      })
    })
  }, [null == o ? void 0 : o.applicationId, null == o ? void 0 : o.id, null == o ? void 0 : o.flags, t]), p = l.useCallback(() => {
    if (null == o) return null;
    (0, a.h7j)(e => {
      let {
        onClose: t,
        transitionState: r
      } = e;
      return (0, n.jsx)(O.ItemDetailsModal, {
        appId: o.applicationId,
        skuId: o.id,
        onClose: t,
        transitionState: r
      })
    })
  }, [o]);
  if (null != o && null != c && (null == o || o.type !== m.epS.SUBSCRIPTION || null != i)) {
    if (null == e || null != o && !o.available || null != o && o.applicationId !== t) return {
      disabled: !0,
      label: j.NW.string(j.t.CHa0vL)
    };
    if (o.type === m.epS.SUBSCRIPTION) {
      if (null == u || 0 === u.length) return {
        disabled: !0,
        label: j.NW.string(j.t.CHa0vL)
      };
      let e = u[0],
        t = (0, f.aS)(e.id);
      return {
        disabled: !1,
        label: j.NW.formatToPlainString(j.t["c6Q+Bw"], {
          skuName: o.name,
          price: (0, b.T4)(t.amount, t.currency)
        }),
        onClick: d
      }
    }
    return null == o.price ? {
      disabled: !0,
      label: j.NW.string(j.t.CHa0vL)
    } : {
      disabled: !1,
      label: j.NW.formatToPlainString(j.t["c6Q+Bw"], {
        skuName: o.name,
        price: (0, b.T4)(o.price.amount, o.price.currency)
      }),
      onClick: p
    }
  }
}