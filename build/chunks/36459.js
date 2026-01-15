/** Chunk was on web.js **/
/** chunk id: 36459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Y: () => v,
  JK: () => b,
  Je: () => y,
  T9: () => T,
  UE: () => I,
  Xx: () => S,
  mm: () => O,
  qY: () => E
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk177862 = require("./177862.js"),
  Chunk787824 = require("./787824.js"),
  Chunk226192 = require("./226192.jsx"),
  Chunk981631 = require("./981631.js");

function _(e) {
  return {
    type: e.type,
    metadata: (0, d.X)(e.metadata)
  }
}

function h(e) {
  var t, n;
  let r = (0, d.X)(e.triggerMetadata);
  return null != r && delete r.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: r,
    actions: e.actions.filter(l.lm).map(_),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
    exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
  }
}

function m(e) {
  return {
    type: e.type,
    metadata: (0, d.C)(e.metadata)
  }
}

function g(e) {
  var t, n, r;
  let i = {
    id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, d.C)(e.trigger_metadata),
    actions: e.actions.filter(l.lm).map(m),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
    exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function E(e) {
  let t = h(e),
    n = await r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t,
      rejectWithError: false
    });
  return (0, d.C)(n.body)
}
async function b(e) {
  let t = h(e);
  return delete t.id, g((await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_RULES(e.guildId),
    body: t,
    rejectWithError: false
  })).body)
}
async function y(e) {
  let t = h(e);
  return g((await r.tn.patch({
    url: p.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t,
    rejectWithError: false
  })).body)
}
async function O(e, t) {
  return await r.tn.del({
    url: p.ANM.GUILD_AUTOMOD_RULE(t, e),
    rejectWithError: false
  }), true
}
async function v(e) {
  let t = await r.tn.get({
    url: p.ANM.GUILD_AUTOMOD_RULES(e),
    rejectWithError: false
  });
  return Array.isArray(t.body) ? t.body.map(g) : []
}
async function S(e, t, n) {
  s.Z.can(p.Plq.MANAGE_MESSAGES, t) && await r.tn.post({
    url: p.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
    body: {
      message_id: e,
      channel_id: t.id,
      alert_action_type: n
    },
    rejectWithError: false
  })
}

function I(e, t, n) {
  let i = o.Z.getGuild(e);
  if (null == i || !s.Z.can(p.Plq.MANAGE_GUILD, i)) return;
  let l = () => {
    (0, a.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), r.tn.post({
      url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
      rejectWithError: true
    }), n()
  };
  (0, f.UV)(l)
}

function T(e) {
  i.Z.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}