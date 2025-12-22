/** Chunk was on 23242 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk639119 = require("./639119.js"),
  Chunk260720 = require("./260720.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk48175 = require("./48175.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk343484 = require("./343484.js");

function v(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: l
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: a,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: u,
    priceOptions: y,
    defaultPlanId: j,
    hasPaymentSources: v
  } = (0, p.JL)(), {
    isGift: O,
    claimableRewards: S
  } = (0, d.wD)(), x = O && null != S && S.length > 0, P = (0, s.N)(l);
  return (0, r.jsx)(b, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: l,
        isGift: i,
        userTrialOffer: a,
        setSelectedPlanId: s,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: u
      } = e;
      r(n);
      let d = m.h8.PLAN_SELECT,
        p = (0, c.k5)(t);
      p !== g.Si.TIER_1 && p !== g.Si.TIER_2 || n !== g.Si.TIER_0 || i || (d = m.h8.WHAT_YOU_LOSE);
      let y = (0, f.T)({
          userTrialOffer: a,
          isGift: i,
          skuId: n
        }),
        j = (0, h.Kp)({
          isTrial: y,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== m.h8.WHAT_YOU_LOSE && j && (d = m.h8.REVIEW, s((0, h.nA)(n, t, u))), l(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: O,
      userTrialOffer: P,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: u,
      defaultPlanId: j
    }),
    onSelectPremiumGroup: () => (function(e) {
      let {
        setSelectedPlanId: t,
        handleStepChange: n,
        hasPaymentSources: r,
        setSelectedSkuId: l
      } = e;
      l((0, c.Wz)(g.Si.TIER_2)), t(g.Xh.PREMIUM_GROUP_MONTH), n(r ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS, {
        analyticsDataOverride: {
          sku_id: g.Si.TIER_2
        }
      })
    })({
      setSelectedPlanId: u,
      handleStepChange: t,
      hasPaymentSources: v,
      setSelectedSkuId: i
    }),
    onClose: n,
    isGift: O,
    priceOptions: y,
    showPromotionalGiftBanner: x
  })
}

function b(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: l,
    priceOptions: s,
    showPromotionalGiftBanner: d,
    onSelectPremiumGroup: p
  } = e, m = (0, o.x9)() && !l;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.xBx, {
      "data-migration-pending": true,
      className: i()(j.skuSelectModalHeader, j.premiumBrandRefreshHeader),
      separator: false,
      children: (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          children: y.intl.string(y.t["r+SebU"])
        }), (0, r.jsx)(a.olH, {
          "data-migration-pending": true,
          className: j.close,
          innerClassName: j.closeInner,
          onClick: n
        })]
      })
    }), m ? (0, r.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: j.skuSelectWithPremiumGroupModalContent,
      children: (0, r.jsx)(u.wz, {
        onSelectSku: e => t((0, c.Wz)(e)),
        onSelectPremiumGroup: p,
        priceOptions: s,
        showPromotionalGiftBanner: d
      })
    }) : (0, r.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: i()(j.skuSelectModalContent, j.premiumBrandRefreshContent),
      children: (0, r.jsx)(u.ZP, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: l,
        priceOptions: s,
        showPromotionalGiftBanner: d
      })
    })]
  })
}