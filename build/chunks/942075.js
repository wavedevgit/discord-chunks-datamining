/** Chunk was on 73734 **/
/** chunk id: 942075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  WC: () => E,
  eb: () => A,
  g6: () => T,
  gw: () => u,
  xH: () => I,
  y4: () => O
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
    roleSubscriptionData: l
  } = e, {
    content: a,
    formatParams: o
  } = _({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return s.intl.format(a, o)
}

function E(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = e, {
    content: a,
    formatParams: o
  } = _({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return s.intl.formatToParts(a, o)
}

function d(e, t) {
  var n, r;
  let i = l.A.getGuild(e),
    a = null != (n = null == t ? true : t.total_months_subscribed) ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: a,
    showWithDuration: a > 0,
    isRenewal: null != (r = null == t ? true : t.is_renewal) && r
  }
}

function _(e) {
  let {
    username: t,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = o.tEg,
    guildId: i,
    roleSubscriptionData: l
  } = e, {
    guild: a,
    totalMonthsSubscribed: u,
    showWithDuration: E,
    isRenewal: _
  } = d(i, l);
  return {
    content: E ? _ ? s.t.Iy66M7 : s.t.eCgb2W : _ ? s.t.mPTTdv : s.t.mYjFFx,
    formatParams: {
      username: t,
      usernameHook: n,
      guildName: null == a ? true : a.name,
      handleGuildNameClick: r,
      tierName: null == l ? true : l.tier_name,
      months: u
    }
  }
}

function A(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = o.tEg,
      guildId: l,
      roleSubscriptionData: a
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: E,
      showWithDuration: _,
      isRenewal: A
    } = d(l, a);
  return t = _ ? A ? s.t.OQ0OUy : s.t["+N9bxq"] : A ? s.t.OxP1NC : s.t["6Z1E+7"], s.intl.formatToParts(t, {
    guildName: null == u ? true : u.name,
    tierName: null == a ? true : a.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: E
  })
}

function T(e) {
  return (0, i.w)(e)
}

function I(e, t, n, i) {
  var l;
  r.Ay.trackWithMetadata(o.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null == (l = a.default.getCurrentUser()) ? true : l.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function O(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null == (n = a.default.getCurrentUser()) ? true : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}