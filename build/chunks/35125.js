/** Chunk was on 30806 **/
n.d(t, {
  PA: () => c,
  Tn: () => d,
  _i: () => C,
  eI: () => g,
  vp: () => f,
  y8: () => v
});
var i = n(367907),
  r = n(200876),
  l = n(430824),
  s = n(594174);
n(709054), n(523361);
var o = n(981631),
  a = n(388032);

function u(e) {
  return e
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  } = e, {
    content: s,
    formatParams: o
  } = p({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  });
  return a.NW.format(s, o)
}

function c(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  } = e, {
    content: s,
    formatParams: o
  } = p({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  });
  return a.NW.formatToParts(s, o)
}

function h(e, t) {
  var n, i;
  let r = l.Z.getGuild(e),
    s = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: r,
    totalMonthsSubscribed: s,
    showWithDuration: s > 0,
    isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
  }
}

function p(e) {
  let {
    username: t,
    usernameOnClickHandler: n = u,
    roleSubscriptionOnClickHandler: i = o.dG4,
    guildId: r,
    roleSubscriptionData: l
  } = e, {
    guild: s,
    totalMonthsSubscribed: d,
    showWithDuration: c,
    isRenewal: p
  } = h(r, l);
  return {
    content: c ? p ? a.t.Iy66Mz : a.t.eCgb2d : p ? a.t.mPTTdn : a.t.mYjFFx,
    formatParams: {
      username: t,
      usernameHook: n,
      guildName: null == s ? void 0 : s.name,
      handleGuildNameClick: i,
      tierName: null == l ? void 0 : l.tier_name,
      months: d
    }
  }
}

function f(e) {
  let t, {
      username: n,
      usernameOnClickHandler: i = u,
      roleSubscriptionOnClickHandler: r = o.dG4,
      guildId: l,
      roleSubscriptionData: s
    } = e,
    {
      guild: d,
      totalMonthsSubscribed: c,
      showWithDuration: p,
      isRenewal: f
    } = h(l, s);
  return t = p ? f ? a.t.OQ0OU1 : a.t["+N9bxs"] : f ? a.t.OxP1ND : a.t["6Z1E+/"], a.NW.formatToParts(t, {
    guildName: null == d ? void 0 : d.name,
    tierName: null == s ? void 0 : s.tier_name,
    username: n,
    usernameOnClick: i,
    roleSubscriptionOnClick: r,
    months: c
  })
}

function g(e) {
  return (0, r.l)(e)
}

function v(e, t, n, r) {
  var l;
  i.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (l = s.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: r
  })
}

function C(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}