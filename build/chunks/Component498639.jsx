/** Chunk was on web.js **/
/** chunk id: 498639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk311570 = require("./311570.js"),
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
  Chunk333867 = require("./333867.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk87484 = require("./87484.jsx"),
  Chunk736519 = require("./736519.jsx"),
  Chunk365943 = require("./365943.js"),
  Chunk43747 = require("./43747.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk78839 = require("./78839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk680375 = require("./680375.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, b.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, r.jsx)("div", {
    className: D.formItem,
    children: n.subscription_listings_ids.map(e => (0, r.jsx)(y.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let U = function() {
  let [e, t] = Chunk647438.useState(Chunk474936.Si.TIER_2), [n, b] = Chunk647438.useState(null), y = (0, Chunk442837.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildsArray()), [x] = (0, Chunk442837.Wu)([Chunk78839.Z], () => [Chunk78839.Z.getPremiumSubscription()]);
  Chunk647438.useEffect(() => {
    (0, Chunk365943.t)()
  }, []);
  let j = Chunk305342.map(e => ({
      value: e,
      label: e.name
    })),
    [U, G] = Chunk647438.useState(j.length > 0 ? j[0].value : null),
    [B, Z] = Chunk647438.useState(""),
    [F, V] = Chunk647438.useState({
      plan_id: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
      gift: "true"
    }),
    H = "true" !== F.gift && null != x,
    [Y, W] = Chunk647438.useState(j.length > 0 ? j[0].value : null),
    {
      analyticsLocations: K
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE),
    [z, q] = Chunk647438.useState(""),
    [X, Q] = Chunk647438.useState(Chunk981631.lds),
    {
      balance: J,
      isFetching: $,
      error: ee
    } = (0, Chunk43747.A)(),
    {
      isSubmitting: et,
      responseMessage: en,
      redeemVirtualCurrency: er
    } = (0, Chunk43747.f)(),
    [ei, ea] = Chunk647438.useState(Chunk981631.lds),
    [eo, es] = Chunk647438.useState(""),
    [el, ec] = Chunk647438.useState(Chunk981631.lds),
    [eu, ed] = Chunk647438.useState(Chunk981631.lds);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: K,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Payment Flow Modals",
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Gift"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
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
          }), (0, Chunk951288.jsx)(Chunk736519.Z, {
            subscriptionTier: module,
            premiumModalAnalyticsLocation: {},
            color: Chunk755721.Tt.PRIMARY,
            look: Chunk755721.iL.FILLED
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Premium Select Plan"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
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
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Select Plan",
            onClick: () => (0, Chunk963249.Z)({
              subscriptionTier: require,
              analyticsLocations: K
            })
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Boost"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: U,
            options: j,
            onChange: e => G(e)
          }), null != U ? (0, Chunk951288.jsx)(Chunk678558.Z, {
            guild: U,
            analyticsLocation: {}
          }) : (0, Chunk951288.jsx)("div", {
            children: "No Guild to boost"
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsxs)(Chunk481060.vwX, {
          children: [(0, Chunk951288.jsx)("div", {
            children: "Standalone: Trial Promotion Redemption"
          }), (0, Chunk951288.jsx)(Chunk481060.eee, {
            href: "https://i.dis.gd/createPromo",
            children: "How to create promotion"
          })]
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "Promotion Code",
            value: B,
            onChange: e => Z(e)
          }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
            text: "Need Promotion Code",
            shouldShow: B.length < 1,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(u.zxk, {
                variant: "primary",
                text: "Open Link",
                disabled: B.length < 1,
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: () => {
                  window.open(P.Z5c.BILLING_PROMOTION_REDEMPTION(B))
                }
              })
            }
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Standalone: Gift/Subscription Purchase"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: F.plan_id,
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
            onChange: e => V(t => M(L({}, t), {
              plan_id: e
            }))
          }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: F.gift,
            options: [{
              value: "true",
              label: "Gift"
            }, {
              value: "false",
              label: "Not Gift"
            }],
            onChange: e => V(t => M(L({}, t), {
              gift: e
            }))
          }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
            text: "Already subscribed",
            shouldShow: H,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(u.zxk, {
                variant: "primary",
                text: "Open Link",
                onMouseLeave: n,
                onMouseEnter: t,
                disabled: H,
                onClick: () => {
                  window.open(P.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(L({}, F)))
                }
              })
            }
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Redeem Virtual Currency for SKU"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: "Virtual Currency Balance:"
          }), $ ? (0, Chunk951288.jsx)("div", {
            className: Chunk680375.loader,
            children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
              type: Chunk481060.RAz.SPINNING_CIRCLE
            })
          }) : (0, Chunk951288.jsxs)("div", {
            className: Chunk680375.balanceWidgetPillContainer,
            children: [null !== ee && (0, Chunk951288.jsxs)(Chunk481060.Text, {
              variant: "text-sm/normal",
              children: ["Error fetching Virtual Currency Balance: ", ee.message]
            }), (0, Chunk951288.jsx)(Chunk970815.A4, {
              balance: null != J ? J : 0,
              balanceWidgetMode: Chunk970815.b6.SELECTED
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: (0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "SKU ID",
            value: ei,
            onChange: e => ea(e)
          })
        }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Redeem Virtual Currency for SKU",
            loading: et,
            onClick: () => er(ei, (0, Chunk772848.Z)())
          })
        }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: en
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Creator Revenue"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            className: Chunk680375.guildServerDescription,
            variant: "text-sm/normal",
            children: "Premium Server Subscription For"
          }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: Y,
            options: j,
            onChange: e => W(e)
          })]
        }), (0, Chunk951288.jsx)(Chunk730647.l, {
          guildId: null == Y ? true : Y.id,
          children: (0, Chunk951288.jsx)(k, {
            selectedGuildForGuildSub: Y
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Activities & Application Payment Modals"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "Application Id",
            value: z,
            onChange: q
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "Sku Id",
            value: X,
            onChange: e => Q(e)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open App Subs Modal for Activity",
            onClick: () => (0, Chunk72924.S)({
              applicationId: z,
              skuId: X,
              openPremiumPaymentModal: () => true,
              analyticsLocations: [],
              analyticsLocationObject: {
                page: Chunk981631.ZY5.IN_APP
              },
              context: Chunk981631.IlC.APP
            })
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Standard Payment Modal Test"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "Application Id",
            value: eo,
            onChange: es
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "SKU ID",
            value: el,
            onChange: e => ec(e)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open Standard Payment Modal for SKU",
            onClick: () => (0, Chunk87484.Z)({
              applicationId: eo,
              skuId: el,
              analyticsLocations: K
            })
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Collectibles Payment Modal Test"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "SKU ID",
            value: eu,
            onChange: e => ed(e)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open Collectibles Payment Modal for SKU",
            onClick: () => (0, Chunk333867.Z)({
              skuId: eu,
              analyticsLocations: K,
              variantsReturnStyle: Chunk311570.v.VARIANTS_GROUP
            })
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Helpers"
        }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Reset SubscriptionPlanStore",
            onClick: () => (0, Chunk821849.mE)()
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Reset SubscriptionStore",
            onClick: () => (0, Chunk355467.GM)()
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk680375.formDivider
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk680375.formBlock,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Dismissible Content Framework"
        }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
          className: Chunk680375.formItem,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Reset DismissibleContentFrameworkStore",
            onClick: () => (0, Chunk883904.EG)()
          })
        })]
      })]
    })
  })
}