/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  h: () => h
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(884858),
  o = n(516129),
  A = n(768581),
  c = n(434404),
  d = n(949640),
  u = n(981631),
  g = n(30513),
  f = n(200299),
  m = n(388032),
  p = n(908906);

function h(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, h = t.hasFeature(u.oNc.INVITE_SPLASH), C = n && h, {
    analyticsLocations: b
  } = (0, a.ZP)(), v = i.useCallback(e => {
    c.Z.updateGuild({
      splash: e
    })
  }, []), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, d.E6)({
      guild: t,
      analyticsLocations: b,
      analyticsSection: u.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: u.qAy.UPLOAD_IMAGE,
      perks: (0, g.o9)()
    })
  }, [b, t]), N = (0, r.jsx)(o.Z, {
    image: t.splash,
    makeURL: e => null != e ? A.ZP.getGuildSplashURL({
      id: t.id,
      splash: e
    }) : null,
    disabled: !C,
    onChange: v,
    hint: m.NW.string(m.t.uPvxqK),
    enabled: C,
    maxFileSizeBytes: f.B,
    onFileSizeError: () => (0, l.Z)(f.B)
  });
  return h ? N : (0, r.jsx)(s.P3F, {
    "aria-hidden": !0,
    tabIndex: -1,
    className: p.upsell,
    onClick: x,
    children: N
  })
}