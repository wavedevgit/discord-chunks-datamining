/** Chunk was on 73049 **/
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
  m = t(678738),
  b = t(151545),
  g = t(744802),
  v = t(493043),
  y = t(864141),
  h = t(228168),
  I = t(981631),
  j = t(388032),
  x = t(387706),
  _ = t(865152);

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
    stream: L
  } = (0, f.Z)(n.id), {
    voiceChannel: A,
    voiceActivity: w
  } = (0, p.Z)({
    userId: n.id,
    guildId: Z,
    surface: "user-profile-modal-activity"
  }), M = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)), U = n.id === t.id, R = (0, o.e7)([a.Z, c.Z], () => {
    let e = U ? a.Z.getStatus() : c.Z.getStatus(n.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), B = T.length > 0 || null != L, W = (E || S) && null == L && null == w && null != A, D = C.length > 0;
  return !R && (B || W) || D || !M ? (0, r.jsxs)(i.zJl, {
    className: x.scroller,
    fade: !0,
    children: [!R && (B || W) ? (0, r.jsxs)(m.Z, {
      children: [null != L && (0, r.jsx)(v.Z, {
        location: "UserProfileModalActivity",
        user: n,
        currentUser: t,
        stream: L,
        onClose: P,
        profileGuildId: null == O ? void 0 : O.guildId
      }), W && (0, r.jsx)(y.Z, {
        user: n,
        voiceChannel: A,
        onClose: P
      }), T.map((e, o) => (0, r.jsx)(b.Z, {
        user: n,
        currentUser: t,
        activity: e,
        onClose: P,
        profileGuildId: null == O ? void 0 : O.guildId
      }, "live-".concat(o)))]
    }) : null, D ? (0, r.jsx)(m.Z, {
      heading: j.NW.string(j.t.M0zgnZ),
      subheading: U ? j.NW.format(j.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(i.eee, {
          href: d.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : void 0,
      scrollIntoView: N === h.Tb.RECENT_ACTIVITY,
      children: C.map(e => (0, r.jsx)(g.Z, {
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