/** Chunk was on 75708 **/
/** chunk id: 245950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk937615 = require("./937615.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk697227 = require("./697227.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let t = (0, u.W)(e),
    n = (0, a.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
    r = (0, a.e7)([d.Z], () => null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
    g = (0, a.e7)([l.Z], () => l.Z.getGuild(null == r ? true : r.guild_id)),
    [h, f] = i.useState(false),
    {
      fetchSubscriptionsSettings: b
    } = (0, c.JH)();
  i.useEffect(() => {
    h && null != g && null == d.Z.getSubscriptionSettings(g.id) && b(g.id)
  }, [h, g, b]);
  let x = null == n ? true : function(e) {
    let {
      subscription: t
    } = e, n = s()(t.currentPeriodEnd).format("M/D/YY"), i = null != t.price ? (0, o.T4)(t.price, t.currency) : "", r = s()(t.createdAt).format("M/D/YY"), a = t.status === m.O0b.CANCELED, l = t.status === m.O0b.PAST_DUE, c = t.hasActiveTrial;
    return {
      memberSince: r,
      nextRenewalDate: n,
      nextRenewalLabel: a ? p.intl.string(p.t.UAfot7) : p.intl.string(p.t.CVjLcH),
      subscriptionPrice: i,
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
    groupListing: r,
    subscriptionInfo: x
  }
}