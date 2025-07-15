/** Chunk was on 46989 **/
n.d(t, {
  Z: () => h
});
var r = n(255367);
n(73800);
var l = n(120356),
  i = n.n(l),
  s = n(399606),
  a = n(481060),
  o = n(271383),
  u = n(594174),
  c = n(777288),
  d = n(753042),
  E = n(787469),
  _ = n(477718),
  m = n(791176),
  A = n(908474),
  g = n(467014),
  f = n(388032),
  T = n(12740);

function I() {
  return (0, r.jsxs)("div", {
    className: T.header,
    children: [(0, r.jsxs)("div", {
      className: T.headerTitle,
      children: [(0, r.jsx)(c.Z, {
        width: 16,
        height: 16
      }), (0, r.jsx)(a.X6q, {
        variant: "heading-md/semibold",
        children: f.intl.string(f.t.cf5lgo)
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(a.M2$, {
        shortcut: "esc",
        keyClassName: T.keyComboInner,
        className: T.keyComboContainer
      })
    })]
  })
}

function h(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: c,
    onNavigate: f
  } = e, h = (0, s.e7)([u.default], () => u.default.getUser(t), [t]), O = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
  return null == h || null == O ? null : (0, r.jsxs)("div", {
    className: i()(T.container, c),
    children: [(0, r.jsx)(I, {}), (0, r.jsxs)(a.Ttm, {
      className: T.innerContainer,
      children: [(0, r.jsx)(A.Z, {
        member: O
      }), (0, r.jsx)(g.Z, {
        userId: t,
        guildId: n
      }), (0, r.jsx)(m.Z, {
        member: O,
        onNavigate: f
      }), (0, r.jsx)(E.Z, {
        member: O
      }), (0, r.jsx)(d.Z, {
        member: O
      }), (0, r.jsx)(_.Z, {
        member: O
      })]
    })]
  })
}