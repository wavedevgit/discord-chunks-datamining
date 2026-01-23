/** Chunk was on 22477 **/
/** chunk id: 231207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk488428 = require("./488428.js"),
  Chunk835245 = require("./835245.js"),
  Chunk635358 = require("./635358.js"),
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
  Chunk44120 = require("./44120.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk216678 = require("./216678.jsx"),
  Chunk194509 = require("./194509.jsx"),
  Chunk761705 = require("./761705.js"),
  Chunk448362 = require("./448362.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk166403 = require("./166403.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk734399 = require("./734399.js");

function P(e) {
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

function R(e, t) {
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

function D(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, n = (0, j.uk)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, a.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, a.jsx)(_.A, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let M = function() {
  let [e, t] = l.useState(I.pe.TIER_2), [n, j] = l.useState(null), _ = (0, o.yK)([T.A], () => T.A.getGuildsArray()), [M] = (0, o.yK)([N.A], () => [N.A.getPremiumSubscription()]), L = _.map(e => ({
    id: e.id,
    value: e,
    label: e.name
  })), [U, B] = l.useState(L.length > 0 ? L[0].value : null), [G, F] = l.useState(""), [V, W] = l.useState({
    plan_id: I.gD.PREMIUM_MONTH_TIER_2,
    gift: "true"
  }), H = "true" !== V.gift && null != M, [K, z] = l.useState(L.length > 0 ? L[0].value : null), {
    analyticsLocations: q
  } = (0, g.Ay)(x.A.PAYMENT_FLOW_TEST_PAGE), [Q, Y] = l.useState(""), [J, X] = l.useState(w.dJq), {
    balance: Z,
    isFetching: $,
    error: ee
  } = (0, O.W)(), {
    isSubmitting: et,
    responseMessage: en,
    redeemVirtualCurrency: ea
  } = (0, O.Q)(), [el, er] = l.useState(w.dJq), [ei, es] = l.useState(""), [eo, ec] = l.useState(w.dJq), [ed, eu] = l.useState(w.dJq);
  return (0, a.jsx)(g.f5, {
    value: q,
    children: (0, a.jsx)(u.IpV, {
      className: k.XG,
      children: (0, a.jsxs)(u.BJc, {
        direction: "vertical",
        gap: 24,
        children: [(0, a.jsxs)(u.BJc, {
          direction: "horizontal",
          gap: 8,
          align: "end",
          children: [(0, a.jsx)(u.l6P, {
            label: "Gift",
            value: e,
            options: [{
              id: "tier_2",
              value: I.pe.TIER_2,
              label: "Nitro"
            }, {
              id: "tier_1",
              value: I.pe.TIER_1,
              label: "Nitro Classic"
            }, {
              id: "tier_0",
              value: I.pe.TIER_0,
              label: "Nitro Basic"
            }, {
              id: "none",
              value: null,
              label: "None"
            }],
            onSelectionChange: e => t(e),
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(S.A, {
            subscriptionTier: e,
            premiumModalAnalyticsLocation: {},
            color: d.XD.PRIMARY,
            look: d.pR.FILLED
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.BJc, {
          direction: "horizontal",
          gap: 8,
          align: "end",
          children: [(0, a.jsx)(u.l6P, {
            label: "Premium Select Plan",
            value: n,
            options: [{
              id: "tier_2",
              value: I.pe.TIER_2,
              label: "Nitro"
            }, {
              id: "tier_1",
              value: I.pe.TIER_1,
              label: "Nitro Classic"
            }, {
              id: "tier_0",
              value: I.pe.TIER_0,
              label: "Nitro Basic"
            }, {
              id: "none",
              value: null,
              label: "None"
            }],
            onSelectionChange: e => j(e),
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Select Plan",
            onClick: () => (0, A.A)({
              subscriptionTier: n,
              analyticsLocations: q
            })
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.BJc, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsx)(u.l6P, {
            label: "Boost",
            value: U,
            options: L,
            onSelectionChange: e => B(e),
            selectionMode: "single",
            fullWidth: true
          }), null != U ? (0, a.jsx)(b.A, {
            guild: U,
            analyticsLocation: {}
          }) : (0, a.jsx)("div", {
            children: "No Guild to boost"
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.BJc, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsx)(u.MzZ, {
            href: "https://i.dis.gd/createPromo",
            children: "How to create promotion"
          }), (0, a.jsxs)(u.BJc, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(u.ksK, {
              label: "Standalone: Trial Promotion Redemption",
              placeholder: "Promotion Code",
              value: G,
              onChange: e => F(e)
            }), (0, a.jsx)(c.m_, {
              text: "Need Promotion Code",
              shouldShow: G.length < 1,
              children: (0, a.jsx)(u.Button, {
                variant: "primary",
                text: "Open Link",
                disabled: G.length < 1,
                onClick: () => {
                  window.open(w.BVt.BILLING_PROMOTION_REDEMPTION(G))
                }
              })
            })]
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.nVY, {
          label: "Standalone: Gift/Subscription Purchase",
          children: [(0, a.jsx)(u.l6P, {
            label: "Plan",
            value: V.plan_id,
            options: [{
              id: "tier_2",
              value: I.gD.PREMIUM_MONTH_TIER_2,
              label: "Nitro"
            }, {
              id: "tier_1",
              value: I.gD.PREMIUM_MONTH_TIER_1,
              label: "Nitro Classic"
            }, {
              id: "tier_0",
              value: I.gD.PREMIUM_MONTH_TIER_0,
              label: "Nitro Basic"
            }],
            onSelectionChange: e => {
              W(t => R(P({}, t), {
                plan_id: e
              }))
            },
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(u.l6P, {
            label: "Type",
            value: V.gift,
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
              W(t => R(P({}, t), {
                gift: e
              }))
            },
            selectionMode: "single",
            fullWidth: true
          })]
        }), (0, a.jsx)(c.m_, {
          text: "Already subscribed",
          shouldShow: H,
          children: (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Open Link",
            disabled: H,
            onClick: () => {
              window.open(w.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify(P({}, V)))
            }
          })
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.nVY, {
          label: "Redeem Virtual Currency for SKU",
          children: [(0, a.jsxs)(u.BJc, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: "Virtual Currency Balance:"
            }), $ ? (0, a.jsx)("div", {
              className: k.wG,
              children: (0, a.jsx)(u.y$y, {
                type: u.tVU.SPINNING_CIRCLE
              })
            }) : (0, a.jsxs)("div", {
              className: k.dB,
              children: [null !== ee && (0, a.jsxs)(u.Text, {
                variant: "text-sm/normal",
                children: ["Error fetching Virtual Currency Balance: ", ee.message]
              }), (0, a.jsx)(E.Gy, {
                balance: null != Z ? Z : 0,
                balanceWidgetMode: E.k7.SELECTED
              })]
            })]
          }), (0, a.jsx)(u.ksK, {
            label: "SKU ID",
            placeholder: "SKU ID",
            value: el,
            onChange: e => er(e)
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Redeem Virtual Currency for SKU",
            loading: et,
            onClick: () => ea(el, (0, i.A)())
          }), null != en && (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: en
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.nVY, {
          label: "Creator Revenue",
          children: [(0, a.jsx)(u.l6P, {
            label: "Premium Server Subscription For",
            value: K,
            options: L,
            onSelectionChange: e => z(e),
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(v.H, {
            guildId: null == K ? true : K.id,
            children: (0, a.jsx)(D, {
              selectedGuildForGuildSub: K
            })
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.BJc, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsxs)(u.nVY, {
            label: "Activities & Application Payment Modals",
            children: [(0, a.jsx)(u.ksK, {
              label: "Application Id",
              placeholder: "Application Id",
              value: Q,
              onChange: Y
            }), (0, a.jsx)(u.ksK, {
              label: "Sku Id",
              placeholder: "Sku Id",
              value: J,
              onChange: e => X(e)
            })]
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Open App Subs Modal for Activity",
            onClick: () => (0, h.j)({
              applicationId: Q,
              skuId: J,
              openPremiumPaymentModal: () => true,
              analyticsLocations: [],
              analyticsLocationObject: {
                page: w.liQ.IN_APP
              },
              context: w.BRT.APP
            })
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsx)(u.BJc, {
          direction: "vertical",
          gap: 8,
          children: (0, a.jsx)(u.nVY, {
            label: "Standard Payment Modal Test",
            children: (0, a.jsxs)(u.BJc, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, a.jsx)(u.ksK, {
                label: "Application Id",
                hideLabel: true,
                placeholder: "Application Id",
                value: ei,
                onChange: es
              }), (0, a.jsx)(u.ksK, {
                label: "SKU ID",
                hideLabel: true,
                placeholder: "SKU ID",
                value: eo,
                onChange: e => ec(e)
              }), (0, a.jsx)(u.Button, {
                variant: "primary",
                text: "Open Standard Payment Modal for SKU",
                onClick: () => (0, C.A)({
                  applicationId: ei,
                  skuId: eo,
                  analyticsLocations: q
                })
              })]
            })
          })
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsxs)(u.BJc, {
          direction: "horizontal",
          align: "end",
          gap: 8,
          children: [(0, a.jsx)(u.ksK, {
            label: "Collectibles Payment Modal Test",
            placeholder: "SKU ID",
            value: ed,
            onChange: e => eu(e)
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Open Collectibles Payment Modal for SKU",
            onClick: () => (0, y.A)({
              skuId: ed,
              analyticsLocations: q,
              variantsReturnStyle: s.g.VARIANTS_GROUP
            })
          })]
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsx)(u.nVY, {
          label: "Helpers",
          children: (0, a.jsxs)(u.BJc, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(u.Button, {
              variant: "primary",
              text: "Reset SubscriptionPlanStore",
              onClick: () => (0, p.YG)()
            }), (0, a.jsx)(u.Button, {
              variant: "primary",
              text: "Reset SubscriptionStore",
              onClick: () => (0, m.uZ)()
            })]
          })
        }), (0, a.jsx)(u.cGx, {}), (0, a.jsx)(u.nVY, {
          label: "Dismissible Content Framework",
          children: (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Reset DismissibleContentFrameworkStore",
            onClick: () => (0, f.Ab)()
          })
        })]
      })
    })
  })
}