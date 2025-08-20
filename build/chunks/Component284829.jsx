/** Chunk was on web.js **/
/** chunk id: 284829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk434333 = require("./434333.jsx"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk10508 = require("./10508.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950728 = require("./950728.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");
let b = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    premiumSubscription: b,
    setStep: y,
    applyOffer: O,
    churnUserDiscountOffer: v,
    discountedPrice: I,
    fullPrice: T
  } = (0, Chunk594135.a)(), [S, A] = (0, Chunk647438.useState)(false), [C, N] = (0, Chunk647438.useState)(false), R = async () => {
    if (null === v) return void N(true);
    A(true), N(false);
    try {
      await O(), y(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (e) {
      N(true), A(false)
    }
  };
  if (null === v) return null;
  let P = require === Chunk474936.p9.TIER_2,
    w = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZm),
      onClick: () => exports(),
      variant: "secondary",
      disabled: S
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZG),
      onClick: () => R(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: S,
      disabled: S
    }];
  return (0, Chunk951288.jsxs)(Chunk667202.I, {
    graphic: {
      type: "image",
      src: P ? Chunk234286 : Chunk997892
    },
    gradientColor: P ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: b.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.string(Chunk388032.t["2Otztr"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu7, {
      percent: v.discount.amount
    })),
    actions: w,
    onClose: async () => exports(),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk950728.offerDetailContainer,
      children: (0, Chunk951288.jsx)(Chunk10508.o, {
        userDiscountOffer: v,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk950728.legalContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: b.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.format(Chunk388032.t.mY3ysL, {
          discountedPrice: I,
          billingPeriod: (0, Chunk74538.JP)(v.discount.user_usage_limit_interval),
          numMonths: v.discount.user_usage_limit,
          fullPrice: T,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjI, {
          discountedPrice: I,
          billingPeriod: (0, Chunk74538.JP)(v.discount.user_usage_limit_interval),
          numMonths: v.discount.user_usage_limit,
          fullPrice: T,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), C ? (0, Chunk951288.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}