/** Chunk was on 1815 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(192379),
  i = n(913527),
  s = n.n(i),
  a = n(442837),
  l = n(430824),
  o = n(937615),
  c = n(584825),
  d = n(289393),
  u = n(697227),
  m = n(981631),
  p = n(388032);

function g(e) {
  let t = (0, u.W)(e),
    n = (0, a.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
    i = (0, a.e7)([d.Z], () => null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
    g = (0, a.e7)([l.Z], () => l.Z.getGuild(null == i ? void 0 : i.guild_id)),
    [h, f] = r.useState(!1),
    {
      fetchSubscriptionsSettings: b
    } = (0, c.JH)();
  r.useEffect(() => {
    h && null != g && null == d.Z.getSubscriptionSettings(g.id) && b(g.id)
  }, [h, g, b]);
  let N = null == n ? void 0 : function(e) {
    let {
      subscription: t
    } = e, n = s()(t.currentPeriodEnd).format("M/D/YY"), r = null != t.price ? (0, o.T4)(t.price, t.currency) : "", i = s()(t.createdAt).format("M/D/YY"), a = t.status === m.O0b.CANCELED, l = t.status === m.O0b.PAST_DUE, c = null != t.trialId;
    return {
      memberSince: i,
      nextRenewalDate: n,
      nextRenewalLabel: a ? p.NW.string(p.t.UAfot7) : p.NW.string(p.t.CVjLcH),
      subscriptionPrice: r,
      isCancelled: a,
      isPastDue: l,
      isTrial: c
    }
  }({
    subscription: e
  });
  return {
    guild: g,
    expanded: h,
    handleToggleExpanded: () => f(e => !e),
    listing: n,
    groupListing: i,
    subscriptionInfo: N
  }
}