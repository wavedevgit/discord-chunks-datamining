/** Chunk was on 37786 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
    setSelectedSkuId: o,
    activeSubscription: a,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: m,
    priceOptions: j,
    defaultPlanId: b
  } = (0, p.JL)(), {
    isGift: L,
    claimableRewards: y
  } = (0, u.wD)(), v = L && null != y && y.length > 0, S = (0, C.N)(i), O = (0, l.Nx)(), E = (0, s.ZP)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(g, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: o,
        userTrialOffer: a,
        setSelectedPlanId: l,
        startedPaymentFlowWithPaymentSources: s,
        defaultPlanId: C
      } = e;
      r(n);
      let d = _.h8.PLAN_SELECT,
        u = (0, c.k5)(t);
      u !== x.Si.TIER_1 && u !== x.Si.TIER_2 || n !== x.Si.TIER_0 || o || (d = _.h8.WHAT_YOU_LOSE);
      let p = (0, h.T)({
          userTrialOffer: a,
          isGift: o,
          skuId: n
        }),
        m = (0, f.Kp)({
          isTrial: p,
          isGift: o,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      d !== _.h8.WHAT_YOU_LOSE && m && (d = _.h8.REVIEW, l((0, f.nA)(n, t, C))), i(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: o,
      handleStepChange: t,
      isGift: L,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: m,
      defaultPlanId: b
    }),
    onClose: n,
    isGift: L,
    inOfferExperience: O,
    priceOptions: j,
    showPromotionalGiftBanner: v,
    enablePremiumBrandRefresh: E
  })
}

function g(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: l,
    priceOptions: s,
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
      className: o()(j.skuSelectModalHeader, {
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
      className: o()(j.skuSelectModalContent, {
        [j.modalSize]: !u,
        [j.modalPadding]: l && !u,
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