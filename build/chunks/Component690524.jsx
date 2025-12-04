/** Chunk was on web.js **/
/** chunk id: 690524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk616926 = require("./616926.js");

function w(e, t, n) {
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
      w(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, b.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, r.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, r.jsx)(y.Z, {
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
      let [e, t] = Chunk473749.useState(Chunk474936.Si.TIER_2), [n, b] = Chunk473749.useState(null), y = (0, Chunk442837.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildsArray()), [w] = (0, Chunk442837.Wu)([Chunk78839.Z], () => [Chunk78839.Z.getPremiumSubscription()]), x = Chunk305342.map(e => ({
        value: e,
        label: e.name
      })), [M, k] = Chunk473749.useState(x.length > 0 ? x[0].value : null), [U, G] = Chunk473749.useState(""), [Z, B] = Chunk473749.useState({
        plan_id: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
        gift: "true"
      }), F = "true" !== Z.gift && null != w, [V, H] = Chunk473749.useState(x.length > 0 ? x[0].value : null), {
        analyticsLocations: Y
      } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE), [W, K] = Chunk473749.useState(""), [z, q] = Chunk473749.useState(Chunk981631.lds), {
        balance: Q,
        isFetching: X,
        error: J
      } = (0, Chunk43747.A)(), {
        isSubmitting: $,
        responseMessage: ee,
        redeemVirtualCurrency: et
      } = (0, Chunk43747.f)(), [en, er] = Chunk473749.useState(Chunk981631.lds), [ei, ea] = Chunk473749.useState(""), [eo, es] = Chunk473749.useState(Chunk981631.lds);
      return (0, Chunk54381.jsx)(Chunk906732.Gt, {
        value: Y,
        children: (0, Chunk54381.jsx)(Chunk481060.zJl, {
          className: Chunk616926.scroller,
          children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
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
              children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
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
                onChange: e => b(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Select Plan",
                onClick: () => (0, Chunk963249.Z)({
                  subscriptionTier: require,
                  analyticsLocations: Y
                })
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
                label: "Boost",
                value: M,
                options: x,
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
                  value: U,
                  onChange: e => G(e)
                }), (0, Chunk54381.jsx)(Chunk481060.aML, {
                  "data-migration-pending": true,
                  text: "Need Promotion Code",
                  shouldShow: U.length < 1,
                  children: e => (0, r.jsx)(u.Button, L(D({
                    variant: "primary",
                    text: "Open Link",
                    disabled: U.length < 1
                  }, e), {
                    onClick: () => {
                      window.open(N.Z5c.BILLING_PROMOTION_REDEMPTION(U))
                    }
                  }))
                })]
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
              label: "Standalone: Gift/Subscription Purchase",
              children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
                label: "Plan",
                value: Z.plan_id,
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
              }), (0, Chunk54381.jsx)(Chunk199849.y6, {
                label: "Type",
                value: Z.gift,
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
              shouldShow: F,
              children: e => (0, r.jsx)(u.Button, L(D({
                variant: "primary",
                text: "Open Link"
              }, e), {
                disabled: F,
                onClick: () => {
                  window.open(N.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(D({}, Z)))
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
                  className: Chunk616926.loader,
                  children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
                    type: Chunk481060.RAz.SPINNING_CIRCLE
                  })
                }) : (0, Chunk54381.jsxs)("div", {
                  className: Chunk616926.balanceWidgetPillContainer,
                  children: [null !== J && (0, Chunk54381.jsxs)(Chunk481060.Text, {
                    variant: "text-sm/normal",
                    children: ["Error fetching Virtual Currency Balance: ", J.message]
                  }), (0, Chunk54381.jsx)(Chunk970815.A4, {
                    balance: null != Q ? Q : 0,
                    balanceWidgetMode: Chunk970815.b6.SELECTED
                  })]
                })]
              }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                label: "SKU ID",
                placeholder: "SKU ID",
                value: en,
                onChange: e => er(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Redeem Virtual Currency for SKU",
                loading: $,
                onClick: () => et(en, (0, Chunk772848.Z)())
              }), null != ee && (0, Chunk54381.jsx)(Chunk481060.Text, {
                variant: "text-sm/normal",
                children: ee
              })]
            }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
              label: "Creator Revenue",
              children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
                label: "Premium Server Subscription For",
                value: V,
                options: x,
                onChange: e => H(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Text, {
                variant: "text-md/semibold",
                children: "This is disabled because of a circular dependency"
              }), (0, Chunk54381.jsx)(Chunk730647.l, {
                guildId: null == V ? true : V.id,
                children: (0, Chunk54381.jsx)(j, {
                  selectedGuildForGuildSub: V
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
                  onChange: K
                }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                  label: "Sku Id",
                  placeholder: "Sku Id",
                  value: z,
                  onChange: e => q(e)
                })]
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Open App Subs Modal for Activity",
                onClick: () => (0, Chunk72924.S)({
                  applicationId: W,
                  skuId: z,
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
                    value: ei,
                    onChange: ea
                  }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                    label: "SKU ID",
                    hideLabel: true,
                    placeholder: "SKU ID",
                    value: eo,
                    onChange: e => es(e)
                  }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                    variant: "primary",
                    text: "Open Standard Payment Modal for SKU",
                    onClick: () => (0, Chunk87484.Z)({
                      applicationId: ei,
                      skuId: eo,
                      analyticsLocations: Y
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