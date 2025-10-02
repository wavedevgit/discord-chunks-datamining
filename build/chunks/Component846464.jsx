/** Chunk was on 84071 **/
/** chunk id: 846464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk360026 = require("./360026.js");

function j(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: a,
    activeSubscription: o,
    startedPaymentFlowWithPaymentSourcesRef: C,
    setSelectedPlanId: x,
    priceOptions: g,
    defaultPlanId: j
  } = (0, p.JL)(), {
    isGift: y,
    claimableRewards: L
  } = (0, u.wD)(), v = y && null != L && L.length > 0, S = (0, d.N)(i), O = (0, l.Nx)(), E = (0, s.ZP)({
    location: "PremiumPaymentSelect"
  });
  return (0, r.jsx)(b, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: a,
        userTrialOffer: o,
        setSelectedPlanId: l,
        startedPaymentFlowWithPaymentSources: s,
        defaultPlanId: d
      } = e;
      r(n);
      let C = _.h8.PLAN_SELECT,
        u = (0, c.k5)(t);
      u !== m.Si.TIER_1 && u !== m.Si.TIER_2 || n !== m.Si.TIER_0 || a || (C = _.h8.WHAT_YOU_LOSE);
      let p = (0, h.T)({
          userTrialOffer: o,
          isGift: a,
          skuId: n
        }),
        x = (0, f.Kp)({
          isTrial: p,
          isGift: a,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s
        });
      C !== _.h8.WHAT_YOU_LOSE && x && (C = _.h8.REVIEW, l((0, f.nA)(n, t, d))), i(C, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: o,
      newSkuId: e,
      setSelectedSkuId: a,
      handleStepChange: t,
      isGift: y,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: C.current,
      setSelectedPlanId: x,
      defaultPlanId: j
    }),
    onClose: n,
    isGift: y,
    inOfferExperience: O,
    priceOptions: g,
    showPromotionalGiftBanner: v,
    enablePremiumBrandRefresh: E
  })
}

function b(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: l,
    priceOptions: s,
    showPromotionalGiftBanner: d,
    enablePremiumBrandRefresh: u
  } = e, p = u ? (0, r.jsx)(o.X6q, {
    variant: "heading-lg/bold",
    children: x.intl.string(x.t["r+SebW"])
  }) : (0, r.jsx)(o.vwX, {
    tag: o.RB0.H4,
    children: x.intl.string(x.t["r+SebW"])
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      className: a()(g.skuSelectModalHeader, {
        [g.premiumBrandRefreshHeader]: u
      }),
      separator: false,
      children: [p, (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: g.close,
        innerClassName: g.closeInner,
        onClick: n
      })]
    }), (0, r.jsx)(o.hzk, {
      "data-migration-pending": true,
      className: a()(g.skuSelectModalContent, {
        [g.modalSize]: !u,
        [g.modalPadding]: l && !u,
        [g.premiumBrandRefreshContent]: u
      }),
      children: (0, r.jsx)(C.Z, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: i,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: u
      })
    })]
  })
}