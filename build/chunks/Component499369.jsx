/** Chunk was on web.js **/
/** chunk id: 499369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk166532 = require("./166532.js"),
  Chunk45938 = require("./45938.js"),
  Chunk28003 = require("./28003.jsx"),
  Chunk763795 = require("./763795.jsx"),
  Chunk602980 = require("./602980.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk812941 = require("./812941.js");

function h(e) {
  let {
    currentStep: t,
    className: n,
    purchaseState: h,
    premiumType: m,
    onClose: g,
    hideCloseButton: E,
    showTrialBadge: y,
    showDiscountBadge: b,
    isGift: O,
    giftRecipient: v,
    isEligibleForTrial: A,
    enablePremiumBrandRefresh: I,
    isDisplayingWowMomentConfirmation: S,
    isPremiumGroupPurchase: T
  } = e, C = (0, i.bG)([o.A], () => o.A.useReducedMotion), N = () => {
    switch (t) {
      case s.pn.PLAN_SELECT:
        return m === f.PremiumTypes.TIER_0 ? p.intl.string(p.t.rk4Uu8) : p.intl.string(p.t["7YWj6+"]);
      case s.pn.ADD_PAYMENT_STEPS:
        return p.intl.string(p.t.vHqbJE);
      case s.pn.REVIEW:
        return p.intl.string(p.t.wKaVLC);
      default:
        return p.intl.string(p.t["7YWj6+"])
    }
  };
  return O && (0, l.Ik)(v) && t !== s.pn.CONFIRM ? (0, r.jsxs)(a.rQ0, {
    className: _.sA,
    separator: false,
    "data-migration-pending": true,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: N()
    }), (0, r.jsx)(a.s_y, {
      onClick: g,
      className: _.b,
      innerClassName: _.Dd,
      "data-migration-pending": true
    })]
  }) : I || S ? (0, r.jsx)(c.A, {
    hideCloseOnFullScreen: true,
    hideCloseButton: E,
    upgradeToPremiumType: m,
    onClose: g,
    isEligibleForTrial: A,
    showTrialBadge: y,
    showDiscountBadge: b,
    isPremiumGroupPurchase: T
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(u.A, {
      hideCloseOnFullScreen: true,
      hideCloseButton: E,
      shouldShowPrice: true,
      upgradeToPremiumType: m,
      renderAnimation: () => m === f.PremiumTypes.TIER_0 ? (0, r.jsx)(d.Ss, {
        className: _.mv,
        currentStep: t,
        purchaseState: h,
        pause: C
      }) : m === f.PremiumTypes.TIER_1 ? (0, r.jsx)(d.LQ, {
        className: _.mv,
        currentStep: t,
        purchaseState: h,
        pause: C
      }) : (0, r.jsx)(d.Ec, {
        className: _.mv,
        currentStep: t,
        purchaseState: h,
        pause: C
      }),
      plan: null,
      isGift: false,
      className: _.wx,
      onClose: g,
      showTrialBadge: y,
      showDiscountBadge: b
    })
  })
}