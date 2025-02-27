/** Chunk was on 81818 **/
t.d(n, {
  Z: () => O
});
var r = t(200651);
t(192379);
var o = t(442837),
  i = t(481060),
  l = t(468363),
  s = t(353647),
  c = t(158776),
  a = t(885110),
  d = t(63063),
  u = t(308406),
  f = t(369566),
  p = t(29899),
  b = t(678738),
  m = t(151545),
  v = t(744802),
  g = t(493043),
  y = t(864141),
  I = t(228168),
  h = t(981631),
  j = t(388032),
  x = t(559215),
  _ = t(658266);

function O(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: O,
    guildId: Z,
    subsection: N,
    onClose: P
  } = e, {
    voiceActivityStatusEnabled: E
  } = (0, l.U)({
    location: "UserProfileModalActivity"
  }), {
    voiceActivityCardEnabled: S
  } = (0, u.o)({
    location: "UserProfileModalActivity"
  }), {
    live: T,
    recent: C,
    stream: A
  } = (0, f.Z)(n.id), {
    voiceChannel: w,
    voiceActivity: L
  } = (0, p.Z)({
    userId: n.id,
    guildId: Z,
    surface: "user-profile-modal-activity"
  }), R = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)), M = n.id === t.id, U = (0, o.e7)([a.Z, c.Z], () => {
    let e = M ? a.Z.getStatus() : c.Z.getStatus(n.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), B = T.length > 0 || null != A, D = (E || S) && null == A && null == L && null != w, W = C.length > 0;
  return !U && (B || D) || W || !R ? (0, r.jsxs)(i.zJl, {
    className: x.scroller,
    fade: !0,
    children: [!U && (B || D) ? (0, r.jsxs)(b.Z, {
      children: [null != A && (0, r.jsx)(g.Z, {
        location: "UserProfileModalActivity",
        user: n,
        currentUser: t,
        stream: A,
        onClose: P,
        profileGuildId: null == O ? void 0 : O.guildId
      }), D && (0, r.jsx)(y.Z, {
        user: n,
        voiceChannel: w,
        onClose: P
      }), T.map((e, o) => (0, r.jsx)(m.Z, {
        user: n,
        currentUser: t,
        activity: e,
        onClose: P,
        profileGuildId: null == O ? void 0 : O.guildId
      }, "live-".concat(o)))]
    }) : null, W ? (0, r.jsx)(b.Z, {
      heading: j.NW.string(j.t.M0zgnZ),
      subheading: M ? j.NW.format(j.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(i.eee, {
          href: d.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : void 0,
      scrollIntoView: N === I.Tb.RECENT_ACTIVITY,
      children: C.map(e => (0, r.jsx)(v.Z, {
        location: "UserProfileModalActivity",
        user: n,
        currentUser: t,
        entry: e,
        profileGuildId: null == O ? void 0 : O.guildId,
        onClose: P
      }, e.id))
    }) : null]
  }) : (0, r.jsx)("div", {
    className: _.empty,
    children: (0, r.jsx)(i.$jN, {})
  })
}