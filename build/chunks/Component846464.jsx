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

function v(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: a,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: c,
    setSelectedPlanId: C,
    priceOptions: u,
    defaultPlanId: j
  } = (0, h.JL)(), {
    isGift: b,
    claimableRewards: v
  } = (0, _.wD)(), L = b && null != v && v.length > 0, y = (0, d.N)(i), I = (0, s.Nx)(), w = (0, o.Z)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(S, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: a,
        userTrialOffer: l,
        setSelectedPlanId: s,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: d
      } = e;
      r(n);
      let c = m.h8.PLAN_SELECT,
        C = (0, p.k5)(t);
      C !== g.Si.TIER_1 && C !== g.Si.TIER_2 || n !== g.Si.TIER_0 || a || (c = m.h8.WHAT_YOU_LOSE);
      let u = (0, x.T)({
          userTrialOffer: l,
          isGift: a,
          skuId: n
        }),
        _ = (0, f.Kp)({
          isTrial: u,
          isGift: a,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      c !== m.h8.WHAT_YOU_LOSE && _ && (c = m.h8.REVIEW, s((0, f.nA)(n, t, d))), i(c, {
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
      userTrialOffer: y,
      startedPaymentFlowWithPaymentSources: c.current,
      setSelectedPlanId: C,
      defaultPlanId: j
    }),
    onClose: n,
    isGift: b,
    inOfferExperience: I,
    priceOptions: u,
    showPromotionalGiftBanner: L,
    enablePremiumBrandRefresh: w
  })
}

function S(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: s,
    priceOptions: o,
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
    children: j.intl.string(j.t["wg/30i"])
  }) : h ? (0, r.jsx)(l.Heading, {
    variant: "heading-lg/bold",
    children: j.intl.string(j.t["r+SebU"])
  }) : (0, r.jsx)(l.Heading, {
    variant: "heading-md/semibold",
    children: j.intl.string(j.t["r+SebU"])
  });
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
        children: [x, (0, r.jsx)(l.olH, {
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
        [b.modalPadding]: s && !h,
        [b.premiumBrandRefreshContent]: h,
        [b.wishlistModalSize]: f
      }),
      children: null != m && f ? (0, r.jsx)(C.Z, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: o,
        showPromotionalGiftBanner: d,
        giftRecipient: m
      }) : (0, r.jsx)(c.ZP, {
        onSelectSku: e => t((0, p.Wz)(e)),
        isGift: i,
        priceOptions: o,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: h
      })
    })]
  })
}