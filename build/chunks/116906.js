/** Chunk was on 88235 **/
n.d(t, {
  Z: () => y
});
var r = n(200651);
n(192379);
var l = n(442837),
  i = n(481060),
  o = n(468363),
  s = n(353647),
  a = n(158776),
  c = n(885110),
  d = n(63063),
  u = n(369566),
  f = n(29899),
  p = n(678738),
  h = n(151545),
  j = n(744802),
  g = n(493043),
  m = n(864141),
  v = n(228168),
  b = n(981631),
  O = n(388032),
  x = n(316879),
  Z = n(301150);

function y(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: y,
    guildId: I,
    subsection: P,
    onClose: E
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, o.U)({
    location: "UserProfileModalActivity"
  }), {
    live: N,
    recent: S,
    stream: A
  } = (0, u.Z)(t.id), {
    voiceChannel: C,
    voiceActivity: _
  } = (0, f.Z)({
    userId: t.id,
    guildId: I
  }), w = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t.id)), R = t.id === n.id, M = (0, l.e7)([c.Z, a.Z], () => {
    let e = R ? c.Z.getStatus() : a.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), L = N.length > 0 || null != A, D = T && null == A && null == _ && null != C, U = !M && (L || D), G = S.length > 0;
  return U || G || !w ? (0, r.jsxs)(i.zJl, {
    className: x.scroller,
    fade: !0,
    children: [U ? (0, r.jsxs)(p.Z, {
      children: [D && (0, r.jsx)(m.Z, {
        user: t,
        currentUser: n,
        voiceChannel: C,
        onClose: E
      }), null != A && (0, r.jsx)(g.Z, {
        location: "UserProfileModalActivity",
        user: t,
        currentUser: n,
        stream: A,
        onClose: E,
        profileGuildId: null == y ? void 0 : y.guildId
      }), N.map((e, l) => (0, r.jsx)(h.Z, {
        user: t,
        currentUser: n,
        activity: e,
        onClose: E,
        profileGuildId: null == y ? void 0 : y.guildId
      }, "live-".concat(l)))]
    }) : null, G ? (0, r.jsx)(p.Z, {
      heading: O.intl.string(O.t.M0zgnZ),
      subheading: R ? O.intl.format(O.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : void 0,
      scrollIntoView: P === v.Tb.RECENT_ACTIVITY,
      children: S.map(e => (0, r.jsx)(j.Z, {
        location: "UserProfileModalActivity",
        user: t,
        currentUser: n,
        entry: e,
        profileGuildId: null == y ? void 0 : y.guildId,
        onClose: E
      }, e.id))
    }) : null]
  }) : (0, r.jsx)("div", {
    className: Z.empty,
    children: (0, r.jsx)(i.$jN, {})
  })
}