/** Chunk was on web.js **/
/** chunk id: 385251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk301766 = require("./301766.js"),
  Chunk509545 = require("./509545.js"),
  Chunk589072 = require("./589072.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk230916 = require("./230916.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817843 = require("./817843.js"),
  Chunk22767 = require("./22767.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = {
  page: Chunk981631.ZY5.USER_SETTINGS,
  section: Chunk981631.jXE.SETTINGS_PREMIUM,
  object: Chunk981631.qAy.CARD
};

function A(e) {
  let {
    premiumSubscription: t,
    discountInfo: n,
    invoicePreview: i,
    isDiscountActive: o
  } = e, s = f.ZP.getPlanIdFromInvoice(t, i), l = u.Z.get(s);
  if (null == l || null == i || null == n || null == n.duration || null == n.percentage) return null;
  let c = i.invoiceItems.find(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t === l.id
  });
  if (null == c) return null;
  let d = (0, p.T4)(c.amount, i.currency),
    _ = (0, f.aS)(g.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: t.currency,
      paymentSourceId: t.paymentSourceId
    }),
    h = (0, p.T4)(_.amount, _.currency);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: b.intl.format(b.t["50bA2I"], {
        percent: n.percentage
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: o ? b.intl.format(b.t["3ZiutU"], {
        percent: n.percentage,
        numMonths: n.duration,
        regularPrice: h
      }) : b.intl.format(b.t.N43FMx, {
        numMonths: n.duration,
        discountedPrice: d,
        billingPeriod: b.intl.string(b.t.FPybU7),
        fullPrice: h
      })
    })]
  })
}

function N(e) {
  let {
    discountOffer: t,
    premiumSubscription: n
  } = e, i = (0, _._n)(n, g.Xh.PREMIUM_MONTH_TIER_2, t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: b.intl.format(b.t.sFO20P, {
        percent: t.discount.amount
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: b.intl.format(b.t["PH7Q+R"], {
        numMonths: t.discount.user_usage_limit,
        discountedPrice: i,
        billingPeriod: (0, f.JP)(t.discount.user_usage_limit_interval)
      })
    })]
  })
}
let P = function(e) {
  let {
    subscription: t,
    invoicePreview: u,
    isLoading: p,
    analyticsLocation: _,
    discountInfo: g,
    renewalChurnDiscountInfo: v,
    discountOffer: I
  } = e, {
    analyticsLocations: P
  } = (0, s.ZP)(o.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER), w = () => {
    t.status !== E.O0b.CANCELED && R()
  }, R = e => {
    (0, a.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: i
      } = await n.e("26526").then(n.bind(n, 48813));
      return n => (0, r.jsx)(i, T(S({}, n), {
        premiumSubscription: t,
        analyticsLocation: _,
        analyticsLocations: P,
        initialStep: e
      }))
    })
  }, D = () => {
    let e = f.ZP.isSwitchingPlansDisabled(t),
      n = f.ZP.getSwitchingPlansDisabledMessage(t);
    return f.ZP.isBaseSubscriptionCanceled(t) ? (0, r.jsx)(a.Button, {
      variant: "expressive",
      icon: a.SrA,
      size: "md",
      text: b.intl.string(b.t.zrCzVB),
      loading: p,
      onClick: () => R(m.R.CONFIRM_DISCOUNT)
    }) : (0, r.jsxs)("div", {
      className: y.activeSubButtons,
      children: [(0, r.jsx)(i.u, {
        text: n,
        shouldShow: e && null != n,
        asContainer: true,
        children: (0, r.jsx)(a.Button, {
          variant: "expressive",
          disabled: e,
          text: b.intl.string(b.t["dylp/7"]),
          size: "md",
          onClick: () => {
            (0, l.Z)({
              analyticsLocations: P,
              analyticsLocation: _,
              analyticsObject: C,
              subscription: t
            })
          }
        })
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "md",
        text: b.intl.string(b.t["ETE/oC"]),
        loading: p,
        onClick: w
      })]
    })
  }, x = f.ZP.getPlanIdFromInvoice(t, u), L = (0, h.eQ)(null == I ? true : I.expires_at);
  return (0, c.Q0)(x) ? null : (0, r.jsx)("div", {
    className: y.churnDiscountBannerBackground,
    children: (0, r.jsx)(a.$1m, {
      color: "nitro-pink",
      className: y.headerGradient,
      children: (0, r.jsxs)("div", {
        className: y.churnDiscountBanner,
        children: [(0, r.jsxs)("div", {
          className: y.headerLabel,
          children: [(0, r.jsx)(d.Z, {
            color: "currentcolor",
            className: y.churnDiscountBannerWordMark,
            "aria-label": b.intl.string(b.t.lpNrPu)
          }), (0, r.jsx)(a.Text, {
            className: y.churnDiscountBannerExpiryDate,
            variant: "text-sm/medium",
            color: "text-strong",
            children: null != I && L
          })]
        }), (0, r.jsx)("div", {
          className: y.selectPlanDivider
        }), (0, r.jsxs)("div", {
          className: y.churnDiscountBannerContent,
          children: [(0, r.jsxs)("div", {
            className: y.churnDiscountBannerDetails,
            children: [null != I ? (0, r.jsx)(N, {
              discountOffer: I,
              premiumSubscription: t
            }) : (0, r.jsx)(A, {
              premiumSubscription: t,
              discountInfo: null != g ? g : v,
              invoicePreview: u,
              isDiscountActive: null != g
            }), (0, r.jsx)("div", {
              className: y.churnDiscountBannerButton,
              children: D()
            })]
          }), (0, r.jsx)("img", {
            className: y.churnDiscountBannerImage,
            src: O,
            alt: "",
            draggable: false
          })]
        })]
      })
    })
  })
}