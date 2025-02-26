/** Chunk was on 2998 **/
t.d(n, {
  Z: () => g
}), t(653041);
var r = t(442837),
  o = t(468363),
  i = t(158776),
  l = t(885110),
  s = t(308406),
  c = t(369566),
  a = t(806729),
  d = t(29899),
  u = t(326094),
  f = t(708108),
  p = t(146078),
  b = t(228168),
  m = t(981631),
  v = t(388032);

function g(e) {
  let {
    user: n,
    currentUser: t,
    guildId: g,
    initialSubsection: y
  } = e, {
    voiceActivityStatusEnabled: I
  } = (0, o.U)({
    location: "useUserProfileModalTabBarItems"
  }), {
    voiceActivityCardEnabled: h
  } = (0, s.o)({
    location: "useUserProfileModalTabBarItems"
  }), {
    live: j,
    recent: x,
    stream: _,
    outbox: O
  } = (0, c.Z)(n.id), {
    voiceChannel: Z,
    voiceActivity: N
  } = (0, d.Z)({
    userId: n.id,
    guildId: g,
    surface: "use-user-profile-modal-tab-bar-items"
  }), P = n.id === (null == t ? void 0 : t.id), E = (0, r.e7)([l.Z, i.Z], () => {
    let e = P ? l.Z.getStatus() : i.Z.getStatus(n.id);
    return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE
  }), S = null != _ || j.length > 0, T = x.length > 0, {
    mutualFriends: C,
    mutualGuilds: A
  } = (0, a.Z)(n, {
    fetch: n.id !== (null == t ? void 0 : t.id),
    type: "modal"
  }), w = null == C ? void 0 : C.length, L = null == A ? void 0 : A.length, R = (0, u.Z)({
    user: n,
    location: m.Sbl.PROFILE_MODAL_TABS
  }), M = [{
    section: b.oh.USER_INFO,
    text: v.NW.string(v.t.jGoPJS)
  }];
  return !E && (S || (I || h) && null == _ && null == N && null != Z) ? M.push({
    section: b.oh.ACTIVITY,
    text: v.NW.string(v.t.chq59f)
  }) : (T || null == O && y === b.Tb.RECENT_ACTIVITY) && M.push({
    section: b.oh.ACTIVITY,
    text: v.NW.string(v.t.chq59f)
  }), !P && R && (M.push({
    section: b.oh.MUTUAL_FRIENDS,
    text: (0, f.Z)(w)
  }), M.push({
    section: b.oh.MUTUAL_GUILDS,
    text: (0, p.Z)(L)
  })), M
}