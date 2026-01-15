/** Chunk was on web.js **/
/** chunk id: 284829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk10508 = require("./10508.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201007 = require("./201007.js"),
  Chunk997892 = require("./997892.js"),
  Chunk942257 = require("./942257.js");
let E = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    premiumSubscription: E,
    setStep: b,
    applyOffer: y,
    churnUserDiscountOffer: O,
    discountedPrice: v,
    fullPrice: S
  } = (0, d.a)(), [I, T] = (0, i.useState)(false), [C, A] = (0, i.useState)(false), N = async () => {
    if (null === O) return void A(true);
    T(true), A(false);
    try {
      await y(), b(u.R.DISCOUNT_APPLIED)
    } catch (e) {
      A(true), T(false)
    }
  };
  if (null === O || null === v) return (0, r.jsx)("div", {
    className: h.spinnerContainer,
    children: (0, r.jsx)(o.$jN, {})
  });
  let P = n === f.PremiumTypes.TIER_2,
    w = [{
      text: _.intl.string(_.t.zl7LZp),
      onClick: () => t(),
      variant: "secondary",
      disabled: I
    }, {
      text: _.intl.string(_.t.CKSuZJ),
      onClick: () => N(),
      variant: "primary",
      icon: o.SrA,
      loading: I,
      disabled: I
    }];
  return (0, r.jsxs)(a.ExpressiveModal, {
    graphic: {
      type: "image",
      src: P ? g.Z : m
    },
    gradientColor: P ? "nitro-pink" : "nitro-green",
    transitionState: e,
    title: E.status === p.O0b.CANCELED ? _.intl.string(_.t["2Otzti"]) : "".concat(_.intl.format(_.t.q9Vxu4, {
      percent: O.discount.amount
    })),
    actions: w,
    onClose: async () => t(),
    children: [(0, r.jsx)("div", {
      className: h.offerDetailContainer,
      children: (0, r.jsx)(c.o, {
        userDiscountOffer: O,
        offerState: c.w.CONFIRMING
      })
    }), (0, r.jsx)("div", {
      className: h.legalContainer,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: E.status === p.O0b.CANCELED ? _.intl.format(_.t.mY3ysK, {
          discountedPrice: v,
          billingPeriod: (0, l.JP)(O.discount.user_usage_limit_interval),
          numMonths: O.discount.user_usage_limit,
          fullPrice: S,
          paidURL: s.Z.getArticleURL(p.BhN.PAID_TERMS)
        }) : _.intl.format(_.t.hrGTjG, {
          discountedPrice: v,
          billingPeriod: (0, l.JP)(O.discount.user_usage_limit_interval),
          numMonths: O.discount.user_usage_limit,
          fullPrice: S,
          helpdeskArticle: s.Z.getArticleURL(p.BhN.PAID_TERMS)
        })
      })
    }), C ? (0, r.jsx)(a.M14, {
      type: "critical",
      children: _.intl.string(_.t["5mlOCW"])
    }) : null]
  })
}