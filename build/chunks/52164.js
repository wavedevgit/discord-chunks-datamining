/** Chunk was on 51724 **/
n.d(t, {
  Z: () => b
}), n(47120);
var r = n(200651);
n(192379);
var i = n(512722),
  s = n.n(i),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(509545),
  d = n(74538),
  u = n(937615),
  m = n(374649),
  p = n(474936),
  g = n(981631),
  h = n(388032),
  f = n(811617);

function x(e) {
  let t, {
      subscription: n,
      withOverheadSeparator: i
    } = e,
    {
      analyticsLocations: x
    } = (0, o.ZP)(),
    [b] = (0, m.ED)({
      subscriptionId: n.id,
      renewal: !0,
      analyticsLocations: x,
      analyticsLocation: l.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
    });
  if (null == b) return null;
  let N = i ? f.finePrintWithOverheadSeparator : f.finePrint,
    _ = b.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, d.uZ)(t)
    });
  if (null == _) return null;
  let E = _.subscriptionPlanId,
    C = c.Z.get(E);
  s()(null != C, "Missing plan");
  let j = (0, u.T4)(b.total, b.currency);
  return C.interval === p.rV.YEAR ? t = h.NW.format(h.t["jPz/39"], {
    price: j,
    termsUrl: g.EYA.TERMS,
    paidURL: g.EYA.PAID_TERMS,
    privacyUrl: g.EYA.PRIVACY
  }) : C.interval === p.rV.MONTH && (t = 1 === C.intervalCount ? h.NW.format(h.t.m27GpK, {
    price: j,
    termsUrl: g.EYA.TERMS,
    paidURL: g.EYA.PAID_TERMS,
    privacyUrl: g.EYA.PRIVACY
  }) : h.NW.format(h.t["9xf5V1"], {
    price: j,
    termsUrl: g.EYA.TERMS,
    paidURL: g.EYA.PAID_TERMS,
    privacyUrl: g.EYA.PRIVACY,
    intervalCount: C.intervalCount
  })), (0, r.jsx)(a.Text, {
    color: "text-muted",
    className: N,
    variant: "text-xs/normal",
    children: t
  })
}

function b(e) {
  let {
    subscription: t,
    withOverheadSeparator: n
  } = e;
  return t.status === g.O0b.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(x, {
    subscription: t,
    withOverheadSeparator: n
  })
}