/** Chunk was on 88844 **/
n.d(t, {
  PA: () => s,
  Tn: () => d,
  _i: () => m,
  eI: () => N,
  vp: () => E,
  y8: () => p
});
var r = n(367907),
  i = n(200876),
  a = n(430824),
  l = n(594174);
n(709054), n(523361);
var u = n(981631),
  o = n(388032);

function c(e) {
  return e
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
    formatParams: u
  } = _({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return o.NW.format(l, u)
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
    formatParams: u
  } = _({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return o.NW.formatToParts(l, u)
}

function f(e, t) {
  var n, r;
  let i = a.Z.getGuild(e),
    l = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: l,
    showWithDuration: l > 0,
    isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
  }
}

function _(e) {
  let {
    username: t,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = u.dG4,
    guildId: i,
    roleSubscriptionData: a
  } = e, {
    guild: l,
    totalMonthsSubscribed: d,
    showWithDuration: s,
    isRenewal: _
  } = f(i, a);
  return {
    content: s ? _ ? o.t.Iy66Mz : o.t.eCgb2d : _ ? o.t.mPTTdn : o.t.mYjFFx,
    formatParams: {
      username: t,
      usernameHook: n,
      guildName: null == l ? void 0 : l.name,
      handleGuildNameClick: r,
      tierName: null == a ? void 0 : a.tier_name,
      months: d
    }
  }
}

function E(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = u.dG4,
      guildId: a,
      roleSubscriptionData: l
    } = e,
    {
      guild: d,
      totalMonthsSubscribed: s,
      showWithDuration: _,
      isRenewal: E
    } = f(a, l);
  return t = _ ? E ? o.t.OQ0OU1 : o.t["+N9bxs"] : E ? o.t.OxP1ND : o.t["6Z1E+/"], o.NW.formatToParts(t, {
    guildName: null == d ? void 0 : d.name,
    tierName: null == l ? void 0 : l.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: s
  })
}

function N(e) {
  return (0, i.l)(e)
}

function p(e, t, n, i) {
  var a;
  r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (a = l.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function m(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}