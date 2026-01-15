/** Chunk was on web.js **/
/** chunk id: 690524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk681715 = require("./681715.js"),
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
  Chunk570810 = require("./570810.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, y.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, r.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, r.jsx)(O.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let k = {
  title: "Checkout",
  stories: [{
    name: "Checkout Test Panel",
    id: "checkout-test-panel",
    component: () => {
      let [e, t] = i.useState(w.Si.TIER_2), [n, y] = i.useState(null), O = (0, s.Wu)([A.Z], () => A.Z.getGuildsArray()), [D] = (0, s.Wu)([N.Z], () => [N.Z.getPremiumSubscription()]), L = O.map(e => ({
        value: e,
        label: e.name
      })), [k, U] = i.useState(L.length > 0 ? L[0].value : null), [G, Z] = i.useState(""), [F, B] = i.useState({
        plan_id: w.Xh.PREMIUM_MONTH_TIER_2,
        gift: "true"
      }), V = "true" !== F.gift && null != D, [H, Y] = i.useState(L.length > 0 ? L[0].value : null), {
        analyticsLocations: W
      } = (0, m.ZP)(h.Z.PAYMENT_FLOW_TEST_PAGE), [K, z] = i.useState(""), [q, Q] = i.useState(P.lds), {
        balance: X,
        isFetching: J,
        error: $
      } = (0, T.A)(), {
        isSubmitting: ee,
        responseMessage: et,
        redeemVirtualCurrency: en
      } = (0, T.f)(), [er, ei] = i.useState(P.lds), [ea, eo] = i.useState(""), [es, el] = i.useState(P.lds);
      return (0, r.jsx)(m.Gt, {
        value: W,
        children: (0, r.jsx)(d.zJl, {
          className: R.scroller,
          children: (0, r.jsxs)(d.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [(0, r.jsxs)(d.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, r.jsx)(l.y6, {
                label: "Gift",
                value: e,
                options: [{
                  value: w.Si.TIER_2,
                  label: "Nitro"
                }, {
                  value: w.Si.TIER_1,
                  label: "Nitro Classic"
                }, {
                  value: w.Si.TIER_0,
                  label: "Nitro Basic"
                }, {
                  value: null,
                  label: "None"
                }],
                onChange: e => t(e)
              }), (0, r.jsx)(I.Z, {
                subscriptionTier: e,
                premiumModalAnalyticsLocation: {},
                color: u.Tt.PRIMARY,
                look: u.iL.FILLED
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, r.jsx)(l.y6, {
                label: "Premium Select Plan",
                value: n,
                options: [{
                  value: w.Si.TIER_2,
                  label: "Nitro"
                }, {
                  value: w.Si.TIER_1,
                  label: "Nitro Classic"
                }, {
                  value: w.Si.TIER_0,
                  label: "Nitro Basic"
                }, {
                  value: null,
                  label: "None"
                }],
                onChange: e => y(e)
              }), (0, r.jsx)(d.Button, {
                variant: "primary",
                text: "Select Plan",
                onClick: () => (0, v.Z)({
                  subscriptionTier: n,
                  analyticsLocations: W
                })
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, r.jsx)(l.y6, {
                label: "Boost",
                value: k,
                options: L,
                onChange: e => U(e)
              }), null != k ? (0, r.jsx)(E.Z, {
                guild: k,
                analyticsLocation: {}
              }) : (0, r.jsx)("div", {
                children: "No Guild to boost"
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, r.jsx)(d.eee, {
                href: "https://i.dis.gd/createPromo",
                children: "How to create promotion"
              }), (0, r.jsxs)(d.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, r.jsx)(d.oil, {
                  label: "Standalone: Trial Promotion Redemption",
                  placeholder: "Promotion Code",
                  value: G,
                  onChange: e => Z(e)
                }), (0, r.jsx)(c.u, {
                  text: "Need Promotion Code",
                  shouldShow: G.length < 1,
                  children: (0, r.jsx)(d.Button, {
                    variant: "primary",
                    text: "Open Link",
                    disabled: G.length < 1,
                    onClick: () => {
                      window.open(P.Z5c.BILLING_PROMOTION_REDEMPTION(G))
                    }
                  })
                })]
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.C3N, {
              label: "Standalone: Gift/Subscription Purchase",
              children: [(0, r.jsx)(l.y6, {
                label: "Plan",
                value: F.plan_id,
                options: [{
                  value: w.Xh.PREMIUM_MONTH_TIER_2,
                  label: "Nitro"
                }, {
                  value: w.Xh.PREMIUM_MONTH_TIER_1,
                  label: "Nitro Classic"
                }, {
                  value: w.Xh.PREMIUM_MONTH_TIER_0,
                  label: "Nitro Basic"
                }],
                onChange: e => B(t => j(x({}, t), {
                  plan_id: e
                }))
              }), (0, r.jsx)(l.y6, {
                label: "Type",
                value: F.gift,
                options: [{
                  value: "true",
                  label: "Gift"
                }, {
                  value: "false",
                  label: "Not Gift"
                }],
                onChange: e => B(t => j(x({}, t), {
                  gift: e
                }))
              })]
            }), (0, r.jsx)(c.u, {
              text: "Already subscribed",
              shouldShow: V,
              children: (0, r.jsx)(d.Button, {
                variant: "primary",
                text: "Open Link",
                disabled: V,
                onClick: () => {
                  window.open(P.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(x({}, F)))
                }
              })
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.C3N, {
              label: "Redeem Virtual Currency for SKU",
              children: [(0, r.jsxs)(d.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: "Virtual Currency Balance:"
                }), J ? (0, r.jsx)("div", {
                  className: R.loader,
                  children: (0, r.jsx)(d.$jN, {
                    type: d.RAz.SPINNING_CIRCLE
                  })
                }) : (0, r.jsxs)("div", {
                  className: R.balanceWidgetPillContainer,
                  children: [null !== $ && (0, r.jsxs)(d.Text, {
                    variant: "text-sm/normal",
                    children: ["Error fetching Virtual Currency Balance: ", $.message]
                  }), (0, r.jsx)(C.A4, {
                    balance: null != X ? X : 0,
                    balanceWidgetMode: C.b6.SELECTED
                  })]
                })]
              }), (0, r.jsx)(d.oil, {
                label: "SKU ID",
                placeholder: "SKU ID",
                value: er,
                onChange: e => ei(e)
              }), (0, r.jsx)(d.Button, {
                variant: "primary",
                text: "Redeem Virtual Currency for SKU",
                loading: ee,
                onClick: () => en(er, (0, o.Z)())
              }), null != et && (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                children: et
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.C3N, {
              label: "Creator Revenue",
              children: [(0, r.jsx)(l.y6, {
                label: "Premium Server Subscription For",
                value: H,
                options: L,
                onChange: e => Y(e)
              }), (0, r.jsx)(d.Text, {
                variant: "text-md/semibold",
                children: "This is disabled because of a circular dependency"
              }), (0, r.jsx)(b.l, {
                guildId: null == H ? true : H.id,
                children: (0, r.jsx)(M, {
                  selectedGuildForGuildSub: H
                })
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsxs)(d.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [(0, r.jsxs)(d.C3N, {
                label: "Activities & Application Payment Modals",
                children: [(0, r.jsx)(d.oil, {
                  label: "Application Id",
                  placeholder: "Application Id",
                  value: K,
                  onChange: z
                }), (0, r.jsx)(d.oil, {
                  label: "Sku Id",
                  placeholder: "Sku Id",
                  value: q,
                  onChange: e => Q(e)
                })]
              }), (0, r.jsx)(d.Button, {
                variant: "primary",
                text: "Open App Subs Modal for Activity",
                onClick: () => (0, _.S)({
                  applicationId: K,
                  skuId: q,
                  openPremiumPaymentModal: () => true,
                  analyticsLocations: [],
                  analyticsLocationObject: {
                    page: P.ZY5.IN_APP
                  },
                  context: P.IlC.APP
                })
              })]
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsx)(d.Kqy, {
              direction: "vertical",
              gap: 8,
              children: (0, r.jsx)(d.C3N, {
                label: "Standard Payment Modal Test",
                children: (0, r.jsxs)(d.Kqy, {
                  direction: "horizontal",
                  gap: 8,
                  align: "end",
                  children: [(0, r.jsx)(d.oil, {
                    label: "Application Id",
                    hideLabel: true,
                    placeholder: "Application Id",
                    value: ea,
                    onChange: eo
                  }), (0, r.jsx)(d.oil, {
                    label: "SKU ID",
                    hideLabel: true,
                    placeholder: "SKU ID",
                    value: es,
                    onChange: e => el(e)
                  }), (0, r.jsx)(d.Button, {
                    variant: "primary",
                    text: "Open Standard Payment Modal for SKU",
                    onClick: () => (0, S.Z)({
                      applicationId: ea,
                      skuId: es,
                      analyticsLocations: W
                    })
                  })]
                })
              })
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsx)(d.C3N, {
              label: "Helpers",
              children: (0, r.jsxs)(d.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [(0, r.jsx)(d.Button, {
                  variant: "primary",
                  text: "Reset SubscriptionPlanStore",
                  onClick: () => (0, p.mE)()
                }), (0, r.jsx)(d.Button, {
                  variant: "primary",
                  text: "Reset SubscriptionStore",
                  onClick: () => (0, f.GM)()
                })]
              })
            }), (0, r.jsx)(d.izJ, {}), (0, r.jsx)(d.C3N, {
              label: "Dismissible Content Framework",
              children: (0, r.jsx)(d.Button, {
                variant: "primary",
                text: "Reset DismissibleContentFrameworkStore",
                onClick: () => (0, g.EG)()
              })
            })]
          })
        })
      })
    },
    controls: {}
  }]
}