/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(580685),
  o = n(442837),
  A = n(481060),
  c = n(314852),
  d = n(405222),
  u = n(323220),
  g = n(434404),
  f = n(981631),
  m = n(388032),
  p = n(44713);

function h(e) {
  var t;
  let {
    profile: n,
    canManageGuild: s
  } = e, h = n.id, C = l.Y.VISIBLE.has(n.visibility), b = (0, o.e7)([c.Z], () => {
    var e;
    return (null === (e = c.Z.getProfile(h)) || void 0 === e ? void 0 : e.visibility) === d.k.PUBLIC_WITH_RECRUITMENT
  }, [h]), v = i.useCallback(() => {
    C ? g.Z.updateGuildProfile(h, {
      visibility: d.k.RESTRICTED
    }) : g.Z.updateGuildProfile(h, {
      visibility: b ? d.k.PUBLIC_WITH_RECRUITMENT : d.k.PUBLIC
    })
  }, [h, b, C]), x = i.useCallback(() => {
    g.Z.setSection(f.pNK.ACCESS, f.KsC.ACCESS_DISCOVERABLE)
  }, []), N = null === (t = n.features) || void 0 === t ? void 0 : t.includes(f.oNc.DISCOVERABLE);
  return (0, r.jsxs)(A.hjN, {
    className: p.twoColumnContainer,
    children: [(0, r.jsxs)("div", {
      className: p.column,
      children: [(0, r.jsx)(A.j7V, {
        onChange: v,
        value: !C,
        hideBorder: !0,
        disabled: N || !s,
        children: m.NW.string(m.t.fjHWen)
      }), (0, r.jsx)(A.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: m.NW.string(m.t.J1YOV1)
      }), N && (0, r.jsx)(A.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: m.NW.format(m.t.R8jY9v, {
          accessLink: (e, t) => (0, r.jsx)(A.eee, {
            onClick: x,
            children: e
          }, t)
        })
      })]
    }), (0, r.jsx)("div", {
      className: a()(p.column, {
        [p.profileViewDisabled]: C
      }),
      children: (0, r.jsx)(u.Z, {
        guildId: h,
        name: n.name
      })
    })]
  })
}