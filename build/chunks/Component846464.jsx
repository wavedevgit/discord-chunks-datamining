/** Chunk was on 54400 **/
/** chunk id: 846464, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  q: () => m
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

function m(e) {
  let {
    handleStepChange: n,
    handleClose: t,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: j,
    priceOptions: L,
    defaultPlanId: m
  } = (0, u.JL)(), {
    isGift: S,
    claimableRewards: y
  } = (0, c.wD)(), E = S && null != y && y.length > 0, b = (0, C.N)(i), P = (0, a.Nx)(), O = (0, o.ZP)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(g, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: n,
        newSkuId: t,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: l,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: C
      } = e;
      r(t);
      let d = x.h8.PLAN_SELECT,
        c = (0, p.k5)(n);
      c !== h.Si.TIER_1 && c !== h.Si.TIER_2 || t !== h.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
      let u = (0, f.T)({
          userTrialOffer: s,
          isGift: l,
          skuId: t
        }),
        j = (0, _.Kp)({
          isTrial: u,
          isGift: l,
          selectedSkuId: t,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== x.h8.WHAT_YOU_LOSE && j && (d = x.h8.REVIEW, a((0, _.nA)(t, n, C))), i(d, {
        analyticsDataOverride: {
          sku_id: t
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: n,
      isGift: S,
      userTrialOffer: b,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: j,
      defaultPlanId: m
    }),
    onClose: t,
    isGift: S,
    inOfferExperience: P,
    priceOptions: L,
    showPromotionalGiftBanner: E,
    enablePremiumBrandRefresh: O
  })
}

function g(e) {
  let {
    selectSku: n,
    onClose: t,
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
      className: l()(L.skuSelectModalHeader, {
        [L.premiumBrandRefreshHeader]: c
      }),
      separator: false,
      children: [u, (0, r.jsx)(s.olH, {
        className: L.close,
        innerClassName: L.closeInner,
        onClick: t
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: l()(L.skuSelectModalContent, {
        [L.modalSize]: !c,
        [L.modalPadding]: a && !c,
        [L.premiumBrandRefreshContent]: c
      }),
      children: (0, r.jsx)(d.Z, {
        onSelectSku: e => n((0, p.Wz)(e)),
        isGift: i,
        priceOptions: o,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: c
      })
    })]
  })
}