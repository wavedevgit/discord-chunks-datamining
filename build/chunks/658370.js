/** Chunk was on 13323 **/
n.d(t, {
  Z: () => N
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(74538),
  o = n(773104),
  c = n(104494),
  d = n(639119),
  u = n(404615),
  m = n(743612),
  g = n(409100),
  p = n(474936),
  h = n(388032),
  f = n(579139);
let N = e => {
  var t;
  let n;
  let {
    title: i,
    titleClassName: N = "",
    buttonClassName: b = "",
    subtitle: x = "",
    description: _ = "",
    descriptionCta: E = "",
    isPremiumGetCta: j,
    onCtaClick: C,
    cardVariant: O
  } = e, S = (0, d.N)(), v = null == S ? void 0 : S.subscription_trial, T = (0, c.Ng)(), I = (0, l.Rt)({
    intervalType: null == v ? void 0 : v.interval,
    intervalCount: null == v ? void 0 : v.interval_count
  }), A = (0, o._)({
    defaultResponse: h.NW.string(h.t["8x0jKS"]),
    onNonTier2Subscriber: h.NW.string(h.t.IJI7ys),
    onTier2TrialOffer: I,
    onTier0TrialOffer: I,
    onDiscountOffer: h.NW.formatToPlainString(h.t.bkQ4bG, {
      percent: null == T ? void 0 : T.discount.amount
    })
  }), y = (0, u._)(O);
  return (0, r.jsxs)("div", {
    className: s()(f.cardDescription, null == y ? void 0 : null === (t = y.description) || void 0 === t ? void 0 : t.className),
    children: [(0, r.jsx)(m.Z, {
      title: i,
      cardVariantStyleInfo: y,
      titleClassName: N,
      subtitle: x,
      description: _
    }), j && (0, r.jsx)(g.Z, {
      className: b,
      look: a.zxk.Looks.BLANK,
      color: a.zxk.Colors.CUSTOM,
      subscriptionTier: p.Si.TIER_2,
      buttonText: A,
      showGradient: !0
    }), 0 !== E.length && (null == (n = null == y ? void 0 : y.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 && null != C && (0, r.jsx)(a.zxk, {
      className: b,
      onClick: C,
      children: E
    })]
  })
}