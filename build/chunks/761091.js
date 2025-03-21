/** Chunk was on 92196 **/
n.d(t, {
  Z: () => _
}), n(653041);
var r = n(399606),
  i = n(897345),
  o = n(63568),
  l = n(697379),
  a = n(241559),
  s = n(563534),
  c = n(655359),
  u = n(931261),
  d = n(460347),
  p = n(994592),
  h = n(265418),
  f = n(398758),
  g = n(50101),
  m = n(639777),
  b = n(330791),
  v = n(443063),
  y = n(981631);

function _(e) {
  let t = (0, h.Z)(e.id),
    n = (0, l.W)(e.id),
    _ = (0, p.j0)(e.id),
    O = (0, i.u)(e),
    j = (0, u.g)(e.id),
    x = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
    C = (0, d.Z)(e.id),
    S = (0, c.PE)(e.id),
    P = (0, a.n2)(e.id),
    I = [],
    N = e.hasFeature(y.oNc.HUB),
    Z = e.hasFeature(y.oNc.COMMUNITY),
    w = (0, b.lN)(!(0, f.r1)(e.id)),
    E = e.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
    T = (0, o.jS)(e.id, "Guild Sidebar"),
    A = (0, g.Ek)(e, "useGuildActionRow"),
    D = (0, m.Z)(e.id);
  return N && I.push(v.z.GUILD_HUB_HEADER_OPTIONS), !S && j && C && null != x && x.length > 0 ? I.push(v.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && I.push(v.z.GUILD_PREMIUM_PROGRESS_BAR), !N && j && I.push(v.z.GUILD_HOME), t && I.push(v.z.GUILD_SCHEDULED_EVENTS), !N && Z && w && I.push(v.z.CHANNELS_AND_ROLES), _ && I.push(v.z.GUILD_ROLE_SUBSCRIPTIONS), O && I.push(v.z.GUILD_SHOP), !T && n && I.push(v.z.GUILD_MEMBER_APPLICATIONS), P && (Z || E || T && e.hasFeature(y.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && I.push(v.z.GUILD_MOD_DASH_MEMBER_SAFETY), A && D && I.push(v.z.GUILD_BOOSTS), I
}