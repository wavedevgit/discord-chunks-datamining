/** Chunk was on 78376 **/
/** chunk id: 379082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk580630 = require("./580630.js"),
  Chunk599941 = require("./599941.js"),
  Chunk636194 = require("./636194.js"),
  Chunk624456 = require("./624456.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let t = (0, u.M)(e),
    n = (0, s.bG)([d.A], () => d.A.getSubscriptionListingForPlan(t)),
    i = (0, s.bG)([d.A], () => null != n ? d.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
    m = (0, s.bG)([a.A], () => a.A.getGuild(null == i ? true : i.guild_id)),
    [g, A] = r.useState(false),
    {
      fetchSubscriptionsSettings: f
    } = (0, c.XE)();
  r.useEffect(() => {
    g && null != m && null == d.A.getSubscriptionSettings(m.id) && f(m.id)
  }, [g, m, f]);
  let b = null == n ? true : function(e) {
    let {
      subscription: t
    } = e, n = l()(t.currentPeriodEnd).format("M/D/YY"), r = null != t.price ? (0, o.$g)(t.price, t.currency) : "", i = l()(t.createdAt).format("M/D/YY"), s = t.status === _.Dmq.CANCELED, a = t.status === _.Dmq.PAST_DUE, c = t.hasActiveTrial;
    return {
      memberSince: i,
      nextRenewalDate: n,
      nextRenewalLabel: s ? p.intl.string(p.t.UAfot2) : p.intl.string(p.t.CVjLcM),
      subscriptionPrice: r,
      isCancelled: s,
      isPastDue: a,
      isTrial: c
    }
  }({
    subscription: e
  });
  return {
    guild: m,
    expanded: g,
    handleToggleExpanded: () => A(e => !e),
    listing: n,
    groupListing: i,
    subscriptionInfo: b
  }
}