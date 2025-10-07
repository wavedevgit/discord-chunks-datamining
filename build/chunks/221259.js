/** Chunk was on 62113 **/
/** chunk id: 221259, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  IG: () => p,
  JK: () => N,
  ZA: () => u,
  _m: () => b,
  ft: () => E,
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

function u(e) {
  let n = (0, t.e7)([r.ZP], () => r.ZP.resolveUnreadSetting(e)),
    i = (0, t.e7)([r.ZP], () => r.ZP.resolvedMessageNotifications(e));
  return {
    unread: n,
    notification: i,
    preset: (0, c.gs)(n, i)
  }
}

function S(e) {
  let n = (0, t.Wu)([r.ZP], () => (0, o.OD)(r.ZP.getChannelOverrides(e.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [i, a] = (0, t.Wu)([r.ZP, s.Z], () => {
      let i = s.Z.getChannel(e.parent_id);
      return null != i && n.includes(i.id) ? ["parent", (0, c.p1)((0, c.gs)(r.ZP.resolveUnreadSetting(i), r.ZP.resolvedMessageNotifications(i)))] : ["guild", (0, c.p1)((0, c.gs)(r.ZP.getGuildUnreadSetting(e.guild_id), r.ZP.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, n]);
  return {
    inherited: !n.includes(e.id),
    inheritedFrom: i,
    inheritedPreset: a
  }
}

function b(e, n, i) {
  let t = r.ZP.getChannelIdFlags(e, n);
  i === c.s8.ALL_MESSAGES ? a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.ALL_MESSAGES,
    flags: (0, d.pq)(t, h.ic.UNREADS_ALL_MESSAGES)
  }, _.ZB.PresetAll) : i === c.s8.MENTIONS ? a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.ONLY_MENTIONS,
    flags: (0, d.pq)(t, h.ic.UNREADS_ONLY_MENTIONS)
  }, _.ZB.PresetMentions) : i === c.s8.NOTHING && a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.NO_MESSAGES,
    flags: (0, d.pq)(t, h.ic.UNREADS_ONLY_MENTIONS)
  }, _.ZB.PresetNothing)
}

function N(e, n) {
  a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.NULL,
    flags: (0, d.YF)(r.ZP.getChannelIdFlags(e, n))
  }, _.ZB.PresetDefault)
}

function p(e, n, i) {
  let t = r.ZP.getChannelIdFlags(e, n);
  a.Z.updateChannelOverrideSettings(e, n, {
    flags: (0, d.pq)(t, i === g.i.ALL_MESSAGES ? h.ic.UNREADS_ALL_MESSAGES : h.ic.UNREADS_ONLY_MENTIONS)
  }, _.UE.unreads(i))
}

function E(e, n, i) {
  a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: i
  }, _.UE.notifications(i))
}