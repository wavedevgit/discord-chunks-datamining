/** Chunk was on 30514 **/
t.d(n, {
  Z: () => y
});
var i = t(200651);
t(192379);
var o = t(442837),
  l = t(481060),
  r = t(666520),
  s = t(246016),
  a = t(189156),
  c = t(706454),
  d = t(430824),
  u = t(914010),
  f = t(785717),
  p = t(250822),
  m = t(771362),
  h = t(280885),
  I = t(819602),
  x = t(78806),
  _ = t(900927),
  b = t(678738),
  v = t(179828),
  g = t(228168),
  j = t(388032),
  Z = t(349966);

function y(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: y,
    subsection: A,
    onClose: N
  } = e, {
    trackUserProfileAction: T
  } = (0, f.KZ)(), O = null == y ? void 0 : y.guildId, E = (0, o.e7)([d.Z], () => null != O ? d.Z.getGuild(O) : null), P = (0, o.e7)([u.Z], () => u.Z.getGuildId()), C = (0, s.Y)({
    userId: n.id
  }), S = (0, o.e7)([c.default], () => c.default.locale), M = (0, m.Z)(n.id), L = (0, p.Z)(n.id);
  return (0, i.jsxs)(l.zJl, {
    fade: !0,
    className: Z.scroller,
    children: [(null == y ? void 0 : y.bio) != null && (null == y ? void 0 : y.bio) !== "" && (0, i.jsx)(h.Z, {
      userBio: y.bio,
      setLineClamp: !1
    }), null != E && (0, i.jsx)(v.Z, {
      user: n,
      currentUser: t,
      guild: E,
      scrollIntoView: A === g.Tb.ROLES
    }), n.isProvisional && (0, i.jsx)(a.WR, {
      userId: n.id,
      headingColor: "header-secondary"
    }), C.length > 0 && (0, i.jsx)(b.Z, {
      heading: j.intl.string(j.t["Uv/eT0"]),
      children: (0, i.jsx)(x.Z, {
        applicationIds: C
      })
    }), (0, i.jsx)(b.Z, {
      heading: j.intl.string(j.t.a6XYDw),
      children: (0, i.jsx)(_.Z, {
        userId: n.id,
        guildId: null == y ? void 0 : y.guildId,
        tooltipDelay: g.vB
      })
    }), M.length > 0 && (0, i.jsx)(b.Z, {
      heading: j.intl.string(j.t["3fe7U1"]),
      scrollIntoView: A === g.Tb.CONNECTIONS,
      children: (0, i.jsx)(I.ZP, {
        connectedAccounts: M,
        className: Z.connections,
        userId: n.id,
        locale: S
      })
    }), L.length > 0 && (0, i.jsx)(b.Z, {
      heading: j.intl.string(j.t.PHjkRE),
      children: L.map(e => (0, i.jsx)(I.tH, {
        className: Z.appsConnections,
        applicationRoleConnection: e,
        locale: S,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), N()
        },
        selectedGuildId: null != P ? P : void 0
      }, e.application.id))
    }), (0, i.jsx)(b.Z, {
      heading: j.intl.string(j.t["mQKv+v"]),
      scrollIntoView: A === g.Tb.NOTE,
      children: (0, i.jsx)(r.Z, {
        userId: n.id,
        className: Z.note,
        autoFocus: A === g.Tb.NOTE,
        onUpdate: () => T({
          action: "SET_NOTE"
        })
      })
    })]
  })
}