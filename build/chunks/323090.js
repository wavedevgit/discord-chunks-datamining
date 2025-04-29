/** Chunk was on 88235 **/
n.d(t, {
  Z: () => O
});
var r = n(200651);
n(192379);
var l = n(442837),
  i = n(481060),
  o = n(666520),
  s = n(592125),
  a = n(430824),
  c = n(944486),
  d = n(785717),
  u = n(621853),
  f = n(172351),
  p = n(280885),
  h = n(900927),
  j = n(678738),
  g = n(179828),
  m = n(228168),
  v = n(388032),
  b = n(349966);

function O(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: O,
    guildId: x,
    subsection: Z,
    onClose: y
  } = e, {
    trackUserProfileAction: I
  } = (0, d.KZ)(), P = (0, l.e7)([a.Z], () => a.Z.getGuild(x)), E = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application
  }), T = (0, l.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId()));
  return (0, r.jsxs)(i.zJl, {
    fade: !0,
    className: b.scroller,
    children: [(null == O ? void 0 : O.bio) != null && (null == O ? void 0 : O.bio) !== "" && (0, r.jsx)(p.Z, {
      userBio: O.bio,
      setLineClamp: !1
    }), (null == E ? void 0 : E.popularApplicationCommandIds) != null && null != T && (0, r.jsx)(f.Z, {
      applicationId: E.id,
      commandIds: E.popularApplicationCommandIds,
      channel: T,
      guildId: x,
      onClick: y
    }), null != P && (0, r.jsx)(g.Z, {
      user: t,
      currentUser: n,
      guild: P,
      scrollIntoView: Z === m.Tb.ROLES
    }), (0, r.jsx)(j.Z, {
      heading: v.intl.string(v.t["A//N4u"]),
      children: (0, r.jsx)(h.Z, {
        userId: t.id,
        guildId: x,
        tooltipDelay: m.vB
      })
    }), (0, r.jsx)(j.Z, {
      heading: v.intl.string(v.t["mQKv+v"]),
      scrollIntoView: Z === m.Tb.NOTE,
      children: (0, r.jsx)(o.Z, {
        userId: t.id,
        className: b.note,
        autoFocus: Z === m.Tb.NOTE,
        onUpdate: () => I({
          action: "SET_NOTE"
        })
      })
    })]
  })
}