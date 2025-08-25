/** Chunk was on web.js **/
/** chunk id: 744969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => y
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk171246 = require("./171246.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk147496 = require("./147496.jsx"),
  Chunk519896 = require("./519896.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = (0, Chunk442837.Kb)([Chunk55563.Z, Chunk509545.Z, Chunk551428.Z], {
  queryId: e => g.McO.APP_PREMIUM_BUTTON(e),
  get: e => {
    var t;
    if (null == e) return;
    let n = d.Z.get(e),
      r = null != (t = u.Z.getForSKU(e)) ? t : [],
      i = f.Z.getForSKU(e),
      o = d.Z.getParentSKU(e);
    if (null != n && null != i && (null == n || n.type !== g.epS.SUBSCRIPTION || null != o)) return {
      parentSku: o,
      sku: n,
      storeListing: i,
      subscriptionPlans: r
    }
  },
  load: async (e, t) => {
    if (null == t) return;
    let n = {
        url: g.ANM.STOREFRONT_PREMIUM_BUTTON(t),
        rejectWithError: false
      },
      {
        body: r
      } = await a.tn.get(n);
    l.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: r.store_listings
    }), null != r.subscription_plans && l.Z.dispatch({
      type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
      skuId: t,
      subscriptionPlans: r.subscription_plans
    }), null != r.skus && r.skus.forEach(e => {
      l.Z.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: e
      })
    })
  },
  useStateHook: Chunk442837.cj
});

function y(e) {
  let {
    data: t
  } = b(e), n = null == t ? true : t.parentSku, o = null == t ? true : t.sku, a = null == t ? true : t.storeListing, l = null == t ? true : t.subscriptionPlans, u = i.useCallback(() => {
    if ((null == o ? true : o.applicationId) == null || (null == o ? true : o.id) == null || (null == o ? true : o.flags) == null) return null;
    (0, s.h7j)(e => {
      let {
        onClose: t,
        transitionState: n
      } = e;
      return (0, r.jsx)(m.SubscriptionDetailsModal, {
        appId: o.applicationId,
        subscriptionType: (0, c.KW)(o.flags) ? "user" : "guild",
        onClose: t,
        skuId: o.id,
        transitionState: n,
        guildId: null
      })
    })
  }, [null == o ? true : o.applicationId, null == o ? true : o.id, null == o ? true : o.flags]), d = i.useCallback(() => {
    if (null == o) return null;
    (0, s.h7j)(e => {
      let {
        onClose: t,
        transitionState: n
      } = e;
      return (0, r.jsx)(h.ItemDetailsModal, {
        appId: o.applicationId,
        skuId: o.id,
        onClose: t,
        transitionState: n
      })
    })
  }, [o]);
  if (null != o && null != a && (null == o || o.type !== g.epS.SUBSCRIPTION || null != n)) {
    if (null == e || null != o && !o.available) return {
      disabled: true,
      label: E.intl.string(E.t.CHa0vL)
    };
    if (o.type === g.epS.SUBSCRIPTION) {
      if (null == l || 0 === l.length) return {
        disabled: true,
        label: E.intl.string(E.t.CHa0vL)
      };
      let e = l[0],
        t = (0, _.aS)(e.id);
      return {
        disabled: false,
        label: E.intl.formatToPlainString(E.t["c6Q+Bw"], {
          skuName: o.name,
          price: (0, p.T4)(t.amount, t.currency)
        }),
        onClick: u
      }
    }
    return null == o.price ? {
      disabled: true,
      label: E.intl.string(E.t.CHa0vL)
    } : {
      disabled: false,
      label: E.intl.formatToPlainString(E.t["c6Q+Bw"], {
        skuName: o.name,
        price: (0, p.T4)(o.price.amount, o.price.currency)
      }),
      onClick: d
    }
  }
}