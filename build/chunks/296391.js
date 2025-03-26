/** Chunk was on 81818 **/
t.d(n, {
  Z: () => x
});
var o = t(200651);
t(192379);
var r = t(442837),
  i = t(481060),
  l = t(468363),
  s = t(353647),
  c = t(158776),
  a = t(885110),
  d = t(63063),
  u = t(369566),
  f = t(29899),
  p = t(678738),
  b = t(151545),
  y = t(744802),
  v = t(493043),
  g = t(864141),
  m = t(228168),
  I = t(981631),
  j = t(388032),
  h = t(559215),
  _ = t(658266);

function x(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: x,
    guildId: O,
    subsection: Z,
    onClose: P
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, l.U)({
    location: "UserProfileModalActivity"
  }), {
    live: E,
    recent: S,
    stream: T
  } = (0, u.Z)(n.id), {
    voiceChannel: C,
    voiceActivity: A
  } = (0, f.Z)({
    userId: n.id,
    guildId: O,
    surface: "user-profile-modal-activity"
  }), w = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)), L = n.id === t.id, R = (0, r.e7)([a.Z, c.Z], () => {
    let e = L ? a.Z.getStatus() : c.Z.getStatus(n.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), M = E.length > 0 || null != T, B = N && null == T && null == A && null != C, U = S.length > 0;
  return !R && (M || B) || U || !w ? (0, o.jsxs)(i.zJl, {
    className: h.scroller,
    fade: !0,
    children: [!R && (M || B) ? (0, o.jsxs)(p.Z, {
      children: [B && (0, o.jsx)(g.Z, {
        user: n,
        voiceChannel: C,
        onClose: P
      }), null != T && (0, o.jsx)(v.Z, {
        location: "UserProfileModalActivity",
        user: n,
        currentUser: t,
        stream: T,
        onClose: P,
        profileGuildId: null == x ? void 0 : x.guildId
      }), E.map((e, r) => (0, o.jsx)(b.Z, {
        user: n,
        currentUser: t,
        activity: e,
        onClose: P,
        profileGuildId: null == x ? void 0 : x.guildId
      }, "live-".concat(r)))]
    }) : null, U ? (0, o.jsx)(p.Z, {
      heading: j.NW.string(j.t.M0zgnZ),
      subheading: L ? j.NW.format(j.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, o.jsx)(i.eee, {
          href: d.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : void 0,
      scrollIntoView: Z === m.Tb.RECENT_ACTIVITY,
      children: S.map(e => (0, o.jsx)(y.Z, {
        location: "UserProfileModalActivity",
        user: n,
        currentUser: t,
        entry: e,
        profileGuildId: null == x ? void 0 : x.guildId,
        onClose: P
      }, e.id))
    }) : null]
  }) : (0, o.jsx)("div", {
    className: _.empty,
    children: (0, o.jsx)(i.$jN, {})
  })
}