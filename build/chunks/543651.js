/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(913527),
  s = n.n(a),
  l = n(442837),
  c = n(481060),
  u = n(835473),
  d = n(318374),
  f = n(925329),
  _ = n(594174),
  p = n(823379),
  h = n(388032),
  g = n(838486);
let m = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: i,
    title: a,
    guildId: m,
    className: E
  } = e, v = (0, u.q)(i), b = (0, l.Wu)([_.default], () => {
    var e;
    return null !== (e = n.map(e => _.default.getUser(e)).filter(p.lm)) && void 0 !== e ? e : []
  }), y = null == v ? void 0 : v.name, O = s()(t).fromNow();
  return null == t ? null : (0, r.jsxs)("div", {
    className: o()(E, g.container),
    children: [(0, r.jsx)(f.Z, {
      game: v
    }), (0, r.jsxs)("div", {
      className: g.textSection,
      children: [null != a && "" !== a ? (0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: a
      }) : (0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-muted",
        children: h.NW.string(h.t.Cyxddn)
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: g.__invalid_subtitle,
        children: [null != y ? "".concat(y, " • ") : null, O]
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: g.__invalid_subtitle
      })]
    }), null != b && b.length > 0 && (0, r.jsx)(d.Z, {
      maxUsers: 4,
      users: b,
      className: g.__invalid_facePile,
      guildId: m
    })]
  })
}