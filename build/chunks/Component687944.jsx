/** Chunk was on web.js **/
/** chunk id: 687944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = {
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
  } = e, o = f.Ay.getPlanIdFromInvoice(t, i), l = u.A.get(o);
  if (null == l || null == i || null == n || null == n.duration || null == n.percentage) return null;
  let c = i.invoiceItems.find(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t === l.id
  });
  if (null == c) return null;
  let d = (0, p.$g)(c.amount, i.currency),
    _ = (0, f.y8)(g.gD.PREMIUM_MONTH_TIER_2, false, false, {
      currency: t.currency,
      paymentSourceId: t.paymentSourceId
    }),
    h = (0, p.$g)(_.amount, _.currency);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: y.intl.format(y.t["50bA2I"], {
        percent: n.percentage
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: s ? y.intl.format(y.t["3ZiutU"], {
        percent: n.percentage,
        numMonths: n.duration,
        regularPrice: h
      }) : y.intl.format(y.t.N43FMx, {
        numMonths: n.duration,
        discountedPrice: d,
        billingPeriod: y.intl.string(y.t.FPybU7),
        fullPrice: h
      })
    })]
  })
}

function N(e) {
  let {
    discountOffer: t,
    premiumSubscription: n
  } = e, i = (0, _.tQ)(n, g.gD.PREMIUM_MONTH_TIER_2, t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: y.intl.format(y.t.sFO20P, {
        percent: t.discount.amount
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: y.intl.format(y.t["PH7Q+R"], {
        numMonths: t.discount.user_usage_limit,
        discountedPrice: i,
        billingPeriod: (0, f.Ke)(t.discount.user_usage_limit_interval)
      })
    })]
  })
}
let w = function(e) {
  let {
    subscription: t,
    invoicePreview: u,
    isLoading: p,
    analyticsLocation: _,
    discountInfo: g,
    renewalChurnDiscountInfo: v,
    discountOffer: I
  } = e, {
    analyticsLocations: w
  } = (0, o.Ay)(s.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER), R = () => {
    t.status !== E.Dmq.CANCELED && P()
  }, P = e => {
    (0, a.mMO)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: i
      } = await n.e("72820").then(n.bind(n, 281439));
      return n => (0, r.jsx)(i, S(A({}, n), {
        premiumSubscription: t,
        analyticsLocation: _,
        analyticsLocations: w,
        initialStep: e
      }))
    })
  }, D = () => {
    let e = f.Ay.isSwitchingPlansDisabled(t),
      n = f.Ay.getSwitchingPlansDisabledMessage(t);
    return f.Ay.isBaseSubscriptionCanceled(t) ? (0, r.jsx)(a.Button, {
      variant: "expressive",
      icon: a.tvc,
      size: "md",
      text: y.intl.string(y.t.zrCzVB),
      loading: p,
      onClick: () => P(m.g.CONFIRM_DISCOUNT)
    }) : (0, r.jsxs)("div", {
      className: b.qK,
      children: [(0, r.jsx)(i.m, {
        text: n,
        shouldShow: e && null != n,
        asContainer: true,
        children: (0, r.jsx)(a.Button, {
          variant: "expressive",
          disabled: e,
          text: y.intl.string(y.t["dylp/7"]),
          size: "md",
          onClick: () => {
            (0, l.A)({
              analyticsLocations: w,
              analyticsLocation: _,
              analyticsObject: T,
              subscription: t
            })
          }
        })
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "md",
        text: y.intl.string(y.t["ETE/oC"]),
        loading: p,
        onClick: R
      })]
    })
  }, x = f.Ay.getPlanIdFromInvoice(t, u), L = (0, h.ux)(null == I ? true : I.expires_at);
  return (0, c.m1)(x) ? null : (0, r.jsx)("div", {
    className: b.S6,
    children: (0, r.jsx)(a.hLv, {
      color: "nitro-pink",
      className: b.YL,
      children: (0, r.jsxs)("div", {
        className: b.mK,
        children: [(0, r.jsxs)("div", {
          className: b.Gp,
          children: [(0, r.jsx)(d.A, {
            color: "currentcolor",
            className: b.fJ,
            "aria-label": y.intl.string(y.t.lpNrPu)
          }), (0, r.jsx)(a.Text, {
            className: b.tD,
            variant: "text-sm/medium",
            color: "text-strong",
            children: null != I && L
          })]
        }), (0, r.jsx)("div", {
          className: b.T
        }), (0, r.jsxs)("div", {
          className: b.ly,
          children: [(0, r.jsxs)("div", {
            className: b.Yc,
            children: [null != I ? (0, r.jsx)(N, {
              discountOffer: I,
              premiumSubscription: t
            }) : (0, r.jsx)(C, {
              premiumSubscription: t,
              discountInfo: null != g ? g : v,
              invoicePreview: u,
              isDiscountActive: null != g
            }), (0, r.jsx)("div", {
              className: b.e_,
              children: D()
            })]
          }), (0, r.jsx)("img", {
            className: b.Hp,
            src: O,
            alt: "",
            draggable: false
          })]
        })]
      })
    })
  })
}