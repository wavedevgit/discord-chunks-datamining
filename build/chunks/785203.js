/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  R: () => y,
  Z: () => I
});
var r, i = n(192379),
  l = n(442837),
  o = n(179360),
  a = n(897285),
  s = n(300213),
  c = n(554747),
  u = n(499137),
  d = n(929507),
  p = n(270144),
  h = n(400271),
  f = n(678513),
  g = n(899667),
  m = n(496675),
  b = n(541566),
  _ = n(192513),
  E = n(255791),
  O = n(70956),
  N = n(267642),
  v = n(981631),
  y = ((r = {})[r.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", r[r.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", r[r.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", r[r.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", r[r.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", r[r.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", r[r.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", r[r.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", r[r.SIGNUP = 8] = "SIGNUP", r[r.CLAN_UPSELL = 9] = "CLAN_UPSELL", r);

function I(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : v.lds,
    {
      lastFetchedAt: r
    } = (0, l.cj)([g.Z], () => ({
      appliedGuildBoosts: g.Z.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: g.Z.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: y,
      isGracePeriodVisible: I
    } = (0, l.cj)([b.Z], () => ({
      lastDismissedGracePeriod: b.Z.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: b.Z.isVisible(n)
    })),
    C = (0, l.e7)([h.Z], () => h.Z.isVisible(e)),
    S = (0, l.e7)([E.Z], () => E.Z.isVisible(e)),
    T = (0, l.e7)([m.Z], () => m.Z.can(v.Plq.ADMINISTRATOR, e)),
    P = null != y && Date.now() - y <= v.Dge,
    j = null != e ? e.premiumSubscriberCount : 0,
    A = (0, N.rF)(j, n) !== v.Eu4.NONE,
    Z = !(null != r && Date.now() - r <= 432e5) && !P && T && A,
    x = (0, s.m)(n),
    L = (0, l.e7)([_.Z], () => _.Z.isVisible(e)),
    w = d.Z.useShouldShowChannelNotice(n),
    R = (0, p.h6)(e),
    {
      enableStudyGroup: D
    } = (0, u.s)(e),
    k = R.length > 0,
    M = D && !(null == e ? void 0 : e.hasFeature(v.oNc.HUB)),
    U = (0, c.Vm)(n),
    G = (0, l.e7)([f.Z], () => null != f.Z.getActiveGuildSignUp(n));
  if (i.useEffect(() => {
      a.Z.getGuildEventsForCurrentUser(n)
    }, [n]), i.useEffect(() => {
      let e = -1;
      return Z && (e = window.setTimeout(() => {
        null != n && (0, o.C0)(n)
      }, 30 * Math.random() * O.Z.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, Z]), C) return 0;
  if (I) return 1;
  if (S) return 2;
  if (x || null != U) return 3;
  if (L) return 4;
  else if (w) return 5;
  else if (k) return 6;
  else if (M) return 7;
  else if (G) return 8;
  return null
}