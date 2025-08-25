/** Chunk was on web.js **/
/** chunk id: 385251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk304789 = require("./304789.jsx"),
  Chunk481060 = require("./481060.js"),
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

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = {
  page: Chunk981631.ZY5.USER_SETTINGS,
  section: Chunk981631.jXE.SETTINGS_PREMIUM,
  object: Chunk981631.qAy.CARD
};

function R(e) {
  let {
    premiumSubscription: t,
    discountInfo: n,
    invoicePreview: i,
    isDiscountActive: a
  } = e, s = f.ZP.getPlanIdFromInvoice(t, i), l = u.Z.get(s);
  if (null == l || null == i || null == n || null == n.duration || null == n.percentage) return null;
  let c = i.invoiceItems.find(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t === l.id
  });
  if (null == c) return null;
  let d = (0, _.T4)(c.amount, i.currency),
    p = (0, f.aS)(b.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: t.currency,
      paymentSourceId: t.paymentSourceId
    }),
    h = (0, _.T4)(p.amount, p.currency);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xl/semibold",
      color: "text-primary",
      children: O.intl.format(O.t["50bA2N"], {
        percent: n.percentage
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: a ? O.intl.format(O.t["3Ziutb"], {
        percent: n.percentage,
        numMonths: n.duration,
        regularPrice: h
      }) : O.intl.format(O.t.N43FMz, {
        numMonths: n.duration,
        discountedPrice: d,
        billingPeriod: O.intl.string(O.t.FPybU1),
        fullPrice: h
      })
    })]
  })
}

function P(e) {
  let {
    discountOffer: t,
    premiumSubscription: n
  } = e, i = (0, h._)(n, b.Xh.PREMIUM_MONTH_TIER_2, t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xl/semibold",
      color: "text-primary",
      children: O.intl.format(O.t.sFO20N, {
        percent: t.discount.amount
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: O.intl.format(O.t["PH7Q+f"], {
        numMonths: t.discount.user_usage_limit,
        discountedPrice: i,
        billingPeriod: (0, f.JP)(t.discount.user_usage_limit_interval)
      })
    })]
  })
}
let w = function(e) {
  let {
    subscription: t,
    invoicePreview: u,
    isLoading: _,
    analyticsLocation: h,
    discountInfo: b,
    renewalChurnDiscountInfo: T,
    discountOffer: A
  } = e, {
    analyticsLocations: w
  } = (0, s.ZP)(a.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER), {
    showDiscountBadge: D
  } = (0, p.k)({
    location: "Subscription Details"
  }), x = () => {
    t.status !== y.O0b.CANCELED && L()
  }, L = e => {
    (0, o.ZDy)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("58067"), n.e("81709")]).then(n.bind(n, 833569));
      return n => (0, r.jsx)(i, C(S({}, n), {
        premiumSubscription: t,
        analyticsLocation: h,
        analyticsLocations: w,
        initialStep: e
      }))
    })
  }, j = () => {
    let e = f.ZP.isSwitchingPlansDisabled(t),
      n = f.ZP.getSwitchingPlansDisabledMessage(t);
    return f.ZP.isBaseSubscriptionCanceled(t) ? (0, r.jsx)(o.zxk, {
      variant: "expressive",
      icon: o.SrA,
      size: "md",
      text: D && null != A ? O.intl.format(O.t.XIVblZ, {
        percent: A.discount.amount
      }) : O.intl.string(O.t.zrCzVF),
      loading: _,
      onClick: () => L(E.R.CONFIRM_DISCOUNT)
    }) : (0, r.jsxs)("div", {
      className: v.activeSubButtons,
      children: [(0, r.jsx)(o.ua7, {
        text: n,
        children: n => (0, r.jsx)(o.zxk, C(S({}, n), {
          variant: "expressive",
          disabled: e,
          text: O.intl.string(O.t["dylp//"]),
          size: "md",
          onClick: () => {
            (0, l.Z)({
              analyticsLocations: w,
              analyticsLocation: h,
              analyticsObject: N,
              subscription: t
            })
          }
        }))
      }), (0, r.jsx)(o.zxk, {
        variant: "secondary",
        size: "md",
        text: O.intl.string(O.t["ETE/oK"]),
        loading: _,
        onClick: x
      })]
    })
  }, M = f.ZP.getPlanIdFromInvoice(t, u), k = (0, m.eQ)(null == A ? true : A.expires_at);
  return (0, c.Q0)(M) ? null : (0, r.jsx)("div", {
    className: v.churnDiscountBannerBackground,
    children: (0, r.jsx)(i.$, {
      color: "nitro-pink",
      className: v.headerGradient,
      children: (0, r.jsxs)("div", {
        className: v.churnDiscountBanner,
        children: [(0, r.jsxs)("div", {
          className: v.headerLabel,
          children: [(0, r.jsx)(d.Z, {
            color: "currentcolor",
            className: v.churnDiscountBannerWordMark,
            "aria-label": O.intl.string(O.t.lpNrPj)
          }), null != A && D && (0, r.jsx)(g.mn, {
            text: O.intl.formatToPlainString(O.t.AYcXGR, {
              discountOfferAmount: A.discount.amount
            }),
            className: v.churnDiscountPill,
            colorOptions: g.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL
          }), (0, r.jsx)(o.Text, {
            className: v.churnDiscountBannerExpiryDate,
            variant: "text-sm/medium",
            color: "text-primary",
            children: null != A && k
          })]
        }), (0, r.jsx)("div", {
          className: v.selectPlanDivider
        }), (0, r.jsxs)("div", {
          className: v.churnDiscountBannerContent,
          children: [(0, r.jsxs)("div", {
            className: v.churnDiscountBannerDetails,
            children: [null != A ? (0, r.jsx)(P, {
              discountOffer: A,
              premiumSubscription: t
            }) : (0, r.jsx)(R, {
              premiumSubscription: t,
              discountInfo: null != b ? b : T,
              invoicePreview: u,
              isDiscountActive: null != b
            }), (0, r.jsx)("div", {
              className: v.churnDiscountBannerButton,
              children: j()
            })]
          }), (0, r.jsx)("img", {
            className: v.churnDiscountBannerImage,
            src: I,
            alt: "",
            draggable: false
          })]
        })]
      })
    })
  })
}