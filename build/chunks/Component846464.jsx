/** Chunk was on 37786 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => b
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

function b(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: o,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: m,
    priceOptions: j,
    defaultPlanId: b
  } = (0, p.JL)(), {
    isGift: L,
    claimableRewards: y
  } = (0, u.wD)(), S = L && null != y && y.length > 0, v = (0, C.N)(i), E = (0, a.Nx)(), O = (0, s.ZP)({
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
        userTrialOffer: o,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: s,
        defaultPlanId: C
      } = e;
      r(n);
      let d = _.h8.PLAN_SELECT,
        u = (0, c.k5)(t);
      u !== x.Si.TIER_1 && u !== x.Si.TIER_2 || n !== x.Si.TIER_0 || l || (d = _.h8.WHAT_YOU_LOSE);
      let p = (0, f.T)({
          userTrialOffer: o,
          isGift: l,
          skuId: n
        }),
        m = (0, h.Kp)({
          isTrial: p,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      d !== _.h8.WHAT_YOU_LOSE && m && (d = _.h8.REVIEW, a((0, h.nA)(n, t, C))), i(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: o,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: t,
      isGift: L,
      userTrialOffer: v,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: m,
      defaultPlanId: b
    }),
    onClose: n,
    isGift: L,
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
    inOfferExperience: a,
    priceOptions: s,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: u
  } = e, p = u ? (0, r.jsx)(o.X6q, {
    variant: "heading-lg/bold",
    children: m.intl.string(m.t["r+SebW"])
  }) : (0, r.jsx)(o.vwX, {
    tag: o.RB0.H4,
    children: m.intl.string(m.t["r+SebW"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      className: l()(j.skuSelectModalHeader, {
        [j.premiumBrandRefreshHeader]: u
      }),
      separator: false,
      children: [p, (0, r.jsx)(o.olH, {
        className: j.close,
        innerClassName: j.closeInner,
        onClick: n
      })]
    }), (0, r.jsx)(o.hzk, {
      "data-migration-pending": true,
      className: l()(j.skuSelectModalContent, {
        [j.modalSize]: !u,
        [j.modalPadding]: a && !u,
        [j.premiumBrandRefreshContent]: u
      }),
      children: (0, r.jsx)(d.Z, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: i,
        priceOptions: s,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: u
      })
    })]
  })
}