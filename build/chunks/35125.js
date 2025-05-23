/** Chunk was on 47461 **/
n.d(e, {
  PA: () => d,
  Tn: () => s,
  _i: () => g,
  eI: () => m,
  vp: () => E,
  y8: () => p
});
var r = n(367907),
  i = n(200876),
  l = n(430824),
  a = n(594174);
n(709054), n(523361);
var u = n(981631),
  o = n(388032);

function c(t) {
  return t
}

function s(t) {
  let {
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = t, {
    content: a,
    formatParams: u
  } = _({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return o.intl.format(a, u)
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
    formatParams: u
  } = _({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return o.intl.formatToParts(a, u)
}

function f(t, e) {
  var n, r;
  let i = l.Z.getGuild(t),
    a = null != (n = null == e ? void 0 : e.total_months_subscribed) ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: a,
    showWithDuration: a > 0,
    isRenewal: null != (r = null == e ? void 0 : e.is_renewal) && r
  }
}

function _(t) {
  let {
    username: e,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = u.dG4,
    guildId: i,
    roleSubscriptionData: l
  } = t, {
    guild: a,
    totalMonthsSubscribed: s,
    showWithDuration: d,
    isRenewal: _
  } = f(i, l);
  return {
    content: d ? _ ? o.t.Iy66Mz : o.t.eCgb2d : _ ? o.t.mPTTdn : o.t.mYjFFx,
    formatParams: {
      username: e,
      usernameHook: n,
      guildName: null == a ? void 0 : a.name,
      handleGuildNameClick: r,
      tierName: null == l ? void 0 : l.tier_name,
      months: s
    }
  }
}

function E(t) {
  let e, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = u.dG4,
      guildId: l,
      roleSubscriptionData: a
    } = t,
    {
      guild: s,
      totalMonthsSubscribed: d,
      showWithDuration: _,
      isRenewal: E
    } = f(l, a);
  return e = _ ? E ? o.t.OQ0OU1 : o.t["+N9bxs"] : E ? o.t.OxP1ND : o.t["6Z1E+/"], o.intl.formatToParts(e, {
    guildName: null == s ? void 0 : s.name,
    tierName: null == a ? void 0 : a.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: d
  })
}

function m(t) {
  return (0, i.l)(t)
}

function p(t, e, n, i) {
  var l;
  r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: t,
    user_id: null == (l = a.default.getCurrentUser()) ? void 0 : l.id,
    channel_id: e,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function g(t, e) {
  var n;
  return {
    guild_id: t.guild_id,
    sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
    target_user: e.author.id,
    channel_id: t.id,
    message_id: e.id
  }
}