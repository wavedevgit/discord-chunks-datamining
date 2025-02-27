/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651),
  i = n(192379),
  s = n(580685),
  a = n(442837),
  l = n(481060),
  o = n(314852),
  c = n(405222),
  d = n(323220),
  u = n(434404),
  m = n(981631),
  g = n(388032),
  p = n(44713);

function h(e) {
  var t;
  let {
    profile: n,
    canManageGuild: h
  } = e, f = n.id, b = s.Y.VISIBLE.has(n.visibility), x = (0, a.e7)([o.Z], () => {
    var e;
    return (null === (e = o.Z.getProfile(f)) || void 0 === e ? void 0 : e.visibility) === c.k.PUBLIC_WITH_RECRUITMENT
  }, [f]), j = i.useCallback(() => {
    b ? u.Z.updateGuildProfile(f, {
      visibility: c.k.RESTRICTED
    }) : u.Z.updateGuildProfile(f, {
      visibility: x ? c.k.PUBLIC_WITH_RECRUITMENT : c.k.PUBLIC
    })
  }, [f, x, b]), N = i.useCallback(() => {
    u.Z.setSection(m.pNK.ACCESS, m.KsC.ACCESS_DISCOVERABLE)
  }, []), v = null === (t = n.features) || void 0 === t ? void 0 : t.includes(m.oNc.DISCOVERABLE);
  return (0, r.jsxs)(l.hjN, {
    className: p.twoColumnContainer,
    children: [(0, r.jsxs)("div", {
      className: p.column,
      children: [(0, r.jsx)(l.j7V, {
        onChange: j,
        value: !b,
        hideBorder: !0,
        disabled: v || !h,
        children: g.NW.string(g.t.fjHWen)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: g.NW.string(g.t.J1YOV1)
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: g.NW.string(g.t.YtCViY)
      }), v && (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.NW.format(g.t.R8jY9v, {
          accessLink: (e, t) => (0, r.jsx)(l.eee, {
            onClick: N,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: p.column,
      children: (0, r.jsx)(d.Z, {
        guildId: f,
        name: n.name
      })
    })]
  })
}