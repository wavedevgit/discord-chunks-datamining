/** Chunk was on 27978 **/
n.d(t, {
  Z: () => j
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(812206),
  u = n(388905),
  d = n(925329),
  h = n(479446),
  p = n(981632),
  g = n(594174),
  m = n(509545),
  _ = n(55563),
  f = n(296848),
  b = n(981631),
  x = n(474936),
  N = n(388032),
  v = n(404540),
  E = n(214919),
  I = n(467025);
let j = s.ZP.connectStores([_.Z, c.Z, m.Z, g.default], e => {
  let {
    giftCode: t
  } = e, n = _.Z.get(t.skuId), {
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
    sku: s,
    application: c,
    subscriptionPlan: g
  } = e, m = null == o ? N.NW.string(N.t.lTGZAg) : N.NW.formatToPlainString(N.t.TjWdPT, {
    username: o.username
  }), _ = s.name;
  return null != g && (_ = N.NW.formatToPlainString(g.interval === x.rV.MONTH ? N.t.CTpcCQ : N.t.rgPWGx, {
    skuName: s.name,
    intervalCount: g.intervalCount
  })), (0, r.jsxs)(i.Fragment, {
    children: [null != n.giftStyle ? (0, r.jsx)(p.Z, {
      defaultAnimationState: h.SR.LOOP,
      giftStyle: n.giftStyle,
      className: v.seasonalIcon
    }) : (0, r.jsx)(u.qE, {
      src: null != o ? o.getAvatarURL(void 0, 100) : null,
      size: l.EFr.DEPRECATED_SIZE_100,
      className: I.marginBottom20
    }), null != t ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: N.NW.string(N.t.mDFGFh)
      }), (0, r.jsx)(u.Dx, {
        children: t
      })]
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: m
      }), (0, r.jsxs)(u.Dx, {
        className: a()(I.marginTop8, E.flexCenter),
        children: [s.productLine !== b.POd.COLLECTIBLES && (0, r.jsx)(d.Z, {
          size: d.Z.Sizes.MEDIUM,
          className: v.applicationIcon,
          game: c,
          skuId: s.id
        }), _]
      })]
    })]
  })
})