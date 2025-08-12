/** Chunk was on 20501 **/
/** chunk id: 284829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk971492 = require("./971492.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");
let _ = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    premiumSubscription: _,
    setStep: j,
    applyOffer: E,
    churnUserDiscountOffer: C,
    discountedPrice: O,
    fullPrice: v
  } = (0, Chunk594135.a)(), [S, T] = (0, Chunk73800.useState)(false), [I, N] = (0, Chunk73800.useState)(false), y = async () => {
    if (null === C) return void N(true);
    T(true), N(false);
    try {
      await E(), j(Chunk45474.R.DISCOUNT_APPLIED)
    } catch (e) {
      N(true), T(false)
    }
  };
  if (null === C) return null;
  let A = require === Chunk474936.p9.TIER_2,
    P = [{
      text: Chunk388032.intl.string(Chunk388032.t.zl7LZm),
      onClick: () => exports(),
      variant: "secondary",
      disabled: S
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.CKSuZG),
      onClick: () => y(),
      variant: "primary",
      icon: Chunk481060.SrA,
      loading: S,
      disabled: S
    }];
  return (0, Chunk255367.jsxs)(Chunk667202.I, {
    graphic: {
      type: "image",
      src: A ? Chunk234286 : Chunk997892
    },
    gradientColor: A ? "nitro-pink" : "nitro-green",
    transitionState: module,
    title: null != _.canceledAt ? Chunk388032.intl.string(Chunk388032.t["2Otztr"]) : "".concat(Chunk388032.intl.format(Chunk388032.t.q9Vxu7, {
      percent: C.discount.amount
    })),
    actions: P,
    onClose: async () => exports(),
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk971492.offerDetailContainer,
      children: (0, Chunk255367.jsx)(Chunk10508.o, {
        userDiscountOffer: C,
        offerState: Chunk10508.w.CONFIRMING
      })
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk971492.legalContainer,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: null != _.canceledAt ? Chunk388032.intl.format(Chunk388032.t.mY3ysL, {
          discountedPrice: O,
          billingPeriod: (0, Chunk74538.JP)(C.discount.user_usage_limit_interval),
          numMonths: C.discount.user_usage_limit,
          fullPrice: v,
          paidURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        }) : Chunk388032.intl.format(Chunk388032.t.hrGTjI, {
          discountedPrice: O,
          billingPeriod: (0, Chunk74538.JP)(C.discount.user_usage_limit_interval),
          numMonths: C.discount.user_usage_limit,
          fullPrice: v,
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })
    }), I ? (0, Chunk255367.jsx)(Chunk434333.k, {
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
    }) : null]
  })
}