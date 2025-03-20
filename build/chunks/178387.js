/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  I: () => h
});
var r = n(200651);
n(192379);
var i = n(793030),
  s = n(442837),
  a = n(100527),
  l = n(906732),
  o = n(496675),
  A = n(999382),
  c = n(92533),
  d = n(249363),
  u = n(464865),
  g = n(888125),
  f = n(981631),
  m = n(388032),
  p = n(893235);

function h() {
  let {
    analyticsLocations: e
  } = (0, l.ZP)(a.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE), t = (0, s.e7)([A.Z], () => A.Z.getProps().guild, []), {
    isGuildAdmin: n,
    canManageGuild: h
  } = (0, s.cj)([o.Z], () => ({
    isGuildAdmin: null != t && o.Z.can(f.Plq.ADMINISTRATOR, t),
    canManageGuild: null != t && o.Z.can(f.Plq.MANAGE_GUILD, t)
  }));
  return null == t ? null : (0, r.jsx)(l.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: p.container,
      children: [(0, r.jsx)(i.X6, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: m.NW.string(m.t.UKgg5O)
      }), (0, r.jsx)(g.w, {
        canManageGuild: h,
        premiumProgressBarEnabled: t.premiumProgressBarEnabled
      }), (0, r.jsx)("div", {
        className: p.divider
      }), (0, r.jsx)(c.A, {
        guild: t,
        canManageGuild: h
      }), (0, r.jsx)("div", {
        className: p.divider
      }), (0, r.jsx)(d.A, {
        guild: t,
        canManageGuild: h
      }), n ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: p.divider
        }), (0, r.jsx)(u.V, {
          guild: t
        })]
      }) : null]
    })
  })
}