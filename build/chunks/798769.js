/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(607070),
  s = n(409813),
  l = n(669079),
  c = n(170579),
  u = n(616030),
  d = n(474936),
  f = n(388032),
  _ = n(76980);

function p(e) {
  let {
    currentStep: t,
    className: n,
    purchaseState: p,
    premiumType: h,
    useWinterTheme: g = !1,
    onClose: m,
    hideCloseButton: E,
    showTrialBadge: v,
    showDiscountBadge: b,
    isGift: y,
    giftRecipient: O
  } = e, S = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), I = g ? d.nL.WINTER : d.nL.DEFAULT, T = () => {
    switch (t) {
      case s.h8.PLAN_SELECT:
        return h === d.p9.TIER_0 ? f.NW.string(f.t.rk4Uu7) : f.NW.string(f.t["7YWj6+"]);
      case s.h8.ADD_PAYMENT_STEPS:
        return f.NW.string(f.t.vHqbJC);
      case s.h8.REVIEW:
        return f.NW.string(f.t.wKaVLC);
      default:
        return f.NW.string(f.t["7YWj6+"])
    }
  };
  return y && (0, l.pO)(O) && t !== s.h8.CONFIRM ? (0, r.jsxs)(o.xBx, {
    className: _.modalHeaderCustomGift,
    separator: !1,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: T()
    }), (0, r.jsx)(o.olH, {
      onClick: m,
      className: _.closeButton,
      innerClassName: _.closeButtonInner
    })]
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(c.Z, {
      hideCloseOnFullScreen: !0,
      hideCloseButton: E,
      shouldShowPrice: !0,
      upgradeToPremiumType: h,
      renderAnimation: () => h === d.p9.TIER_0 ? (0, r.jsx)(u.zC, {
        className: _.headerAnimation,
        currentStep: t,
        purchaseState: p,
        pause: S
      }) : h === d.p9.TIER_1 ? (0, r.jsx)(u.tK, {
        className: _.headerAnimation,
        currentStep: t,
        purchaseState: p,
        pause: S
      }) : (0, r.jsx)(u.Bk, {
        className: _.headerAnimation,
        currentStep: t,
        purchaseState: p,
        pause: S
      }),
      plan: null,
      isGift: !1,
      className: _.header,
      onClose: m,
      headerTheme: I,
      showTrialBadge: v,
      showDiscountBadge: b
    })
  })
}