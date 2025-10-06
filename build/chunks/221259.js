/** Chunk was on 62113 **/
/** chunk id: 221259, original params: e,n,t (module,exports,require) **/
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
  let n = (0, i.e7)([_.ZP], () => _.ZP.resolveUnreadSetting(e)),
    t = (0, i.e7)([_.ZP], () => _.ZP.resolvedMessageNotifications(e));
  return {
    unread: n,
    notification: t,
    preset: (0, c.gs)(n, t)
  }
}

function S(e) {
  let n = (0, i.Wu)([_.ZP], () => (0, o.OD)(_.ZP.getChannelOverrides(e.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [t, a] = (0, i.Wu)([_.ZP, s.Z], () => {
      let t = s.Z.getChannel(e.parent_id);
      return null != t && n.includes(t.id) ? ["parent", (0, c.p1)((0, c.gs)(_.ZP.resolveUnreadSetting(t), _.ZP.resolvedMessageNotifications(t)))] : ["guild", (0, c.p1)((0, c.gs)(_.ZP.getGuildUnreadSetting(e.guild_id), _.ZP.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, n]);
  return {
    inherited: !n.includes(e.id),
    inheritedFrom: t,
    inheritedPreset: a
  }
}

function b(e, n, t) {
  let i = _.ZP.getChannelIdFlags(e, n);
  t === c.s8.ALL_MESSAGES ? a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.ALL_MESSAGES,
    flags: (0, d.pq)(i, h.ic.UNREADS_ALL_MESSAGES)
  }, r.ZB.PresetAll) : t === c.s8.MENTIONS ? a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.ONLY_MENTIONS,
    flags: (0, d.pq)(i, h.ic.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetMentions) : t === c.s8.NOTHING && a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.NO_MESSAGES,
    flags: (0, d.pq)(i, h.ic.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetNothing)
}

function N(e, n) {
  a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: l.bL.NULL,
    flags: (0, d.YF)(_.ZP.getChannelIdFlags(e, n))
  }, r.ZB.PresetDefault)
}

function p(e, n, t) {
  let i = _.ZP.getChannelIdFlags(e, n);
  a.Z.updateChannelOverrideSettings(e, n, {
    flags: (0, d.pq)(i, t === g.i.ALL_MESSAGES ? h.ic.UNREADS_ALL_MESSAGES : h.ic.UNREADS_ONLY_MENTIONS)
  }, r.UE.unreads(t))
}

function E(e, n, t) {
  a.Z.updateChannelOverrideSettings(e, n, {
    message_notifications: t
  }, r.UE.notifications(t))
}