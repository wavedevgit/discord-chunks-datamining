/** Chunk was on 6043 **/
/** chunk id: 778648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk311570 = require("./311570.js"),
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
  Chunk681510 = require("./681510.js");

function D(e) {
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

function Z(e, t) {
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

function L(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, C.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, a.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, a.jsx)(y.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let M = function() {
  let [e, t] = Chunk473749.useState(Chunk474936.Si.TIER_2), [n, C] = Chunk473749.useState(null), y = (0, Chunk442837.Wu)([Chunk430824.Z], () => Chunk430824.Z.getGuildsArray()), [M] = (0, Chunk442837.Wu)([Chunk78839.Z], () => [Chunk78839.Z.getPremiumSubscription()]), U = Chunk305342.map(e => ({
    value: e,
    label: e.name
  })), [B, F] = Chunk473749.useState(U.length > 0 ? U[0].value : null), [G, V] = Chunk473749.useState(""), [z, W] = Chunk473749.useState({
    plan_id: Chunk474936.Xh.PREMIUM_MONTH_TIER_2,
    gift: "true"
  }), H = "true" !== z.gift && null != M, [q, K] = Chunk473749.useState(U.length > 0 ? U[0].value : null), {
    analyticsLocations: Y
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE), [Q, X] = Chunk473749.useState(""), [J, $] = Chunk473749.useState(Chunk981631.lds), {
    balance: ee,
    isFetching: et,
    error: en
  } = (0, Chunk43747.A)(), {
    isSubmitting: ea,
    responseMessage: er,
    redeemVirtualCurrency: ei
  } = (0, Chunk43747.f)(), [el, es] = Chunk473749.useState(Chunk981631.lds), [eo, ec] = Chunk473749.useState(""), [ed, eu] = Chunk473749.useState(Chunk981631.lds), [em, ep] = Chunk473749.useState(Chunk981631.lds);
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: Y,
    children: (0, Chunk54381.jsx)(Chunk481060.zJl, {
      className: Chunk681510.scroller,
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
            onChange: e => t(e),
            popoutLayerContext: Chunk246992.O$
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
            onChange: e => C(e),
            popoutLayerContext: Chunk246992.O$
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
            value: B,
            options: U,
            onChange: e => F(e),
            popoutLayerContext: Chunk246992.O$
          }), null != B ? (0, Chunk54381.jsx)(Chunk678558.Z, {
            guild: B,
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
              value: G,
              onChange: e => V(e)
            }), (0, Chunk54381.jsx)(Chunk681715.u, {
              text: "Need Promotion Code",
              shouldShow: G.length < 1,
              children: (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Open Link",
                disabled: G.length < 1,
                onClick: () => {
                  window.open(Chunk981631.Z5c.BILLING_PROMOTION_REDEMPTION(G))
                }
              })
            })]
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
          label: "Standalone: Gift/Subscription Purchase",
          children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
            label: "Plan",
            value: z.plan_id,
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
            onChange: e => W(t => Z(D({}, t), {
              plan_id: e
            })),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk54381.jsx)(Chunk199849.y6, {
            label: "Type",
            value: z.gift,
            options: [{
              value: "true",
              label: "Gift"
            }, {
              value: "false",
              label: "Not Gift"
            }],
            onChange: e => W(t => Z(D({}, t), {
              gift: e
            })),
            popoutLayerContext: Chunk246992.O$
          })]
        }), (0, Chunk54381.jsx)(Chunk681715.u, {
          text: "Already subscribed",
          shouldShow: H,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open Link",
            disabled: H,
            onClick: () => {
              window.open(Chunk981631.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + Chunk664751.stringify(D({}, z)))
            }
          })
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
          label: "Redeem Virtual Currency for SKU",
          children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/normal",
              children: "Virtual Currency Balance:"
            }), et ? (0, Chunk54381.jsx)("div", {
              className: Chunk681510.loader,
              children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
                type: Chunk481060.RAz.SPINNING_CIRCLE
              })
            }) : (0, Chunk54381.jsxs)("div", {
              className: Chunk681510.balanceWidgetPillContainer,
              children: [null !== en && (0, Chunk54381.jsxs)(Chunk481060.Text, {
                variant: "text-sm/normal",
                children: ["Error fetching Virtual Currency Balance: ", en.message]
              }), (0, Chunk54381.jsx)(Chunk970815.A4, {
                balance: null != ee ? ee : 0,
                balanceWidgetMode: Chunk970815.b6.SELECTED
              })]
            })]
          }), (0, Chunk54381.jsx)(Chunk481060.oil, {
            label: "SKU ID",
            placeholder: "SKU ID",
            value: el,
            onChange: e => es(e)
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Redeem Virtual Currency for SKU",
            loading: ea,
            onClick: () => ei(el, (0, Chunk772848.Z)())
          }), null != er && (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: er
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
          label: "Creator Revenue",
          children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
            label: "Premium Server Subscription For",
            value: q,
            options: U,
            onChange: e => K(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk54381.jsx)(Chunk730647.l, {
            guildId: null == q ? true : q.id,
            children: (0, Chunk54381.jsx)(L, {
              selectedGuildForGuildSub: q
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
              value: Q,
              onChange: X
            }), (0, Chunk54381.jsx)(Chunk481060.oil, {
              label: "Sku Id",
              placeholder: "Sku Id",
              value: J,
              onChange: e => $(e)
            })]
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open App Subs Modal for Activity",
            onClick: () => (0, Chunk72924.S)({
              applicationId: Q,
              skuId: J,
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
                value: eo,
                onChange: ec
              }), (0, Chunk54381.jsx)(Chunk481060.oil, {
                label: "SKU ID",
                hideLabel: true,
                placeholder: "SKU ID",
                value: ed,
                onChange: e => eu(e)
              }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                variant: "primary",
                text: "Open Standard Payment Modal for SKU",
                onClick: () => (0, Chunk87484.Z)({
                  applicationId: eo,
                  skuId: ed,
                  analyticsLocations: Y
                })
              })]
            })
          })
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          direction: "horizontal",
          align: "end",
          gap: 8,
          children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
            label: "Collectibles Payment Modal Test",
            placeholder: "SKU ID",
            value: em,
            onChange: e => ep(e)
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open Collectibles Payment Modal for SKU",
            onClick: () => (0, Chunk333867.Z)({
              skuId: em,
              analyticsLocations: Y,
              variantsReturnStyle: Chunk311570.v.VARIANTS_GROUP
            })
          })]
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
}