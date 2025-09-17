/** Chunk was on 68294 **/
/** chunk id: 221259, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  IG: () => N,
  JK: () => h,
  ZA: () => f,
  _m: () => E,
  ft: () => b,
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

function f(t) {
  let e = (0, i.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(t)),
    n = (0, i.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(t));
  return {
    unread: e,
    notification: n,
    preset: (0, c.gs)(e, n)
  }
}

function S(t) {
  let e = (0, i.Wu)([s.ZP], () => (0, o.OD)(s.ZP.getChannelOverrides(t.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [n, l] = (0, i.Wu)([s.ZP, a.Z], () => {
      let n = a.Z.getChannel(t.parent_id);
      return null != n && e.includes(n.id) ? ["parent", (0, c.p1)((0, c.gs)(s.ZP.resolveUnreadSetting(n), s.ZP.resolvedMessageNotifications(n)))] : ["guild", (0, c.p1)((0, c.gs)(s.ZP.getGuildUnreadSetting(t.guild_id), s.ZP.getMessageNotifications(t.guild_id)))]
    }, [t.guild_id, t.parent_id, e]);
  return {
    inherited: !e.includes(t.id),
    inheritedFrom: n,
    inheritedPreset: l
  }
}

function E(t, e, n) {
  let i = s.ZP.getChannelIdFlags(t, e);
  n === c.s8.ALL_MESSAGES ? l.Z.updateChannelOverrideSettings(t, e, {
    message_notifications: u.bL.ALL_MESSAGES,
    flags: (0, d.pq)(i, _.ic.UNREADS_ALL_MESSAGES)
  }, r.ZB.PresetAll) : n === c.s8.MENTIONS ? l.Z.updateChannelOverrideSettings(t, e, {
    message_notifications: u.bL.ONLY_MENTIONS,
    flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetMentions) : n === c.s8.NOTHING && l.Z.updateChannelOverrideSettings(t, e, {
    message_notifications: u.bL.NO_MESSAGES,
    flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetNothing)
}

function h(t, e) {
  l.Z.updateChannelOverrideSettings(t, e, {
    message_notifications: u.bL.NULL,
    flags: (0, d.YF)(s.ZP.getChannelIdFlags(t, e))
  }, r.ZB.PresetDefault)
}

function N(t, e, n) {
  let i = s.ZP.getChannelIdFlags(t, e);
  l.Z.updateChannelOverrideSettings(t, e, {
    flags: (0, d.pq)(i, n === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS)
  }, r.UE.unreads(n))
}

function b(t, e, n) {
  l.Z.updateChannelOverrideSettings(t, e, {
    message_notifications: n
  }, r.UE.notifications(n))
}