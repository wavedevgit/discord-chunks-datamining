/** Chunk was on 76282 **/
n.d(t, {
  $Y: () => I,
  JK: () => b,
  Je: () => O,
  T9: () => S,
  UE: () => T,
  Xx: () => C,
  mm: () => N,
  qY: () => g
}), n(47120);
var r = n(544891),
  i = n(570140),
  o = n(367907),
  l = n(430824),
  a = n(496675),
  s = n(823379),
  c = n(709054),
  u = n(177862),
  d = n(787824),
  _ = n(226192),
  p = n(981631);

function E(e) {
  return {
    type: e.type,
    metadata: (0, d.X)(e.metadata)
  }
}

function f(e) {
  var t, n;
  let r = (0, d.X)(e.triggerMetadata);
  return null != r && delete r.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: r,
    actions: e.actions.filter(s.lm).map(E),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
    exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
  }
}

function m(e) {
  return {
    type: e.type,
    metadata: (0, d.C)(e.metadata)
  }
}

function h(e) {
  var t, n, r;
  let i = {
    id: null !== (t = e.id) && void 0 !== t ? t : c.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, d.C)(e.trigger_metadata),
    actions: e.actions.filter(s.lm).map(m),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
    exemptRoles: new Set(null !== (r = e.exempt_roles) && void 0 !== r ? r : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function g(e) {
  let t = f(e),
    n = await r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t,
      rejectWithError: !1
    });
  return (0, d.C)(n.body)
}
async function b(e) {
  let t = f(e);
  return delete t.id, h((await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_RULES(e.guildId),
    body: t,
    rejectWithError: !1
  })).body)
}
async function O(e) {
  let t = f(e);
  return h((await r.tn.patch({
    url: p.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t,
    rejectWithError: !1
  })).body)
}
async function N(e, t) {
  return await r.tn.del({
    url: p.ANM.GUILD_AUTOMOD_RULE(t, e),
    rejectWithError: !1
  }), !0
}
async function I(e) {
  let t = await r.tn.get({
    url: p.ANM.GUILD_AUTOMOD_RULES(e),
    rejectWithError: !1
  });
  return Array.isArray(t.body) ? t.body.map(h) : []
}
async function C(e, t, n) {
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

function T(e, t, n) {
  let i = l.Z.getGuild(e);
  null != i && a.Z.can(p.Plq.MANAGE_GUILD, i) && (0, _.UV)(() => {
    (0, o.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
      rejectWithError: !0
    }), n()
  })
}

function S(e) {
  i.Z.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}