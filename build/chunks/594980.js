/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  c: () => f
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(906732),
  l = n(884858),
  o = n(813197),
  c = n(434404),
  d = n(157176),
  u = n(949640),
  m = n(981631),
  p = n(30513),
  g = n(200299),
  h = n(388032);

function f(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: f
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), x = t.hasFeature(m.oNc.INVITE_SPLASH), j = n && x, N = i.useCallback(e => {
    c.Z.updateGuild({
      splash: e
    })
  }, []), v = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.E6)(t, b, m.jXE.GUILD_INVITE_BACKGROUND, m.qAy.BUTTON_CTA, (0, p.o9)())
  }, [b, t]);
  return x ? (0, r.jsxs)(s.zxk, {
    disabled: !j,
    color: s.Ttl.BRAND,
    className: f,
    children: [h.NW.string(h.t.yG2pUl), (0, r.jsx)(o.ZP, {
      disabled: !j,
      onChange: N,
      maxFileSizeBytes: g.B,
      onFileSizeError: () => (0, l.Z)(g.B)
    })]
  }) : (0, r.jsx)(d.e, {
    className: f,
    onClick: v
  })
}