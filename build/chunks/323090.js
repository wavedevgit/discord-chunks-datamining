/** Chunk was on 81818 **/
t.d(n, {
  Z: () => h
});
var o = t(200651);
t(192379);
var r = t(442837),
  i = t(481060),
  l = t(666520),
  s = t(592125),
  c = t(430824),
  a = t(944486),
  d = t(785717),
  u = t(621853),
  f = t(748545),
  p = t(172351),
  b = t(280885),
  y = t(900927),
  v = t(678738),
  g = t(179828),
  m = t(228168),
  I = t(388032),
  j = t(330724);

function h(e) {
  var n;
  let {
    user: t,
    currentUser: h,
    displayProfile: _,
    subsection: x,
    onClose: O
  } = e, {
    trackUserProfileAction: Z
  } = (0, d.KZ)(), P = (0, r.e7)([c.Z], () => (null == _ ? void 0 : _.guildId) != null ? c.Z.getGuild(_.guildId) : null), N = (0, r.e7)([u.Z], () => {
    var e;
    return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), E = (0, r.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId())), S = (0, f.k)({
    location: "BotUserProfileModalInfo"
  }) ? I.NW.string(I.t["mQKv+v"]) : I.NW.string(I.t.PbMNh4);
  return (0, o.jsxs)(i.zJl, {
    fade: !0,
    className: j.scroller,
    children: [(null == _ ? void 0 : _.bio) != null && (null == _ ? void 0 : _.bio) !== "" && (0, o.jsx)(b.Z, {
      userBio: _.bio,
      setLineClamp: !1
    }), (null == N ? void 0 : N.popularApplicationCommandIds) != null && null != E && (0, o.jsx)(p.Z, {
      applicationId: N.id,
      commandIds: N.popularApplicationCommandIds,
      channel: E,
      guildId: null !== (n = null == _ ? void 0 : _.guildId) && void 0 !== n ? n : void 0,
      onClick: O
    }), null != P && (0, o.jsx)(g.Z, {
      user: t,
      currentUser: h,
      guild: P,
      scrollIntoView: x === m.Tb.ROLES
    }), (0, o.jsx)(v.Z, {
      heading: I.NW.string(I.t["A//N4u"]),
      children: (0, o.jsx)(y.Z, {
        userId: t.id,
        guildId: null == _ ? void 0 : _.guildId,
        tooltipDelay: m.vB
      })
    }), (0, o.jsx)(v.Z, {
      heading: S,
      scrollIntoView: x === m.Tb.NOTE,
      children: (0, o.jsx)(l.Z, {
        userId: t.id,
        className: j.note,
        autoFocus: x === m.Tb.NOTE,
        onUpdate: () => Z({
          action: "SET_NOTE"
        })
      })
    })]
  })
}