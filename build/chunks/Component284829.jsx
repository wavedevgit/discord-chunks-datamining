/** Chunk was on web.js **/
/** chunk id: 284829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk434333 = require("./434333.jsx"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk219673 = require("./219673.js"),
  Chunk10508 = require("./10508.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607993 = require("./607993.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js"),
  Chunk288541 = require("./288541.js");
let O = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    premiumSubscription: O,
    setStep: v,
    applyOffer: I,
    churnUserDiscountOffer: T,
    discountedPrice: S,
    fullPrice: A
  } = (0, Chunk594135.a)(), [C, N] = (0, Chunk647438.useState)(false), [R, P] = (0, Chunk647438.useState)(false), {
    enabled: w
  } = Chunk219673.b.useConfig({
    location: "ConfirmDiscountStep"
  }), D = async () => {
    if (null === T) return void P(true);
    N(true), P(false);
    try {
      await I(), v(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (e) {
      P(true), N(false)
    }
  };
  if (null === T || null === S) return (0, Chunk951288.jsx)("div", {
    className: Chunk607993.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  let x = require === Chunk474936.p9.TIER_2,
    L = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZm),
      onClick: () => exports(),
      variant: "secondary",
      disabled: C
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZG),
      onClick: () => D(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: C,
      disabled: C
    }];
  return (0, Chunk951288.jsxs)(Chunk667202.I, {
    graphic: {
      type: "image",
      src: x ? w ? Chunk288541.Z : Chunk234286 : Chunk997892
    },
    gradientColor: x ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: O.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.string(Chunk388032.t["2Otztr"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu7, {
      percent: T.discount.amount
    })),
    actions: L,
    onClose: async () => exports(),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk607993.offerDetailContainer,
      children: (0, Chunk951288.jsx)(Chunk10508.o, {
        userDiscountOffer: T,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607993.legalContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: O.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.format(Chunk388032.t.mY3ysL, {
          discountedPrice: S,
          billingPeriod: (0, Chunk74538.JP)(T.discount.user_usage_limit_interval),
          numMonths: T.discount.user_usage_limit,
          fullPrice: A,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjI, {
          discountedPrice: S,
          billingPeriod: (0, Chunk74538.JP)(T.discount.user_usage_limit_interval),
          numMonths: T.discount.user_usage_limit,
          fullPrice: A,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), R ? (0, Chunk951288.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}