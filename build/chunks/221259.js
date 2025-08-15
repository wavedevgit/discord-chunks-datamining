/** Chunk was on 89382 **/
/** chunk id: 221259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IG: () => p,
  JK: () => f,
  ZA: () => h,
  _m: () => b,
  ft: () => N,
  yN: () => S
}), require("./388685.js");
var Chunk399606 = require("./399606.js"),
  Chunk87051 = require("./87051.js"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk423589 = require("./423589.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js");

function h(e) {
  let t = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
    n = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
  return {
    unread: t,
    notification: n,
    preset: (0, d.gs)(t, n)
  }
}

function S(e) {
  let t = (0, i.Wu)([o.ZP], () => (0, s.OD)(o.ZP.getChannelOverrides(e.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [n, a] = (0, i.Wu)([o.ZP, r.Z], () => {
      let n = r.Z.getChannel(e.parent_id);
      return null != n && t.includes(n.id) ? ["parent", (0, d.p1)((0, d.gs)(o.ZP.resolveUnreadSetting(n), o.ZP.resolvedMessageNotifications(n)))] : ["guild", (0, d.p1)((0, d.gs)(o.ZP.getGuildUnreadSetting(e.guild_id), o.ZP.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, t]);
  return {
    inherited: !t.includes(e.id),
    inheritedFrom: n,
    inheritedPreset: a
  }
}

function b(e, t, n) {
  let i = o.ZP.getChannelIdFlags(e, t);
  n === d.s8.ALL_MESSAGES ? a.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: _.bL.ALL_MESSAGES,
    flags: (0, l.pq)(i, u.ic.UNREADS_ALL_MESSAGES)
  }, c.ZB.PresetAll) : n === d.s8.MENTIONS ? a.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: _.bL.ONLY_MENTIONS,
    flags: (0, l.pq)(i, u.ic.UNREADS_ONLY_MENTIONS)
  }, c.ZB.PresetMentions) : n === d.s8.NOTHING && a.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: _.bL.NO_MESSAGES,
    flags: (0, l.pq)(i, u.ic.UNREADS_ONLY_MENTIONS)
  }, c.ZB.PresetNothing)
}

function f(e, t) {
  a.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: _.bL.NULL,
    flags: (0, l.YF)(o.ZP.getChannelIdFlags(e, t))
  }, c.ZB.PresetDefault)
}

function p(e, t, n) {
  let i = o.ZP.getChannelIdFlags(e, t);
  a.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, l.pq)(i, n === g.i.ALL_MESSAGES ? u.ic.UNREADS_ALL_MESSAGES : u.ic.UNREADS_ONLY_MENTIONS)
  }, c.UE.unreads(n))
}

function N(e, t, n) {
  a.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: n
  }, c.UE.notifications(n))
}