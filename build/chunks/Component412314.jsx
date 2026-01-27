/** Chunk was on web.js **/
/** chunk id: 412314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk816252 = require("./816252.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk916974 = require("./916974.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk555672 = require("./555672.js"),
  Chunk303930 = require("./303930.js"),
  Chunk398932 = require("./398932.js");
let E = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    premiumSubscription: E,
    setStep: y,
    applyOffer: b,
    churnUserDiscountOffer: O,
    discountedPrice: v,
    fullPrice: A
  } = (0, d.X)(), [I, S] = (0, i.useState)(false), [T, C] = (0, i.useState)(false), N = async () => {
    if (null === O) return void C(true);
    S(true), C(false);
    try {
      await b(), y(u.g.DISCOUNT_APPLIED)
    } catch (e) {
      C(true), S(false)
    }
  };
  if (null === O || null === v) return (0, r.jsx)("div", {
    className: h.dc,
    children: (0, r.jsx)(o.y$y, {})
  });
  let w = n === f.PremiumTypes.TIER_2,
    R = [{
      text: _.intl.string(_.t.zl7LZp),
      onClick: () => t(),
      variant: "secondary",
      disabled: I
    }, {
      text: _.intl.string(_.t.CKSuZJ),
      onClick: () => N(),
      variant: "primary",
      icon: o.tvc,
      loading: I,
      disabled: I
    }];
  return (0, r.jsxs)(a.ExpressiveModal, {
    graphic: {
      type: "image",
      src: w ? g.A : m
    },
    gradientColor: w ? "nitro-pink" : "nitro-green",
    transitionState: e,
    title: E.status === p.Dmq.CANCELED ? _.intl.string(_.t["2Otzti"]) : "".concat(_.intl.format(_.t.q9Vxu4, {
      percent: O.discount.amount
    })),
    actions: R,
    onClose: async () => t(),
    children: [(0, r.jsx)("div", {
      className: h.TA,
      children: (0, r.jsx)(c._, {
        userDiscountOffer: O,
        offerState: c.b.CONFIRMING
      })
    }), (0, r.jsx)("div", {
      className: h.V6,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: E.status === p.Dmq.CANCELED ? _.intl.format(_.t.mY3ysK, {
          discountedPrice: v,
          billingPeriod: (0, l.Ke)(O.discount.user_usage_limit_interval),
          numMonths: O.discount.user_usage_limit,
          fullPrice: A,
          paidURL: s.A.getArticleURL(p.MVz.PAID_TERMS)
        }) : _.intl.format(_.t.hrGTjG, {
          discountedPrice: v,
          billingPeriod: (0, l.Ke)(O.discount.user_usage_limit_interval),
          numMonths: O.discount.user_usage_limit,
          fullPrice: A,
          helpdeskArticle: s.A.getArticleURL(p.MVz.PAID_TERMS)
        })
      })
    }), T ? (0, r.jsx)(a.wx6, {
      type: "critical",
      children: _.intl.string(_.t["5mlOCW"])
    }) : null]
  })
}