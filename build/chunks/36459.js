/** Chunk was on 31253 **/
/** chunk id: 36459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Y: () => A,
  JK: () => p,
  Je: () => R,
  T9: () => g,
  UE: () => m,
  Xx: () => C,
  mm: () => f,
  qY: () => S
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

function I(e) {
  return {
    type: e.type,
    metadata: (0, _.X)(e.metadata)
  }
}

function T(e) {
  var t, n;
  let r = (0, _.X)(e.triggerMetadata);
  return null != r && delete r.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: r,
    actions: e.actions.filter(c.lm).map(I),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
    exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
  }
}

function O(e) {
  return {
    type: e.type,
    metadata: (0, _.C)(e.metadata)
  }
}

function N(e) {
  var t, n, r;
  let i = {
    id: null != (t = e.id) ? t : s.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, _.C)(e.trigger_metadata),
    actions: e.actions.filter(c.lm).map(O),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
    exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function S(e) {
  let t = T(e),
    n = await r.tn.post({
      url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t,
      rejectWithError: false
    });
  return (0, _.C)(n.body)
}
async function p(e) {
  let t = T(e);
  return delete t.id, N((await r.tn.post({
    url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
    body: t,
    rejectWithError: false
  })).body)
}
async function R(e) {
  let t = T(e);
  return N((await r.tn.patch({
    url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t,
    rejectWithError: false
  })).body)
}
async function f(e, t) {
  return await r.tn.del({
    url: E.ANM.GUILD_AUTOMOD_RULE(t, e),
    rejectWithError: false
  }), true
}
async function A(e) {
  let t = await r.tn.get({
    url: E.ANM.GUILD_AUTOMOD_RULES(e),
    rejectWithError: false
  });
  return Array.isArray(t.body) ? t.body.map(N) : []
}
async function C(e, t, n) {
  a.Z.can(E.Plq.MANAGE_MESSAGES, t) && await r.tn.post({
    url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
    body: {
      message_id: e,
      channel_id: t.id,
      alert_action_type: n
    },
    rejectWithError: false
  })
}

function m(e, t, n) {
  let i = o.Z.getGuild(e);
  null != i && a.Z.can(E.Plq.MANAGE_GUILD, i) && (0, d.UV)(() => {
    (0, l.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), r.tn.post({
      url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
      rejectWithError: true
    }), n()
  })
}

function g(e) {
  i.Z.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}