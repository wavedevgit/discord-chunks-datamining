/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  O: () => p
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(516129),
  o = n(768581),
  A = n(949640),
  c = n(981631),
  d = n(30513),
  u = n(486324),
  g = n(200299),
  f = n(388032),
  m = n(669893);

function p(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, p = t.hasFeature(c.oNc.BANNER), h = t.hasFeature(c.oNc.ANIMATED_BANNER), C = p && n, {
    analyticsLocations: b
  } = (0, a.ZP)(), v = i.useCallback((e, n) => {
    (0, A.f4)(t, b, e, n)
  }, [b, t]), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, A.E6)({
      guild: t,
      analyticsLocations: b,
      analyticsSection: c.jXE.GUILD_BANNER,
      analyticsObject: c.qAy.UPLOAD_IMAGE,
      perks: (0, d.XO)()
    })
  }, [b, t]), N = (0, r.jsx)(l.Z, {
    image: t.banner,
    makeURL: e => null != e ? o.ZP.getGuildBannerURL({
      id: t.id,
      banner: e
    }, h) : null,
    disabled: !C,
    onChange: v,
    hint: f.NW.string(f.t.uPvxqK),
    onOpenImageSelectModal: () => (0, A.mw)({
      uploadType: u.pC.GUILD_BANNER,
      maxFileSizeBytes: g.B,
      onComplete: e => {
        let {
          imageUri: t,
          file: n
        } = e;
        return v(t, n)
      },
      analyticsLocation: {
        page: c.ZY5.GUILD_SETTINGS,
        section: c.jXE.GUILD_BANNER
      },
      analyticsLocations: b
    }),
    enabled: C
  });
  return p ? N : (0, r.jsx)(s.P3F, {
    "aria-hidden": !0,
    tabIndex: -1,
    className: m.upsell,
    onClick: x,
    children: N
  })
}