/** Chunk was on 73049 **/
t.d(n, {
  Z: () => N
});
var r = t(200651);
t(192379);
var o = t(442837),
  i = t(481060),
  l = t(666520),
  s = t(246016),
  c = t(189156),
  a = t(706454),
  d = t(430824),
  u = t(914010),
  f = t(785717),
  p = t(748545),
  m = t(250822),
  b = t(771362),
  g = t(280885),
  v = t(819602),
  y = t(78806),
  h = t(900927),
  I = t(678738),
  j = t(652853),
  x = t(179828),
  _ = t(228168),
  O = t(388032),
  Z = t(329462);

function N(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: N,
    subsection: P,
    onClose: E
  } = e, {
    theme: S
  } = (0, j.z)(), {
    trackUserProfileAction: T
  } = (0, f.KZ)(), C = null == N ? void 0 : N.guildId, L = (0, o.e7)([d.Z], () => null != C ? d.Z.getGuild(C) : null), A = (0, o.e7)([u.Z], () => u.Z.getGuildId()), w = (0, s.Y)({
    userId: n.id,
    location: "UserProfileModalInfo"
  }), M = (0, o.e7)([a.default], () => a.default.locale), U = (0, b.Z)(n.id), R = (0, m.Z)(n.id), B = (0, p.kc)({
    location: "UserProfileModalInfo"
  }) ? O.NW.string(O.t["mQKv+v"]) : O.NW.string(O.t.PbMNh4);
  return (0, r.jsxs)(i.zJl, {
    fade: !0,
    className: Z.scroller,
    children: [(null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== "" && (0, r.jsx)(g.Z, {
      userBio: N.bio,
      setLineClamp: !1
    }), null != L && (0, r.jsx)(x.Z, {
      user: n,
      currentUser: t,
      guild: L,
      scrollIntoView: P === _.Tb.ROLES
    }), n.isProvisional && (0, r.jsx)(c.WR, {
      userId: n.id,
      headingColor: "header-secondary"
    }), w.length > 0 && (0, r.jsx)(I.Z, {
      heading: O.NW.string(O.t["Uv/eT0"]),
      children: (0, r.jsx)(y.Z, {
        applicationIds: w
      })
    }), (0, r.jsx)(I.Z, {
      heading: O.NW.string(O.t.a6XYDw),
      children: (0, r.jsx)(h.Z, {
        userId: n.id,
        guildId: null == N ? void 0 : N.guildId,
        tooltipDelay: _.vB
      })
    }), U.length > 0 && (0, r.jsx)(I.Z, {
      heading: O.NW.string(O.t["3fe7U1"]),
      scrollIntoView: P === _.Tb.CONNECTIONS,
      children: (0, r.jsx)(v.OA, {
        connectedAccounts: U,
        className: Z.connections,
        userId: n.id,
        theme: S,
        locale: M
      })
    }), R.length > 0 && (0, r.jsx)(I.Z, {
      heading: O.NW.string(O.t.PHjkRE),
      children: R.map(e => (0, r.jsx)(v.tH, {
        className: Z.appsConnections,
        applicationRoleConnection: e,
        locale: M,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), E()
        },
        selectedGuildId: null != A ? A : void 0
      }, e.application.id))
    }), (0, r.jsx)(I.Z, {
      heading: B,
      scrollIntoView: P === _.Tb.NOTE,
      children: (0, r.jsx)(l.Z, {
        userId: n.id,
        className: Z.note,
        autoFocus: P === _.Tb.NOTE,
        onUpdate: () => T({
          action: "SET_NOTE"
        })
      })
    })]
  })
}