/** Chunk was on web.js **/
/** chunk id: 798769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk451316 = require("./451316.js");

function h(e) {
  let {
    currentStep: t,
    className: n,
    purchaseState: h,
    premiumType: m,
    useWinterTheme: g = false,
    onClose: E,
    hideCloseButton: b,
    showTrialBadge: y,
    showDiscountBadge: O,
    isGift: v,
    giftRecipient: I,
    isEligibleForTrial: T,
    enablePremiumBrandRefresh: S,
    isDisplayingWowMomentConfirmation: A
  } = e, N = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), C = g ? f.nL.WINTER : f.nL.DEFAULT, R = () => {
    switch (t) {
      case s.h8.PLAN_SELECT:
        return m === f.p9.TIER_0 ? _.intl.string(_.t.rk4Uu7) : _.intl.string(_.t["7YWj6+"]);
      case s.h8.ADD_PAYMENT_STEPS:
        return _.intl.string(_.t.vHqbJC);
      case s.h8.REVIEW:
        return _.intl.string(_.t.wKaVLC);
      default:
        return _.intl.string(_.t["7YWj6+"])
    }
  };
  return v && (0, l.pO)(I) && t !== s.h8.CONFIRM ? <o.xBx className={p.modalHeaderCustomGift} separator={false} data-migration-pending={true}>{<o.X6q variant={"heading-lg/semibold"}>{R()}</o.X6q>}{<o.olH onClick={E} className={p.closeButton} innerClassName={p.closeButtonInner} data-migration-pending={true} />}</o.xBx> : S || A ? <c.Z hideCloseOnFullScreen={true} hideCloseButton={b} upgradeToPremiumType={m} onClose={E} isEligibleForTrial={T} showTrialBadge={y} showDiscountBadge={O} /> : <div className={n}><u.Z hideCloseOnFullScreen={true} hideCloseButton={b} shouldShowPrice={true} upgradeToPremiumType={m} renderAnimation={() => m === f.p9.TIER_0 ? (0, r.jsx)(d.zC, {
        className: p.headerAnimation,
        currentStep: t,
        purchaseState: h,
        pause: N
      }) : m === f.p9.TIER_1 ? (0, r.jsx)(d.tK, {
        className: p.headerAnimation,
        currentStep: t,
        purchaseState: h,
        pause: N
      }) : (0, r.jsx)(d.Bk, {
        className: p.headerAnimation,
        currentStep: t,
        purchaseState: h,
        pause: N
      })} plan={null} isGift={false} className={p.header} onClose={E} headerTheme={C} showTrialBadge={y} showDiscountBadge={O} /></div>
}