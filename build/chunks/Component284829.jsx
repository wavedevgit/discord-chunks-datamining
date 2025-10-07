/** Chunk was on 69432 **/
/** chunk id: 284829, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk434333 = require("./434333.jsx"),
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
  Chunk288541 = require("./288541.js");
let P = () => {
  let {
    transitionState: t,
    onClose: e,
    premiumType: n,
    premiumSubscription: P,
    setStep: v,
    applyOffer: y,
    churnUserDiscountOffer: E,
    discountedPrice: S,
    fullPrice: _
  } = (0, Chunk594135.a)(), [N, j] = (0, Chunk647438.useState)(false), [D, T] = (0, Chunk647438.useState)(false), A = async () => {
    if (null === E) return void T(true);
    j(true), T(false);
    try {
      await y(), v(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (t) {
      T(true), j(false)
    }
  };
  if (null === E || null === S) return (0, Chunk951288.jsx)("div", {
    className: Chunk950728.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  let O = require === Chunk474936.p9.TIER_2,
    R = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZm),
      onClick: () => exports(),
      variant: "secondary",
      disabled: N
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZG),
      onClick: () => A(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: N,
      disabled: N
    }];
  return (0, Chunk951288.jsxs)(Chunk793030.ExpressiveModal, {
    graphic: {
      type: "image",
      src: O ? Chunk288541.Z : Chunk997892
    },
    gradientColor: O ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: P.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.string(Chunk388032.t["2Otztr"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu7, {
      percent: E.discount.amount
    })),
    actions: R,
    onClose: async () => exports(),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk950728.offerDetailContainer,
      children: (0, Chunk951288.jsx)(Chunk10508.o, {
        userDiscountOffer: E,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk950728.legalContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: P.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.format(Chunk388032.t.mY3ysL, {
          discountedPrice: S,
          billingPeriod: (0, Chunk74538.JP)(E.discount.user_usage_limit_interval),
          numMonths: E.discount.user_usage_limit,
          fullPrice: _,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjI, {
          discountedPrice: S,
          billingPeriod: (0, Chunk74538.JP)(E.discount.user_usage_limit_interval),
          numMonths: E.discount.user_usage_limit,
          fullPrice: _,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), D ? (0, Chunk951288.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}