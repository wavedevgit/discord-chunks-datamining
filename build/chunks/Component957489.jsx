/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => v
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

function v(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: u,
    priceOptions: y,
    defaultPlanId: h,
    hasPaymentSources: v
  } = (0, p.P5)(), {
    isGift: O,
    claimableRewards: x
  } = (0, d.Pv)(), P = O && null != x && x.length > 0, S = (0, a.V)(r);
  return (0, l.jsx)(b, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: l,
        handleStepChange: r,
        isGift: i,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: u
      } = e;
      l(n);
      let d = m.pn.PLAN_SELECT,
        p = (0, c.aZ)(t);
      p !== j.pe.TIER_1 && p !== j.pe.TIER_2 || n !== j.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
      let y = (0, g.t)({
          userTrialOffer: s,
          isGift: i,
          skuId: n
        }),
        h = (0, f.vT)({
          isTrial: y,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== m.pn.WHAT_YOU_LOSE && h && (d = m.pn.REVIEW, a((0, f.xT)(n, t, u))), r(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: O,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: u,
      defaultPlanId: h
    }),
    onSelectPremiumGroup: () => (function(e) {
      let {
        setSelectedPlanId: t,
        handleStepChange: n,
        hasPaymentSources: l,
        setSelectedSkuId: r
      } = e;
      r((0, c.mH)(j.pe.TIER_2)), t(j.gD.PREMIUM_GROUP_MONTH), n(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
        analyticsDataOverride: {
          sku_id: j.pe.TIER_2
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
    showPromotionalGiftBanner: P
  })
}

function b(e) {
  let {
    selectSku: t,
    onClose: n,
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
          children: y.intl.string(y.t["r+SebU"])
        }), (0, l.jsx)(s.s_y, {
          "data-migration-pending": true,
          className: h.VN,
          innerClassName: h.to,
          onClick: n
        })]
      })
    }), m ? (0, l.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: h.eE,
      children: (0, l.jsx)(u.yS, {
        onSelectSku: e => t((0, c.mH)(e)),
        onSelectPremiumGroup: p,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    }) : (0, l.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: i()(h.a2, h.dt),
      children: (0, l.jsx)(u.Ay, {
        onSelectSku: e => t((0, c.mH)(e)),
        isGift: r,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    })]
  })
}