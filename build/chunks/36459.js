/** Chunk was on 61697 **/
n.d(e, {
  $Y: () => O,
  JK: () => S,
  Je: () => I,
  T9: () => T,
  UE: () => b,
  Xx: () => N,
  mm: () => m,
  qY: () => h
}), n(47120);
var r = n(544891),
  i = n(570140),
  l = n(367907),
  o = n(430824),
  a = n(496675),
  s = n(823379),
  c = n(709054),
  u = n(177862),
  d = n(787824),
  _ = n(226192),
  p = n(981631);

function E(t) {
  return {
    type: t.type,
    metadata: (0, d.X)(t.metadata)
  }
}

function g(t) {
  var e, n;
  let r = (0, d.X)(t.triggerMetadata);
  return null != r && delete r.keywordLists, {
    id: t.id,
    name: t.name,
    guild_id: t.guildId,
    event_type: t.eventType,
    trigger_type: t.triggerType,
    trigger_metadata: r,
    actions: t.actions.filter(s.lm).map(E),
    enabled: t.enabled,
    creator_id: t.creatorId,
    position: t.position,
    exempt_channels: Array.from(null !== (e = t.exemptChannels) && void 0 !== e ? e : []),
    exempt_roles: Array.from(null !== (n = t.exemptRoles) && void 0 !== n ? n : [])
  }
}

function y(t) {
  return {
    type: t.type,
    metadata: (0, d.C)(t.metadata)
  }
}

function f(t) {
  var e, n, r;
  let i = {
    id: null !== (e = t.id) && void 0 !== e ? e : c.default.fromTimestamp(Date.now()),
    name: t.name,
    guildId: t.guild_id,
    eventType: t.event_type,
    triggerType: t.trigger_type,
    triggerMetadata: (0, d.C)(t.trigger_metadata),
    actions: t.actions.filter(s.lm).map(y),
    enabled: t.enabled,
    creatorId: t.creator_id,
    position: t.position,
    exemptChannels: new Set(null !== (n = t.exempt_channels) && void 0 !== n ? n : []),
    exemptRoles: new Set(null !== (r = t.exempt_roles) && void 0 !== r ? r : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function h(t) {
  let e = g(t),
    n = await r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
      body: e,
      rejectWithError: !1
    });
  return (0, d.C)(n.body)
}
async function S(t) {
  let e = g(t);
  return delete e.id, f((await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_RULES(t.guildId),
    body: e,
    rejectWithError: !1
  })).body)
}
async function I(t) {
  let e = g(t);
  return f((await r.tn.patch({
    url: p.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
    body: e,
    rejectWithError: !1
  })).body)
}
async function m(t, e) {
  return await r.tn.del({
    url: p.ANM.GUILD_AUTOMOD_RULE(e, t),
    rejectWithError: !1
  }), !0
}
async function O(t) {
  let e = await r.tn.get({
    url: p.ANM.GUILD_AUTOMOD_RULES(t),
    rejectWithError: !1
  });
  return Array.isArray(e.body) ? e.body.map(f) : []
}
async function N(t, e, n) {
  a.Z.can(p.Plq.MANAGE_MESSAGES, e) && await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
    body: {
      message_id: t,
      channel_id: e.id,
      alert_action_type: n
    },
    rejectWithError: !1
  })
}

function b(t, e, n) {
  let i = o.Z.getGuild(t);
  null != i && a.Z.can(p.Plq.MANAGE_GUILD, i) && (0, _.UV)(() => {
    (0, l.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: e
    }), r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
      rejectWithError: !0
    }), n()
  })
}

function T(t) {
  i.Z.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: t
  })
}