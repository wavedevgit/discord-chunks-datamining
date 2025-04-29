/** Chunk was on 88235 **/
n.d(t, {
  Z: () => P
});
var r = n(200651);
n(192379);
var l = n(442837),
  i = n(481060),
  o = n(666520),
  s = n(246016),
  a = n(189156),
  c = n(706454),
  d = n(430824),
  u = n(914010),
  f = n(246946),
  p = n(785717),
  h = n(250822),
  j = n(771362),
  g = n(280885),
  m = n(819602),
  v = n(78806),
  b = n(900927),
  O = n(678738),
  x = n(179828),
  Z = n(228168),
  y = n(388032),
  I = n(349966);

function P(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: P,
    subsection: E,
    onClose: T
  } = e, {
    trackUserProfileAction: N
  } = (0, p.KZ)(), S = null == P ? void 0 : P.guildId, A = (0, l.e7)([d.Z], () => null != S ? d.Z.getGuild(S) : null), C = (0, l.e7)([u.Z], () => u.Z.getGuildId()), _ = (0, s.Y)({
    userId: t.id
  }), w = (0, l.e7)([f.Z], () => f.Z.hidePersonalInformation), R = (0, l.e7)([c.default], () => c.default.locale), M = (0, j.Z)(t.id), L = (0, h.Z)(t.id);
  return (0, r.jsxs)(i.zJl, {
    fade: !0,
    className: I.scroller,
    children: [(null == P ? void 0 : P.bio) != null && (null == P ? void 0 : P.bio) !== "" && !w && (0, r.jsx)(g.Z, {
      userBio: P.bio,
      setLineClamp: !1
    }), null != A && (0, r.jsx)(x.Z, {
      user: t,
      currentUser: n,
      guild: A,
      scrollIntoView: E === Z.Tb.ROLES
    }), t.isProvisional && (0, r.jsx)(a.WR, {
      userId: t.id,
      headingColor: "header-secondary"
    }), _.length > 0 && (0, r.jsx)(O.Z, {
      heading: y.intl.string(y.t["Uv/eT0"]),
      children: (0, r.jsx)(v.Z, {
        applicationIds: _
      })
    }), (0, r.jsx)(O.Z, {
      heading: y.intl.string(y.t.a6XYDw),
      children: (0, r.jsx)(b.Z, {
        userId: t.id,
        guildId: null == P ? void 0 : P.guildId,
        tooltipDelay: Z.vB
      })
    }), M.length > 0 && (0, r.jsx)(O.Z, {
      heading: y.intl.string(y.t["3fe7U1"]),
      scrollIntoView: E === Z.Tb.CONNECTIONS,
      children: (0, r.jsx)(m.ZP, {
        connectedAccounts: M,
        className: I.connections,
        userId: t.id,
        locale: R
      })
    }), L.length > 0 && (0, r.jsx)(O.Z, {
      heading: y.intl.string(y.t.PHjkRE),
      children: L.map(e => (0, r.jsx)(m.tH, {
        className: I.appsConnections,
        applicationRoleConnection: e,
        locale: R,
        onApplicationClicked: () => {
          N({
            action: "PRESS_APP_CONNECTION"
          }), T()
        },
        selectedGuildId: null != C ? C : void 0
      }, e.application.id))
    }), (0, r.jsx)(O.Z, {
      heading: y.intl.string(y.t["mQKv+v"]),
      scrollIntoView: E === Z.Tb.NOTE,
      children: (0, r.jsx)(o.Z, {
        userId: t.id,
        className: I.note,
        autoFocus: E === Z.Tb.NOTE,
        onUpdate: () => N({
          action: "SET_NOTE"
        })
      })
    })]
  })
}