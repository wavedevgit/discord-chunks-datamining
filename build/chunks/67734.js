/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  F: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(157176),
  o = n(949640),
  c = n(981631),
  d = n(30513),
  u = n(486324),
  m = n(200299),
  p = n(388032);

function g(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: g
  } = e, {
    analyticsLocations: h
  } = (0, a.ZP)(), f = t.hasFeature(c.oNc.BANNER), b = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, o.f4)(t, h, n, r)
  }, [h, t]), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, o.E6)(t, h, c.jXE.GUILD_BANNER, c.qAy.BUTTON_CTA, (0, d.XO)())
  }, [h, t]);
  return f ? (0, r.jsx)(s.zxk, {
    disabled: !(f && n),
    color: s.zxk.Colors.BRAND,
    className: g,
    onClick: () => (0, o.mw)({
      uploadType: u.pC.GUILD_BANNER,
      maxFileSizeBytes: m.B,
      onComplete: b,
      analyticsLocation: {
        page: c.ZY5.GUILD_SETTINGS,
        section: c.jXE.GUILD_BANNER
      },
      analyticsLocations: h
    }),
    children: p.NW.string(p.t.yG2pUl)
  }) : (0, r.jsx)(l.e, {
    className: g,
    onClick: x
  })
}