/** Chunk was on 54433 **/
n.d(t, {
  q: () => L
});
var i = n(255367);
n(73800);
var l = n(120356),
  r = n.n(l),
  s = n(481060),
  a = n(140465),
  o = n(47280),
  C = n(639119),
  d = n(973007),
  c = n(74538),
  u = n(987209),
  p = n(563132),
  x = n(409813),
  f = n(614223),
  h = n(48175),
  j = n(474936),
  m = n(388032),
  _ = n(677163);

function L(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: l
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: s,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: m,
    priceOptions: _,
    defaultPlanId: L
  } = (0, p.JL)(), {
    isGift: E,
    claimableRewards: g
  } = (0, u.wD)(), S = E && null != g && g.length > 0, b = (0, C.N)(l), v = (0, a.Nx)(), O = (0, o.Z)({
    location: "PremiumPaymentSelect"
  });
  return (0, i.jsx)(y, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: i,
        handleStepChange: l,
        isGift: r,
        userTrialOffer: s,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o,
        defaultPlanId: C
      } = e;
      i(n);
      let d = x.h8.PLAN_SELECT,
        u = (0, c.k5)(t);
      u !== j.Si.TIER_1 && u !== j.Si.TIER_2 || n !== j.Si.TIER_0 || r || (d = x.h8.WHAT_YOU_LOSE);
      let p = (0, h.T)({
          userTrialOffer: s,
          isGift: r,
          skuId: n
        }),
        m = (0, f.Kp)({
          isTrial: p,
          isGift: r,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      d !== x.h8.WHAT_YOU_LOSE && m && (d = x.h8.REVIEW, a((0, f.nA)(n, t, C))), l(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: s,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: E,
      userTrialOffer: b,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: m,
      defaultPlanId: L
    }),
    onClose: n,
    isGift: E,
    inOfferExperience: v,
    priceOptions: _,
    showPromotionalGiftBanner: S,
    enablePremiumBrandRefresh: O
  })
}

function y(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: l,
    inOfferExperience: a,
    priceOptions: o,
    showPromotionalGiftBanner: C,
    enablePremiumBrandRefresh: u
  } = e, p = u ? (0, i.jsx)(s.X6q, {
    variant: "heading-lg/bold",
    children: m.intl.string(m.t["r+SebW"])
  }) : (0, i.jsx)(s.vwX, {
    tag: s.RB0.H4,
    children: m.intl.string(m.t["r+SebW"])
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.xBx, {
      className: r()(_.skuSelectModalHeader, {
        [_.premiumBrandRefreshHeader]: u
      }),
      separator: !1,
      children: [p, (0, i.jsx)(s.olH, {
        className: _.close,
        innerClassName: _.closeInner,
        onClick: n
      })]
    }), (0, i.jsx)(s.hzk, {
      className: r()(_.skuSelectModalContent, {
        [_.modalSize]: !u,
        [_.modalPadding]: a && !u,
        [_.premiumBrandRefreshContent]: u
      }),
      children: (0, i.jsx)(d.Z, {
        onSelectSku: e => t((0, c.Wz)(e)),
        isGift: l,
        priceOptions: o,
        showPromotionalGiftBanner: C,
        enablePremiumBrandRefresh: u
      })
    })]
  })
}