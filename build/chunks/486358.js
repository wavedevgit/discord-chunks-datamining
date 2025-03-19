/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => x
}), n(266796);
var r = n(200651);
n(192379);
var i = n(793030),
  s = n(442837),
  a = n(902840),
  l = n(100527),
  o = n(906732),
  c = n(34586),
  A = n(496675),
  d = n(999382),
  u = n(723914),
  g = n(30818),
  f = n(997698),
  m = n(354031),
  p = n(335438),
  h = n(166805),
  C = n(981631),
  b = n(388032),
  v = n(80281);
let x = function() {
  let {
    analyticsLocations: e
  } = (0, o.ZP)(l.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE), t = (0, s.e7)([d.Z], () => d.Z.getProps().guild, []), n = (0, s.e7)([A.Z], () => null != t && A.Z.can(C.Plq.MANAGE_GUILD, t)), x = (0, c.E)(t), N = (0, a.l9)(null != t ? t : void 0);
  return null == t ? null : (0, r.jsx)(o.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: v.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.X6, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: b.NW.string(b.t["6TAHb2"])
        }), (0, r.jsx)(i.xv, {
          variant: "text-sm/medium",
          color: "header-secondary",
          tag: "p",
          className: v.description,
          children: b.NW.string(b.t.XCGZFh)
        })]
      }), !0 === N && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.P, {
          canManageGuild: n,
          features: t.features
        }), (0, r.jsx)("div", {
          className: v.divider
        })]
      }), (0, r.jsx)(p.l, {
        canManageGuild: n,
        guild: t
      }), void 0 !== x && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: v.divider
        }), (0, r.jsx)(u.q, {
          isInventoryFeedEnabled: x,
          canManageGuild: n,
          features: t.features
        })]
      }), (0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsx)(g.z, {
        guildId: t.id,
        defaultSettings: t.defaultMessageNotifications,
        canManageGuild: n
      }), (0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsx)(f.L, {
        canManageGuild: n,
        guild: t
      }), !0 === n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: v.divider
        }), (0, r.jsx)(h.P, {
          guildId: t.id
        })]
      })]
    })
  })
}