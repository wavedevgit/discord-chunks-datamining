/** Chunk was on 81818 **/
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
  b = t(250822),
  m = t(771362),
  v = t(280885),
  g = t(819602),
  y = t(78806),
  I = t(900927),
  h = t(678738),
  j = t(652853),
  x = t(179828),
  _ = t(228168),
  O = t(388032),
  Z = t(330724);

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
  } = (0, f.KZ)(), C = null == N ? void 0 : N.guildId, A = (0, o.e7)([d.Z], () => null != C ? d.Z.getGuild(C) : null), w = (0, o.e7)([u.Z], () => u.Z.getGuildId()), L = (0, s.Y)({
    userId: n.id,
    location: "UserProfileModalInfo"
  }), R = (0, o.e7)([a.default], () => a.default.locale), M = (0, m.Z)(n.id), U = (0, b.Z)(n.id), B = (0, p.kc)({
    location: "UserProfileModalInfo"
  }) ? O.NW.string(O.t["mQKv+v"]) : O.NW.string(O.t.PbMNh4);
  return (0, r.jsxs)(i.zJl, {
    fade: !0,
    className: Z.scroller,
    children: [(null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== "" && (0, r.jsx)(v.Z, {
      userBio: N.bio,
      setLineClamp: !1
    }), null != A && (0, r.jsx)(x.Z, {
      user: n,
      currentUser: t,
      guild: A,
      scrollIntoView: P === _.Tb.ROLES
    }), n.isProvisional && (0, r.jsx)(c.WR, {
      userId: n.id,
      headingColor: "header-secondary"
    }), L.length > 0 && (0, r.jsx)(h.Z, {
      heading: O.NW.string(O.t["Uv/eT0"]),
      children: (0, r.jsx)(y.Z, {
        applicationIds: L
      })
    }), (0, r.jsx)(h.Z, {
      heading: O.NW.string(O.t.a6XYDw),
      children: (0, r.jsx)(I.Z, {
        userId: n.id,
        guildId: null == N ? void 0 : N.guildId,
        tooltipDelay: _.vB
      })
    }), M.length > 0 && (0, r.jsx)(h.Z, {
      heading: O.NW.string(O.t["3fe7U1"]),
      scrollIntoView: P === _.Tb.CONNECTIONS,
      children: (0, r.jsx)(g.OA, {
        connectedAccounts: M,
        className: Z.connections,
        userId: n.id,
        theme: S,
        locale: R
      })
    }), U.length > 0 && (0, r.jsx)(h.Z, {
      heading: O.NW.string(O.t.PHjkRE),
      children: U.map(e => (0, r.jsx)(g.tH, {
        className: Z.appsConnections,
        applicationRoleConnection: e,
        locale: R,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), E()
        },
        selectedGuildId: null != w ? w : void 0
      }, e.application.id))
    }), (0, r.jsx)(h.Z, {
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