/** Chunk was on 66141 **/
n.d(e, {
  PA: () => s,
  Tn: () => d,
  _i: () => h,
  eI: () => p,
  vp: () => E,
  y8: () => m
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
  return o.intl.format(a, u)
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
    totalMonthsSubscribed: d,
    showWithDuration: s,
    isRenewal: _
  } = f(i, l);
  return {
    content: s ? _ ? o.t.Iy66Mz : o.t.eCgb2d : _ ? o.t.mPTTdn : o.t.mYjFFx,
    formatParams: {
      username: e,
      usernameHook: n,
      guildName: null == a ? void 0 : a.name,
      handleGuildNameClick: r,
      tierName: null == l ? void 0 : l.tier_name,
      months: d
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
      guild: d,
      totalMonthsSubscribed: s,
      showWithDuration: _,
      isRenewal: E
    } = f(l, a);
  return e = _ ? E ? o.t.OQ0OU1 : o.t["+N9bxs"] : E ? o.t.OxP1ND : o.t["6Z1E+/"], o.intl.formatToParts(e, {
    guildName: null == d ? void 0 : d.name,
    tierName: null == a ? void 0 : a.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: s
  })
}

function p(t) {
  return (0, i.l)(t)
}

function m(t, e, n, i) {
  var l;
  r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: t,
    user_id: null == (l = a.default.getCurrentUser()) ? void 0 : l.id,
    channel_id: e,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function h(t, e) {
  var n;
  return {
    guild_id: t.guild_id,
    sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
    target_user: e.author.id,
    channel_id: t.id,
    message_id: e.id
  }
}