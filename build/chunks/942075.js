/** Chunk was on 98797 **/
/** chunk id: 942075, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  WC: () => c,
  eb: () => T,
  g6: () => E,
  gw: () => d,
  xH: () => _,
  y4: () => g
});
var Chunk58149 = require("./58149.js"),
  Chunk936555 = require("./936555.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js");
require("./661191.js"), require("./226139.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  return t
}

function d(t) {
  let {
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = t, {
    content: a,
    formatParams: o
  } = A({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return u.intl.format(a, o)
}

function c(t) {
  let {
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = t, {
    content: a,
    formatParams: o
  } = A({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return u.intl.formatToParts(a, o)
}

function m(t, e) {
  var n, r;
  let i = l.A.getGuild(t),
    a = null != (n = null == e ? true : e.total_months_subscribed) ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: a,
    showWithDuration: a > 0,
    isRenewal: null != (r = null == e ? true : e.is_renewal) && r
  }
}

function A(t) {
  let {
    username: e,
    usernameOnClickHandler: n = s,
    roleSubscriptionOnClickHandler: r = o.tEg,
    guildId: i,
    roleSubscriptionData: l
  } = t, {
    guild: a,
    totalMonthsSubscribed: d,
    showWithDuration: c,
    isRenewal: A
  } = m(i, l);
  return {
    content: c ? A ? u.t.Iy66M7 : u.t.eCgb2W : A ? u.t.mPTTdv : u.t.mYjFFx,
    formatParams: {
      username: e,
      usernameHook: n,
      guildName: null == a ? true : a.name,
      handleGuildNameClick: r,
      tierName: null == l ? true : l.tier_name,
      months: d
    }
  }
}

function T(t) {
  let e, {
      username: n,
      usernameOnClickHandler: r = s,
      roleSubscriptionOnClickHandler: i = o.tEg,
      guildId: l,
      roleSubscriptionData: a
    } = t,
    {
      guild: d,
      totalMonthsSubscribed: c,
      showWithDuration: A,
      isRenewal: T
    } = m(l, a);
  return e = A ? T ? u.t.OQ0OUy : u.t["+N9bxq"] : T ? u.t.OxP1NC : u.t["6Z1E+7"], u.intl.formatToParts(e, {
    guildName: null == d ? true : d.name,
    tierName: null == a ? true : a.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: c
  })
}

function E(t) {
  return (0, i.w)(t)
}

function _(t, e, n, i) {
  var l;
  r.Ay.trackWithMetadata(o.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: t,
    user_id: null == (l = a.default.getCurrentUser()) ? true : l.id,
    channel_id: e,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function g(t, e) {
  var n;
  return {
    guild_id: t.guild_id,
    sender: null == (n = a.default.getCurrentUser()) ? true : n.id,
    target_user: e.author.id,
    channel_id: t.id,
    message_id: e.id
  }
}