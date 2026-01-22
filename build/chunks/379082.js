/** Chunk was on web.js **/
/** chunk id: 379082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk580630 = require("./580630.js"),
  Chunk599941 = require("./599941.js"),
  Chunk636194 = require("./636194.js"),
  Chunk624456 = require("./624456.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = "M/D/YY",
  h = "M/D/YY";

function m(e) {
  let {
    subscription: t
  } = e, n = a()(t.currentPeriodEnd).format(_), r = null != t.price ? (0, l.$g)(t.price, t.currency) : "", i = a()(t.createdAt).format(h), s = t.status === f.Dmq.CANCELED, o = t.status === f.Dmq.PAST_DUE, c = t.hasActiveTrial;
  return {
    memberSince: i,
    nextRenewalDate: n,
    nextRenewalLabel: s ? p.intl.string(p.t.UAfot2) : p.intl.string(p.t.CVjLcM),
    subscriptionPrice: r,
    isCancelled: s,
    isPastDue: o,
    isTrial: c
  }
}

function g(e) {
  let t = (0, d.M)(e),
    n = (0, s.bG)([u.A], () => u.A.getSubscriptionListingForPlan(t)),
    i = (0, s.bG)([u.A], () => null != n ? u.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
    a = (0, s.bG)([o.A], () => o.A.getGuild(null == i ? true : i.guild_id)),
    [l, f] = r.useState(false),
    p = () => f(e => !e),
    {
      fetchSubscriptionsSettings: _
    } = (0, c.XE)();
  r.useEffect(() => {
    l && null != a && null == u.A.getSubscriptionSettings(a.id) && _(a.id)
  }, [l, a, _]);
  let h = null == n ? true : m({
    subscription: e
  });
  return {
    guild: a,
    expanded: l,
    handleToggleExpanded: p,
    listing: n,
    groupListing: i,
    subscriptionInfo: h
  }
}