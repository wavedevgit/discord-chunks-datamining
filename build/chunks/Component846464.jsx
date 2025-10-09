/** Chunk was on 84071 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk140465 = require("./140465.js"),
  Chunk47280 = require("./47280.js"),
  Chunk998030 = require("./998030.js"),
  Chunk639119 = require("./639119.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk701464 = require("./701464.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk48175 = require("./48175.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk360026 = require("./360026.js");

function v(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: a,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: C,
    priceOptions: u,
    defaultPlanId: j
  } = (0, h.JL)(), {
    isGift: b,
    claimableRewards: v
  } = (0, _.wD)(), S = b && null != v && v.length > 0, L = (0, c.N)(i), I = (0, o.Nx)(), w = (0, s.ZP)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(y, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: a,
        userTrialOffer: l,
        setSelectedPlanId: o,
        startedPaymentFlowWithPaymentSources: s,
        defaultPlanId: d
      } = e;
      r(n);
      let c = f.h8.PLAN_SELECT,
        C = (0, p.k5)(t);
      C !== g.Si.TIER_1 && C !== g.Si.TIER_2 || n !== g.Si.TIER_0 || a || (c = f.h8.WHAT_YOU_LOSE);
      let u = (0, x.T)({
          userTrialOffer: l,
          isGift: a,
          skuId: n
        }),
        _ = (0, m.Kp)({
          isTrial: u,
          isGift: a,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      c !== f.h8.WHAT_YOU_LOSE && _ && (c = f.h8.REVIEW, o((0, m.nA)(n, t, d))), i(c, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: a,
      handleStepChange: t,
      isGift: b,
      userTrialOffer: L,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: C,
      defaultPlanId: j
    }),
    onClose: n,
    isGift: b,
    inOfferExperience: I,
    priceOptions: u,
    showPromotionalGiftBanner: S,
    enablePremiumBrandRefresh: w
  })
}

function y(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: o,
    priceOptions: s,
    showPromotionalGiftBanner: c,
    enablePremiumBrandRefresh: h
  } = e, f = h ? (0, r.jsx)(l.X6q, {
    variant: "heading-lg/bold",
    children: j.intl.string(j.t["r+SebW"])
  }) : (0, r.jsx)(l.X6q, {
    variant: "heading-md/semibold",
    children: j.intl.string(j.t["r+SebW"])
  }), {
    giftRecipient: m
  } = (0, _.wD)(), x = (0, d.y)({
    location: "PremiumPaymentSelect"
  }) && i && null != m;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.xBx, {
      "data-migration-pending": true,
      className: a()(b.skuSelectModalHeader, {
        [b.premiumBrandRefreshHeader]: h
      }),
      separator: false,
      children: (0, r.jsxs)(l.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [f, (0, r.jsx)(l.olH, {
          "data-migration-pending": true,
          className: b.close,
          innerClassName: b.closeInner,
          onClick: n
        })]
      })
    }), (0, r.jsx)(l.hzk, {
      "data-migration-pending": true,
      className: a()(b.skuSelectModalContent, {
        [b.modalSize]: !h,
        [b.modalPadding]: o && !h,
        [b.premiumBrandRefreshContent]: h,
        [b.wishlistModalSize]: x
      }),
      children: x ? (0, r.jsx)(u.Z, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: s,
        showPromotionalGiftBanner: c
      }) : (0, r.jsx)(C.ZP, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: s,
        showPromotionalGiftBanner: c,
        enablePremiumBrandRefresh: h
      })
    })]
  })
}