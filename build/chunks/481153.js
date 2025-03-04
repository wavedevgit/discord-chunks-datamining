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
  g = n(981632),
  p = n(594174),
  f = n(509545),
  m = n(55563),
  _ = n(296848),
  b = n(981631),
  N = n(474936),
  x = n(388032),
  v = n(722515),
  I = n(612064),
  E = n(802138);
let j = l.ZP.connectStores([m.Z, c.Z, f.Z, p.default], e => {
  let {
    giftCode: t
  } = e, n = m.Z.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, _.oE)(r) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: p.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: o,
    sku: l,
    application: c,
    subscriptionPlan: p
  } = e, f = null == o ? x.NW.string(x.t.lTGZAg) : x.NW.formatToPlainString(x.t.TjWdPT, {
    username: o.username
  }), m = l.name;
  return null != p && (m = x.NW.formatToPlainString(p.interval === N.rV.MONTH ? x.t.CTpcCQ : x.t.rgPWGx, {
    skuName: l.name,
    intervalCount: p.intervalCount
  })), (0, r.jsxs)(i.Fragment, {
    children: [null != n.giftStyle ? (0, r.jsx)(g.Z, {
      defaultAnimationState: h.SR.LOOP,
      giftStyle: n.giftStyle,
      className: v.seasonalIcon
    }) : (0, r.jsx)(u.qE, {
      src: null != o ? o.getAvatarURL(void 0, 100) : null,
      size: s.EFr.DEPRECATED_SIZE_100,
      className: E.marginBottom20
    }), null != t ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: x.NW.string(x.t.mDFGFh)
      }), (0, r.jsx)(u.Dx, {
        children: t
      })]
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: f
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