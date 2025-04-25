/** Chunk was on 30514 **/
t.d(n, {
  Z: () => I
}), t(539854);
var i = t(442837),
  o = t(468363),
  l = t(158776),
  r = t(885110),
  s = t(585305),
  a = t(369566),
  c = t(806729),
  d = t(29899),
  u = t(708108),
  f = t(146078),
  p = t(228168),
  m = t(981631),
  h = t(388032);

function I(e) {
  let {
    user: n,
    currentUser: t,
    guildId: I,
    initialSubsection: x
  } = e, {
    voiceActivityStatusEnabled: _
  } = (0, o.U)({
    location: "useUserProfileModalTabBarItems"
  }), {
    live: b,
    recent: v,
    stream: g,
    outbox: j
  } = (0, a.Z)(n.id), {
    voiceChannel: Z,
    voiceActivity: y
  } = (0, d.Z)({
    userId: n.id,
    guildId: I
  }), A = n.id === (null == t ? void 0 : t.id), N = (0, i.e7)([r.Z, l.Z], () => {
    let e = A ? r.Z.getStatus() : l.Z.getStatus(n.id);
    return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE
  }), T = null != g || b.length > 0, O = v.length > 0, {
    mutualFriendsCount: E,
    mutualGuilds: P
  } = (0, c.Z)(n), C = null == P ? void 0 : P.length, S = (0, s.Z)(n), M = [{
    section: p.oh.USER_INFO,
    text: h.intl.string(h.t.jGoPJS)
  }];
  return !N && (T || _ && null == g && null == y && null != Z) ? M.push({
    section: p.oh.ACTIVITY,
    text: h.intl.string(h.t.chq59f)
  }) : (O || null == j && x === p.Tb.RECENT_ACTIVITY) && M.push({
    section: p.oh.ACTIVITY,
    text: h.intl.string(h.t.chq59f)
  }), !A && S && (M.push({
    section: p.oh.MUTUAL_FRIENDS,
    text: (0, u.Z)(E)
  }), M.push({
    section: p.oh.MUTUAL_GUILDS,
    text: (0, f.Z)(C)
  })), M
}