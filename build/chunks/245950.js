/** Chunk was on web.js **/
/** chunk id: 245950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk937615 = require("./937615.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk697227 = require("./697227.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = "M/D/YY",
  m = "M/D/YY";

function h(e) {
  let {
    subscription: t
  } = e, n = o()(t.currentPeriodEnd).format(_), r = null != t.price ? (0, l.T4)(t.price, t.currency) : "", i = o()(t.createdAt).format(m), a = t.status === f.O0b.CANCELED, s = t.status === f.O0b.PAST_DUE, c = t.hasActiveTrial;
  return {
    memberSince: i,
    nextRenewalDate: n,
    nextRenewalLabel: a ? p.intl.string(p.t.UAfot2) : p.intl.string(p.t.CVjLcM),
    subscriptionPrice: r,
    isCancelled: a,
    isPastDue: s,
    isTrial: c
  }
}

function g(e) {
  let t = (0, d.W)(e),
    n = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(t)),
    i = (0, a.e7)([u.Z], () => null != n ? u.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
    o = (0, a.e7)([s.Z], () => s.Z.getGuild(null == i ? true : i.guild_id)),
    [l, f] = r.useState(false),
    p = () => f(e => !e),
    {
      fetchSubscriptionsSettings: _
    } = (0, c.JH)();
  r.useEffect(() => {
    l && null != o && null == u.Z.getSubscriptionSettings(o.id) && _(o.id)
  }, [l, o, _]);
  let m = null == n ? true : h({
    subscription: e
  });
  return {
    guild: o,
    expanded: l,
    handleToggleExpanded: p,
    listing: n,
    groupListing: i,
    subscriptionInfo: m
  }
}