/** Chunk was on 32098 (809533fdbc51a5c1.js) **/
n.d(t, {
  Z: () => y
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
  v = n(981631);

function y(e) {
  let t = (0, h.Z)(e.id),
    n = (0, o.W)(e.id),
    y = (0, p.j0)(e.id),
    _ = (0, i.u)(e),
    O = (0, u.g)(e.id),
    j = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
    C = (0, d.Z)(e.id),
    x = (0, c.PE)(e.id),
    S = (0, a.n2)(e.id),
    P = [],
    N = e.hasFeature(v.oNc.HUB),
    I = e.hasFeature(v.oNc.COMMUNITY),
    Z = (0, m.lN)(!(0, f.r1)(e.id)),
    w = e.hasFeature(v.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    E = (0, l.jS)(e.id, "Guild Sidebar"),
    T = (0, g.Ek)(e, "useGuildActionRow");
  return N && P.push(b.z.GUILD_HUB_HEADER_OPTIONS), !x && O && C && null != j && j.length > 0 ? P.push(b.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(b.z.GUILD_PREMIUM_PROGRESS_BAR), !N && O && P.push(b.z.GUILD_HOME), t && P.push(b.z.GUILD_SCHEDULED_EVENTS), !N && I && Z && P.push(b.z.CHANNELS_AND_ROLES), y && P.push(b.z.GUILD_ROLE_SUBSCRIPTIONS), _ && P.push(b.z.GUILD_SHOP), !E && n && P.push(b.z.GUILD_MEMBER_APPLICATIONS), S && (I || w || E && e.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && P.push(b.z.GUILD_MOD_DASH_MEMBER_SAFETY), T && P.push(b.z.GUILD_BOOSTS), P
}