/** Chunk was on 44784 **/
t.d(n, {
  Z: () => v
});
var o = t(255367);
t(73800);
var r = t(442837),
  c = t(481060),
  i = t(468363),
  a = t(353647),
  l = t(158776),
  s = t(885110),
  d = t(63063),
  u = t(209698),
  f = t(369566),
  p = t(29899),
  m = t(151545),
  b = t(744802),
  _ = t(493043),
  y = t(864141),
  h = t(693408),
  x = t(228168),
  g = t(981631),
  j = t(388032),
  I = t(514656);

function v(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: v,
    guildId: O,
    subsection: Z,
    onClose: C
  } = e, {
    voiceActivityStatusEnabled: P
  } = (0, i.U)({
    location: "UserProfileModalV2Activity"
  }), w = (0, u.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: N,
    recent: T,
    stream: A
  } = (0, f.Z)(n.id), {
    voiceChannel: S,
    voiceActivity: E
  } = (0, p.Z)({
    userId: n.id,
    guildId: O
  }), U = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)), B = n.id === t.id, k = (0, r.e7)([s.Z, l.Z], () => {
    let e = B ? s.Z.getStatus() : l.Z.getStatus(n.id);
    return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE
  }), D = N.length > 0 || null != A, M = P && null == A && null == E && null != S, V = !k && (D || M), L = T.length > 0;
  return V || L || !U ? (0, o.jsxs)(c.Ttm, {
    className: I.scroller,
    fade: !0,
    children: [V ? (0, o.jsxs)(h.Z, {
      heading: j.intl.string(j.t.J6STd3),
      children: [!w && M && (0, o.jsx)(y.Z, {
        user: n,
        currentUser: t,
        voiceChannel: S,
        onClose: C
      }), null != A && (0, o.jsx)(_.Z, {
        location: "UserProfileModalV2Activity",
        user: n,
        currentUser: t,
        stream: A,
        onClose: C,
        profileGuildId: null == v ? void 0 : v.guildId
      }), N.map((e, r) => (0, o.jsx)(m.Z, {
        user: n,
        currentUser: t,
        activity: e,
        onClose: C,
        profileGuildId: null == v ? void 0 : v.guildId
      }, "live-".concat(r))), w && M && (0, o.jsx)(y.Z, {
        user: n,
        currentUser: t,
        voiceChannel: S,
        onClose: C
      })]
    }) : null, L ? (0, o.jsx)(h.Z, {
      heading: j.intl.string(j.t.jzgEoK),
      subheading: B ? j.intl.format(j.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, o.jsx)(c.eee, {
          href: d.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : void 0,
      scrollIntoView: Z === x.Tb.RECENT_ACTIVITY,
      children: T.map(e => (0, o.jsx)(b.Z, {
        location: "UserProfileModalV2Activity",
        user: n,
        currentUser: t,
        entry: e,
        profileGuildId: null == v ? void 0 : v.guildId,
        onClose: C
      }, e.id))
    }) : null]
  }) : (0, o.jsx)("div", {
    className: I.spinner,
    children: (0, o.jsx)(c.$jN, {})
  })
}