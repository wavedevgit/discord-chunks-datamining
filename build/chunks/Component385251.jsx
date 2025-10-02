/** Chunk was on web.js **/
/** chunk id: 385251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk301766 = require("./301766.js"),
  Chunk509545 = require("./509545.js"),
  Chunk589072 = require("./589072.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk66683 = require("./66683.js"),
  Chunk230916 = require("./230916.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk355758 = require("./355758.js"),
  Chunk22767 = require("./22767.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = {
  page: Chunk981631.ZY5.USER_SETTINGS,
  section: Chunk981631.jXE.SETTINGS_PREMIUM,
  object: Chunk981631.qAy.CARD
};

function N(e) {
  let {
    premiumSubscription: t,
    discountInfo: n,
    invoicePreview: a,
    isDiscountActive: o
  } = e, s = d.ZP.getPlanIdFromInvoice(t, a), l = c.Z.get(s);
  if (null == l || null == a || null == n || null == n.duration || null == n.percentage) return null;
  let u = a.invoiceItems.find(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t === l.id
  });
  if (null == u) return null;
  let _ = (0, f.T4)(u.amount, a.currency),
    p = (0, d.aS)(E.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: t.currency,
      paymentSourceId: t.paymentSourceId
    }),
    h = (0, f.T4)(p.amount, p.currency);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      color: "text-primary",
      children: y.intl.format(y.t["50bA2N"], {
        percent: n.percentage
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: o ? y.intl.format(y.t["3Ziutb"], {
        percent: n.percentage,
        numMonths: n.duration,
        regularPrice: h
      }) : y.intl.format(y.t.N43FMz, {
        numMonths: n.duration,
        discountedPrice: _,
        billingPeriod: y.intl.string(y.t.FPybU1),
        fullPrice: h
      })
    })]
  })
}

function R(e) {
  let {
    discountOffer: t,
    premiumSubscription: n
  } = e, a = (0, p._n)(n, E.Xh.PREMIUM_MONTH_TIER_2, t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      color: "text-primary",
      children: y.intl.format(y.t.sFO20N, {
        percent: t.discount.amount
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: y.intl.format(y.t["PH7Q+f"], {
        numMonths: t.discount.user_usage_limit,
        discountedPrice: a,
        billingPeriod: (0, d.JP)(t.discount.user_usage_limit_interval)
      })
    })]
  })
}
let P = function(e) {
  let {
    subscription: t,
    invoicePreview: c,
    isLoading: f,
    analyticsLocation: p,
    discountInfo: E,
    renewalChurnDiscountInfo: I,
    discountOffer: S
  } = e, {
    analyticsLocations: P
  } = (0, o.ZP)(a.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER), {
    showDiscountBadge: w
  } = (0, _.k)({
    location: "Subscription Details"
  }), D = () => {
    t.status !== b.O0b.CANCELED && L()
  }, L = e => {
    (0, i.ZDy)(async () => {
      let {
        PremiumBrandRefreshSubscriptionCancellationModal: i
      } = await Promise.all([n.e("17938"), n.e("69432"), n.e("26526"), n.e("46573")]).then(n.bind(n, 48813));
      return n => (0, r.jsx)(i, A(T({}, n), {
        premiumSubscription: t,
        analyticsLocation: p,
        analyticsLocations: P,
        initialStep: e
      }))
    })
  }, x = () => {
    let e = d.ZP.isSwitchingPlansDisabled(t),
      n = d.ZP.getSwitchingPlansDisabledMessage(t);
    return d.ZP.isBaseSubscriptionCanceled(t) ? (0, r.jsx)(i.zxk, {
      variant: "expressive",
      icon: i.SrA,
      size: "md",
      text: w && null != S ? y.intl.format(y.t.XIVblZ, {
        percent: S.discount.amount
      }) : y.intl.string(y.t.zrCzVF),
      loading: f,
      onClick: () => L(g.R.CONFIRM_DISCOUNT)
    }) : (0, r.jsxs)("div", {
      className: O.activeSubButtons,
      children: [(0, r.jsx)(i.ua7, {
        text: n,
        children: n => (0, r.jsx)(i.zxk, A(T({}, n), {
          variant: "expressive",
          disabled: e,
          text: y.intl.string(y.t["dylp//"]),
          size: "md",
          onClick: () => {
            (0, s.Z)({
              analyticsLocations: P,
              analyticsLocation: p,
              analyticsObject: C,
              subscription: t
            })
          }
        }))
      }), (0, r.jsx)(i.zxk, {
        variant: "secondary",
        size: "md",
        text: y.intl.string(y.t["ETE/oK"]),
        loading: f,
        onClick: D
      })]
    })
  }, j = d.ZP.getPlanIdFromInvoice(t, c), M = (0, h.eQ)(null == S ? true : S.expires_at);
  return (0, l.Q0)(j) ? null : (0, r.jsx)("div", {
    className: O.churnDiscountBannerBackground,
    children: (0, r.jsx)(i.$1m, {
      color: "nitro-pink",
      className: O.headerGradient,
      children: (0, r.jsxs)("div", {
        className: O.churnDiscountBanner,
        children: [(0, r.jsxs)("div", {
          className: O.headerLabel,
          children: [(0, r.jsx)(u.Z, {
            color: "currentcolor",
            className: O.churnDiscountBannerWordMark,
            "aria-label": y.intl.string(y.t.lpNrPj)
          }), null != S && w && (0, r.jsx)(m.mn, {
            text: y.intl.formatToPlainString(y.t.AYcXGR, {
              discountOfferAmount: S.discount.amount
            }),
            className: O.churnDiscountPill,
            colorOptions: m.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL
          }), (0, r.jsx)(i.Text, {
            className: O.churnDiscountBannerExpiryDate,
            variant: "text-sm/medium",
            color: "text-primary",
            children: null != S && M
          })]
        }), (0, r.jsx)("div", {
          className: O.selectPlanDivider
        }), (0, r.jsxs)("div", {
          className: O.churnDiscountBannerContent,
          children: [(0, r.jsxs)("div", {
            className: O.churnDiscountBannerDetails,
            children: [null != S ? (0, r.jsx)(R, {
              discountOffer: S,
              premiumSubscription: t
            }) : (0, r.jsx)(N, {
              premiumSubscription: t,
              discountInfo: null != E ? E : I,
              invoicePreview: c,
              isDiscountActive: null != E
            }), (0, r.jsx)("div", {
              className: O.churnDiscountBannerButton,
              children: x()
            })]
          }), (0, r.jsx)("img", {
            className: O.churnDiscountBannerImage,
            src: v,
            alt: "",
            draggable: false
          })]
        })]
      })
    })
  })
}