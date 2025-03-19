/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  F: () => f
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(70086),
  o = n(949640),
  c = n(981631),
  A = n(30513),
  d = n(486324),
  u = n(200299),
  g = n(388032);

function f(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: f
  } = e, {
    analyticsLocations: m
  } = (0, a.ZP)(), p = t.hasFeature(c.oNc.BANNER), h = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, o.f4)(t, m, n, r)
  }, [m, t]), C = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, o.E6)({
      guild: t,
      analyticsLocations: m,
      analyticsSection: c.jXE.GUILD_BANNER,
      analyticsObject: c.qAy.BUTTON_CTA,
      perks: (0, A.XO)()
    })
  }, [m, t]);
  return p ? (0, r.jsx)(s.zxk, {
    disabled: !(p && n),
    color: s.zxk.Colors.BRAND,
    className: f,
    onClick: () => (0, o.mw)({
      uploadType: d.pC.GUILD_BANNER,
      maxFileSizeBytes: u.B,
      onComplete: h,
      analyticsLocation: {
        page: c.ZY5.GUILD_SETTINGS,
        section: c.jXE.GUILD_BANNER
      },
      analyticsLocations: m
    }),
    children: g.NW.string(g.t.yG2pUl)
  }) : (0, r.jsx)(l.P, {
    className: f,
    onClick: C
  })
}