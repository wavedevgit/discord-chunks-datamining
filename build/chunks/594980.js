/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  c: () => p
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(884858),
  o = n(813197),
  A = n(434404),
  c = n(70086),
  d = n(949640),
  u = n(981631),
  g = n(30513),
  f = n(200299),
  m = n(388032);

function p(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: p
  } = e, {
    analyticsLocations: h
  } = (0, a.ZP)(), C = t.hasFeature(u.oNc.INVITE_SPLASH), b = n && C, v = i.useCallback(e => {
    A.Z.updateGuild({
      splash: e
    })
  }, []), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, d.E6)({
      guild: t,
      analyticsLocations: h,
      analyticsSection: u.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: u.qAy.BUTTON_CTA,
      perks: (0, g.o9)()
    })
  }, [h, t]);
  return C ? (0, r.jsxs)(s.zxk, {
    disabled: !b,
    color: s.Ttl.BRAND,
    className: p,
    children: [m.NW.string(m.t.yG2pUl), (0, r.jsx)(o.ZP, {
      disabled: !b,
      onChange: v,
      maxFileSizeBytes: f.B,
      onFileSizeError: () => (0, l.Z)(f.B)
    })]
  }) : (0, r.jsx)(c.P, {
    className: p,
    onClick: x
  })
}