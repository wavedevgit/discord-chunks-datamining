/** Chunk was on 76346 **/
r.d(t, {
  $Y: () => m,
  JK: () => h,
  Je: () => O,
  T9: () => E,
  UE: () => S,
  Xx: () => b,
  mm: () => _,
  qY: () => j
}), r(388685);
var n = r(544891),
  i = r(570140),
  s = r(367907),
  l = r(430824),
  o = r(496675),
  a = r(823379),
  c = r(709054),
  u = r(177862),
  d = r(787824),
  p = r(226192),
  f = r(981631);

function g(e) {
  return {
    type: e.type,
    metadata: (0, d.X)(e.metadata)
  }
}

function y(e) {
  var t, r;
  let n = (0, d.X)(e.triggerMetadata);
  return null != n && delete n.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: n,
    actions: e.actions.filter(a.lm).map(g),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
    exempt_roles: Array.from(null != (r = e.exemptRoles) ? r : [])
  }
}

function C(e) {
  return {
    type: e.type,
    metadata: (0, d.C)(e.metadata)
  }
}

function x(e) {
  var t, r, n;
  let i = {
    id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, d.C)(e.trigger_metadata),
    actions: e.actions.filter(a.lm).map(C),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null != (r = e.exempt_channels) ? r : []),
    exemptRoles: new Set(null != (n = e.exempt_roles) ? n : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function j(e) {
  let t = y(e),
    r = await n.tn.post({
      url: f.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t,
      rejectWithError: !1
    });
  return (0, d.C)(r.body)
}
async function h(e) {
  let t = y(e);
  return delete t.id, x((await n.tn.post({
    url: f.ANM.GUILD_AUTOMOD_RULES(e.guildId),
    body: t,
    rejectWithError: !1
  })).body)
}
async function O(e) {
  let t = y(e);
  return x((await n.tn.patch({
    url: f.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t,
    rejectWithError: !1
  })).body)
}
async function _(e, t) {
  return await n.tn.del({
    url: f.ANM.GUILD_AUTOMOD_RULE(t, e),
    rejectWithError: !1
  }), !0
}
async function m(e) {
  let t = await n.tn.get({
    url: f.ANM.GUILD_AUTOMOD_RULES(e),
    rejectWithError: !1
  });
  return Array.isArray(t.body) ? t.body.map(x) : []
}
async function b(e, t, r) {
  o.Z.can(f.Plq.MANAGE_MESSAGES, t) && await n.tn.post({
    url: f.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
    body: {
      message_id: e,
      channel_id: t.id,
      alert_action_type: r
    },
    rejectWithError: !1
  })
}

function S(e, t, r) {
  let i = l.Z.getGuild(e);
  null != i && o.Z.can(f.Plq.MANAGE_GUILD, i) && (0, p.UV)(() => {
    (0, s.yw)(f.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), n.tn.post({
      url: f.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
      rejectWithError: !0
    }), r()
  })
}

function E(e) {
  i.Z.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}