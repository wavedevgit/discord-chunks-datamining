/** Chunk was on 84466 **/
n.d(t, {
  Z: () => _
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(230711),
  o = n(985754),
  a = n(91802),
  s = n(222727),
  c = n(981631),
  u = n(921944),
  E = n(388032),
  d = n(923627);
let _ = 12633 == n.j ? e => {
  let {
    notice: t,
    noticeType: n,
    dismissCurrentNotice: _
  } = e, N = (null == t ? void 0 : t.metadata.premiumSubscription) != null, I = (0, a.n)();
  if ((0, s.U)(c.jXE.NOTIFICATION_BAR, null == I ? void 0 : I.countryCode), null == I) return null;
  let T = I.countryCode,
    O = I.currency,
    S = I.paymentSourceTypes.length > 0;
  return (0, r.jsxs)(i.qXd, {
    color: N ? i.DM8.BRAND : i.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.RyX, {
      onClick: () => _(u.L.UNKNOWN),
      noticeType: n
    }), !N && (0, r.jsx)(i.SrA, {
      size: "md",
      color: "currentColor",
      className: d.premiumIcon
    }), (0, o.Gv)(T, O, S, N), (0, r.jsx)(i.NoS, {
      onClick: () => {
        _(u.L.UNKNOWN), l.Z.open(c.oAB.PREMIUM)
      },
      noticeType: n,
      children: E.NW.string(E.t.hvVgAQ)
    })]
  })
} : null