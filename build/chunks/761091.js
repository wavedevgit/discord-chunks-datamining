/** Chunk was on 30829 **/
n.d(t, {
  Z: () => v
}), n(653041);
var r = n(399606),
  i = n(897345),
  l = n(63568),
  o = n(697379),
  a = n(241559),
  s = n(563534),
  c = n(655359),
  u = n(931261),
  d = n(460347),
  p = n(994592),
  h = n(265418),
  f = n(398758),
  g = n(50101),
  m = n(330791),
  b = n(443063),
  y = n(981631);

function v(e) {
  let t = (0, h.Z)(e.id),
    n = (0, o.W)(e.id),
    v = (0, p.j0)(e.id),
    O = (0, i.u)(e),
    j = (0, u.g)(e.id),
    _ = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
    C = (0, d.Z)(e.id),
    x = (0, c.PE)(e.id),
    P = (0, a.n2)(e.id),
    N = [],
    S = e.hasFeature(y.oNc.HUB),
    Z = e.hasFeature(y.oNc.COMMUNITY),
    I = (0, m.lN)(!(0, f.r1)(e.id)),
    w = e.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    E = (0, l.jS)(e.id, "Guild Sidebar"),
    T = (0, g.Ek)(e, "useGuildActionRow");
  return S && N.push(b.z.GUILD_HUB_HEADER_OPTIONS), !x && j && C && null != _ && _.length > 0 ? N.push(b.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && N.push(b.z.GUILD_PREMIUM_PROGRESS_BAR), !S && j && N.push(b.z.GUILD_HOME), t && N.push(b.z.GUILD_SCHEDULED_EVENTS), !S && Z && I && N.push(b.z.CHANNELS_AND_ROLES), v && N.push(b.z.GUILD_ROLE_SUBSCRIPTIONS), O && N.push(b.z.GUILD_SHOP), !E && n && N.push(b.z.GUILD_MEMBER_APPLICATIONS), P && (Z || w || E && e.hasFeature(y.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && N.push(b.z.GUILD_MOD_DASH_MEMBER_SAFETY), T && N.push(b.z.GUILD_BOOSTS), N
}