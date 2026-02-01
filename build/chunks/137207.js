/** Chunk was on 46673 **/
/** chunk id: 137207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E5: () => y,
  G6: () => p,
  H0: () => P,
  Vj: () => R,
  W5: () => m,
  nV: () => S,
  s6: () => N,
  wu: () => f
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk615550 = require("./615550.js"),
  Chunk488703 = require("./488703.js"),
  Chunk449585 = require("./449585.jsx"),
  Chunk652215 = require("./652215.js");

function A(e) {
  return {
    type: e.type,
    metadata: (0, E.A)(e.metadata)
  }
}

function T(e) {
  var t, n;
  let r = (0, E.A)(e.triggerMetadata);
  return null != r && delete r.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: r,
    actions: e.actions.filter(s.Vq).map(A),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
    exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
  }
}

function I(e) {
  return {
    type: e.type,
    metadata: (0, E.W)(e.metadata)
  }
}

function O(e) {
  var t, n, r;
  let i = {
    id: null != (t = e.id) ? t : c.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, E.W)(e.trigger_metadata),
    actions: e.actions.filter(s.Vq).map(I),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
    exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
  };
  return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
}
async function N(e) {
  let t = T(e),
    n = await r.Bo.post({
      url: _.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t,
      rejectWithError: false
    });
  return (0, E.W)(n.body)
}
async function p(e) {
  let t = T(e);
  return delete t.id, O((await r.Bo.post({
    url: _.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
    body: t,
    rejectWithError: false
  })).body)
}
async function R(e) {
  let t = T(e);
  return O((await r.Bo.patch({
    url: _.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t,
    rejectWithError: false
  })).body)
}
async function S(e, t) {
  return await r.Bo.del({
    url: _.Rsh.GUILD_AUTOMOD_RULE(t, e),
    rejectWithError: false
  }), true
}
async function P(e) {
  let t = await r.Bo.get({
    url: _.Rsh.GUILD_AUTOMOD_RULES(e),
    rejectWithError: false
  });
  return Array.isArray(t.body) ? t.body.map(O) : []
}
async function y(e, t, n) {
  o.A.can(_.xBc.MANAGE_MESSAGES, t) && await r.Bo.post({
    url: _.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
    body: {
      message_id: e,
      channel_id: t.id,
      alert_action_type: n
    },
    rejectWithError: false
  })
}

function m(e, t, n) {
  let i = a.A.getGuild(e);
  null != i && o.A.can(_.xBc.MANAGE_GUILD, i) && (0, d.rI)(() => {
    (0, l.zV)(_.HAw.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: u.Gb.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), r.Bo.post({
      url: _.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
      rejectWithError: true
    }), n()
  })
}

function f(e) {
  i.h.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}