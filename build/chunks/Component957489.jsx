/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => h
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

function h(e) {
  let {
    handleStepChange: n,
    handleClose: t,
    referralTrialOfferId: l
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: u,
    priceOptions: P,
    defaultPlanId: j,
    hasPaymentSources: h
  } = (0, p.P5)(), {
    isGift: x,
    claimableRewards: T
  } = (0, d.Pv)(), S = x && null != T && T.length > 0, b = (0, a.V)(l);
  return (0, r.jsx)(_, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: n,
        newSkuId: t,
        setSelectedSkuId: r,
        handleStepChange: l,
        isGift: i,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: u
      } = e;
      r(t);
      let d = m.pn.PLAN_SELECT,
        p = (0, c.aZ)(n);
      p !== f.pe.TIER_1 && p !== f.pe.TIER_2 || t !== f.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
      let P = (0, g.t)({
          userTrialOffer: s,
          isGift: i,
          skuId: t
        }),
        j = (0, E.vT)({
          isTrial: P,
          isGift: i,
          selectedSkuId: t,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== m.pn.WHAT_YOU_LOSE && j && (d = m.pn.REVIEW, a((0, E.xT)(t, n, u))), l(d, {
        analyticsDataOverride: {
          sku_id: t
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: n,
      isGift: x,
      userTrialOffer: b,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: u,
      defaultPlanId: j
    }),
    onSelectPremiumGroup: () => (function(e) {
      let {
        setSelectedPlanId: n,
        handleStepChange: t,
        hasPaymentSources: r,
        setSelectedSkuId: l
      } = e;
      l((0, c.mH)(f.pe.TIER_2)), n(f.gD.PREMIUM_GROUP_MONTH), t(r ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
        analyticsDataOverride: {
          sku_id: f.pe.TIER_2
        }
      })
    })({
      setSelectedPlanId: u,
      handleStepChange: n,
      hasPaymentSources: h,
      setSelectedSkuId: i
    }),
    onClose: t,
    isGift: x,
    priceOptions: P,
    showPromotionalGiftBanner: S
  })
}

function _(e) {
  let {
    selectSku: n,
    onClose: t,
    isGift: l,
    priceOptions: a,
    showPromotionalGiftBanner: d,
    onSelectPremiumGroup: p
  } = e, m = (0, o.PA)() && !l;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.rQ0, {
      "data-migration-pending": true,
      className: i()(j.wC, j.LG),
      separator: false,
      children: (0, r.jsxs)(s.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-lg/bold",
          children: P.intl.string(P.t["r+SebU"])
        }), (0, r.jsx)(s.s_y, {
          "data-migration-pending": true,
          className: j.VN,
          innerClassName: j.to,
          onClick: t
        })]
      })
    }), m ? (0, r.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: j.eE,
      children: (0, r.jsx)(u.yS, {
        onSelectSku: e => n((0, c.mH)(e)),
        onSelectPremiumGroup: p,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    }) : (0, r.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: i()(j.a2, j.dt),
      children: (0, r.jsx)(u.Ay, {
        onSelectSku: e => n((0, c.mH)(e)),
        isGift: l,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    })]
  })
}