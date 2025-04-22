/** Chunk was on 54636 **/
t.d(n, {
  Z: () => h
}), t(539854);
var r = t(442837),
  o = t(468363),
  i = t(158776),
  l = t(885110),
  s = t(369566),
  c = t(806729),
  a = t(29899),
  d = t(326094),
  u = t(708108),
  f = t(146078),
  p = t(228168),
  m = t(981631),
  b = t(388032);

function h(e) {
  let {
    user: n,
    currentUser: t,
    guildId: h,
    initialSubsection: g
  } = e, {
    voiceActivityStatusEnabled: j
  } = (0, o.U)({
    location: "useUserProfileModalTabBarItems"
  }), {
    live: v,
    recent: x,
    stream: y,
    outbox: O
  } = (0, s.Z)(n.id), {
    voiceChannel: I,
    voiceActivity: _
  } = (0, a.Z)({
    userId: n.id,
    guildId: h
  }), Z = n.id === (null == t ? void 0 : t.id), P = (0, r.e7)([l.Z, i.Z], () => {
    let e = Z ? l.Z.getStatus() : i.Z.getStatus(n.id);
    return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE
  }), A = null != y || v.length > 0, E = x.length > 0, {
    mutualFriendsCount: N,
    mutualGuilds: T
  } = (0, c.Z)(n), C = null == T ? void 0 : T.length, S = (0, d.Z)({
    user: n,
    location: m.Sbl.PROFILE_MODAL_TABS
  }), w = [{
    section: p.oh.USER_INFO,
    text: b.intl.string(b.t.jGoPJS)
  }];
  return !P && (A || j && null == y && null == _ && null != I) ? w.push({
    section: p.oh.ACTIVITY,
    text: b.intl.string(b.t.chq59f)
  }) : (E || null == O && g === p.Tb.RECENT_ACTIVITY) && w.push({
    section: p.oh.ACTIVITY,
    text: b.intl.string(b.t.chq59f)
  }), !Z && S && (w.push({
    section: p.oh.MUTUAL_FRIENDS,
    text: (0, u.Z)(N)
  }), w.push({
    section: p.oh.MUTUAL_GUILDS,
    text: (0, f.Z)(C)
  })), w
}