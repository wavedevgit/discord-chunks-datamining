/** Chunk was on web.js **/
/** chunk id: 724870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => v,
  m: () => T
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496929 = require("./496929.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk171246 = require("./171246.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk626135 = require("./626135.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    initialPlanId: t,
    activeSubscription: i,
    analyticsObject: a,
    analyticsLocation: l,
    analyticsLocations: d,
    analyticsSubscriptionType: f,
    renderHeader: _,
    planGroup: E,
    skuId: y,
    guildId: v,
    reviewWarningMessage: I,
    applicationId: T,
    showBenefitsFirst: S,
    onComplete: A,
    forcesTransitionToGuild: C
  } = e, N = (0, o.Z)(), R = false;
  (0, s.ZDy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, 563132)), o = (await n.e("7458").then(n.bind(n, 405083))).default, {
      getApplicationPaymentSteps: s
    } = await n.e("86513").then(n.bind(n, 759386)), c = s({
      guildId: v,
      showBenefitsFirst: S
    });
    return n => (0, r.jsx)(e, {
      loadId: N,
      applicationId: T,
      activeSubscription: i,
      stepConfigs: c,
      skuIDs: [y],
      children: (0, r.jsx)(m.c1, {
        children: (0, r.jsx)(h.KB, {
          children: (0, r.jsx)(o, O(b({}, n), {
            initialPlanId: t,
            skuId: y,
            analyticsLocations: d,
            analyticsObject: a,
            analyticsLocation: l,
            analyticsSubscriptionType: f,
            renderHeader: _,
            planGroup: E,
            reviewWarningMessage: I,
            applicationId: T,
            guildId: null != v ? v : true,
            onComplete: () => {
              R = true, null == A || A()
            },
            forcesTransitionToGuild: C
          }))
        })
      })
    })
  }, {
    onCloseCallback: () => {
      R || (p.default.track(g.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: N,
        payment_type: g.Zuq[g.GZQ.SUBSCRIPTION],
        location: null != l ? l : a,
        is_gift: false,
        sku_id: y,
        application_id: T,
        location_stack: d
      }), (0, c.fw)(), (0, u.p)())
    },
    onCloseRequest: g.dG4
  })
}
let I = async (e, t) => {
  let n = (await (0, l.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  a()(null == n, "User already has an active subscription to this SKU")
};
async function T(e) {
  var t;
  let {
    applicationId: n,
    skuId: r,
    initialPlanId: i,
    analyticsLocationObject: o,
    analyticsLocations: s,
    renderHeader: l
  } = e, c = _.Z.get(r), u = f.Z.getForSKU(r);
  a()(null != c, "Failed to find SKU");
  let p = (0, d.KW)(c.flags);
  a()(p, "Guild application subscriptions unsupported!"), await I(n, r);
  let h = {
    initialPlanId: null != i ? i : null == (t = u[0]) ? true : t.id,
    activeSubscription: null,
    analyticsLocations: s,
    analyticsLocationObject: o,
    analyticsSubscriptionType: g.NYc.APPLICATION,
    renderHeader: l,
    planGroup: [],
    skuId: r,
    guildId: null,
    showBenefitsFirst: false,
    applicationId: n
  };
  v(h)
}