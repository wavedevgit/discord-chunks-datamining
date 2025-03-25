/** Chunk was on 81818 **/
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
  y = t(981631),
  v = t(388032);

function g(e) {
  let {
    user: n,
    currentUser: t,
    guildId: g,
    initialSubsection: m
  } = e, {
    voiceActivityStatusEnabled: I
  } = (0, o.U)({
    location: "useUserProfileModalTabBarItems"
  }), {
    voiceActivityCardEnabled: j
  } = (0, s.o)({
    location: "useUserProfileModalTabBarItems"
  }), {
    live: h,
    recent: _,
    stream: x,
    outbox: O
  } = (0, c.Z)(n.id), {
    voiceChannel: Z,
    voiceActivity: P
  } = (0, d.Z)({
    userId: n.id,
    guildId: g,
    surface: "use-user-profile-modal-tab-bar-items"
  }), N = n.id === (null == t ? void 0 : t.id), E = (0, r.e7)([l.Z, i.Z], () => {
    let e = N ? l.Z.getStatus() : i.Z.getStatus(n.id);
    return e === y.Skl.OFFLINE || e === y.Skl.INVISIBLE
  }), S = null != x || h.length > 0, T = _.length > 0, {
    mutualFriendsCount: C,
    mutualGuilds: A
  } = (0, a.Z)(n), w = null == A ? void 0 : A.length, L = (0, u.Z)({
    user: n,
    location: y.Sbl.PROFILE_MODAL_TABS
  }), R = [{
    section: b.oh.USER_INFO,
    text: v.NW.string(v.t.jGoPJS)
  }];
  return !E && (S || (I || j) && null == x && null == P && null != Z) ? R.push({
    section: b.oh.ACTIVITY,
    text: v.NW.string(v.t.chq59f)
  }) : (T || null == O && m === b.Tb.RECENT_ACTIVITY) && R.push({
    section: b.oh.ACTIVITY,
    text: v.NW.string(v.t.chq59f)
  }), !N && L && (R.push({
    section: b.oh.MUTUAL_FRIENDS,
    text: (0, f.Z)(C)
  }), R.push({
    section: b.oh.MUTUAL_GUILDS,
    text: (0, p.Z)(w)
  })), R
}