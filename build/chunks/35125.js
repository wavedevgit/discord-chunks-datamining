/** Chunk was on 41829 **/
n.d(t, {
  PA: () => d,
  Tn: () => s,
  _i: () => h,
  eI: () => p,
  vp: () => E,
  y8: () => m
});
var r = n(367907),
  i = n(200876),
  a = n(430824),
  l = n(594174);
n(709054), n(523361);
var o = n(981631),
  u = n(388032);

function c(e) {
  return e
}

function s(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    content: l,
    formatParams: o
  } = _({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return u.intl.format(l, o)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    content: l,
    formatParams: o
  } = _({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return u.intl.formatToParts(l, o)
}

function f(e, t) {
  var n, r;
  let i = a.Z.getGuild(e),
    l = null != (n = null == t ? void 0 : t.total_months_subscribed) ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: l,
    showWithDuration: l > 0,
    isRenewal: null != (r = null == t ? void 0 : t.is_renewal) && r
  }
}

function _(e) {
  let {
    username: t,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = o.dG4,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    guild: l,
    totalMonthsSubscribed: s,
    showWithDuration: d,
    isRenewal: _
  } = f(i, a);
  return {
    content: d ? _ ? u.t.Iy66Mz : u.t.eCgb2d : _ ? u.t.mPTTdn : u.t.mYjFFx,
    formatParams: {
      username: t,
      usernameHook: n,
      guildName: null == l ? void 0 : l.name,
      handleGuildNameClick: r,
      tierName: null == a ? void 0 : a.tier_name,
      months: s
    }
  }
}

function E(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = o.dG4,
      guildId: a,
      roleSubscriptionData: l
    } = e,
    {
      guild: s,
      totalMonthsSubscribed: d,
      showWithDuration: _,
      isRenewal: E
    } = f(a, l);
  return t = _ ? E ? u.t.OQ0OU1 : u.t["+N9bxs"] : E ? u.t.OxP1ND : u.t["6Z1E+/"], u.intl.formatToParts(t, {
    guildName: null == s ? void 0 : s.name,
    tierName: null == l ? void 0 : l.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: d
  })
}

function p(e) {
  return (0, i.l)(e)
}

function m(e, t, n, i) {
  var a;
  r.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null == (a = l.default.getCurrentUser()) ? void 0 : a.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function h(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}