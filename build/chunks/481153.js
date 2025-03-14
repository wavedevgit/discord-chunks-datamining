/** Chunk was on 27978 **/
n.d(t, {
  Z: () => j
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
  f = n(594174),
  g = n(509545),
  _ = n(55563),
  m = n(296848),
  b = n(981631),
  x = n(474936),
  N = n(388032),
  v = n(722515),
  I = n(612064),
  E = n(802138);
let j = l.ZP.connectStores([_.Z, c.Z, g.Z, f.default], e => {
  let {
    giftCode: t
  } = e, n = _.Z.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, m.oE)(r) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: f.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: o,
    sku: l,
    application: c,
    subscriptionPlan: f
  } = e, g = null == o ? N.NW.string(N.t.lTGZAg) : N.NW.formatToPlainString(N.t.TjWdPT, {
    username: o.username
  }), _ = l.name;
  return null != f && (_ = N.NW.formatToPlainString(f.interval === x.rV.MONTH ? N.t.CTpcCQ : N.t.rgPWGx, {
    skuName: l.name,
    intervalCount: f.intervalCount
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
        children: g
      }), (0, r.jsxs)(u.Dx, {
        className: a()(E.marginTop8, I.flexCenter),
        children: [l.productLine !== b.POd.COLLECTIBLES && (0, r.jsx)(d.Z, {
          size: d.Z.Sizes.MEDIUM,
          className: v.applicationIcon,
          game: c,
          skuId: l.id
        }), _]
      })]
    })]
  })
})