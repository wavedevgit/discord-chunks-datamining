/** Chunk was on 20941 **/
/** chunk id: 30008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => v
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk163437 = require("./163437.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk963179 = require("./963179.jsx"),
  Chunk168393 = require("./168393.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let y = (0, Chunk311907.UT)([Chunk67480.A, Chunk97352.A, Chunk328968.A], {
  getQueryId: Chunk652215.fic.APP_PREMIUM_BUTTON,
  get: e => {
    var t;
    if (null == e) return;
    let n = d.A.get(e),
      r = null != (t = u.A.getForSKU(e)) ? t : [],
      l = m.A.getForSKU(e),
      a = d.A.getParentSKU(e);
    return null == n || null == l || null != n && n.type === g.Puh.SUBSCRIPTION && null == a ? null : {
      parentSku: a,
      sku: n,
      storeListing: l,
      subscriptionPlans: r
    }
  },
  load: async e => {
    if (null == e) return;
    let t = {
        url: g.Rsh.STOREFRONT_PREMIUM_BUTTON(e),
        rejectWithError: false
      },
      {
        body: n
      } = await i.Bo.get(t);
    o.h.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: n.store_listings
    }), null != n.subscription_plans && o.h.dispatch({
      type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
      skuId: e,
      subscriptionPlans: n.subscription_plans
    }), null != n.skus && n.skus.forEach(e => {
      o.h.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: e
      })
    })
  }
});

function v(e) {
  let {
    data: t
  } = y(e), n = null == t ? true : t.parentSku, a = null == t ? true : t.sku, i = null == t ? true : t.storeListing, o = null == t ? true : t.subscriptionPlans, u = l.useCallback(() => {
    if ((null == a ? true : a.applicationId) == null || (null == a ? true : a.id) == null || (null == a ? true : a.flags) == null) return null;
    (0, s.qfG)(e => {
      let {
        onClose: t,
        transitionState: n
      } = e;
      return (0, r.jsx)(b.SubscriptionDetailsModal, {
        appId: a.applicationId,
        subscriptionType: (0, c.bg)(a.flags) ? "user" : "guild",
        onClose: t,
        skuId: a.id,
        transitionState: n,
        guildId: null
      })
    })
  }, [null == a ? true : a.applicationId, null == a ? true : a.id, null == a ? true : a.flags]), d = l.useCallback(() => {
    if (null == a) return null;
    (0, s.qfG)(e => {
      let {
        onClose: t,
        transitionState: n
      } = e;
      return (0, r.jsx)(h.ItemDetailsModal, {
        appId: a.applicationId,
        skuId: a.id,
        onClose: t,
        transitionState: n
      })
    })
  }, [a]);
  if (null != a && null != i && (null == a || a.type !== g.Puh.SUBSCRIPTION || null != n)) {
    if (null == e || null != a && !a.available) return {
      disabled: true,
      label: x.intl.string(x.t.CHa0vN)
    };
    if (a.type === g.Puh.SUBSCRIPTION) {
      if (null == o || 0 === o.length) return {
        disabled: true,
        label: x.intl.string(x.t.CHa0vN)
      };
      let e = o[0],
        t = (0, f.y8)(e.id);
      return {
        disabled: false,
        label: x.intl.formatToPlainString(x.t["c6Q+B3"], {
          skuName: a.name,
          price: (0, p.$g)(t.amount, t.currency)
        }),
        onClick: u
      }
    }
    return null == a.price ? {
      disabled: true,
      label: x.intl.string(x.t.CHa0vN)
    } : {
      disabled: false,
      label: x.intl.formatToPlainString(x.t["c6Q+B3"], {
        skuName: a.name,
        price: (0, p.$g)(a.price.amount, a.price.currency)
      }),
      onClick: d
    }
  }
}