/** Chunk was on web.js **/
/** chunk id: 798769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk900678 = require("./900678.js");

function h(e) {
  let {
    currentStep: t,
    className: n,
    purchaseState: h,
    premiumType: m,
    onClose: g,
    hideCloseButton: E,
    showTrialBadge: b,
    showDiscountBadge: y,
    isGift: O,
    giftRecipient: v,
    isEligibleForTrial: I,
    enablePremiumBrandRefresh: S,
    isDisplayingWowMomentConfirmation: T
  } = e, A = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), C = () => {
    switch (t) {
      case s.h8.PLAN_SELECT:
        return m === f.PremiumTypes.TIER_0 ? _.intl.string(_.t.rk4Uu8) : _.intl.string(_.t["7YWj6+"]);
      case s.h8.ADD_PAYMENT_STEPS:
        return _.intl.string(_.t.vHqbJE);
      case s.h8.REVIEW:
        return _.intl.string(_.t.wKaVLC);
      default:
        return _.intl.string(_.t["7YWj6+"])
    }
  };
  return O && (0, l.pO)(v) && t !== s.h8.CONFIRM ? (0, r.jsxs)(a.xBx, {
    className: p.modalHeaderCustomGift,
    separator: false,
    "data-migration-pending": true,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: C()
    }), (0, r.jsx)(a.olH, {
      onClick: g,
      className: p.closeButton,
      innerClassName: p.closeButtonInner,
      "data-migration-pending": true
    })]
  }) : S || T ? (0, r.jsx)(c.Z, {
    hideCloseOnFullScreen: true,
    hideCloseButton: E,
    upgradeToPremiumType: m,
    onClose: g,
    isEligibleForTrial: I,
    showTrialBadge: b,
    showDiscountBadge: y
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(u.Z, {
      hideCloseOnFullScreen: true,
      hideCloseButton: E,
      shouldShowPrice: true,
      upgradeToPremiumType: m,
      renderAnimation: () => m === f.PremiumTypes.TIER_0 ? (0, r.jsx)(d.zC, {
        className: p.headerAnimation,
        currentStep: t,
        purchaseState: h,
        pause: A
      }) : m === f.PremiumTypes.TIER_1 ? (0, r.jsx)(d.tK, {
        className: p.headerAnimation,
        currentStep: t,
        purchaseState: h,
        pause: A
      }) : (0, r.jsx)(d.Bk, {
        className: p.headerAnimation,
        currentStep: t,
        purchaseState: h,
        pause: A
      }),
      plan: null,
      isGift: false,
      className: p.header,
      onClose: g,
      showTrialBadge: b,
      showDiscountBadge: y
    })
  })
}