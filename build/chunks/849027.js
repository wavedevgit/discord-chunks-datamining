/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => E
});
var r = n(430198),
  i = n(897345),
  o = n(697379),
  a = n(241559),
  s = n(819553),
  l = n(931261),
  c = n(994592),
  u = n(50101),
  d = n(911560),
  f = n(592125),
  _ = n(430824),
  p = n(823379),
  h = n(754688),
  g = n(981631),
  m = n(176505);
async function E(e) {
  let {
    guildId: t,
    channelId: n
  } = e, E = _.Z.getGuild(t), v = _.Z.getRoles(t);
  if (null == E && t !== g.ME) return !1;
  if (null == n) return !0;
  if ((0, m.AB)(n)) switch (n) {
    case m.oC.ROLE_SUBSCRIPTIONS:
      return (0, c.on)(t, v);
    case m.oC.GUILD_SHOP:
      return (0, i.r)(E, v);
    case m.oC.MEMBER_APPLICATIONS:
      return (0, o.v)(t);
    case m.oC.GUILD_HOME:
      return (0, l.s)(t);
    case m.oC.CHANNEL_BROWSER:
      return null != E && E.hasFeature(g.oNc.COMMUNITY);
    case m.oC.GUILD_ONBOARDING:
      return s.ZP.shouldShowOnboarding(t);
    case m.oC.CUSTOMIZE_COMMUNITY:
      return null != E && E.hasFeature(g.oNc.COMMUNITY);
    case m.oC.MEMBER_SAFETY:
      return (0, a.lv)(t);
    case m.oC.GUILD_BOOSTS:
      return (0, u.gV)(E, "isAccessibleChannelOrThread");
    default:
      (0, p.vE)(n)
  }
  let b = f.Z.getChannel(n);
  return (null != b || (await d.Z.loadThread(n), null != (b = f.Z.getChannel(n)))) && ((0, h.YO)(b) || r.Z.isChannelGatedAndVisible(t, n))
}