/** Chunk was on 69432 **/
/** chunk id: 284829, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk607993 = require("./607993.js"),
  Chunk997892 = require("./997892.js"),
  Chunk288541 = require("./288541.js");
let P = () => {
  let {
    transitionState: t,
    onClose: e,
    premiumType: n,
    premiumSubscription: P,
    setStep: C,
    applyOffer: y,
    churnUserDiscountOffer: v,
    discountedPrice: T,
    fullPrice: E
  } = (0, Chunk594135.a)(), [S, _] = (0, Chunk647438.useState)(false), [N, j] = (0, Chunk647438.useState)(false), D = async () => {
    if (null === v) return void j(true);
    _(true), j(false);
    try {
      await y(), C(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (t) {
      j(true), _(false)
    }
  };
  if (null === v || null === T) return (0, Chunk951288.jsx)("div", {
    className: Chunk607993.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  let O = require === Chunk474936.PremiumTypes.TIER_2,
    b = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZp),
      onClick: () => exports(),
      variant: "secondary",
      disabled: S
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZJ),
      onClick: () => D(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: S,
      disabled: S
    }];
  return (0, Chunk951288.jsxs)(Chunk793030.ExpressiveModal, {
    graphic: {
      type: "image",
      src: O ? Chunk288541.Z : Chunk997892
    },
    gradientColor: O ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: P.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.string(Chunk388032.t["2Otzti"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu4, {
      percent: v.discount.amount
    })),
    actions: b,
    onClose: async () => exports(),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk607993.offerDetailContainer,
      children: (0, Chunk951288.jsx)(Chunk10508.o, {
        userDiscountOffer: v,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk607993.legalContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: P.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.format(Chunk388032.t.mY3ysK, {
          discountedPrice: T,
          billingPeriod: (0, Chunk74538.JP)(v.discount.user_usage_limit_interval),
          numMonths: v.discount.user_usage_limit,
          fullPrice: E,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjG, {
          discountedPrice: T,
          billingPeriod: (0, Chunk74538.JP)(v.discount.user_usage_limit_interval),
          numMonths: v.discount.user_usage_limit,
          fullPrice: E,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), N ? (0, Chunk951288.jsx)(Chunk793030.M14, {
      type: "critical",
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
    }) : null]
  })
}