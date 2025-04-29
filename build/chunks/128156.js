/** Chunk was on 30776 **/
t.d(n, {
  Z: () => I
});
var o = t(200651);
t(192379);
var r = t(442837),
  a = t(481060),
  i = t(468363),
  c = t(353647),
  l = t(158776),
  s = t(885110),
  d = t(63063),
  u = t(369566),
  f = t(29899),
  p = t(151545),
  m = t(744802),
  b = t(493043),
  _ = t(864141),
  h = t(693408),
  y = t(228168),
  g = t(981631),
  x = t(388032),
  j = t(514656);

function I(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: I,
    guildId: v,
    subsection: O,
    onClose: C
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, i.U)({
    location: "UserProfileModalV2Activity"
  }), {
    live: P,
    recent: A,
    stream: Z
  } = (0, u.Z)(n.id), {
    voiceChannel: w,
    voiceActivity: T
  } = (0, f.Z)({
    userId: n.id,
    guildId: v
  }), S = (0, r.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), M = n.id === t.id, E = (0, r.e7)([s.Z, l.Z], () => {
    let e = M ? s.Z.getStatus() : l.Z.getStatus(n.id);
    return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE
  }), U = P.length > 0 || null != Z, B = N && null == Z && null == T && null != w, V = !E && (U || B), k = A.length > 0;
  return V || k || !S ? (0, o.jsxs)(a.Ttm, {
    className: j.scroller,
    fade: !0,
    children: [V ? (0, o.jsxs)(h.Z, {
      heading: x.intl.string(x.t.J6STd3),
      children: [B && (0, o.jsx)(_.Z, {
        user: n,
        currentUser: t,
        voiceChannel: w,
        onClose: C
      }), null != Z && (0, o.jsx)(b.Z, {
        location: "UserProfileModalV2Activity",
        user: n,
        currentUser: t,
        stream: Z,
        onClose: C,
        profileGuildId: null == I ? void 0 : I.guildId
      }), P.map((e, r) => (0, o.jsx)(p.Z, {
        user: n,
        currentUser: t,
        activity: e,
        onClose: C,
        profileGuildId: null == I ? void 0 : I.guildId
      }, "live-".concat(r)))]
    }) : null, k ? (0, o.jsx)(h.Z, {
      heading: x.intl.string(x.t.jzgEoK),
      subheading: M ? x.intl.format(x.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, o.jsx)(a.eee, {
          href: d.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : void 0,
      scrollIntoView: O === y.Tb.RECENT_ACTIVITY,
      children: A.map(e => (0, o.jsx)(m.Z, {
        location: "UserProfileModalV2Activity",
        user: n,
        currentUser: t,
        entry: e,
        profileGuildId: null == I ? void 0 : I.guildId,
        onClose: C
      }, e.id))
    }) : null]
  }) : (0, o.jsx)("div", {
    className: j.spinner,
    children: (0, o.jsx)(a.$jN, {})
  })
}