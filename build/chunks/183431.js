/** Chunk was on 52272 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(168107),
  l = n(480916),
  s = n(81643),
  c = n(388032);

function u(e) {
  let {
    channelId: t
  } = e, n = (0, s.l6)(), u = (0, s.L5)(), d = i.useCallback(() => {
    a.Z.showAgeVerificationGetStartedModal(l.cU.SYSTEM_DM_RETRY_BUTTON), (0, l.Z7)(l.io.RETRY, t)
  }, [t]);
  return (0, r.jsx)(o.zxk, {
    size: o.zxk.Sizes.MEDIUM,
    color: o.zxk.Colors.BRAND,
    onClick: d,
    disabled: !u,
    children: n ? c.NW.string(c.t["+2/AhI"]) : c.NW.string(c.t.WiSJBA)
  })
}