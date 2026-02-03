/** Chunk was on web.js **/
/** chunk id: 473106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk488428 = require("./488428.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk86980 = require("./86980.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk541689 = require("./541689.js"),
  Chunk721923 = require("./721923.jsx"),
  Chunk300233 = require("./300233.jsx"),
  Chunk599941 = require("./599941.js"),
  Chunk250253 = require("./250253.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk216678 = require("./216678.jsx"),
  Chunk194509 = require("./194509.jsx"),
  Chunk761705 = require("./761705.js"),
  Chunk448362 = require("./448362.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk166403 = require("./166403.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk749226 = require("./749226.js");

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

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, y.uk)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, r.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, r.jsx)(b.A, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let j = {
  title: "Checkout",
  stories: [{
    name: "Checkout Test Panel",
    id: "checkout-test-panel",
    component: () => {
      let [e, t] = i.useState(w.pe.TIER_2), [n, y] = i.useState(null), b = (0, s.yK)([T.A], () => T.A.getGuildsArray()), [P] = (0, s.yK)([C.A], () => [C.A.getPremiumSubscription()]), L = b.map(e => ({
        id: e.id,
        value: e,
        label: e.name
      })), [j, k] = i.useState(L.length > 0 ? L[0].value : null), [U, G] = i.useState(""), [F, V] = i.useState({
        plan_id: w.gD.PREMIUM_MONTH_TIER_2,
        gift: "true"
      }), B = "true" !== F.gift && null != P, [H, Y] = i.useState(L.length > 0 ? L[0].value : null), {
        analyticsLocations: W
      } = (0, h.Ay)(_.A.PAYMENT_FLOW_TEST_PAGE), [K, z] = i.useState(""), [q, Z] = i.useState(N.dJq), {
        balance: Q,
        isFetching: X,
        error: J
      } = (0, I.W)(), {
        isSubmitting: $,
        responseMessage: ee,
        redeemVirtualCurrency: et
      } = (0, I.Q)(), [en, er] = i.useState(N.dJq), [ei, ea] = i.useState(""), [eo, es] = i.useState(N.dJq);
      return (0, r.jsx)(h.f5, {
        value: W,
        children: (0, r.jsx)(u.IpV, {
          className: R.XG,
          children: (0, r.jsxs)(u.BJc, {
            direction: "vertical",
            gap: 24,
            children: [(0, r.jsxs)(u.BJc, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, r.jsx)(u.l6P, {
                label: "Gift",
                value: e,
                options: [{
                  id: "tier_2",
                  value: w.pe.TIER_2,
                  label: "Nitro"
                }, {
                  id: "tier_1",
                  value: w.pe.TIER_1,
                  label: "Nitro Classic"
                }, {
                  id: "tier_0",
                  value: w.pe.TIER_0,
                  label: "Nitro Basic"
                }, {
                  id: "none",
                  value: null,
                  label: "None"
                }],
                onSelectionChange: e => t(e),
                selectionMode: "single",
                fullWidth: true
              }), (0, r.jsx)(A.A, {
                subscriptionTier: e,
                premiumModalAnalyticsLocation: {},
                color: c.XD.PRIMARY,
                look: c.pR.FILLED
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.BJc, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, r.jsx)(u.l6P, {
                label: "Premium Select Plan",
                value: n,
                options: [{
                  id: "tier_2",
                  value: w.pe.TIER_2,
                  label: "Nitro"
                }, {
                  id: "tier_1",
                  value: w.pe.TIER_1,
                  label: "Nitro Classic"
                }, {
                  id: "tier_0",
                  value: w.pe.TIER_0,
                  label: "Nitro Basic"
                }, {
                  id: "none",
                  value: null,
                  label: "None"
                }],
                onSelectionChange: e => y(e),
                selectionMode: "single",
                fullWidth: true
              }), (0, r.jsx)(u.Button, {
                variant: "primary",
                text: "Select Plan",
                onClick: () => (0, O.A)({
                  subscriptionTier: n,
                  analyticsLocations: W
                })
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.BJc, {
              direction: "vertical",
              gap: 8,
              children: [(0, r.jsx)(u.l6P, {
                label: "Boost",
                value: j,
                options: L,
                onSelectionChange: k,
                selectionMode: "single",
                fullWidth: true
              }), null != j ? (0, r.jsx)(g.A, {
                guild: j,
                analyticsLocation: {}
              }) : (0, r.jsx)("div", {
                children: "No Guild to boost"
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.BJc, {
              direction: "vertical",
              gap: 8,
              children: [(0, r.jsx)(u.MzZ, {
                href: "https://i.dis.gd/createPromo",
                children: "How to create promotion"
              }), (0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, r.jsx)(u.ksK, {
                  label: "Standalone: Trial Promotion Redemption",
                  placeholder: "Promotion Code",
                  value: U,
                  onChange: e => G(e)
                }), (0, r.jsx)(l.m_, {
                  text: "Need Promotion Code",
                  shouldShow: U.length < 1,
                  children: (0, r.jsx)(u.Button, {
                    variant: "primary",
                    text: "Open Link",
                    disabled: U.length < 1,
                    onClick: () => {
                      window.open(N.BVt.BILLING_PROMOTION_REDEMPTION(U))
                    }
                  })
                })]
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.nVY, {
              label: "Standalone: Gift/Subscription Purchase",
              children: [(0, r.jsx)(u.l6P, {
                label: "Plan",
                value: F.plan_id,
                options: [{
                  id: "tier_2",
                  value: w.gD.PREMIUM_MONTH_TIER_2,
                  label: "Nitro"
                }, {
                  id: "tier_1",
                  value: w.gD.PREMIUM_MONTH_TIER_1,
                  label: "Nitro Classic"
                }, {
                  id: "tier_0",
                  value: w.gD.PREMIUM_MONTH_TIER_0,
                  label: "Nitro Basic"
                }],
                onSelectionChange: e => {
                  V(t => x(D({}, t), {
                    plan_id: e
                  }))
                },
                selectionMode: "single",
                fullWidth: true
              }), (0, r.jsx)(u.l6P, {
                label: "Type",
                value: F.gift,
                options: [{
                  id: "gift",
                  value: "true",
                  label: "Gift"
                }, {
                  id: "not_gift",
                  value: "false",
                  label: "Not Gift"
                }],
                onSelectionChange: e => {
                  V(t => x(D({}, t), {
                    gift: e
                  }))
                },
                selectionMode: "single",
                fullWidth: true
              })]
            }), (0, r.jsx)(l.m_, {
              text: "Already subscribed",
              shouldShow: B,
              children: (0, r.jsx)(u.Button, {
                variant: "primary",
                text: "Open Link",
                disabled: B,
                onClick: () => {
                  window.open(N.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(D({}, F)))
                }
              })
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.nVY, {
              label: "Redeem Virtual Currency for SKU",
              children: [(0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children: "Virtual Currency Balance:"
                }), X ? (0, r.jsx)("div", {
                  className: R.wG,
                  children: (0, r.jsx)(u.y$y, {
                    type: u.tVU.SPINNING_CIRCLE
                  })
                }) : (0, r.jsxs)("div", {
                  className: R.dB,
                  children: [null !== J && (0, r.jsxs)(u.Text, {
                    variant: "text-sm/normal",
                    children: ["Error fetching Virtual Currency Balance: ", J.message]
                  }), (0, r.jsx)(S.Gy, {
                    balance: null != Q ? Q : 0,
                    balanceWidgetMode: S.k7.SELECTED
                  })]
                })]
              }), (0, r.jsx)(u.ksK, {
                label: "SKU ID",
                placeholder: "SKU ID",
                value: en,
                onChange: e => er(e)
              }), (0, r.jsx)(u.Button, {
                variant: "primary",
                text: "Redeem Virtual Currency for SKU",
                loading: $,
                onClick: () => et(en, (0, o.A)())
              }), null != ee && (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: ee
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.nVY, {
              label: "Creator Revenue",
              children: [(0, r.jsx)(u.l6P, {
                label: "Premium Server Subscription For",
                value: H,
                options: L,
                onSelectionChange: Y,
                selectionMode: "single",
                fullWidth: true
              }), (0, r.jsx)(u.Text, {
                variant: "text-md/semibold",
                children: "This is disabled because of a circular dependency"
              }), (0, r.jsx)(E.H, {
                guildId: null == H ? true : H.id,
                children: (0, r.jsx)(M, {
                  selectedGuildForGuildSub: H
                })
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsxs)(u.BJc, {
              direction: "vertical",
              gap: 8,
              children: [(0, r.jsxs)(u.nVY, {
                label: "Activities & Application Payment Modals",
                children: [(0, r.jsx)(u.ksK, {
                  label: "Application Id",
                  placeholder: "Application Id",
                  value: K,
                  onChange: z
                }), (0, r.jsx)(u.ksK, {
                  label: "Sku Id",
                  placeholder: "Sku Id",
                  value: q,
                  onChange: e => Z(e)
                })]
              }), (0, r.jsx)(u.Button, {
                variant: "primary",
                text: "Open App Subs Modal for Activity",
                onClick: () => (0, p.j)({
                  applicationId: K,
                  skuId: q,
                  openPremiumPaymentModal: () => true,
                  analyticsLocations: [],
                  analyticsLocationObject: {
                    page: N.liQ.IN_APP
                  },
                  context: N.BRT.APP
                })
              })]
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsx)(u.BJc, {
              direction: "vertical",
              gap: 8,
              children: (0, r.jsx)(u.nVY, {
                label: "Standard Payment Modal Test",
                children: (0, r.jsxs)(u.BJc, {
                  direction: "horizontal",
                  gap: 8,
                  align: "end",
                  children: [(0, r.jsx)(u.ksK, {
                    label: "Application Id",
                    hideLabel: true,
                    placeholder: "Application Id",
                    value: ei,
                    onChange: ea
                  }), (0, r.jsx)(u.ksK, {
                    label: "SKU ID",
                    hideLabel: true,
                    placeholder: "SKU ID",
                    value: eo,
                    onChange: e => es(e)
                  }), (0, r.jsx)(u.Button, {
                    variant: "primary",
                    text: "Open Standard Payment Modal for SKU",
                    onClick: () => (0, v.A)({
                      applicationId: ei,
                      skuId: eo,
                      analyticsLocations: W
                    })
                  })]
                })
              })
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsx)(u.nVY, {
              label: "Helpers",
              children: (0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, r.jsx)(u.Button, {
                  variant: "primary",
                  text: "Reset SubscriptionPlanStore",
                  onClick: () => (0, f.YG)()
                }), (0, r.jsx)(u.Button, {
                  variant: "primary",
                  text: "Reset SubscriptionStore",
                  onClick: () => (0, d.uZ)()
                })]
              })
            }), (0, r.jsx)(u.cGx, {}), (0, r.jsx)(u.nVY, {
              label: "Dismissible Content Framework",
              children: (0, r.jsx)(u.Button, {
                variant: "primary",
                text: "Reset DismissibleContentFrameworkStore",
                onClick: () => (0, m.Ab)()
              })
            })]
          })
        })
      })
    },
    controls: {}
  }]
}