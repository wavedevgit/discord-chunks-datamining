/** Chunk was on 74891 **/
/** chunk id: 724870, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => g,
  m: () => y
}), require("./997841.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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

function g(t) {
  let {
    initialPlanId: e,
    activeSubscription: r,
    analyticsObject: l,
    analyticsLocation: u,
    analyticsLocations: d,
    analyticsSubscriptionType: p,
    renderHeader: f,
    planGroup: g,
    skuId: _,
    guildId: y,
    reviewWarningMessage: P,
    applicationId: v,
    showBenefitsFirst: E,
    onComplete: m,
    forcesTransitionToGuild: T
  } = t, h = (0, o.Z)(), C = false;
  (0, a.ZDy)(async () => {
    let {
      PaymentContextProvider: t
    } = await Promise.resolve().then(n.bind(n, 563132)), o = (await n.e("7458").then(n.bind(n, 405083))).default, {
      getApplicationPaymentSteps: a
    } = await n.e("86513").then(n.bind(n, 759386)), s = a({
      guildId: y,
      showBenefitsFirst: E
    });
    return n => {
      var a, c;
      return (0, i.jsx)(t, {
        loadId: h,
        applicationId: v,
        activeSubscription: r,
        stepConfigs: s,
        skuIDs: [_],
        children: (0, i.jsx)(I.c1, {
          children: (0, i.jsx)(O.KB, {
            children: (0, i.jsx)(o, (a = function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function(e) {
                  var i;
                  i = n[e], e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : t[e] = i
                })
              }
              return t
            }({}, n), c = c = {
              initialPlanId: e,
              skuId: _,
              analyticsLocations: d,
              analyticsObject: l,
              analyticsLocation: u,
              analyticsSubscriptionType: p,
              renderHeader: f,
              planGroup: g,
              reviewWarningMessage: P,
              applicationId: v,
              guildId: null != y ? y : true,
              onComplete: () => {
                C = true, null == m || m()
              },
              forcesTransitionToGuild: T
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : (function(t, e) {
              var n = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                n.push.apply(n, i)
              }
              return n
            })(Object(c)).forEach(function(t) {
              Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(c, t))
            }), a))
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      C || (S.default.track(b.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: h,
        payment_type: b.Zuq[b.GZQ.SUBSCRIPTION],
        location: null != u ? u : l,
        is_gift: false,
        sku_id: _,
        application_id: v,
        location_stack: d
      }), (0, s.fw)(), (0, c.p)())
    },
    onCloseRequest: b.dG4
  })
}
let _ = async (t, e) => {
  let n = (await (0, u.yD)(t)).filter(t => null == t.ends_at || new Date(t.ends_at) > new Date).find(t => t.sku_id === e);
  l()(null == n, "User already has an active subscription to this SKU")
};
async function y(t) {
  var e;
  let {
    applicationId: n,
    skuId: i,
    initialPlanId: r,
    analyticsLocationObject: o,
    analyticsLocations: a,
    renderHeader: u
  } = t, s = f.Z.get(i), c = p.Z.getForSKU(i);
  l()(null != s, "Failed to find SKU");
  let S = (0, d.KW)(s.flags);
  l()(S, "Guild application subscriptions unsupported!"), await _(n, i);
  let O = {
    initialPlanId: null != r ? r : null == (e = c[0]) ? true : e.id,
    activeSubscription: null,
    analyticsLocations: a,
    analyticsLocationObject: o,
    analyticsSubscriptionType: b.NYc.APPLICATION,
    renderHeader: u,
    planGroup: [],
    skuId: i,
    guildId: null,
    showBenefitsFirst: false,
    applicationId: n
  };
  g(O)
}