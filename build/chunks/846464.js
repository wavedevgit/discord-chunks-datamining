/** Chunk was on 54433 **/
n.d(t, {
  q: () => L
});
var l = n(200651);
n(192379);
var s = n(120356),
  i = n.n(s),
  r = n(481060),
  a = n(140465),
  o = n(639119),
  C = n(55610),
  d = n(973007),
  c = n(74538),
  u = n(987209),
  p = n(563132),
  x = n(409813),
  f = n(614223),
  h = n(48175),
  _ = n(474936),
  j = n(388032),
  m = n(975338);

function L(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: s
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: r,
    startedPaymentFlowWithPaymentSourcesRef: C,
    setSelectedPlanId: d,
    priceOptions: j
  } = (0, p.JL)(), {
    isGift: m,
    claimableRewards: L
  } = (0, u.wD)(), E = m && null != L && L.length > 0, S = (0, o.N)(s), N = (0, a.Nx)();
  return (0, l.jsx)(g, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: l,
        handleStepChange: s,
        isGift: i,
        userTrialOffer: r,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      l(n);
      let C = x.h8.PLAN_SELECT,
        d = (0, c.k5)(t);
      d !== _.Si.TIER_1 && d !== _.Si.TIER_2 || n !== _.Si.TIER_0 || i || (C = x.h8.WHAT_YOU_LOSE);
      let u = (0, h.T)({
          userTrialOffer: r,
          isGift: i,
          skuId: n
        }),
        p = (0, f.Kp)({
          isTrial: u,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== x.h8.WHAT_YOU_LOSE && p && (C = x.h8.REVIEW, a((0, f.nA)(n, t))), s(C, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: r,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: m,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: C.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: m,
    inOfferExperience: N,
    priceOptions: j,
    showPromotionalGiftBanner: E
  })
}

function g(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: s,
    inOfferExperience: a,
    priceOptions: o,
    showPromotionalGiftBanner: u
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(r.xBx, {
      className: m.skuSelectModalHeader,
      separator: !1,
      children: [(0, l.jsx)(r.vwX, {
        tag: r.RB0.H4,
        children: j.NW.string(j.t["r+SebW"])
      }), (0, l.jsx)(r.olH, {
        className: m.close,
        innerClassName: m.closeInner,
        onClick: n
      })]
    }), (0, l.jsxs)(r.hzk, {
      className: i()(m.skuSelectModalContent, m.modalSize, {
        [m.modalPadding]: a
      }),
      children: [(0, l.jsx)(C.Z, {
        fromBoostCancelModal: !1,
        className: m.legacyPricingNotice
      }), (0, l.jsx)(d.Z, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: s,
        priceOptions: o,
        showPromotionalGiftBanner: u
      })]
    })]
  })
}