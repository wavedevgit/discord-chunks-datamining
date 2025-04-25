/** Chunk was on 30514 **/
t.d(n, {
  Z: () => v
});
var i = t(200651);
t(192379);
var o = t(442837),
  l = t(481060),
  r = t(666520),
  s = t(592125),
  a = t(430824),
  c = t(944486),
  d = t(785717),
  u = t(621853),
  f = t(172351),
  p = t(280885),
  m = t(900927),
  h = t(678738),
  I = t(179828),
  x = t(228168),
  _ = t(388032),
  b = t(349966);

function v(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: v,
    guildId: g,
    subsection: j,
    onClose: Z
  } = e, {
    trackUserProfileAction: y
  } = (0, d.KZ)(), A = (0, o.e7)([a.Z], () => a.Z.getGuild(g)), N = (0, o.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application
  }), T = (0, o.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId()));
  return (0, i.jsxs)(l.zJl, {
    fade: !0,
    className: b.scroller,
    children: [(null == v ? void 0 : v.bio) != null && (null == v ? void 0 : v.bio) !== "" && (0, i.jsx)(p.Z, {
      userBio: v.bio,
      setLineClamp: !1
    }), (null == N ? void 0 : N.popularApplicationCommandIds) != null && null != T && (0, i.jsx)(f.Z, {
      applicationId: N.id,
      commandIds: N.popularApplicationCommandIds,
      channel: T,
      guildId: g,
      onClick: Z
    }), null != A && (0, i.jsx)(I.Z, {
      user: n,
      currentUser: t,
      guild: A,
      scrollIntoView: j === x.Tb.ROLES
    }), (0, i.jsx)(h.Z, {
      heading: _.intl.string(_.t["A//N4u"]),
      children: (0, i.jsx)(m.Z, {
        userId: n.id,
        guildId: g,
        tooltipDelay: x.vB
      })
    }), (0, i.jsx)(h.Z, {
      heading: _.intl.string(_.t["mQKv+v"]),
      scrollIntoView: j === x.Tb.NOTE,
      children: (0, i.jsx)(r.Z, {
        userId: n.id,
        className: b.note,
        autoFocus: j === x.Tb.NOTE,
        onUpdate: () => y({
          action: "SET_NOTE"
        })
      })
    })]
  })
}