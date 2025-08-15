/** Chunk was on 16766 **/
/** chunk id: 35125, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PA: () => m,
  Tn: () => c,
  _i: () => f,
  eI: () => T,
  vp: () => _,
  y8: () => I
});
var Chunk367907 = require("./367907.js"),
  Chunk200876 = require("./200876.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js");
require("./709054.js"), require("./523361.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  return t
}

function c(t) {
  let {
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: l,
    roleSubscriptionData: a
  } = t, {
    content: i,
    formatParams: u
  } = N({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: l,
    roleSubscriptionData: a
  });
  return o.intl.format(i, u)
}

function m(t) {
  let {
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: l,
    roleSubscriptionData: a
  } = t, {
    content: i,
    formatParams: u
  } = N({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: l,
    roleSubscriptionData: a
  });
  return o.intl.formatToParts(i, u)
}

function d(t, e) {
  var n, r;
  let l = a.Z.getGuild(t),
    i = null != (n = null == e ? true : e.total_months_subscribed) ? n : 0;
  return {
    guild: l,
    totalMonthsSubscribed: i,
    showWithDuration: i > 0,
    isRenewal: null != (r = null == e ? true : e.is_renewal) && r
  }
}

function N(t) {
  let {
    username: e,
    usernameOnClickHandler: n = s,
    roleSubscriptionOnClickHandler: r = u.dG4,
    guildId: l,
    roleSubscriptionData: a
  } = t, {
    guild: i,
    totalMonthsSubscribed: c,
    showWithDuration: m,
    isRenewal: N
  } = d(l, a);
  return {
    content: m ? N ? o.t.Iy66Mz : o.t.eCgb2d : N ? o.t.mPTTdn : o.t.mYjFFx,
    formatParams: {
      username: e,
      usernameHook: n,
      guildName: null == i ? true : i.name,
      handleGuildNameClick: r,
      tierName: null == a ? true : a.tier_name,
      months: c
    }
  }
}

function _(t) {
  let e, {
      username: n,
      usernameOnClickHandler: r = s,
      roleSubscriptionOnClickHandler: l = u.dG4,
      guildId: a,
      roleSubscriptionData: i
    } = t,
    {
      guild: c,
      totalMonthsSubscribed: m,
      showWithDuration: N,
      isRenewal: _
    } = d(a, i);
  return e = N ? _ ? o.t.OQ0OU1 : o.t["+N9bxs"] : _ ? o.t.OxP1ND : o.t["6Z1E+/"], o.intl.formatToParts(e, {
    guildName: null == c ? true : c.name,
    tierName: null == i ? true : i.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: l,
    months: m
  })
}

function T(t) {
  return (0, l.l)(t)
}

function I(t, e, n, l) {
  var a;
  r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: t,
    user_id: null == (a = i.default.getCurrentUser()) ? true : a.id,
    channel_id: e,
    message_id: n,
    role_subscription_listing_id: l
  })
}

function f(t, e) {
  var n;
  return {
    guild_id: t.guild_id,
    sender: null == (n = i.default.getCurrentUser()) ? true : n.id,
    target_user: e.author.id,
    channel_id: t.id,
    message_id: e.id
  }
}