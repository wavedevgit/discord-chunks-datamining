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
  } = (0, Chunk594135.a)(), [I, T] = (0, Chunk473749.useState)(false), [C, A] = (0, Chunk473749.useState)(false), N = async () => {
    if (null === O) return void A(true);
    T(true), A(false);
    try {
      await y(), b(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (e) {
      A(true), T(false)
    }
  };
  if (null === O || null === v) return (0, Chunk54381.jsx)("div", {
    className: Chunk201007.spinnerContainer,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  });
  let P = require === Chunk474936.PremiumTypes.TIER_2,
    R = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZp),
      onClick: () => exports(),
      variant: "secondary",
      disabled: I
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZJ),
      onClick: () => N(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: I,
      disabled: I
    }];
  return (0, Chunk54381.jsxs)(Chunk793030.ExpressiveModal, {
    graphic: {
      type: "image",
      src: P ? Chunk942257.Z : Chunk997892
    },
    gradientColor: P ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: E.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.string(Chunk388032.t["2Otzti"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu4, {
      percent: O.discount.amount
    })),
    actions: R,
    onClose: async () => exports(),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk201007.offerDetailContainer,
      children: (0, Chunk54381.jsx)(Chunk10508.o, {
        userDiscountOffer: O,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk201007.legalContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: E.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.format(Chunk388032.t.mY3ysK, {
          discountedPrice: v,
          billingPeriod: (0, Chunk74538.JP)(O.discount.user_usage_limit_interval),
          numMonths: O.discount.user_usage_limit,
          fullPrice: S,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjG, {
          discountedPrice: v,
          billingPeriod: (0, Chunk74538.JP)(O.discount.user_usage_limit_interval),
          numMonths: O.discount.user_usage_limit,
          fullPrice: S,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), C ? (0, Chunk54381.jsx)(Chunk793030.M14, {
      type: "critical",
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
    }) : null]
  })
}