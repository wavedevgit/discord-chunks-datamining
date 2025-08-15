/** Chunk was on 54433 **/
/** chunk id: 846464, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  q: () => L
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk140465 = require("./140465.js"),
  Chunk47280 = require("./47280.js"),
  Chunk639119 = require("./639119.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk48175 = require("./48175.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk360026 = require("./360026.js");

function L(e) {
  let {
    handleStepChange: n,
    handleClose: t,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: m,
    priceOptions: _,
    defaultPlanId: L
  } = (0, p.JL)(), {
    isGift: y,
    claimableRewards: E
  } = (0, u.wD)(), S = y && null != E && E.length > 0, v = (0, C.N)(r), P = (0, a.Nx)(), O = (0, o.ZP)({
    location: "PremiumPaymentSelect"
  });
  return (0, i.jsx)(g, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: n,
        newSkuId: t,
        setSelectedSkuId: i,
        handleStepChange: r,
        isGift: l,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: C
      } = e;
      i(t);
      let d = x.h8.PLAN_SELECT,
        u = (0, c.k5)(n);
      u !== f.Si.TIER_1 && u !== f.Si.TIER_2 || t !== f.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
      let p = (0, j.T)({
          userTrialOffer: s,
          isGift: l,
          skuId: t
        }),
        m = (0, h.Kp)({
          isTrial: p,
          isGift: l,
          selectedSkuId: t,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== x.h8.WHAT_YOU_LOSE && m && (d = x.h8.REVIEW, a((0, h.nA)(t, n, C))), r(d, {
        analyticsDataOverride: {
          sku_id: t
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: n,
      isGift: y,
      userTrialOffer: v,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: m,
      defaultPlanId: L
    }),
    onClose: t,
    isGift: y,
    inOfferExperience: P,
    priceOptions: _,
    showPromotionalGiftBanner: S,
    enablePremiumBrandRefresh: O
  })
}

function g(e) {
  let {
    selectSku: n,
    onClose: t,
    isGift: r,
    inOfferExperience: a,
    priceOptions: o,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: u
  } = e, p = u ? (0, i.jsx)(s.X6q, {
    variant: "heading-lg/bold",
    children: m.intl.string(m.t["r+SebW"])
  }) : (0, i.jsx)(s.vwX, {
    tag: s.RB0.H4,
    children: m.intl.string(m.t["r+SebW"])
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: l()(_.skuSelectModalHeader, {
        [_.premiumBrandRefreshHeader]: u
      }),
      separator: false,
      children: [p, (0, i.jsx)(s.olH, {
        className: _.close,
        innerClassName: _.closeInner,
        onClick: t
      })]
    }), (0, i.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: l()(_.skuSelectModalContent, {
        [_.modalSize]: !u,
        [_.modalPadding]: a && !u,
        [_.premiumBrandRefreshContent]: u
      }),
      children: (0, i.jsx)(d.Z, {
        onSelectSku: e => n((0, c.Wz)(e)),
        isGift: r,
        priceOptions: o,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: u
      })
    })]
  })
}