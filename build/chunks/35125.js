/** Chunk was on web.js **/
/** chunk id: 35125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PA: () => d,
  Tn: () => u,
  _i: () => g,
  eI: () => m,
  vp: () => _,
  y8: () => h
});
var Chunk367907 = require("./367907.js"),
  Chunk200876 = require("./200876.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js");
require("./709054.js"), require("./523361.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  return e
}

function u(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: o
  } = e, {
    content: a,
    formatParams: s
  } = p({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: o
  });
  return l.intl.format(a, s)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: o
  } = e, {
    content: a,
    formatParams: s
  } = p({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: o
  });
  return l.intl.formatToParts(a, s)
}

function f(e, t) {
  var n, r;
  let i = o.Z.getGuild(e),
    a = null != (n = null == t ? true : t.total_months_subscribed) ? n : 0,
    s = a > 0;
  return {
    guild: i,
    totalMonthsSubscribed: a,
    showWithDuration: s,
    isRenewal: null != (r = null == t ? true : t.is_renewal) && r
  }
}

function p(e) {
  let {
    username: t,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = s.dG4,
    guildId: i,
    roleSubscriptionData: o
  } = e, {
    guild: a,
    totalMonthsSubscribed: u,
    showWithDuration: d,
    isRenewal: p
  } = f(i, o);
  return {
    content: d ? p ? l.t.Iy66M7 : l.t.eCgb2W : p ? l.t.mPTTdv : l.t.mYjFFx,
    formatParams: {
      username: t,
      usernameHook: n,
      guildName: null == a ? true : a.name,
      handleGuildNameClick: r,
      tierName: null == o ? true : o.tier_name,
      months: u
    }
  }
}

function _(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = s.dG4,
      guildId: o,
      roleSubscriptionData: a
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: d,
      showWithDuration: p,
      isRenewal: _
    } = f(o, a);
  return t = p ? _ ? l.t.OQ0OUy : l.t["+N9bxq"] : _ ? l.t.OxP1NC : l.t["6Z1E+7"], l.intl.formatToParts(t, {
    guildName: null == u ? true : u.name,
    tierName: null == a ? true : a.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: d
  })
}

function m(e) {
  return (0, i.l)(e)
}

function h(e, t, n, i) {
  var o;
  r.ZP.trackWithMetadata(s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null == (o = a.default.getCurrentUser()) ? true : o.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function g(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null == (n = a.default.getCurrentUser()) ? true : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}