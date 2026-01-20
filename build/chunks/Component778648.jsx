/** Chunk was on 22979 **/
/** chunk id: 778648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk664751 = require("./664751.js"),
  Chunk772848 = require("./772848.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk681510 = require("./681510.js");

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
  } = e, n = (0, j.GG)(null == t ? true : t.id)[0];
  return null != t && null != n ? (0, a.jsx)("div", {
    children: n.subscription_listings_ids.map(e => (0, a.jsx)(y.Z, {
      guildId: t.id,
      groupListingId: e,
      listingId: e
    }, e))
  }) : null
}
let D = function() {
  let [e, t] = r.useState(I.Si.TIER_2), [n, j] = r.useState(null), y = (0, o.Wu)([N.Z], () => N.Z.getGuildsArray()), [D] = (0, o.Wu)([P.Z], () => [P.Z.getPremiumSubscription()]), M = y.map(e => ({
    id: e.id,
    value: e,
    label: e.name
  })), [L, U] = r.useState(M.length > 0 ? M[0].value : null), [B, F] = r.useState(""), [G, V] = r.useState({
    plan_id: I.Xh.PREMIUM_MONTH_TIER_2,
    gift: "true"
  }), W = "true" !== G.gift && null != D, [z, H] = r.useState(M.length > 0 ? M[0].value : null), {
    analyticsLocations: q
  } = (0, b.ZP)(f.Z.PAYMENT_FLOW_TEST_PAGE), [K, Q] = r.useState(""), [Y, X] = r.useState(w.lds), {
    balance: J,
    isFetching: $,
    error: ee
  } = (0, T.A)(), {
    isSubmitting: et,
    responseMessage: en,
    redeemVirtualCurrency: ea
  } = (0, T.f)(), [er, ei] = r.useState(w.lds), [el, es] = r.useState(""), [eo, ec] = r.useState(w.lds), [ed, eu] = r.useState(w.lds);
  return (0, a.jsx)(b.Gt, {
    value: q,
    children: (0, a.jsx)(u.zJl, {
      className: k.scroller,
      children: (0, a.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 24,
        children: [(0, a.jsxs)(u.Kqy, {
          direction: "horizontal",
          gap: 8,
          align: "end",
          children: [(0, a.jsx)(u.PhF, {
            label: "Gift",
            value: e,
            options: [{
              id: "tier_2",
              value: I.Si.TIER_2,
              label: "Nitro"
            }, {
              id: "tier_1",
              value: I.Si.TIER_1,
              label: "Nitro Classic"
            }, {
              id: "tier_0",
              value: I.Si.TIER_0,
              label: "Nitro Basic"
            }, {
              id: "none",
              value: null,
              label: "None"
            }],
            onSelectionChange: e => t(e),
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(E.Z, {
            subscriptionTier: e,
            premiumModalAnalyticsLocation: {},
            color: d.Tt.PRIMARY,
            look: d.iL.FILLED
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.Kqy, {
          direction: "horizontal",
          gap: 8,
          align: "end",
          children: [(0, a.jsx)(u.PhF, {
            label: "Premium Select Plan",
            value: n,
            options: [{
              id: "tier_2",
              value: I.Si.TIER_2,
              label: "Nitro"
            }, {
              id: "tier_1",
              value: I.Si.TIER_1,
              label: "Nitro Classic"
            }, {
              id: "tier_0",
              value: I.Si.TIER_0,
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
            onClick: () => (0, _.Z)({
              subscriptionTier: n,
              analyticsLocations: q
            })
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsx)(u.PhF, {
            label: "Boost",
            value: L,
            options: M,
            onSelectionChange: e => U(e),
            selectionMode: "single",
            fullWidth: true
          }), null != L ? (0, a.jsx)(g.Z, {
            guild: L,
            analyticsLocation: {}
          }) : (0, a.jsx)("div", {
            children: "No Guild to boost"
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsx)(u.eee, {
            href: "https://i.dis.gd/createPromo",
            children: "How to create promotion"
          }), (0, a.jsxs)(u.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(u.oil, {
              label: "Standalone: Trial Promotion Redemption",
              placeholder: "Promotion Code",
              value: B,
              onChange: e => F(e)
            }), (0, a.jsx)(c.u, {
              text: "Need Promotion Code",
              shouldShow: B.length < 1,
              children: (0, a.jsx)(u.Button, {
                variant: "primary",
                text: "Open Link",
                disabled: B.length < 1,
                onClick: () => {
                  window.open(w.Z5c.BILLING_PROMOTION_REDEMPTION(B))
                }
              })
            })]
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.C3N, {
          label: "Standalone: Gift/Subscription Purchase",
          children: [(0, a.jsx)(u.PhF, {
            label: "Plan",
            value: G.plan_id,
            options: [{
              id: "tier_2",
              value: I.Xh.PREMIUM_MONTH_TIER_2,
              label: "Nitro"
            }, {
              id: "tier_1",
              value: I.Xh.PREMIUM_MONTH_TIER_1,
              label: "Nitro Classic"
            }, {
              id: "tier_0",
              value: I.Xh.PREMIUM_MONTH_TIER_0,
              label: "Nitro Basic"
            }],
            onSelectionChange: e => {
              V(t => A(R({}, t), {
                plan_id: e
              }))
            },
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(u.PhF, {
            label: "Type",
            value: G.gift,
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
              V(t => A(R({}, t), {
                gift: e
              }))
            },
            selectionMode: "single",
            fullWidth: true
          })]
        }), (0, a.jsx)(c.u, {
          text: "Already subscribed",
          shouldShow: W,
          children: (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Open Link",
            disabled: W,
            onClick: () => {
              window.open(w.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(R({}, G)))
            }
          })
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.C3N, {
          label: "Redeem Virtual Currency for SKU",
          children: [(0, a.jsxs)(u.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: "Virtual Currency Balance:"
            }), $ ? (0, a.jsx)("div", {
              className: k.loader,
              children: (0, a.jsx)(u.$jN, {
                type: u.RAz.SPINNING_CIRCLE
              })
            }) : (0, a.jsxs)("div", {
              className: k.balanceWidgetPillContainer,
              children: [null !== ee && (0, a.jsxs)(u.Text, {
                variant: "text-sm/normal",
                children: ["Error fetching Virtual Currency Balance: ", ee.message]
              }), (0, a.jsx)(O.A4, {
                balance: null != J ? J : 0,
                balanceWidgetMode: O.b6.SELECTED
              })]
            })]
          }), (0, a.jsx)(u.oil, {
            label: "SKU ID",
            placeholder: "SKU ID",
            value: er,
            onChange: e => ei(e)
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Redeem Virtual Currency for SKU",
            loading: et,
            onClick: () => ea(er, (0, l.Z)())
          }), null != en && (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: en
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.C3N, {
          label: "Creator Revenue",
          children: [(0, a.jsx)(u.PhF, {
            label: "Premium Server Subscription For",
            value: z,
            options: M,
            onSelectionChange: e => H(e),
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(v.l, {
            guildId: null == z ? true : z.id,
            children: (0, a.jsx)(Z, {
              selectedGuildForGuildSub: z
            })
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, a.jsxs)(u.C3N, {
            label: "Activities & Application Payment Modals",
            children: [(0, a.jsx)(u.oil, {
              label: "Application Id",
              placeholder: "Application Id",
              value: K,
              onChange: Q
            }), (0, a.jsx)(u.oil, {
              label: "Sku Id",
              placeholder: "Sku Id",
              value: Y,
              onChange: e => X(e)
            })]
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Open App Subs Modal for Activity",
            onClick: () => (0, h.S)({
              applicationId: K,
              skuId: Y,
              openPremiumPaymentModal: () => true,
              analyticsLocations: [],
              analyticsLocationObject: {
                page: w.ZY5.IN_APP
              },
              context: w.IlC.APP
            })
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsx)(u.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (0, a.jsx)(u.C3N, {
            label: "Standard Payment Modal Test",
            children: (0, a.jsxs)(u.Kqy, {
              direction: "horizontal",
              gap: 8,
              align: "end",
              children: [(0, a.jsx)(u.oil, {
                label: "Application Id",
                hideLabel: true,
                placeholder: "Application Id",
                value: el,
                onChange: es
              }), (0, a.jsx)(u.oil, {
                label: "SKU ID",
                hideLabel: true,
                placeholder: "SKU ID",
                value: eo,
                onChange: e => ec(e)
              }), (0, a.jsx)(u.Button, {
                variant: "primary",
                text: "Open Standard Payment Modal for SKU",
                onClick: () => (0, S.Z)({
                  applicationId: el,
                  skuId: eo,
                  analyticsLocations: q
                })
              })]
            })
          })
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsxs)(u.Kqy, {
          direction: "horizontal",
          align: "end",
          gap: 8,
          children: [(0, a.jsx)(u.oil, {
            label: "Collectibles Payment Modal Test",
            placeholder: "SKU ID",
            value: ed,
            onChange: e => eu(e)
          }), (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Open Collectibles Payment Modal for SKU",
            onClick: () => (0, C.Z)({
              skuId: ed,
              analyticsLocations: q,
              variantsReturnStyle: s.v.VARIANTS_GROUP
            })
          })]
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsx)(u.C3N, {
          label: "Helpers",
          children: (0, a.jsxs)(u.Kqy, {
            direction: "horizontal",
            gap: 8,
            align: "end",
            children: [(0, a.jsx)(u.Button, {
              variant: "primary",
              text: "Reset SubscriptionPlanStore",
              onClick: () => (0, p.mE)()
            }), (0, a.jsx)(u.Button, {
              variant: "primary",
              text: "Reset SubscriptionStore",
              onClick: () => (0, m.GM)()
            })]
          })
        }), (0, a.jsx)(u.izJ, {}), (0, a.jsx)(u.C3N, {
          label: "Dismissible Content Framework",
          children: (0, a.jsx)(u.Button, {
            variant: "primary",
            text: "Reset DismissibleContentFrameworkStore",
            onClick: () => (0, x.EG)()
          })
        })]
      })
    })
  })
}