/** Chunk was on web.js **/
/** chunk id: 221259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IG: () => E,
  JK: () => g,
  ZA: () => p,
  _m: () => m,
  ft: () => b,
  yN: () => h
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

function p(e) {
  let t = (0, r.e7)([a.ZP], () => a.ZP.resolveUnreadSetting(e)),
    n = (0, r.e7)([a.ZP], () => a.ZP.resolvedMessageNotifications(e));
  return {
    unread: t,
    notification: n,
    preset: (0, u.gs)(t, n)
  }
}

function h(e) {
  let t = (0, r.Wu)([a.ZP], () => (0, l.OD)(a.ZP.getChannelOverrides(e.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [n, i] = (0, r.Wu)([a.ZP, o.Z], () => {
      let n = o.Z.getChannel(e.parent_id);
      return null != n && t.includes(n.id) ? ["parent", (0, u.p1)((0, u.gs)(a.ZP.resolveUnreadSetting(n), a.ZP.resolvedMessageNotifications(n)))] : ["guild", (0, u.p1)((0, u.gs)(a.ZP.getGuildUnreadSetting(e.guild_id), a.ZP.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, t]);
  return {
    inherited: !t.includes(e.id),
    inheritedFrom: n,
    inheritedPreset: i
  }
}

function m(e, t, n) {
  let r = a.ZP.getChannelIdFlags(e, t);
  n === u.s8.ALL_MESSAGES ? i.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: d.bL.ALL_MESSAGES,
    flags: (0, c.pq)(r, _.ic.UNREADS_ALL_MESSAGES)
  }, s.ZB.PresetAll) : n === u.s8.MENTIONS ? i.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: d.bL.ONLY_MENTIONS,
    flags: (0, c.pq)(r, _.ic.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetMentions) : n === u.s8.NOTHING && i.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: d.bL.NO_MESSAGES,
    flags: (0, c.pq)(r, _.ic.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetNothing)
}

function g(e, t) {
  i.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: d.bL.NULL,
    flags: (0, c.YF)(a.ZP.getChannelIdFlags(e, t))
  }, s.ZB.PresetDefault)
}

function E(e, t, n) {
  let r = a.ZP.getChannelIdFlags(e, t);
  i.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, c.pq)(r, n === f.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS)
  }, s.UE.unreads(n))
}

function b(e, t, n) {
  i.Z.updateChannelOverrideSettings(e, t, {
    message_notifications: n
  }, s.UE.notifications(n))
}