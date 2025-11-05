/** Chunk was on 54400 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk140465 = require("./140465.js"),
  Chunk283066 = require("./283066.js"),
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

function g(e) {
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
    defaultPlanId: g
  } = (0, p.JL)(), {
    isGift: y,
    claimableRewards: L
  } = (0, u.wD)(), v = y && null != L && L.length > 0, S = (0, C.N)(i), O = (0, s.Nx)(), E = (0, o.Z)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(b, {
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
      u !== _.Si.TIER_1 && u !== _.Si.TIER_2 || n !== _.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
      let p = (0, f.T)({
          userTrialOffer: a,
          isGift: l,
          skuId: n
        }),
        m = (0, h.Kp)({
          isTrial: p,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== x.h8.WHAT_YOU_LOSE && m && (d = x.h8.REVIEW, s((0, h.nA)(n, t, C))), i(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: t,
      isGift: y,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: m,
      defaultPlanId: g
    }),
    onClose: n,
    isGift: y,
    inOfferExperience: O,
    priceOptions: j,
    showPromotionalGiftBanner: v,
    enablePremiumBrandRefresh: E
  })
}

function b(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: s,
    priceOptions: o,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: u
  } = e, p = u ? (0, r.jsx)(a.Heading, {
    variant: "heading-lg/bold",
    children: m.intl.string(m.t["r+SebU"])
  }) : (0, r.jsx)(a.Heading, {
    variant: "heading-md/semibold",
    children: m.intl.string(m.t["r+SebU"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.xBx, {
      "data-migration-pending": true,
      className: l()(j.skuSelectModalHeader, {
        [j.premiumBrandRefreshHeader]: u
      }),
      separator: false,
      children: (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [p, (0, r.jsx)(a.olH, {
          "data-migration-pending": true,
          className: j.close,
          innerClassName: j.closeInner,
          onClick: n
        })]
      })
    }), (0, r.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: l()(j.skuSelectModalContent, {
        [j.modalSize]: !u,
        [j.modalPadding]: s && !u,
        [j.premiumBrandRefreshContent]: u
      }),
      children: (0, r.jsx)(d.ZP, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: i,
        priceOptions: o,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: u
      })
    })]
  })
}