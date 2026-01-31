/** Chunk was on 34795 **/
/** chunk id: 942075, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  WC: () => m,
  eb: () => f,
  g6: () => E,
  gw: () => c,
  xH: () => _,
  y4: () => T
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
  } = d({
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
  } = d({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: l,
    roleSubscriptionData: a
  });
  return o.intl.formatToParts(i, u)
}

function A(t, e) {
  var n, r;
  let l = a.A.getGuild(t),
    i = null != (n = null == e ? true : e.total_months_subscribed) ? n : 0;
  return {
    guild: l,
    totalMonthsSubscribed: i,
    showWithDuration: i > 0,
    isRenewal: null != (r = null == e ? true : e.is_renewal) && r
  }
}

function d(t) {
  let {
    username: e,
    usernameOnClickHandler: n = s,
    roleSubscriptionOnClickHandler: r = u.tEg,
    guildId: l,
    roleSubscriptionData: a
  } = t, {
    guild: i,
    totalMonthsSubscribed: c,
    showWithDuration: m,
    isRenewal: d
  } = A(l, a);
  return {
    content: m ? d ? o.t.Iy66M7 : o.t.eCgb2W : d ? o.t.mPTTdv : o.t.mYjFFx,
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

function f(t) {
  let e, {
      username: n,
      usernameOnClickHandler: r = s,
      roleSubscriptionOnClickHandler: l = u.tEg,
      guildId: a,
      roleSubscriptionData: i
    } = t,
    {
      guild: c,
      totalMonthsSubscribed: m,
      showWithDuration: d,
      isRenewal: f
    } = A(a, i);
  return e = d ? f ? o.t.OQ0OUy : o.t["+N9bxq"] : f ? o.t.OxP1NC : o.t["6Z1E+7"], o.intl.formatToParts(e, {
    guildName: null == c ? true : c.name,
    tierName: null == i ? true : i.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: l,
    months: m
  })
}

function E(t) {
  return (0, l.w)(t)
}

function _(t, e, n, l) {
  var a;
  r.Ay.trackWithMetadata(u.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: t,
    user_id: null == (a = i.default.getCurrentUser()) ? true : a.id,
    channel_id: e,
    message_id: n,
    role_subscription_listing_id: l
  })
}

function T(t, e) {
  var n;
  return {
    guild_id: t.guild_id,
    sender: null == (n = i.default.getCurrentUser()) ? true : n.id,
    target_user: e.author.id,
    channel_id: t.id,
    message_id: e.id
  }
}