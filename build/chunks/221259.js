/** Chunk was on 24358 **/
/** chunk id: 221259, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  IG: () => f,
  JK: () => E,
  ZA: () => S,
  _m: () => N,
  ft: () => h,
  yN: () => L
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

function S(t) {
  let i = (0, n.e7)([a.ZP], () => a.ZP.resolveUnreadSetting(t)),
    e = (0, n.e7)([a.ZP], () => a.ZP.resolvedMessageNotifications(t));
  return {
    unread: i,
    notification: e,
    preset: (0, c.gs)(i, e)
  }
}

function L(t) {
  let i = (0, n.Wu)([a.ZP], () => (0, d.OD)(a.ZP.getChannelOverrides(t.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [e, l] = (0, n.Wu)([a.ZP, s.Z], () => {
      let e = s.Z.getChannel(t.parent_id);
      return null != e && i.includes(e.id) ? ["parent", (0, c.p1)((0, c.gs)(a.ZP.resolveUnreadSetting(e), a.ZP.resolvedMessageNotifications(e)))] : ["guild", (0, c.p1)((0, c.gs)(a.ZP.getGuildUnreadSetting(t.guild_id), a.ZP.getMessageNotifications(t.guild_id)))]
    }, [t.guild_id, t.parent_id, i]);
  return {
    inherited: !i.includes(t.id),
    inheritedFrom: e,
    inheritedPreset: l
  }
}

function N(t, i, e) {
  let n = a.ZP.getChannelIdFlags(t, i);
  e === c.s8.ALL_MESSAGES ? l.Z.updateChannelOverrideSettings(t, i, {
    message_notifications: u.bL.ALL_MESSAGES,
    flags: (0, o.pq)(n, _.ic.UNREADS_ALL_MESSAGES)
  }, r.ZB.PresetAll) : e === c.s8.MENTIONS ? l.Z.updateChannelOverrideSettings(t, i, {
    message_notifications: u.bL.ONLY_MENTIONS,
    flags: (0, o.pq)(n, _.ic.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetMentions) : e === c.s8.NOTHING && l.Z.updateChannelOverrideSettings(t, i, {
    message_notifications: u.bL.NO_MESSAGES,
    flags: (0, o.pq)(n, _.ic.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetNothing)
}

function E(t, i) {
  l.Z.updateChannelOverrideSettings(t, i, {
    message_notifications: u.bL.NULL,
    flags: (0, o.YF)(a.ZP.getChannelIdFlags(t, i))
  }, r.ZB.PresetDefault)
}

function f(t, i, e) {
  let n = a.ZP.getChannelIdFlags(t, i);
  l.Z.updateChannelOverrideSettings(t, i, {
    flags: (0, o.pq)(n, e === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS)
  }, r.UE.unreads(e))
}

function h(t, i, e) {
  l.Z.updateChannelOverrideSettings(t, i, {
    message_notifications: e
  }, r.UE.notifications(e))
}