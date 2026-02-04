/** Chunk was on 9207 **/
/** chunk id: 687944, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk832946 = require("./832946.js"),
  Chunk97352 = require("./97352.js"),
  Chunk392943 = require("./392943.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk511484 = require("./511484.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk424850 = require("./424850.js"),
  Chunk818724 = require("./818724.js");
let x = {
  page: Chunk652215.liQ.USER_SETTINGS,
  section: Chunk652215.JJy.SETTINGS_PREMIUM,
  object: Chunk652215.ZSU.CARD
};

function C(e) {
  let {
    premiumSubscription: t,
    discountInfo: n,
    invoicePreview: i,
    isDiscountActive: s
  } = e, a = _.Ay.getPlanIdFromInvoice(t, i), o = d.A.get(a);
  if (null == o || null == i || null == n || null == n.duration || null == n.percentage) return null;
  let c = i.invoiceItems.find(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t === o.id
  });
  if (null == c) return null;
  let u = (0, p.$g)(c.amount, i.currency),
    m = (0, _.y8)(f.gD.PREMIUM_MONTH_TIER_2, false, false, {
      currency: t.currency,
      paymentSourceId: t.paymentSourceId
    }),
    g = (0, p.$g)(m.amount, m.currency);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: h.intl.format(h.t["50bA2I"], {
        percent: n.percentage
      })
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: s ? h.intl.format(h.t["3ZiutU"], {
        percent: n.percentage,
        numMonths: n.duration,
        regularPrice: g
      }) : h.intl.format(h.t.N43FMx, {
        numMonths: n.duration,
        discountedPrice: u,
        billingPeriod: h.intl.string(h.t.FPybU7),
        fullPrice: g
      })
    })]
  })
}

function S(e) {
  let {
    discountOffer: t,
    premiumSubscription: n
  } = e, i = (0, m.tQ)(n, f.gD.PREMIUM_MONTH_TIER_2, t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: h.intl.format(h.t.sFO20P, {
        percent: t.discount.amount
      })
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: h.intl.format(h.t["PH7Q+R"], {
        numMonths: t.discount.user_usage_limit,
        discountedPrice: i,
        billingPeriod: (0, _.Ke)(t.discount.user_usage_limit_interval)
      })
    })]
  })
}
let T = function(e) {
  let t, d, {
      subscription: p,
      invoicePreview: m,
      isLoading: f,
      analyticsLocation: T,
      discountInfo: I,
      renewalChurnDiscountInfo: N,
      discountOffer: y
    } = e,
    {
      analyticsLocations: j
    } = (0, a.Ay)(s.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
    v = e => {
      (0, l.mMO)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await n.e("72820").then(n.bind(n, 281439));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, n), l = l = {
            premiumSubscription: p,
            analyticsLocation: T,
            analyticsLocations: j,
            initialStep: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    P = _.Ay.getPlanIdFromInvoice(p, m),
    R = (0, g.ux)(null == y ? true : y.expires_at);
  return (0, c.m1)(P) ? null : (0, r.jsx)("div", {
    className: E.S6,
    children: (0, r.jsx)(l.hLv, {
      color: "nitro-pink",
      className: E.YL,
      children: (0, r.jsxs)("div", {
        className: E.mK,
        children: [(0, r.jsxs)("div", {
          className: E.Gp,
          children: [(0, r.jsx)(u.A, {
            color: "currentcolor",
            className: E.fJ,
            "aria-label": h.intl.string(h.t.lpNrPu)
          }), (0, r.jsx)(l.Text, {
            className: E.tD,
            variant: "text-sm/medium",
            color: "text-strong",
            children: null != y && R
          })]
        }), (0, r.jsx)("div", {
          className: E.T
        }), (0, r.jsxs)("div", {
          className: E.ly,
          children: [(0, r.jsxs)("div", {
            className: E.Yc,
            children: [null != y ? (0, r.jsx)(S, {
              discountOffer: y,
              premiumSubscription: p
            }) : (0, r.jsx)(C, {
              premiumSubscription: p,
              discountInfo: null != I ? I : N,
              invoicePreview: m,
              isDiscountActive: null != I
            }), (0, r.jsx)("div", {
              className: E.e_,
              children: (t = _.Ay.isSwitchingPlansDisabled(p), d = _.Ay.getSwitchingPlansDisabledMessage(p), _.Ay.isBaseSubscriptionCanceled(p) ? (0, r.jsx)(l.Button, {
                variant: "expressive",
                icon: l.tvc,
                size: "md",
                text: h.intl.string(h.t.zrCzVB),
                loading: f,
                onClick: () => v(A.g.CONFIRM_DISCOUNT)
              }) : (0, r.jsxs)("div", {
                className: E.qK,
                children: [(0, r.jsx)(i.m, {
                  text: d,
                  shouldShow: t && null != d,
                  asContainer: true,
                  children: (0, r.jsx)(l.Button, {
                    variant: "expressive",
                    disabled: t,
                    text: h.intl.string(h.t["dylp/7"]),
                    size: "md",
                    onClick: () => {
                      (0, o.A)({
                        analyticsLocations: j,
                        analyticsLocation: T,
                        analyticsObject: x,
                        subscription: p
                      })
                    }
                  })
                }), (0, r.jsx)(l.Button, {
                  variant: "secondary",
                  size: "md",
                  text: h.intl.string(h.t["ETE/oC"]),
                  loading: f,
                  onClick: () => {
                    p.status !== b.Dmq.CANCELED && v()
                  }
                })]
              }))
            })]
          }), (0, r.jsx)("img", {
            className: E.Hp,
            src: O,
            alt: "",
            draggable: false
          })]
        })]
      })
    })
  })
}