/** Chunk was on web.js **/
/** chunk id: 798769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk409813 = require("./409813.js"),
  Chunk669079 = require("./669079.js"),
  Chunk709093 = require("./709093.jsx"),
  Chunk170579 = require("./170579.jsx"),
  Chunk616030 = require("./616030.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk15962 = require("./15962.js");

function m(e) {
  let {
    currentStep: t,
    className: n,
    purchaseState: m,
    premiumType: h,
    onClose: g,
    hideCloseButton: E,
    showTrialBadge: b,
    showDiscountBadge: y,
    isGift: O,
    giftRecipient: v,
    isEligibleForTrial: S,
    enablePremiumBrandRefresh: I,
    isDisplayingWowMomentConfirmation: T,
    isPremiumGroupPurchase: A
  } = e, C = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), N = () => {
    switch (t) {
      case s.h8.PLAN_SELECT:
        return h === f.PremiumTypes.TIER_0 ? p.intl.string(p.t.rk4Uu8) : p.intl.string(p.t["7YWj6+"]);
      case s.h8.ADD_PAYMENT_STEPS:
        return p.intl.string(p.t.vHqbJE);
      case s.h8.REVIEW:
        return p.intl.string(p.t.wKaVLC);
      default:
        return p.intl.string(p.t["7YWj6+"])
    }
  };
  return O && (0, l.pO)(v) && t !== s.h8.CONFIRM ? (0, r.jsxs)(a.xBx, {
    className: _.modalHeaderCustomGift,
    separator: false,
    "data-migration-pending": true,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: N()
    }), (0, r.jsx)(a.olH, {
      onClick: g,
      className: _.closeButton,
      innerClassName: _.closeButtonInner,
      "data-migration-pending": true
    })]
  }) : I || T ? (0, r.jsx)(c.Z, {
    hideCloseOnFullScreen: true,
    hideCloseButton: E,
    upgradeToPremiumType: h,
    onClose: g,
    isEligibleForTrial: S,
    showTrialBadge: b,
    showDiscountBadge: y,
    isPremiumGroupPurchase: A
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(u.Z, {
      hideCloseOnFullScreen: true,
      hideCloseButton: E,
      shouldShowPrice: true,
      upgradeToPremiumType: h,
      renderAnimation: () => h === f.PremiumTypes.TIER_0 ? (0, r.jsx)(d.zC, {
        className: _.headerAnimation,
        currentStep: t,
        purchaseState: m,
        pause: C
      }) : h === f.PremiumTypes.TIER_1 ? (0, r.jsx)(d.tK, {
        className: _.headerAnimation,
        currentStep: t,
        purchaseState: m,
        pause: C
      }) : (0, r.jsx)(d.Bk, {
        className: _.headerAnimation,
        currentStep: t,
        purchaseState: m,
        pause: C
      }),
      plan: null,
      isGift: false,
      className: _.header,
      onClose: g,
      showTrialBadge: b,
      showDiscountBadge: y
    })
  })
}