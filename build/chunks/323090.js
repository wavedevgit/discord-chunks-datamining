/** Chunk was on 73049 (5df71b25786cf661.js) **/
t.d(n, {
  Z: () => v
});
var r = t(200651);
t(192379);
var o = t(442837),
  i = t(481060),
  l = t(666520),
  s = t(592125),
  c = t(430824),
  a = t(944486),
  d = t(785717),
  u = t(621853),
  f = t(748545),
  p = t(172351),
  m = t(280885),
  I = t(900927),
  b = t(678738),
  g = t(179828),
  y = t(228168),
  j = t(388032),
  h = t(329462);

function v(e) {
  var n;
  let {
    user: t,
    currentUser: v,
    displayProfile: x,
    subsection: O,
    onClose: _
  } = e, {
    trackUserProfileAction: Z
  } = (0, d.KZ)(), N = (0, o.e7)([c.Z], () => (null == x ? void 0 : x.guildId) != null ? c.Z.getGuild(x.guildId) : null), P = (0, o.e7)([u.Z], () => {
    var e;
    return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), E = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId())), S = (0, f.kc)({
    location: "BotUserProfileModalInfo"
  }) ? j.NW.string(j.t["mQKv+v"]) : j.NW.string(j.t.PbMNh4);
  return (0, r.jsxs)(i.zJl, {
    fade: !0,
    className: h.scroller,
    children: [(null == x ? void 0 : x.bio) != null && (null == x ? void 0 : x.bio) !== "" && (0, r.jsx)(m.Z, {
      userBio: x.bio,
      setLineClamp: !1
    }), (null == P ? void 0 : P.popularApplicationCommandIds) != null && null != E && (0, r.jsx)(p.Z, {
      applicationId: P.id,
      commandIds: P.popularApplicationCommandIds,
      channel: E,
      guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
      onClick: _
    }), null != N && (0, r.jsx)(g.Z, {
      user: t,
      currentUser: v,
      guild: N,
      scrollIntoView: O === y.Tb.ROLES
    }), (0, r.jsx)(b.Z, {
      heading: j.NW.string(j.t["A//N4u"]),
      children: (0, r.jsx)(I.Z, {
        userId: t.id,
        guildId: null == x ? void 0 : x.guildId,
        tooltipDelay: y.vB
      })
    }), (0, r.jsx)(b.Z, {
      heading: S,
      scrollIntoView: O === y.Tb.NOTE,
      children: (0, r.jsx)(l.Z, {
        userId: t.id,
        className: h.note,
        autoFocus: O === y.Tb.NOTE,
        onUpdate: () => Z({
          action: "SET_NOTE"
        })
      })
    })]
  })
}