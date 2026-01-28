/** Chunk was on web.js **/
/** chunk id: 394953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EJ: () => E,
  U4: () => v,
  i3: () => A,
  i7: () => y,
  lI: () => b,
  tZ: () => O,
  zo: () => I
});
var Chunk892227 = require("./892227.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk187508 = require("./187508.js"),
  Chunk966597 = require("./966597.js"),
  Chunk85109 = require("./85109.js"),
  Chunk226017 = require("./226017.js"),
  Chunk780964 = require("./780964.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js");
require("./320501.js");
var Chunk222823 = require("./222823.js");
require("./287809.js"), require("./927813.js");
var Chunk661191 = require("./661191.js"),
  Chunk320697 = require("./320697.js"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  let {
    messageId: t,
    channelId: n,
    guildId: r,
    ReadStateStore_: i = p.Ay,
    GuildStore_: a = f.A
  } = e;
  if (!i.hasUnread(n)) returnfalse;
  let o = a.getGuild(r);
  if (null == o || null == o.joinedAt) returnfalse;
  let s = i.ackMessageId(n);
  if (null == s) {
    let e = a.getGuild(r);
    null != e && null != e.joinedAt && (s = _.default.fromTimestamp(e.joinedAt.getTime()))
  }
  return _.default.compare(t, s) > 0
}

function y(e) {
  let {
    id: t
  } = e, n = (0, r.default)(new Date, _.default.extractTimestamp(t));
  return 0 === n ? m.Ur.TODAY : 1 === n ? m.Ur.YESTERDAY : m.Ur.OLDER
}

function b() {
  let {
    pathname: e
  } = (0, i.zy)();
  return e.startsWith(g.BVt.CHANNEL(g.gNP))
}

function O(e) {
  {
    let {
      openUserSettings: t
    } = n(840065);
    t(u.X.NOTIFICATIONS_PANEL, {
      section: g.nc_.NOTIFICATIONS,
      analyticsLocations: e
    })
  }
}

function v() {
  let e = (0, a.yK)([h.A], () => {
      var e;
      return null != (e = h.A.getNotifyingChannelIds()) ? e : []
    }),
    t = (0, a.yK)([p.Ay], () => e.filter(e => p.Ay.hasUnread(e)), [e]),
    n = (0, a.yK)([o.Ay], () => {
      var e;
      return null != (e = o.Ay.getSettingsFilteredMentions()) ? e : []
    });
  return {
    unreadRecentMentionsCount: (0, a.bG)([p.Ay, d.A, f.A], () => {
      var e, t;
      return null != (e = null == n || null == (t = n.filter(e => {
        let t = d.A.getBasicChannel(e.channel_id);
        return null != t && E({
          messageId: e.id,
          channelId: e.channel_id,
          guildId: t.guild_id,
          ReadStateStore_: p.Ay,
          GuildStore_: f.A
        })
      })) ? true : t.length) ? e : 0
    }, [n]),
    unreadChannelIds: t
  }
}

function A() {
  let {
    enabled: e,
    inInbox: t
  } = s.A.useExperiment({
    location: "NotificationsInboxUtils"
  }), n = (0, a.bG)([l.A], () => l.A.getSavedMessageCount());
  return e && t && (n > 0 || (0, c.A)())
}

function I(e, t) {
  return null != t && e.channelId === t.channelId && _.default.compare(e.id, t.messageId) >= 0
}