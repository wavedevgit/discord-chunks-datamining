/** Chunk was on 31029 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk140465 = require("./140465.js"),
  Chunk283066 = require("./283066.js"),
  Chunk639119 = require("./639119.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk701464 = require("./701464.jsx"),
  Chunk602733 = require("./602733.js"),
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
    setSelectedSkuId: a,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: C,
    setSelectedPlanId: c,
    priceOptions: u,
    defaultPlanId: b
  } = (0, h.JL)(), {
    isGift: j,
    claimableRewards: L
  } = (0, _.wD)(), y = j && null != L && L.length > 0, S = (0, d.N)(i), I = (0, o.Nx)(), w = (0, s.Z)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(v, {
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
      let C = m.h8.PLAN_SELECT,
        c = (0, p.k5)(t);
      c !== g.Si.TIER_1 && c !== g.Si.TIER_2 || n !== g.Si.TIER_0 || a || (C = m.h8.WHAT_YOU_LOSE);
      let u = (0, x.T)({
          userTrialOffer: l,
          isGift: a,
          skuId: n
        }),
        _ = (0, f.Kp)({
          isTrial: u,
          isGift: a,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      C !== m.h8.WHAT_YOU_LOSE && _ && (C = m.h8.REVIEW, o((0, f.nA)(n, t, d))), i(C, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: a,
      handleStepChange: t,
      isGift: j,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: C.current,
      setSelectedPlanId: c,
      defaultPlanId: b
    }),
    onClose: n,
    isGift: j,
    inOfferExperience: I,
    priceOptions: u,
    showPromotionalGiftBanner: y,
    enablePremiumBrandRefresh: w
  })
}

function v(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: o,
    priceOptions: s,
    showPromotionalGiftBanner: d,
    enablePremiumBrandRefresh: h
  } = e, {
    giftRecipient: m
  } = (0, _.wD)(), f = (0, u.ao)({
    location: "PremiumPaymentSelect",
    giftRecipient: m,
    isGift: i
  }), x = f ? (0, r.jsx)(l.Heading, {
    variant: "heading-lg/bold",
    children: b.intl.string(b.t["wg/30i"])
  }) : h ? (0, r.jsx)(l.Heading, {
    variant: "heading-lg/bold",
    children: b.intl.string(b.t["r+SebU"])
  }) : (0, r.jsx)(l.Heading, {
    variant: "heading-md/semibold",
    children: b.intl.string(b.t["r+SebU"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.xBx, {
      "data-migration-pending": true,
      className: a()(j.skuSelectModalHeader, {
        [j.premiumBrandRefreshHeader]: h
      }),
      separator: false,
      children: (0, r.jsxs)(l.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [x, (0, r.jsx)(l.olH, {
          "data-migration-pending": true,
          className: j.close,
          innerClassName: j.closeInner,
          onClick: n
        })]
      })
    }), (0, r.jsx)(l.hzk, {
      "data-migration-pending": true,
      className: a()(j.skuSelectModalContent, {
        [j.modalSize]: !h,
        [j.modalPadding]: o && !h,
        [j.premiumBrandRefreshContent]: h,
        [j.wishlistModalSize]: f
      }),
      children: null != m && f ? (0, r.jsx)(c.Z, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        giftRecipient: m
      }) : (0, r.jsx)(C.ZP, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: h
      })
    })]
  })
}