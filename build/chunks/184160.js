/** Chunk was on 54433 **/
n.d(t, {
  x: () => j
});
var i = n(255367);
n(73800);
var l = n(512722),
  r = n.n(l),
  s = n(780384),
  a = n(755721),
  o = n(410030),
  C = n(807163),
  d = n(74538),
  c = n(987209),
  u = n(563132),
  p = n(409813),
  x = n(614223),
  f = n(388032),
  h = n(959803);

function j(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, l = (0, o.ZP)(), {
    activeSubscription: j,
    selectedSkuId: m,
    setSelectedPlanId: _,
    startedPaymentFlowWithPaymentSourcesRef: L
  } = (0, u.JL)(), {
    isGift: y
  } = (0, c.wD)(), E = null != j ? (0, d.Af)(j) : null, g = null != E ? (0, d.gq)(E.planId) : null, S = null != E ? (0, d.Rd)(E.planId) : null, b = (0, x.Kp)({
    isTrial: !1,
    isGift: y,
    selectedSkuId: m,
    startedPaymentFlowWithPaymentSources: L.current
  });
  return r()(null != S, "Expected premium type"), (0, i.jsx)(C.Z, {
    premiumType: S,
    titleText: f.intl.string(f.t["7VcWW1"]),
    subtitleText: f.intl.format(f.t.Qk34Ii, {
      subscriptionName: g
    }),
    footer: (0, i.jsxs)("div", {
      className: h.whatYouLoseButtonContainer,
      children: [(0, i.jsx)(a.zx, {
        onClick: () => {
          b ? (_((0, x.nA)(m, j)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT)
        },
        children: f.intl.string(f.t["3PatS0"])
      }), (0, i.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        color: (0, s.wj)(l) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
        onClick: n,
        children: f.intl.string(f.t.h9tkAA)
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}