/** Chunk was on 30243 **/
/** chunk id: 744969, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  s: () => h
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
let g = (0, Chunk442837.Kb)([Chunk55563.Z, Chunk509545.Z, Chunk551428.Z], {
  queryId: e => y.McO.APP_PREMIUM_BUTTON(e),
  get: e => {
    var t;
    if (null == e) return;
    let r = d.Z.get(e),
      n = null != (t = u.Z.getForSKU(e)) ? t : [],
      l = p.Z.getForSKU(e),
      i = d.Z.getParentSKU(e);
    if (null != r && null != l && (null == r || r.type !== y.epS.SUBSCRIPTION || null != i)) return {
      parentSku: i,
      sku: r,
      storeListing: l,
      subscriptionPlans: n
    }
  },
  load: async (e, t) => {
    if (null == t) return;
    let r = {
        url: y.ANM.STOREFRONT_PREMIUM_BUTTON(t),
        rejectWithError: false
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
  useStateHook: Chunk442837.cj
});

function h(e) {
  let {
    data: t
  } = g(e), r = null == t ? true : t.parentSku, i = null == t ? true : t.sku, o = null == t ? true : t.storeListing, c = null == t ? true : t.subscriptionPlans, u = l.useCallback(() => {
    if ((null == i ? true : i.applicationId) == null || (null == i ? true : i.id) == null || (null == i ? true : i.flags) == null) return null;
    (0, a.h7j)(e => {
      let {
        onClose: t,
        transitionState: r
      } = e;
      return (0, n.jsx)(O.SubscriptionDetailsModal, {
        appId: i.applicationId,
        subscriptionType: (0, s.KW)(i.flags) ? "user" : "guild",
        onClose: t,
        skuId: i.id,
        transitionState: r,
        guildId: null
      })
    })
  }, [null == i ? true : i.applicationId, null == i ? true : i.id, null == i ? true : i.flags]), d = l.useCallback(() => {
    if (null == i) return null;
    (0, a.h7j)(e => {
      let {
        onClose: t,
        transitionState: r
      } = e;
      return (0, n.jsx)(m.ItemDetailsModal, {
        appId: i.applicationId,
        skuId: i.id,
        onClose: t,
        transitionState: r
      })
    })
  }, [i]);
  if (null != i && null != o && (null == i || i.type !== y.epS.SUBSCRIPTION || null != r)) {
    if (null == e || null != i && !i.available) return {
      disabled: true,
      label: j.intl.string(j.t.CHa0vL)
    };
    if (i.type === y.epS.SUBSCRIPTION) {
      if (null == c || 0 === c.length) return {
        disabled: true,
        label: j.intl.string(j.t.CHa0vL)
      };
      let e = c[0],
        t = (0, f.aS)(e.id);
      return {
        disabled: false,
        label: j.intl.formatToPlainString(j.t["c6Q+Bw"], {
          skuName: i.name,
          price: (0, b.T4)(t.amount, t.currency)
        }),
        onClick: u
      }
    }
    return null == i.price ? {
      disabled: true,
      label: j.intl.string(j.t.CHa0vL)
    } : {
      disabled: false,
      label: j.intl.formatToPlainString(j.t["c6Q+Bw"], {
        skuName: i.name,
        price: (0, b.T4)(i.price.amount, i.price.currency)
      }),
      onClick: d
    }
  }
}