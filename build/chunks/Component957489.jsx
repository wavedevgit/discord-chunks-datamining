/** Chunk was on 2824 **/
/** chunk id: 957489, original params: e,t,n (module,exports,require) **/
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
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: l
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: u,
    priceOptions: j,
    defaultPlanId: b,
    hasPaymentSources: h
  } = (0, p.P5)(), {
    isGift: O,
    claimableRewards: P
  } = (0, d.Pv)(), x = O && null != P && P.length > 0, E = (0, a.V)(l);
  return (0, r.jsx)(v, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: l,
        isGift: i,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: u
      } = e;
      r(n);
      let d = m.pn.PLAN_SELECT,
        p = (0, c.aZ)(t);
      p !== y.pe.TIER_1 && p !== y.pe.TIER_2 || n !== y.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
      let j = (0, f.t)({
          userTrialOffer: s,
          isGift: i,
          skuId: n
        }),
        b = (0, g.vT)({
          isTrial: j,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== m.pn.WHAT_YOU_LOSE && b && (d = m.pn.REVIEW, a((0, g.xT)(n, t, u))), l(d, {
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
      userTrialOffer: E,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: u,
      defaultPlanId: b
    }),
    onSelectPremiumGroup: () => (function(e) {
      let {
        setSelectedPlanId: t,
        handleStepChange: n,
        hasPaymentSources: r,
        setSelectedSkuId: l
      } = e;
      l((0, c.mH)(y.pe.TIER_2)), t(y.gD.PREMIUM_GROUP_MONTH), n(r ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, {
        analyticsDataOverride: {
          sku_id: y.pe.TIER_2
        }
      })
    })({
      setSelectedPlanId: u,
      handleStepChange: t,
      hasPaymentSources: h,
      setSelectedSkuId: i
    }),
    onClose: n,
    isGift: O,
    priceOptions: j,
    showPromotionalGiftBanner: x
  })
}

function v(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: l,
    priceOptions: a,
    showPromotionalGiftBanner: d,
    onSelectPremiumGroup: p
  } = e, m = (0, o.PA)() && !l;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.rQ0, {
      "data-migration-pending": true,
      className: i()(b.wC, b.LG),
      separator: false,
      children: (0, r.jsxs)(s.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-lg/bold",
          children: j.intl.string(j.t["r+SebU"])
        }), (0, r.jsx)(s.s_y, {
          "data-migration-pending": true,
          className: b.VN,
          innerClassName: b.to,
          onClick: n
        })]
      })
    }), m ? (0, r.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: b.eE,
      children: (0, r.jsx)(u.yS, {
        onSelectSku: e => t((0, c.mH)(e)),
        onSelectPremiumGroup: p,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    }) : (0, r.jsx)(s.$mQ, {
      "data-migration-pending": true,
      className: i()(b.a2, b.dt),
      children: (0, r.jsx)(u.Ay, {
        onSelectSku: e => t((0, c.mH)(e)),
        isGift: l,
        priceOptions: a,
        showPromotionalGiftBanner: d
      })
    })]
  })
}