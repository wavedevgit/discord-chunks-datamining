/** Chunk was on 81281 **/
n.d(e, {
  PA: () => s,
  Tn: () => d,
  _i: () => m,
  eI: () => E,
  vp: () => N,
  y8: () => p
});
var r = n(367907),
  i = n(200876),
  a = n(430824),
  l = n(594174);
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
    roleSubscriptionData: a
  } = t, {
    content: l,
    formatParams: u
  } = _({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return o.NW.format(l, u)
}

function s(t) {
  let {
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  } = t, {
    content: l,
    formatParams: u
  } = _({
    username: e,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: a
  });
  return o.NW.formatToParts(l, u)
}

function f(t, e) {
  var n, r;
  let i = a.Z.getGuild(t),
    l = null !== (n = null == e ? void 0 : e.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: l,
    showWithDuration: l > 0,
    isRenewal: null !== (r = null == e ? void 0 : e.is_renewal) && void 0 !== r && r
  }
}

function _(t) {
  let {
    username: e,
    usernameOnClickHandler: n = c,
    roleSubscriptionOnClickHandler: r = u.dG4,
    guildId: i,
    roleSubscriptionData: a
  } = t, {
    guild: l,
    totalMonthsSubscribed: d,
    showWithDuration: s,
    isRenewal: _
  } = f(i, a);
  return {
    content: s ? _ ? o.t.Iy66Mz : o.t.eCgb2d : _ ? o.t.mPTTdn : o.t.mYjFFx,
    formatParams: {
      username: e,
      usernameHook: n,
      guildName: null == l ? void 0 : l.name,
      handleGuildNameClick: r,
      tierName: null == a ? void 0 : a.tier_name,
      months: d
    }
  }
}

function N(t) {
  let e, {
      username: n,
      usernameOnClickHandler: r = c,
      roleSubscriptionOnClickHandler: i = u.dG4,
      guildId: a,
      roleSubscriptionData: l
    } = t,
    {
      guild: d,
      totalMonthsSubscribed: s,
      showWithDuration: _,
      isRenewal: N
    } = f(a, l);
  return e = _ ? N ? o.t.OQ0OU1 : o.t["+N9bxs"] : N ? o.t.OxP1ND : o.t["6Z1E+/"], o.NW.formatToParts(e, {
    guildName: null == d ? void 0 : d.name,
    tierName: null == l ? void 0 : l.tier_name,
    username: n,
    usernameOnClick: r,
    roleSubscriptionOnClick: i,
    months: s
  })
}

function E(t) {
  return (0, i.l)(t)
}

function p(t, e, n, i) {
  var a;
  r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: t,
    user_id: null === (a = l.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
    channel_id: e,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function m(t, e) {
  var n;
  return {
    guild_id: t.guild_id,
    sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: e.author.id,
    channel_id: t.id,
    message_id: e.id
  }
}