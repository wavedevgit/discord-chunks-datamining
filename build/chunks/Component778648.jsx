/** Chunk was on 22979 **/
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
  } = e, n = (0, y.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, a.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, a.jsx)(C.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let M = function() {
  let [e, t] = r.useState(R.Si.TIER_2), [n, y] = r.useState(null), C = (0, o.Wu)([P.Z], () => P.Z.getGuildsArray()), [M] = (0, o.Wu)([w.Z], () => [w.Z.getPremiumSubscription()]), U = C.map(e => ({
    value: e,
    label: e.name
  })), [B, F] = r.useState(U.length > 0 ? U[0].value : null), [G, V] = r.useState(""), [z, H] = r.useState({
    plan_id: R.Xh.PREMIUM_MONTH_TIER_2,
    gift: "true"
  }), W = "true" !== z.gift && null != M, [K, q] = r.useState(U.length > 0 ? U[0].value : null), {
    analyticsLocations: Y
  } = (0, b.ZP)(x.Z.PAYMENT_FLOW_TEST_PAGE), [Q, X] = r.useState(""), [J, $] = r.useState(k.lds), {
    balance: ee,
    isFetching: et,
    error: en
  } = (0, O.A)(), {
    isSubmitting: ea,
    responseMessage: er,
    redeemVirtualCurrency: ei
  } = (0, O.f)(), [el, es] = r.useState(k.lds), [eo, ec] = r.useState(""), [ed, eu] = r.useState(k.lds), [em, ep] = r.useState(k.lds);
  return (0, a.jsx)(b.Gt, {
    value: Y,
    children: (0, a.jsx)(m.zJl, {
      className: A.scroller,
      children: (0, a.jsxs)(m.Kqy, {
        direction: "vertical",
        gap: 24,
        children: [(0, a.jsxs)(m.Kqy, {
          direction: "horizontal",
          gap: 8,
          align: "end",
          children: [(0, a.jsx)(c.y6, {
            label: "Gift",
            value: e,
            options: [{
              value: R.Si.TIER_2,
              label: "Nitro"
            }, {
              value: R.Si.TIER_1,
              label: "Nitro Classic"
            }, {
              value: R.Si.TIER_0,
              label: "Nitro Basic"
            }, {
              value: null,
              label: "None"
            }],
            onChange: e => t(e),
            popoutLayerContext: I.O$
          }), (0, a.jsx)(T.Z, {
            subscriptionTier: e,
            premiumModalAnalyticsLocation: {},
            color: u.Tt.PRIMARY,
            look: u.iL.FILLED
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.Kqy, {
          direction: "horizontal",
          gap: 8,
          align: "end",
          children: [(0, a.jsx)(c.y6, {
            label: "Premium Select Plan",
            value: n,
            options: [{
              value: R.Si.TIER_2,
              label: "Nitro"
            }, {
              value: R.Si.TIER_1,
              label: "Nitro Classic"
            }, {
              value: R.Si.TIER_0,
              label: "Nitro Basic"
            }, {
              value: null,
              label: "None"
            }],
            onChange: e => y(e),
            popoutLayerContext: I.O$
          }), (0, a.jsx)(m.Button, {
            variant: "primary",
            text: "Select Plan",
            onClick: () => (0, S.Z)({
              subscriptionTier: n,
              analyticsLocations: Y
            })
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsx)(c.y6, {
            label: "Boost",
            value: B,
            options: U,
            onChange: e => F(e),
            popoutLayerContext: I.O$
          }), null != B ? (0, a.jsx)(v.Z, {
            guild: B,
            analyticsLocation: {}
          }) : (0, a.jsx)("div", {
            children: "No Guild to boost"
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsx)(m.eee, {
            href: "https://i.dis.gd/createPromo",
            children: "How to create promotion"
          }), (0, a.jsxs)(m.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(m.oil, {
              label: "Standalone: Trial Promotion Redemption",
              placeholder: "Promotion Code",
              value: G,
              onChange: e => V(e)
            }), (0, a.jsx)(d.u, {
              text: "Need Promotion Code",
              shouldShow: G.length < 1,
              children: (0, a.jsx)(m.Button, {
                variant: "primary",
                text: "Open Link",
                disabled: G.length < 1,
                onClick: () => {
                  window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(G))
                }
              })
            })]
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.C3N, {
          label: "Standalone: Gift/Subscription Purchase",
          children: [(0, a.jsx)(c.y6, {
            label: "Plan",
            value: z.plan_id,
            options: [{
              value: R.Xh.PREMIUM_MONTH_TIER_2,
              label: "Nitro"
            }, {
              value: R.Xh.PREMIUM_MONTH_TIER_1,
              label: "Nitro Classic"
            }, {
              value: R.Xh.PREMIUM_MONTH_TIER_0,
              label: "Nitro Basic"
            }],
            onChange: e => H(t => Z(D({}, t), {
              plan_id: e
            })),
            popoutLayerContext: I.O$
          }), (0, a.jsx)(c.y6, {
            label: "Type",
            value: z.gift,
            options: [{
              value: "true",
              label: "Gift"
            }, {
              value: "false",
              label: "Not Gift"
            }],
            onChange: e => H(t => Z(D({}, t), {
              gift: e
            })),
            popoutLayerContext: I.O$
          })]
        }), (0, a.jsx)(d.u, {
          text: "Already subscribed",
          shouldShow: W,
          children: (0, a.jsx)(m.Button, {
            variant: "primary",
            text: "Open Link",
            disabled: W,
            onClick: () => {
              window.open(k.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(D({}, z)))
            }
          })
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.C3N, {
          label: "Redeem Virtual Currency for SKU",
          children: [(0, a.jsxs)(m.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: "Virtual Currency Balance:"
            }), et ? (0, a.jsx)("div", {
              className: A.loader,
              children: (0, a.jsx)(m.$jN, {
                type: m.RAz.SPINNING_CIRCLE
              })
            }) : (0, a.jsxs)("div", {
              className: A.balanceWidgetPillContainer,
              children: [null !== en && (0, a.jsxs)(m.Text, {
                variant: "text-sm/normal",
                children: ["Error fetching Virtual Currency Balance: ", en.message]
              }), (0, a.jsx)(N.A4, {
                balance: null != ee ? ee : 0,
                balanceWidgetMode: N.b6.SELECTED
              })]
            })]
          }), (0, a.jsx)(m.oil, {
            label: "SKU ID",
            placeholder: "SKU ID",
            value: el,
            onChange: e => es(e)
          }), (0, a.jsx)(m.Button, {
            variant: "primary",
            text: "Redeem Virtual Currency for SKU",
            loading: ea,
            onClick: () => ei(el, (0, l.Z)())
          }), null != er && (0, a.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: er
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.C3N, {
          label: "Creator Revenue",
          children: [(0, a.jsx)(c.y6, {
            label: "Premium Server Subscription For",
            value: K,
            options: U,
            onChange: e => q(e),
            popoutLayerContext: I.O$
          }), (0, a.jsx)(j.l, {
            guildId: null == K ? true : K.id,
            children: (0, a.jsx)(L, {
              selectedGuildForGuildSub: K
            })
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsxs)(m.C3N, {
            label: "Activities & Application Payment Modals",
            children: [(0, a.jsx)(m.oil, {
              label: "Application Id",
              placeholder: "Application Id",
              value: Q,
              onChange: X
            }), (0, a.jsx)(m.oil, {
              label: "Sku Id",
              placeholder: "Sku Id",
              value: J,
              onChange: e => $(e)
            })]
          }), (0, a.jsx)(m.Button, {
            variant: "primary",
            text: "Open App Subs Modal for Activity",
            onClick: () => (0, f.S)({
              applicationId: Q,
              skuId: J,
              openPremiumPaymentModal: () => true,
              analyticsLocations: [],
              analyticsLocationObject: {
                page: k.ZY5.IN_APP
              },
              context: k.IlC.APP
            })
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsx)(m.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (0, a.jsx)(m.C3N, {
            label: "Standard Payment Modal Test",
            children: (0, a.jsxs)(m.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, a.jsx)(m.oil, {
                label: "Application Id",
                hideLabel: true,
                placeholder: "Application Id",
                value: eo,
                onChange: ec
              }), (0, a.jsx)(m.oil, {
                label: "SKU ID",
                hideLabel: true,
                placeholder: "SKU ID",
                value: ed,
                onChange: e => eu(e)
              }), (0, a.jsx)(m.Button, {
                variant: "primary",
                text: "Open Standard Payment Modal for SKU",
                onClick: () => (0, E.Z)({
                  applicationId: eo,
                  skuId: ed,
                  analyticsLocations: Y
                })
              })]
            })
          })
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsxs)(m.Kqy, {
          direction: "horizontal",
          align: "end",
          gap: 8,
          children: [(0, a.jsx)(m.oil, {
            label: "Collectibles Payment Modal Test",
            placeholder: "SKU ID",
            value: em,
            onChange: e => ep(e)
          }), (0, a.jsx)(m.Button, {
            variant: "primary",
            text: "Open Collectibles Payment Modal for SKU",
            onClick: () => (0, _.Z)({
              skuId: em,
              analyticsLocations: Y,
              variantsReturnStyle: s.v.VARIANTS_GROUP
            })
          })]
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsx)(m.C3N, {
          label: "Helpers",
          children: (0, a.jsxs)(m.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(m.Button, {
              variant: "primary",
              text: "Reset SubscriptionPlanStore",
              onClick: () => (0, h.mE)()
            }), (0, a.jsx)(m.Button, {
              variant: "primary",
              text: "Reset SubscriptionStore",
              onClick: () => (0, p.GM)()
            })]
          })
        }), (0, a.jsx)(m.izJ, {}), (0, a.jsx)(m.C3N, {
          label: "Dismissible Content Framework",
          children: (0, a.jsx)(m.Button, {
            variant: "primary",
            text: "Reset DismissibleContentFrameworkStore",
            onClick: () => (0, g.EG)()
          })
        })]
      })
    })
  })
}