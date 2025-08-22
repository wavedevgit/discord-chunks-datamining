/** Chunk was on 54400 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => L
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: j,
    priceOptions: m,
    defaultPlanId: L
  } = (0, u.JL)(), {
    isGift: b,
    claimableRewards: y
  } = (0, c.wD)(), S = b && null != y && y.length > 0, E = (0, C.N)(i), O = (0, a.Nx)(), P = (0, o.ZP)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(g, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: l,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: C
      } = e;
      r(n);
      let d = x.h8.PLAN_SELECT,
        c = (0, p.k5)(t);
      c !== f.Si.TIER_1 && c !== f.Si.TIER_2 || n !== f.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
      let u = (0, _.T)({
          userTrialOffer: s,
          isGift: l,
          skuId: n
        }),
        j = (0, h.Kp)({
          isTrial: u,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== x.h8.WHAT_YOU_LOSE && j && (d = x.h8.REVIEW, a((0, h.nA)(n, t, C))), i(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: t,
      isGift: b,
      userTrialOffer: E,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: j,
      defaultPlanId: L
    }),
    onClose: n,
    isGift: b,
    inOfferExperience: O,
    priceOptions: m,
    showPromotionalGiftBanner: S,
    enablePremiumBrandRefresh: P
  })
}

function g(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: a,
    priceOptions: o,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: c
  } = e, u = c ? (0, r.jsx)(s.X6q, {
    variant: "heading-lg/bold",
    children: j.intl.string(j.t["r+SebW"])
  }) : (0, r.jsx)(s.vwX, {
    tag: s.RB0.H4,
    children: j.intl.string(j.t["r+SebW"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: l()(m.skuSelectModalHeader, {
        [m.premiumBrandRefreshHeader]: c
      }),
      separator: false,
      children: [u, (0, r.jsx)(s.olH, {
        className: m.close,
        innerClassName: m.closeInner,
        onClick: n
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: l()(m.skuSelectModalContent, {
        [m.modalSize]: !c,
        [m.modalPadding]: a && !c,
        [m.premiumBrandRefreshContent]: c
      }),
      children: (0, r.jsx)(d.Z, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: o,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: c
      })
    })]
  })
}