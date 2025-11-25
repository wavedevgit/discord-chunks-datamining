/** Chunk was on web.js **/
/** chunk id: 400058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk72924 = require("./72924.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk883904 = require("./883904.js"),
  Chunk678558 = require("./678558.jsx"),
  Chunk730647 = require("./730647.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk305342 = require("./305342.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk87484 = require("./87484.jsx"),
  Chunk736519 = require("./736519.jsx"),
  Chunk43747 = require("./43747.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk78839 = require("./78839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk605532 = require("./605532.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, E.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, r.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, r.jsx)(b.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let M = {
  title: "Checkout",
  stories: [{
    name: "Checkout Test Panel",
    id: "checkout-test-panel",
    component: () => {
      let [e, t] = Chunk473749.useState(Chunk474936.Si.TIER_2), [n, E] = Chunk473749.useState(null), b = (0, Chunk442837.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildsArray()), [P] = (0, Chunk442837.Wu)([Chunk78839.Z], () => [Chunk78839.Z.getPremiumSubscription()]), w = Chunk305342.map(e => ({
        value: e,
        label: e.name
      })), [M, k] = Chunk473749.useState(w.length > 0 ? w[0].value : null), [j, U] = Chunk473749.useState(""), [G, B] = Chunk473749.useState({
        plan_id: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
        gift: "true"
      }), Z = "true" !== G.gift && null != P, [F, V] = Chunk473749.useState(w.length > 0 ? w[0].value : null), {
        analyticsLocations: H
      } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE), [W, Y] = Chunk473749.useState(""), [K, z] = Chunk473749.useState(Chunk981631.lds), {
        balance: q,
        isFetching: X,
        error: Q
      } = (0, Chunk43747.A)(), {
        isSubmitting: J,
        responseMessage: $,
        redeemVirtualCurrency: ee
      } = (0, Chunk43747.f)(), [et, en] = Chunk473749.useState(Chunk981631.lds), [er, ei] = Chunk473749.useState(""), [ea, eo] = Chunk473749.useState(Chunk981631.lds);
      return (0, Chunk54381.jsx)(Chunk906732.Gt, {
        value: H,
        children: (0, Chunk54381.jsx)(Chunk481060.zJl, {
          className: Chunk605532.scroller,
          children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
                label: "Gift",
                value: module,
                options: [{
                  value: Chunk474936.Si.TIER_2,
                  label: "Nitro"
                }, {
                  value: Chunk474936.Si.TIER_1,
                  label: "Nitro Classic"
                }, {
                  value: Chunk474936.Si.TIER_0,
                  label: "Nitro Basic"
                }, {
                  value: null,
                  label: "None"
                }],
                onChange: e => t(e)
              }), (0, Chunk54381.jsx)(Chunk736519.Z, {
                subscriptionTier: module,
                premiumModalAnalyticsLocation: {},
                color: Chunk755721.Tt.PRIMARY,
                look: Chunk755721.iL.FILLED
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
                label: "Premium Select Plan",
                value: require,
                options: [{
                  value: Chunk474936.Si.TIER_2,
                  label: "Nitro"
                }, {
                  value: Chunk474936.Si.TIER_1,
                  label: "Nitro Classic"
                }, {
                  value: Chunk474936.Si.TIER_0,
                  label: "Nitro Basic"
                }, {
                  value: null,
                  label: "None"
                }],
                onChange: e => E(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Select Plan",
                onClick: () => (0, Chunk963249.Z)({
                  subscriptionTier: require,
                  analyticsLocations: H
                })
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
                label: "Boost",
                value: M,
                options: w,
                onChange: e => k(e)
              }), null != M ? (0, Chunk54381.jsx)(Chunk678558.Z, {
                guild: M,
                analyticsLocation: {}
              }) : (0, Chunk54381.jsx)("div", {
                children: "No Guild to boost"
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, Chunk54381.jsx)(Chunk481060.Anchor, {
                href: "https://i.dis.gd/createPromo",
                children: "How to create promotion"
              }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
                  label: "Standalone: Trial Promotion Redemption",
                  placeholder: "Promotion Code",
                  value: j,
                  onChange: e => U(e)
                }), (0, Chunk54381.jsx)(Chunk481060.aML, {
                  "data-migration-pending": true,
                  text: "Need Promotion Code",
                  shouldShow: j.length < 1,
                  children: e => (0, r.jsx)(c.Button, L(D({
                    variant: "primary",
                    text: "Open Link",
                    disabled: j.length < 1
                  }, e), {
                    onClick: () => {
                      window.open(C.Z5c.BILLING_PROMOTION_REDEMPTION(j))
                    }
                  }))
                })]
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
              label: "Standalone: Gift/Subscription Purchase",
              children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
                label: "Plan",
                value: G.plan_id,
                options: [{
                  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
                  label: "Nitro"
                }, {
                  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1,
                  label: "Nitro Classic"
                }, {
                  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0,
                  label: "Nitro Basic"
                }],
                onChange: e => B(t => L(D({}, t), {
                  plan_id: e
                }))
              }), (0, Chunk54381.jsx)(Chunk481060.q4e, {
                label: "Type",
                value: G.gift,
                options: [{
                  value: "true",
                  label: "Gift"
                }, {
                  value: "false",
                  label: "Not Gift"
                }],
                onChange: e => B(t => L(D({}, t), {
                  gift: e
                }))
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.aML, {
              "data-migration-pending": true,
              text: "Already subscribed",
              shouldShow: Z,
              children: e => (0, r.jsx)(c.Button, L(D({
                variant: "primary",
                text: "Open Link"
              }, e), {
                disabled: Z,
                onClick: () => {
                  window.open(C.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(D({}, G)))
                }
              }))
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
              label: "Redeem Virtual Currency for SKU",
              children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
                  variant: "text-sm/normal",
                  children: "Virtual Currency Balance:"
                }), X ? (0, Chunk54381.jsx)("div", {
                  className: Chunk605532.loader,
                  children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
                    type: Chunk481060.RAz.SPINNING_CIRCLE
                  })
                }) : (0, Chunk54381.jsxs)("div", {
                  className: Chunk605532.balanceWidgetPillContainer,
                  children: [null !== Q && (0, Chunk54381.jsxs)(Chunk481060.Text, {
                    variant: "text-sm/normal",
                    children: ["Error fetching Virtual Currency Balance: ", Q.message]
                  }), (0, Chunk54381.jsx)(Chunk970815.A4, {
                    balance: null != q ? q : 0,
                    balanceWidgetMode: Chunk970815.b6.SELECTED
                  })]
                })]
              }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                label: "SKU ID",
                placeholder: "SKU ID",
                value: et,
                onChange: e => en(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Redeem Virtual Currency for SKU",
                loading: J,
                onClick: () => ee(et, (0, Chunk772848.Z)())
              }), null != $ && (0, Chunk54381.jsx)(Chunk481060.Text, {
                variant: "text-sm/normal",
                children: $
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
              label: "Creator Revenue",
              children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
                label: "Premium Server Subscription For",
                value: F,
                options: w,
                onChange: e => V(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Text, {
                variant: "text-md/semibold",
                children: "This is disabled because of a circular dependency"
              }), (0, Chunk54381.jsx)(Chunk730647.l, {
                guildId: null == F ? true : F.id,
                children: (0, Chunk54381.jsx)(x, {
                  selectedGuildForGuildSub: F
                })
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, Chunk54381.jsxs)(Chunk481060.C3N, {
                label: "Activities & Application Payment Modals",
                children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
                  label: "Application Id",
                  placeholder: "Application Id",
                  value: W,
                  onChange: Y
                }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                  label: "Sku Id",
                  placeholder: "Sku Id",
                  value: K,
                  onChange: e => z(e)
                })]
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Open App Subs Modal for Activity",
                onClick: () => (0, Chunk72924.S)({
                  applicationId: W,
                  skuId: K,
                  openPremiumPaymentModal: () => true,
                  analyticsLocations: [],
                  analyticsLocationObject: {
                    page: Chunk981631.ZY5.IN_APP
                  },
                  context: Chunk981631.IlC.APP
                })
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.Kqy, {
              direction: "vertical",
              gap: 8,
              children: (0, Chunk54381.jsx)(Chunk481060.C3N, {
                label: "Standard Payment Modal Test",
                children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                  direction: "horizontal",
                  gap: 8,
                  align: "end",
                  children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
                    label: "Application Id",
                    hideLabel: true,
                    placeholder: "Application Id",
                    value: er,
                    onChange: ei
                  }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                    label: "SKU ID",
                    hideLabel: true,
                    placeholder: "SKU ID",
                    value: ea,
                    onChange: e => eo(e)
                  }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                    variant: "primary",
                    text: "Open Standard Payment Modal for SKU",
                    onClick: () => (0, Chunk87484.Z)({
                      applicationId: er,
                      skuId: ea,
                      analyticsLocations: H
                    })
                  })]
                })
              })
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
              label: "Helpers",
              children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
                  variant: "primary",
                  text: "Reset SubscriptionPlanStore",
                  onClick: () => (0, Chunk821849.mE)()
                }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                  variant: "primary",
                  text: "Reset SubscriptionStore",
                  onClick: () => (0, Chunk355467.GM)()
                })]
              })
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
              label: "Dismissible Content Framework",
              children: (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Reset DismissibleContentFrameworkStore",
                onClick: () => (0, Chunk883904.EG)()
              })
            })]
          })
        })
      })
    },
    controls: {}
  }]
}