/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk234419 = require("./234419.js"),
  Chunk612669 = require("./612669.js"),
  Chunk672525 = require("./672525.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk800471 = require("./800471.js"),
  Chunk169801 = require("./169801.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk113437 = require("./113437.js");

function x(e) {
  let {
    handleStepChange: n,
    handleClose: t,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: u,
    priceOptions: j,
    defaultPlanId: h,
    hasPaymentSources: x
  } = (0, p.P5)(), {
    isGift: T,
    claimableRewards: S
  } = (0, d.Pv)(), A = T && null != S && S.length > 0, O = (0, a.V)(r);
  return (0, l.jsx)(P, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: n,
        newSkuId: t,
        setSelectedSkuId: l,
        handleStepChange: r,
        isGift: i,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: u
      } = e;
      l(t);
      let d = m.pn.PLAN_SELECT,
        p = (0, c.aZ)(n);
      p !== f.pe.TIER_1 && p !== f.pe.TIER_2 || t !== f.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
      let j = (0, E.t)({
          userTrialOffer: s,
          isGift: i,
          skuId: t
        }),
        h = (0, g.vT)({
          isTrial: j,
          isGift: i,
          selectedSkuId: t,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== m.pn.WHAT_YOU_LOSE && h && (d = m.pn.REVIEW, a((0, g.xT)(t, n, u))), r(d, {
        analyticsDataOverride: {
          sku_id: t
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: n,
      isGift: T,
      userTrialOffer: O,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: u,
      defaultPlanId: h
    }),
    onSelectPremiumGroup: () => (function(e) {
      let {
        setSelectedPlanId: n,
        handleStepChange: t,
        hasPaymentSources: l,
        setSelectedSkuId: r
      } = e;
      r((0, c.mH)(f.pe.TIER_2)), n(f.gD.PREMIUM_GROUP_MONTH), t(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
        analyticsDataOverride: {
          sku_id: f.pe.TIER_2
        }
      })
    })({
      setSelectedPlanId: u,
      handleStepChange: n,
      hasPaymentSources: x,
      setSelectedSkuId: i
    }),
    onClose: t,
    isGift: T,
    priceOptions: j,
    showPromotionalGiftBanner: A
  })
}

function P(e) {
  let {
    selectSku: n,
    onClose: t,
    isGift: r,
    priceOptions: a,
    showPromotionalGiftBanner: d,
    onSelectPremiumGroup: p
  } = e, m = (0, o.PA)() && !r;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.rQ0, {
      "data-migration-pending": true,
      className: i()(h.wC, h.LG),
      separator: false,
      children: (0, l.jsxs)(s.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, l.jsx)(s.Heading, {
          variant: "heading-lg/bold",
          children: j.intl.string(j.t["r+SebU"])
        }), (0, l.jsx)(s.s_y, {
          "data-migration-pending": true,
          className: h.VN,
          innerClassName: h.to,
          onClick: t
        })]
      })
    }), m ? (0, l.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: h.eE,
      children: (0, l.jsx)(u.yS, {
        onSelectSku: e => n((0, c.mH)(e)),
        onSelectPremiumGroup: p,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    }) : (0, l.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: i()(h.a2, h.dt),
      children: (0, l.jsx)(u.Ay, {
        onSelectSku: e => n((0, c.mH)(e)),
        isGift: r,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    })]
  })
}