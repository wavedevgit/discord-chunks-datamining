/** Chunk was on 69432 **/
/** chunk id: 284829, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  U: () => y
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
  Chunk950728 = require("./950728.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js"),
  Chunk288541 = require("./288541.js");
let y = () => {
  let {
    transitionState: t,
    onClose: n,
    premiumType: e,
    premiumSubscription: y,
    setStep: S,
    applyOffer: _,
    churnUserDiscountOffer: D,
    discountedPrice: E,
    fullPrice: N
  } = (0, Chunk594135.a)(), [j, T] = (0, Chunk647438.useState)(false), [b, A] = (0, Chunk647438.useState)(false), {
    enabled: O
  } = Chunk219673.b.useConfig({
    location: "ConfirmDiscountStep"
  }), I = async () => {
    if (null === D) return void A(true);
    T(true), A(false);
    try {
      await _(), S(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (t) {
      A(true), T(false)
    }
  };
  if (null === D || null === E) return (0, Chunk951288.jsx)("div", {
    className: Chunk950728.spinnerContainer,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  let R = require === Chunk474936.p9.TIER_2,
    k = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZm),
      onClick: () => exports(),
      variant: "secondary",
      disabled: j
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZG),
      onClick: () => I(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: j,
      disabled: j
    }];
  return (0, Chunk951288.jsxs)(Chunk667202.I, {
    graphic: {
      type: "image",
      src: R ? O ? Chunk288541.Z : Chunk234286 : Chunk997892
    },
    gradientColor: R ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: y.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.string(Chunk388032.t["2Otztr"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu7, {
      percent: D.discount.amount
    })),
    actions: k,
    onClose: async () => exports(),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk950728.offerDetailContainer,
      children: (0, Chunk951288.jsx)(Chunk10508.o, {
        userDiscountOffer: D,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk950728.legalContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: y.status === Chunk981631.O0b.CANCELED ? Chunk388032.intl.format(Chunk388032.t.mY3ysL, {
          discountedPrice: E,
          billingPeriod: (0, Chunk74538.JP)(D.discount.user_usage_limit_interval),
          numMonths: D.discount.user_usage_limit,
          fullPrice: N,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjI, {
          discountedPrice: E,
          billingPeriod: (0, Chunk74538.JP)(D.discount.user_usage_limit_interval),
          numMonths: D.discount.user_usage_limit,
          fullPrice: N,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), b ? (0, Chunk951288.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}