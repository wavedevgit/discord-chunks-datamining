/** Chunk was on 5588 **/
/** chunk id: 778648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
  Chunk43747 = require("./43747.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk78839 = require("./78839.js"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk443582 = require("./443582.js");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, v.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, a.jsx)("div", {
    className: w.formItem,
    children: n.subscription_listings_ids.map(e => (0, a.jsx)(j.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let D = function() {
  let [e, t] = Chunk647438.useState(Chunk474936.Si.TIER_2), [n, v] = Chunk647438.useState(null), j = (0, Chunk442837.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildsArray()), [D] = (0, Chunk442837.Wu)([Chunk78839.Z], () => [Chunk78839.Z.getPremiumSubscription()]), L = Chunk305342.map(e => ({
    value: e,
    label: e.name
  })), [M, U] = Chunk647438.useState(L.length > 0 ? L[0].value : null), [F, G] = Chunk647438.useState(""), [B, z] = Chunk647438.useState({
    plan_id: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
    gift: "true"
  }), V = "true" !== B.gift && null != D, [H, W] = Chunk647438.useState(L.length > 0 ? L[0].value : null), {
    analyticsLocations: K
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE), [q, Y] = Chunk647438.useState(""), [X, J] = Chunk647438.useState(Chunk981631.lds), {
    balance: Q,
    isFetching: $,
    error: ee
  } = (0, Chunk43747.A)(), {
    isSubmitting: et,
    responseMessage: en,
    redeemVirtualCurrency: ea
  } = (0, Chunk43747.f)(), [er, ei] = Chunk647438.useState(Chunk981631.lds), [el, es] = Chunk647438.useState(""), [eo, ec] = Chunk647438.useState(Chunk981631.lds), [ed, eu] = Chunk647438.useState(Chunk981631.lds);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: K,
    children: (0, Chunk951288.jsx)(Chunk481060.zJl, {
      className: Chunk443582.scroller,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        title: "Payment Flow Modals",
        tag: Chunk481060.RB0.H1,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Gift"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
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
              onChange: e => t(e),
              popoutLayerContext: Chunk246992.O$
            }), (0, Chunk951288.jsx)(Chunk736519.Z, {
              subscriptionTier: module,
              premiumModalAnalyticsLocation: {},
              color: Chunk755721.Tt.PRIMARY,
              look: Chunk755721.iL.FILLED
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Premium Select Plan"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
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
              onChange: e => v(e),
              popoutLayerContext: Chunk246992.O$
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Select Plan",
              onClick: () => (0, Chunk963249.Z)({
                subscriptionTier: require,
                analyticsLocations: K
              })
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Boost"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
              value: M,
              options: L,
              onChange: e => U(e),
              popoutLayerContext: Chunk246992.O$
            }), null != M ? (0, Chunk951288.jsx)(Chunk678558.Z, {
              guild: M,
              analyticsLocation: {}
            }) : (0, Chunk951288.jsx)("div", {
              children: "No Guild to boost"
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsxs)(Chunk481060.vwX, {
            children: [(0, Chunk951288.jsx)("div", {
              children: "Standalone: Trial Promotion Redemption"
            }), (0, Chunk951288.jsx)(Chunk481060.eee, {
              href: "https://i.dis.gd/createPromo",
              children: "How to create promotion"
            })]
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "Promotion Code",
              value: F,
              onChange: e => G(e)
            }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
              text: "Need Promotion Code",
              shouldShow: F.length < 1,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, a.jsx)(d.zxk, {
                  variant: "primary",
                  text: "Open Link",
                  disabled: F.length < 1,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onClick: () => {
                    window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(F))
                  }
                })
              }
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Standalone: Gift/Subscription Purchase"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
              value: B.plan_id,
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
              onChange: e => z(t => A(R({}, t), {
                plan_id: e
              })),
              popoutLayerContext: Chunk246992.O$
            }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
              value: B.gift,
              options: [{
                value: "true",
                label: "Gift"
              }, {
                value: "false",
                label: "Not Gift"
              }],
              onChange: e => z(t => A(R({}, t), {
                gift: e
              })),
              popoutLayerContext: Chunk246992.O$
            }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
              text: "Already subscribed",
              shouldShow: V,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, a.jsx)(d.zxk, {
                  variant: "primary",
                  text: "Open Link",
                  onMouseLeave: n,
                  onMouseEnter: t,
                  disabled: V,
                  onClick: () => {
                    window.open(k.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(R({}, B)))
                  }
                })
              }
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Redeem Virtual Currency for SKU"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-sm/normal",
              children: "Virtual Currency Balance:"
            }), $ ? (0, Chunk951288.jsx)("div", {
              className: Chunk443582.loader,
              children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
                type: Chunk481060.RAz.SPINNING_CIRCLE
              })
            }) : (0, Chunk951288.jsxs)("div", {
              className: Chunk443582.balanceWidgetPillContainer,
              children: [null !== ee && (0, Chunk951288.jsxs)(Chunk481060.Text, {
                variant: "text-sm/normal",
                children: ["Error fetching Virtual Currency Balance: ", ee.message]
              }), (0, Chunk951288.jsx)(Chunk970815.A4, {
                balance: null != Q ? Q : 0,
                balanceWidgetMode: Chunk970815.b6.SELECTED
              })]
            })]
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk443582.formItem,
            children: (0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "SKU ID",
              value: er,
              onChange: e => ei(e)
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk443582.formItem,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Redeem Virtual Currency for SKU",
              loading: et,
              onClick: () => ea(er, (0, Chunk772848.Z)())
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk443582.formItem,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-sm/normal",
              children: en
            })
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Creator Revenue"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
              className: Chunk443582.guildServerDescription,
              variant: "text-sm/normal",
              children: "Premium Server Subscription For"
            }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
              value: H,
              options: L,
              onChange: e => W(e),
              popoutLayerContext: Chunk246992.O$
            })]
          }), (0, Chunk951288.jsx)(Chunk730647.l, {
            guildId: null == H ? true : H.id,
            children: (0, Chunk951288.jsx)(Z, {
              selectedGuildForGuildSub: H
            })
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Activities & Application Payment Modals"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "Application Id",
              value: q,
              onChange: Y
            }), (0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "Sku Id",
              value: X,
              onChange: e => J(e)
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Open App Subs Modal for Activity",
              onClick: () => (0, Chunk72924.S)({
                applicationId: q,
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
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Standard Payment Modal Test"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "Application Id",
              value: el,
              onChange: es
            }), (0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "SKU ID",
              value: eo,
              onChange: e => ec(e)
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Open Standard Payment Modal for SKU",
              onClick: () => (0, Chunk87484.Z)({
                applicationId: el,
                skuId: eo,
                analyticsLocations: K
              })
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Collectibles Payment Modal Test"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              placeholder: "SKU ID",
              value: ed,
              onChange: e => eu(e)
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Open Collectibles Payment Modal for SKU",
              onClick: () => (0, Chunk333867.Z)({
                skuId: ed,
                analyticsLocations: K,
                variantsReturnStyle: Chunk311570.v.VARIANTS_GROUP
              })
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Helpers"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk443582.formItem,
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
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk443582.formDivider
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk443582.formBlock,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Dismissible Content Framework"
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk443582.formItem,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Reset DismissibleContentFrameworkStore",
              onClick: () => (0, Chunk883904.EG)()
            })
          })]
        })]
      })
    })
  })
}