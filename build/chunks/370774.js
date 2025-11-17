/** Chunk was on web.js **/
/** chunk id: 370774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => O,
  O4: () => I,
  Tj: () => S,
  YH: () => b,
  bl: () => y,
  j4: () => v,
  ux: () => T
});
var Chunk995638 = require("./995638.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk455199 = require("./455199.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk175006 = require("./175006.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js");
require("./375954.js");
var Chunk306680 = require("./306680.js");
require("./594174.js"), require("./70956.js");
var Chunk709054 = require("./709054.js"),
  Chunk787879 = require("./787879.js"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js");

function b(e) {
  let {
    messageId: t,
    channelId: n,
    guildId: r,
    ReadStateStore_: i = p.ZP,
    GuildStore_: a = _.Z
  } = e;
  if (!i.hasUnread(n)) returnfalse;
  let o = a.getGuild(r);
  if (null == o || null == o.joinedAt) returnfalse;
  let s = i.ackMessageId(n);
  if (null == s) {
    let e = a.getGuild(r);
    null != e && null != e.joinedAt && (s = h.default.fromTimestamp(e.joinedAt.getTime()))
  }
  return h.default.compare(t, s) > 0
}

function y(e) {
  let {
    id: t
  } = e, n = (0, r.default)(new Date, h.default.extractTimestamp(t));
  return 0 === n ? g.KZ.TODAY : 1 === n ? g.KZ.YESTERDAY : g.KZ.OLDER
}

function O() {
  let {
    pathname: e
  } = (0, Chunk828700.TH)();
  return module.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.STv))
}

function v(e) {
  {
    let {
      openUserSettings: t
    } = n(518596);
    t((0, d.KV)("openNotificationSettings") ? u.n.NOTIFICATIONS_PANEL : u.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
      section: E.oAB.NOTIFICATIONS,
      analyticsLocations: e
    })
  }
}

function I() {
  let e = (0, Chunk442837.Wu)([Chunk787879.Z], () => {
      var e;
      return null != (e = Chunk787879.Z.getNotifyingChannelIds()) ? module : []
    }),
    t = (0, Chunk442837.Wu)([Chunk306680.ZP], () => module.filter(e => p.ZP.hasUnread(e)), [module]),
    n = (0, Chunk442837.Wu)([Chunk455199.ZP], () => {
      var e;
      return null != (e = Chunk455199.ZP.getSettingsFilteredMentions()) ? module : []
    });
  return {
    unreadRecentMentionsCount: (0, Chunk442837.e7)([Chunk306680.ZP, Chunk592125.Z, Chunk430824.Z], () => {
      var e, t;
      return null != (t = null == require || null == (e = require.filter(e => {
        let t = f.Z.getBasicChannel(e.channel_id);
        return null != t && b({
          messageId: e.id,
          channelId: e.channel_id,
          guildId: t.guild_id,
          ReadStateStore_: p.ZP,
          GuildStore_: _.Z
        })
      })) ? true : module.length) ? exports : 0
    }, [require]),
    unreadChannelIds: exports
  }
}

function T() {
  let {
    enabled: e,
    inInbox: t
  } = Chunk2818.Z.useExperiment({
    location: "NotificationsInboxUtils"
  }), n = (0, Chunk442837.e7)([Chunk768943.Z], () => Chunk768943.Z.getSavedMessageCount());
  return module && exports && (require > 0 || (0, Chunk175006.Z)())
}

function S(e, t) {
  return null != t && e.channelId === t.channelId && h.default.compare(e.id, t.messageId) >= 0
}