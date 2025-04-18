/** Chunk was on 56422 **/
n.d(t, {
  $Y: () => E,
  JK: () => _,
  Je: () => S,
  T9: () => N,
  UE: () => I,
  Xx: () => j,
  mm: () => O,
  qY: () => h
}), n(388685);
var r = n(544891),
  i = n(570140),
  l = n(367907),
  s = n(430824),
  a = n(496675),
  o = n(823379),
  c = n(709054),
  u = n(177862),
  d = n(787824),
  g = n(226192),
  p = n(981631);

function f(e) {
  return {
    type: e.type,
    metadata: (0, d.X)(e.metadata)
  }
}

function m(e) {
  var t, n;
  let r = (0, d.X)(e.triggerMetadata);
  return null != r && delete r.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: r,
    actions: e.actions.filter(o.lm).map(f),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
    exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
  }
}

function b(e) {
  return {
    type: e.type,
    metadata: (0, d.C)(e.metadata)
  }
}

function y(e) {
  var t, n, r;
  let i = {
    id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, d.C)(e.trigger_metadata),
    actions: e.actions.filter(o.lm).map(b),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
    exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function h(e) {
  let t = m(e),
    n = await r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t,
      rejectWithError: !1
    });
  return (0, d.C)(n.body)
}
async function _(e) {
  let t = m(e);
  return delete t.id, y((await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_RULES(e.guildId),
    body: t,
    rejectWithError: !1
  })).body)
}
async function S(e) {
  let t = m(e);
  return y((await r.tn.patch({
    url: p.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t,
    rejectWithError: !1
  })).body)
}
async function O(e, t) {
  return await r.tn.del({
    url: p.ANM.GUILD_AUTOMOD_RULE(t, e),
    rejectWithError: !1
  }), !0
}
async function E(e) {
  let t = await r.tn.get({
    url: p.ANM.GUILD_AUTOMOD_RULES(e),
    rejectWithError: !1
  });
  return Array.isArray(t.body) ? t.body.map(y) : []
}
async function j(e, t, n) {
  a.Z.can(p.Plq.MANAGE_MESSAGES, t) && await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
    body: {
      message_id: e,
      channel_id: t.id,
      alert_action_type: n
    },
    rejectWithError: !1
  })
}

function I(e, t, n) {
  let i = s.Z.getGuild(e);
  null != i && a.Z.can(p.Plq.MANAGE_GUILD, i) && (0, g.UV)(() => {
    (0, l.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
      rejectWithError: !0
    }), n()
  })
}

function N(e) {
  i.Z.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}