/** Chunk was on web.js **/
/** chunk id: 370774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => O,
  O4: () => S,
  Tj: () => T,
  YH: () => b,
  bl: () => y,
  j4: () => v,
  ux: () => I
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
    ReadStateStore_: i = _.ZP,
    GuildStore_: a = p.Z
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
  } = (0, i.TH)();
  return e.startsWith(E.Z5c.CHANNEL(E.STv))
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

function S() {
  let e = (0, a.Wu)([m.Z], () => {
      var e;
      return null != (e = m.Z.getNotifyingChannelIds()) ? e : []
    }),
    t = (0, a.Wu)([_.ZP], () => e.filter(e => _.ZP.hasUnread(e)), [e]),
    n = (0, a.Wu)([o.ZP], () => {
      var e;
      return null != (e = o.ZP.getSettingsFilteredMentions()) ? e : []
    });
  return {
    unreadRecentMentionsCount: (0, a.e7)([_.ZP, f.Z, p.Z], () => {
      var e, t;
      return null != (t = null == n || null == (e = n.filter(e => {
        let t = f.Z.getBasicChannel(e.channel_id);
        return null != t && b({
          messageId: e.id,
          channelId: e.channel_id,
          guildId: t.guild_id,
          ReadStateStore_: _.ZP,
          GuildStore_: p.Z
        })
      })) ? true : e.length) ? t : 0
    }, [n]),
    unreadChannelIds: t
  }
}

function I() {
  let {
    enabled: e,
    inInbox: t
  } = s.Z.useExperiment({
    location: "NotificationsInboxUtils"
  }), n = (0, a.e7)([l.Z], () => l.Z.getSavedMessageCount());
  return e && t && (n > 0 || (0, c.Z)())
}

function T(e, t) {
  return null != t && e.channelId === t.channelId && h.default.compare(e.id, t.messageId) >= 0
}