/** Chunk was on web.js **/
/** chunk id: 744969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => y
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  getQueryId: Chunk981631.McO.APP_PREMIUM_BUTTON,
  get: e => {
    var t;
    if (null == e) return;
    let n = d.Z.get(e),
      r = null != (t = u.Z.getForSKU(e)) ? t : [],
      i = f.Z.getForSKU(e),
      o = d.Z.getParentSKU(e);
    return null == n || null == i || null != n && n.type === g.epS.SUBSCRIPTION && null == o ? null : {
      parentSku: o,
      sku: n,
      storeListing: i,
      subscriptionPlans: r
    }
  },
  load: async e => {
    if (null == e) return;
    let t = {
        url: g.ANM.STOREFRONT_PREMIUM_BUTTON(e),
        rejectWithError: false
      },
      {
        body: n
      } = await a.tn.get(t);
    l.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: n.store_listings
    }), null != n.subscription_plans && l.Z.dispatch({
      type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
      skuId: e,
      subscriptionPlans: n.subscription_plans
    }), null != n.skus && n.skus.forEach(e => {
      l.Z.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: e
      })
    })
  }
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
      return (0, r.jsx)(h.SubscriptionDetailsModal, {
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
      return (0, r.jsx)(m.ItemDetailsModal, {
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
      label: E.intl.string(E.t.CHa0vN)
    };
    if (o.type === g.epS.SUBSCRIPTION) {
      if (null == l || 0 === l.length) return {
        disabled: true,
        label: E.intl.string(E.t.CHa0vN)
      };
      let e = l[0],
        t = (0, p.aS)(e.id);
      return {
        disabled: false,
        label: E.intl.formatToPlainString(E.t["c6Q+B3"], {
          skuName: o.name,
          price: (0, _.T4)(t.amount, t.currency)
        }),
        onClick: u
      }
    }
    return null == o.price ? {
      disabled: true,
      label: E.intl.string(E.t.CHa0vN)
    } : {
      disabled: false,
      label: E.intl.formatToPlainString(E.t["c6Q+B3"], {
        skuName: o.name,
        price: (0, _.T4)(o.price.amount, o.price.currency)
      }),
      onClick: d
    }
  }
}