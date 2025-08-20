/** Chunk was on web.js **/
/** chunk id: 370774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => I,
  ES: () => N,
  O4: () => S,
  Tj: () => C,
  YH: () => O,
  bl: () => v,
  j4: () => T,
  ux: () => A
});
var Chunk995638 = require("./995638.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk230711 = require("./230711.js"),
  Chunk81643 = require("./81643.js"),
  Chunk974814 = require("./974814.js"),
  Chunk622822 = require("./622822.js"),
  Chunk455199 = require("./455199.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk175006 = require("./175006.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js");
require("./375954.js");
var Chunk306680 = require("./306680.js");
require("./594174.js"), require("./70956.js");
var Chunk709054 = require("./709054.js"),
  Chunk787879 = require("./787879.js"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js");

function O(e) {
  let {
    messageId: t,
    channelId: n,
    guildId: r,
    ReadStateStore_: i = m.ZP,
    GuildStore_: a = h.Z
  } = e;
  if (!i.hasUnread(n)) returnfalse;
  let o = a.getGuild(r);
  if (null == o || null == o.joinedAt) returnfalse;
  let s = i.ackMessageId(n);
  if (null == s) {
    let e = a.getGuild(r);
    null != e && null != e.joinedAt && (s = g.default.fromTimestamp(e.joinedAt.getTime()))
  }
  return g.default.compare(t, s) > 0
}

function v(e) {
  let {
    id: t
  } = e, n = (0, r.default)(new Date, g.default.extractTimestamp(t));
  return 0 === n ? b.KZ.TODAY : 1 === n ? b.KZ.YESTERDAY : b.KZ.OLDER
}

function I() {
  let {
    pathname: e
  } = (0, Chunk843611.TH)();
  return module.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.STv))
}

function T(e) {
  o.Z.open(y.oAB.NOTIFICATIONS, true, {
    analyticsLocations: e
  })
}

function S() {
  let e = (0, Chunk442837.Wu)([Chunk787879.Z], () => {
      var e;
      return null != (e = Chunk787879.Z.getNotifyingChannelIds()) ? module : []
    }),
    t = (0, Chunk442837.Wu)([Chunk306680.ZP], () => module.filter(e => m.ZP.hasUnread(e)), [module]),
    n = (0, Chunk442837.Wu)([Chunk455199.ZP], () => {
      var e;
      return null != (e = Chunk455199.ZP.getSettingsFilteredMentions()) ? module : []
    });
  return {
    unreadRecentMentionsCount: (0, Chunk442837.e7)([Chunk306680.ZP, Chunk592125.Z, Chunk430824.Z], () => {
      var e, t;
      return null != (t = null == require || null == (e = require.filter(e => {
        let t = p.Z.getBasicChannel(e.channel_id);
        return null != t && O({
          messageId: e.id,
          channelId: e.channel_id,
          guildId: t.guild_id,
          ReadStateStore_: m.ZP,
          GuildStore_: h.Z
        })
      })) ? true : module.length) ? exports : 0
    }, [require]),
    unreadChannelIds: exports
  }
}

function A() {
  let {
    enabled: e,
    inInbox: t
  } = Chunk2818.Z.useExperiment({
    location: "NotificationsInboxUtils"
  }), n = (0, Chunk442837.e7)([Chunk768943.Z], () => Chunk768943.Z.getSavedMessageCount());
  return module && exports && (require > 0 || (0, Chunk175006.Z)())
}

function C(e, t) {
  return null != t && e.channelId === t.channelId && g.default.compare(e.id, t.messageId) >= 0
}

function N(e) {
  if ((0, l.H1)({
      location: "NotificationsInboxStore"
    }) && (0, s.sf)()) {
    let t = "nsfw" in e ? e : p.Z.getChannel(e.id);
    return null != t && (0, c.aC)(t)
  }
  returnfalse
}