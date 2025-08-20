/** Chunk was on web.js **/
/** chunk id: 385251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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
    invoicePreview: i
  } = e, o = f.ZP.getPlanIdFromInvoice(t, i), s = u.Z.get(o);
  if (null == s || null == i || null == n || null == n.duration || null == n.percentage) return null;
  let l = i.invoiceItems.find(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t === s.id
  });
  if (null == l) return null;
  let c = (0, _.T4)(l.amount, i.currency),
    d = (0, f.aS)(E.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: t.currency,
      paymentSourceId: t.paymentSourceId
    }),
    p = (0, _.T4)(d.amount, d.currency);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xl/semibold",
      color: "text-primary",
      children: y.intl.format(y.t["50bA2N"], {
        percent: n.percentage
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: y.intl.format(y.t.N43FMz, {
        numMonths: n.duration,
        discountedPrice: c,
        billingPeriod: y.intl.string(y.t.FPybU1),
        fullPrice: p
      })
    })]
  })
}

function R(e) {
  let {
    discountOffer: t,
    premiumSubscription: n
  } = e, i = (0, p._)(n, E.Xh.PREMIUM_MONTH_TIER_2, t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xl/semibold",
      color: "text-primary",
      children: y.intl.format(y.t.sFO20N, {
        percent: t.discount.amount
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: y.intl.format(y.t["PH7Q+f"], {
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
    currentInvoicePreview: u,
    renewalInvoicePreview: _,
    isLoading: p,
    analyticsLocation: E,
    discountInfo: I,
    renewalChurnDiscountInfo: S,
    discountOffer: P
  } = e, {
    analyticsLocations: w
  } = (0, s.ZP)(o.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER), D = null;
  D = null != I ? u : _;
  let x = () => {
      t.status !== b.O0b.CANCELED && L()
    },
    L = e => {
      (0, a.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("58067"), n.e("81709")]).then(n.bind(n, 833569));
        return n => (0, r.jsx)(i, A(T({}, n), {
          premiumSubscription: t,
          analyticsLocation: E,
          analyticsLocations: w,
          initialStep: e
        }))
      })
    },
    j = () => {
      let e = f.ZP.isSwitchingPlansDisabled(t),
        n = f.ZP.getSwitchingPlansDisabledMessage(t);
      return f.ZP.isBaseSubscriptionCanceled(t) ? (0, r.jsx)(a.zxk, {
        variant: "expressive",
        icon: a.SrA,
        size: "md",
        text: y.intl.string(y.t.zrCzVF),
        loading: p,
        onClick: () => L(g.R.CONFIRM_DISCOUNT)
      }) : (0, r.jsxs)("div", {
        className: O.activeSubButtons,
        children: [(0, r.jsx)(a.ua7, {
          text: n,
          children: n => (0, r.jsx)(a.zxk, A(T({}, n), {
            variant: "expressive",
            disabled: e,
            text: y.intl.string(y.t["dylp//"]),
            size: "md",
            onClick: () => {
              (0, l.Z)({
                analyticsLocations: w,
                analyticsLocation: E,
                analyticsObject: C,
                subscription: t
              })
            }
          }))
        }), (0, r.jsx)(a.zxk, {
          variant: "secondary",
          size: "md",
          text: y.intl.string(y.t["ETE/oK"]),
          loading: p,
          onClick: x
        })]
      })
    },
    M = f.ZP.getPlanIdFromInvoice(t, _),
    k = (0, h.eQ)(null == P ? true : P.expires_at);
  return (0, c.Q0)(M) ? null : (0, r.jsx)("div", {
    className: O.churnDiscountBannerBackground,
    children: (0, r.jsx)(i.$, {
      color: "nitro-pink",
      className: O.headerGradient,
      children: (0, r.jsxs)("div", {
        className: O.churnDiscountBanner,
        children: [(0, r.jsxs)("div", {
          className: O.headerLabel,
          children: [(0, r.jsx)(d.Z, {
            color: "currentcolor",
            className: O.churnDiscountBannerWordMark,
            "aria-label": y.intl.string(y.t.lpNrPj)
          }), null != P && (0, r.jsx)(m.mn, {
            text: y.intl.formatToPlainString(y.t.AYcXGR, {
              discountOfferAmount: P.discount.amount
            }),
            className: O.churnDiscountPill,
            colorOptions: m.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL
          }), (0, r.jsx)(a.Text, {
            className: O.churnDiscountBannerExpiryDate,
            variant: "text-sm/medium",
            color: "text-primary",
            children: null != P && k
          })]
        }), (0, r.jsx)("div", {
          className: O.selectPlanDivider
        }), (0, r.jsxs)("div", {
          className: O.churnDiscountBannerContent,
          children: [(0, r.jsxs)("div", {
            className: O.churnDiscountBannerDetails,
            children: [null != P ? (0, r.jsx)(R, {
              discountOffer: P,
              premiumSubscription: t
            }) : (0, r.jsx)(N, {
              premiumSubscription: t,
              discountInfo: null != I ? I : S,
              invoicePreview: D
            }), (0, r.jsx)("div", {
              className: O.churnDiscountBannerButton,
              children: j()
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