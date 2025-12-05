/** Chunk was on 23242 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk241986 = require("./241986.js"),
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

function y(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: a,
    startedPaymentFlowWithPaymentSourcesRef: s,
    setSelectedPlanId: u,
    priceOptions: v,
    defaultPlanId: j,
    hasPaymentSources: y
  } = (0, m.JL)(), {
    isGift: S,
    claimableRewards: x
  } = (0, d.wD)(), P = S && null != x && x.length > 0, O = (0, o.N)(r);
  return (0, l.jsx)(b, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: l,
        handleStepChange: r,
        isGift: i,
        userTrialOffer: a,
        setSelectedPlanId: s,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: u
      } = e;
      l(n);
      let d = p.h8.PLAN_SELECT,
        m = (0, c.k5)(t);
      m !== g.Si.TIER_1 && m !== g.Si.TIER_2 || n !== g.Si.TIER_0 || i || (d = p.h8.WHAT_YOU_LOSE);
      let v = (0, f.T)({
          userTrialOffer: a,
          isGift: i,
          skuId: n
        }),
        j = (0, h.Kp)({
          isTrial: v,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== p.h8.WHAT_YOU_LOSE && j && (d = p.h8.REVIEW, s((0, h.nA)(n, t, u))), r(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: S,
      userTrialOffer: O,
      startedPaymentFlowWithPaymentSources: s.current,
      setSelectedPlanId: u,
      defaultPlanId: j
    }),
    onSelectPremiumGroup: () => (function(e) {
      let {
        setSelectedPlanId: t,
        handleStepChange: n,
        hasPaymentSources: l,
        setSelectedSkuId: r
      } = e;
      r((0, c.Wz)(g.Si.TIER_2)), t(g.Xh.PREMIUM_GROUP_MONTH), n(l ? p.h8.REVIEW : p.h8.ADD_PAYMENT_STEPS, {
        analyticsDataOverride: {
          sku_id: g.Si.TIER_2
        }
      })
    })({
      setSelectedPlanId: u,
      handleStepChange: t,
      hasPaymentSources: y,
      setSelectedSkuId: i
    }),
    onClose: n,
    isGift: S,
    priceOptions: v,
    showPromotionalGiftBanner: P
  })
}

function b(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: r,
    priceOptions: o,
    showPromotionalGiftBanner: d,
    onSelectPremiumGroup: m
  } = e, p = (0, s.Z)({
    location: "PremiumPaymentSKUSelectStep"
  }) && !r;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.xBx, {
      "data-migration-pending": true,
      className: i()(j.skuSelectModalHeader, j.premiumBrandRefreshHeader),
      separator: false,
      children: (0, l.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          children: v.intl.string(v.t["r+SebU"])
        }), (0, l.jsx)(a.olH, {
          "data-migration-pending": true,
          className: j.close,
          innerClassName: j.closeInner,
          onClick: n
        })]
      })
    }), p ? (0, l.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: j.skuSelectWithPremiumGroupModalContent,
      children: (0, l.jsx)(u.wz, {
        onSelectSku: e => t((0, c.Wz)(e)),
        onSelectPremiumGroup: m,
        priceOptions: o,
        showPromotionalGiftBanner: d
      })
    }) : (0, l.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: i()(j.skuSelectModalContent, j.premiumBrandRefreshContent),
      children: (0, l.jsx)(u.ZP, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: r,
        priceOptions: o,
        showPromotionalGiftBanner: d
      })
    })]
  })
}