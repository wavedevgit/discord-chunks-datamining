/** Chunk was on 93886 **/
n.d(t, {
  Z: () => v
});
var r = n(200651);
n(192379);
var a = n(120356),
  i = n.n(a),
  l = n(149765),
  o = n(442837),
  s = n(481060),
  c = n(933557),
  d = n(592125),
  u = n(430824),
  m = n(496675),
  h = n(944486),
  p = n(914010),
  x = n(233608),
  f = n(71080),
  b = n(747996),
  _ = n(710662);

function g(e) {
  let {
    title: t,
    can: n
  } = e, a = n ? s.dz2 : s.Dio, l = (0, r.jsx)("div", {
    className: i()(b.iconOuter, n ? b.iconCheck : b.iconCross),
    children: (0, r.jsx)(a, {
      className: b.icon
    })
  });
  return (0, r.jsxs)("div", {
    className: b.scope,
    children: [l, (0, r.jsx)("div", {
      className: b.scopeInner,
      children: (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function v() {
  let e = (0, o.e7)([h.Z], () => h.Z.getChannelId()),
    t = (0, o.e7)([p.Z], () => p.Z.getGuildId()),
    n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
    a = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
    v = (0, o.e7)([m.Z], () => m.Z.computePermissions(n)),
    j = (0, o.e7)([m.Z], () => m.Z.computePermissions(a)),
    y = (0, c.ZP)(n, !0),
    C = null != n ? (0, f.IG)(n, !1, !0) : null,
    N = null != a ? x.Z.getGuildPermissionSpecMap(a) : null,
    T = Object.values(null != C ? C : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, a = l.e$(v, n);
      return (0, r.jsx)(g, {
        title: t,
        can: a
      }, t)
    }),
    O = Object.values(null != N ? N : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, a = l.e$(j, n);
      return (0, r.jsx)(g, {
        title: t,
        can: a
      }, t)
    });
  return (0, r.jsx)("div", {
    className: i()(_.panel, b.panel),
    children: (0, r.jsxs)("div", {
      className: b.panelInner,
      children: [(0, r.jsxs)("section", {
        className: b.section,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          children: null != y ? "Permissions in ".concat(y) : "No channel selected"
        }), T]
      }), (0, r.jsxs)("section", {
        className: b.section,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          children: null != a ? "Permissions in ".concat(a.name) : "No guild selected"
        }), O]
      })]
    })
  })
}