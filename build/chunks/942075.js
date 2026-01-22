/** Chunk was on web.js **/
/** chunk id: 942075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WC: () => d,
  eb: () => _,
  g6: () => h,
  gw: () => u,
  xH: () => m,
  y4: () => g
});
var Chunk58149 = require("./58149.js"),
  Chunk936555 = require("./936555.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js");
require("./661191.js"), require("./226139.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  return e
}

function u(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    content: s,
    formatParams: o
  } = p({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return l.intl.format(s, o)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    content: s,
    formatParams: o
  } = p({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return l.intl.formatToParts(s, o)
}

function f(e, t) {
  var n, r;
  let i = a.A.getGuild(e),
    s = null != (n = null == t ? true : t.total_months_subscribed) ? n : 0,
    o = s > 0;
  return {
    guild: i,
    totalMonthsSubscribed: s,
    showWithDuration: o,
    isRenewal: null != (r = null == t ? true : t.is_renewal) && r
  }
}

function p(e) {
  let {
    username: t,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = o.tEg,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    guild: s,
    totalMonthsSubscribed: u,
    showWithDuration: d,
    isRenewal: p
  } = f(i, a);
  return {
    content: d ? p ? l.t.Iy66M7 : l.t.eCgb2W : p ? l.t.mPTTdv : l.t.mYjFFx,
    formatParams: {
      username: t,
      usernameHook: n,
      guildName: null == s ? true : s.name,
      handleGuildNameClick: r,
      tierName: null == a ? true : a.tier_name,
      months: u
    }
  }
}

function _(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = o.tEg,
      guildId: a,
      roleSubscriptionData: s
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: d,
      showWithDuration: p,
      isRenewal: _
    } = f(a, s);
  return t = p ? _ ? l.t.OQ0OUy : l.t["+N9bxq"] : _ ? l.t.OxP1NC : l.t["6Z1E+7"], l.intl.formatToParts(t, {
    guildName: null == u ? true : u.name,
    tierName: null == s ? true : s.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: d
  })
}

function h(e) {
  return (0, i.w)(e)
}

function m(e, t, n, i) {
  var a;
  r.Ay.trackWithMetadata(o.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null == (a = s.default.getCurrentUser()) ? true : a.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function g(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null == (n = s.default.getCurrentUser()) ? true : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}