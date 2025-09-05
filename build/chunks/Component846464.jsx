/** Chunk was on 4125 **/
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
  Chunk178397 = require("./178397.js");

function L(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: a,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: m,
    priceOptions: j,
    defaultPlanId: L
  } = (0, p.JL)(), {
    isGift: b,
    claimableRewards: y
  } = (0, u.wD)(), S = b && null != y && y.length > 0, v = (0, C.N)(i), E = (0, s.Nx)(), O = (0, o.ZP)({
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
        userTrialOffer: a,
        setSelectedPlanId: s,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: C
      } = e;
      r(n);
      let d = x.h8.PLAN_SELECT,
        u = (0, c.k5)(t);
      u !== f.Si.TIER_1 && u !== f.Si.TIER_2 || n !== f.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
      let p = (0, h.T)({
          userTrialOffer: a,
          isGift: l,
          skuId: n
        }),
        m = (0, _.Kp)({
          isTrial: p,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== x.h8.WHAT_YOU_LOSE && m && (d = x.h8.REVIEW, s((0, _.nA)(n, t, C))), i(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: t,
      isGift: b,
      userTrialOffer: v,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: m,
      defaultPlanId: L
    }),
    onClose: n,
    isGift: b,
    inOfferExperience: E,
    priceOptions: j,
    showPromotionalGiftBanner: S,
    enablePremiumBrandRefresh: O
  })
}

function g(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: s,
    priceOptions: o,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: u
  } = e, p = u ? (0, r.jsx)(a.X6q, {
    variant: "heading-lg/bold",
    children: m.intl.string(m.t["r+SebW"])
  }) : (0, r.jsx)(a.vwX, {
    tag: a.RB0.H4,
    children: m.intl.string(m.t["r+SebW"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.xBx, {
      "data-migration-pending": true,
      className: l()(j.skuSelectModalHeader, {
        [j.premiumBrandRefreshHeader]: u
      }),
      separator: false,
      children: [p, (0, r.jsx)(a.olH, {
        className: j.close,
        innerClassName: j.closeInner,
        onClick: n
      })]
    }), (0, r.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: l()(j.skuSelectModalContent, {
        [j.modalSize]: !u,
        [j.modalPadding]: s && !u,
        [j.premiumBrandRefreshContent]: u
      }),
      children: (0, r.jsx)(d.Z, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: i,
        priceOptions: o,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: u
      })
    })]
  })
}