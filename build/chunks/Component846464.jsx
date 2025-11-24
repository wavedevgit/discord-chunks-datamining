/** Chunk was on 54400 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: l
  } = e, {
    setSelectedSkuId: a,
    activeSubscription: i,
    startedPaymentFlowWithPaymentSourcesRef: c,
    setSelectedPlanId: v,
    priceOptions: x,
    defaultPlanId: P
  } = (0, m.JL)(), {
    isGift: j,
    claimableRewards: S
  } = (0, p.wD)(), _ = j && null != S && S.length > 0, w = (0, d.N)(l), C = (0, o.Nx)(), O = (0, s.Z)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(y, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: l,
        isGift: a,
        userTrialOffer: i,
        setSelectedPlanId: o,
        startedPaymentFlowWithPaymentSources: s,
        defaultPlanId: d
      } = e;
      r(n);
      let c = h.h8.PLAN_SELECT,
        p = (0, u.k5)(t);
      p !== g.Si.TIER_1 && p !== g.Si.TIER_2 || n !== g.Si.TIER_0 || a || (c = h.h8.WHAT_YOU_LOSE);
      let m = (0, b.T)({
          userTrialOffer: i,
          isGift: a,
          skuId: n
        }),
        v = (0, f.Kp)({
          isTrial: m,
          isGift: a,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      c !== h.h8.WHAT_YOU_LOSE && v && (c = h.h8.REVIEW, o((0, f.nA)(n, t, d))), l(c, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: i,
      newSkuId: e,
      setSelectedSkuId: a,
      handleStepChange: t,
      isGift: j,
      userTrialOffer: w,
      startedPaymentFlowWithPaymentSources: c.current,
      setSelectedPlanId: v,
      defaultPlanId: P
    }),
    onClose: n,
    isGift: j,
    inOfferExperience: C,
    priceOptions: x,
    showPromotionalGiftBanner: _,
    enablePremiumBrandRefresh: O
  })
}

function y(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: l,
    inOfferExperience: o,
    priceOptions: s,
    showPromotionalGiftBanner: d,
    enablePremiumBrandRefresh: p
  } = e, m = p ? (0, r.jsx)(i.Heading, {
    variant: "heading-lg/bold",
    children: v.intl.string(v.t["r+SebU"])
  }) : (0, r.jsx)(i.Heading, {
    variant: "heading-md/semibold",
    children: v.intl.string(v.t["r+SebU"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.xBx, {
      "data-migration-pending": true,
      className: a()(x.skuSelectModalHeader, {
        [x.premiumBrandRefreshHeader]: p
      }),
      separator: false,
      children: (0, r.jsxs)(i.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [m, (0, r.jsx)(i.olH, {
          "data-migration-pending": true,
          className: x.close,
          innerClassName: x.closeInner,
          onClick: n
        })]
      })
    }), (0, r.jsx)(i.hzk, {
      "data-migration-pending": true,
      className: a()(x.skuSelectModalContent, {
        [x.modalSize]: !p,
        [x.modalPadding]: o && !p,
        [x.premiumBrandRefreshContent]: p
      }),
      children: (0, r.jsx)(c.ZP, {
        onSelectSku: e => t((0, u.Wz)(e)),
        isGift: l,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: p
      })
    })]
  })
}