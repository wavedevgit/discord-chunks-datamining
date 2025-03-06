/** Chunk was on 27978 **/
n.d(t, {
  Z: () => C
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(442837),
  s = n(481060),
  c = n(812206),
  u = n(388905),
  d = n(925329),
  h = n(479446),
  p = n(981632),
  g = n(594174),
  _ = n(509545),
  m = n(55563),
  f = n(296848),
  b = n(981631),
  x = n(474936),
  N = n(388032),
  v = n(722515),
  I = n(612064),
  E = n(802138);
let C = l.ZP.connectStores([m.Z, c.Z, _.Z, g.default], e => {
  let {
    giftCode: t
  } = e, n = m.Z.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, f.oE)(r) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: g.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: o,
    sku: l,
    application: c,
    subscriptionPlan: g
  } = e, _ = null == o ? N.NW.string(N.t.lTGZAg) : N.NW.formatToPlainString(N.t.TjWdPT, {
    username: o.username
  }), m = l.name;
  return null != g && (m = N.NW.formatToPlainString(g.interval === x.rV.MONTH ? N.t.CTpcCQ : N.t.rgPWGx, {
    skuName: l.name,
    intervalCount: g.intervalCount
  })), (0, r.jsxs)(i.Fragment, {
    children: [null != n.giftStyle ? (0, r.jsx)(p.Z, {
      defaultAnimationState: h.SR.LOOP,
      giftStyle: n.giftStyle,
      className: v.seasonalIcon
    }) : (0, r.jsx)(u.qE, {
      src: null != o ? o.getAvatarURL(void 0, 100) : null,
      size: s.EFr.DEPRECATED_SIZE_100,
      className: E.marginBottom20
    }), null != t ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: N.NW.string(N.t.mDFGFh)
      }), (0, r.jsx)(u.Dx, {
        children: t
      })]
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: _
      }), (0, r.jsxs)(u.Dx, {
        className: a()(E.marginTop8, I.flexCenter),
        children: [l.productLine !== b.POd.COLLECTIBLES && (0, r.jsx)(d.Z, {
          size: d.Z.Sizes.MEDIUM,
          className: v.applicationIcon,
          game: c,
          skuId: l.id
        }), m]
      })]
    })]
  })
})