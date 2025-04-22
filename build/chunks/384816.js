/** Chunk was on 54636 **/
t.d(n, {
  Z: () => Z
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
  p = t(250822),
  m = t(771362),
  b = t(280885),
  h = t(819602),
  g = t(78806),
  j = t(900927),
  v = t(678738),
  x = t(652853),
  y = t(179828),
  O = t(228168),
  I = t(388032),
  _ = t(349966);

function Z(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: Z,
    subsection: P,
    onClose: A
  } = e, {
    theme: E
  } = (0, x.z)(), {
    trackUserProfileAction: N
  } = (0, f.KZ)(), T = null == Z ? void 0 : Z.guildId, C = (0, o.e7)([d.Z], () => null != T ? d.Z.getGuild(T) : null), S = (0, o.e7)([u.Z], () => u.Z.getGuildId()), w = (0, s.Y)({
    userId: n.id
  }), M = (0, o.e7)([a.default], () => a.default.locale), R = (0, m.Z)(n.id), L = (0, p.Z)(n.id);
  return (0, r.jsxs)(i.zJl, {
    fade: !0,
    className: _.scroller,
    children: [(null == Z ? void 0 : Z.bio) != null && (null == Z ? void 0 : Z.bio) !== "" && (0, r.jsx)(b.Z, {
      userBio: Z.bio,
      setLineClamp: !1
    }), null != C && (0, r.jsx)(y.Z, {
      user: n,
      currentUser: t,
      guild: C,
      scrollIntoView: P === O.Tb.ROLES
    }), n.isProvisional && (0, r.jsx)(c.WR, {
      userId: n.id,
      headingColor: "header-secondary"
    }), w.length > 0 && (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t["Uv/eT0"]),
      children: (0, r.jsx)(g.Z, {
        applicationIds: w
      })
    }), (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t.a6XYDw),
      children: (0, r.jsx)(j.Z, {
        userId: n.id,
        guildId: null == Z ? void 0 : Z.guildId,
        tooltipDelay: O.vB
      })
    }), R.length > 0 && (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t["3fe7U1"]),
      scrollIntoView: P === O.Tb.CONNECTIONS,
      children: (0, r.jsx)(h.OA, {
        connectedAccounts: R,
        className: _.connections,
        userId: n.id,
        theme: E,
        locale: M
      })
    }), L.length > 0 && (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t.PHjkRE),
      children: L.map(e => (0, r.jsx)(h.tH, {
        className: _.appsConnections,
        applicationRoleConnection: e,
        locale: M,
        onApplicationClicked: () => {
          N({
            action: "PRESS_APP_CONNECTION"
          }), A()
        },
        selectedGuildId: null != S ? S : void 0
      }, e.application.id))
    }), (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t["mQKv+v"]),
      scrollIntoView: P === O.Tb.NOTE,
      children: (0, r.jsx)(l.Z, {
        userId: n.id,
        className: _.note,
        autoFocus: P === O.Tb.NOTE,
        onUpdate: () => N({
          action: "SET_NOTE"
        })
      })
    })]
  })
}