/** Chunk was on web.js **/
/** chunk id: 245950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
let p = "M/D/YY",
  h = "M/D/YY";

function m(e) {
  let {
    subscription: t
  } = e, n = o()(t.currentPeriodEnd).format(p), r = null != t.price ? (0, l.T4)(t.price, t.currency) : "", i = o()(t.createdAt).format(h), a = t.status === f.O0b.CANCELED, s = t.status === f.O0b.PAST_DUE, c = t.hasActiveTrial;
  return {
    memberSince: i,
    nextRenewalDate: n,
    nextRenewalLabel: a ? _.intl.string(_.t.UAfot7) : _.intl.string(_.t.CVjLcH),
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
    _ = () => f(e => !e),
    {
      fetchSubscriptionsSettings: p
    } = (0, c.JH)();
  r.useEffect(() => {
    l && null != o && null == u.Z.getSubscriptionSettings(o.id) && p(o.id)
  }, [l, o, p]);
  let h = null == n ? true : m({
    subscription: e
  });
  return {
    guild: o,
    expanded: l,
    handleToggleExpanded: _,
    listing: n,
    groupListing: i,
    subscriptionInfo: h
  }
}