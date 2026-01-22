/** Chunk was on web.js **/
/** chunk id: 394953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EJ: () => b,
  U4: () => v,
  i3: () => S,
  i7: () => y,
  lI: () => O,
  tZ: () => A,
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
  Chunk358776 = require("./358776.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js");
require("./320501.js");
var Chunk222823 = require("./222823.js");
require("./287809.js"), require("./927813.js");
var Chunk661191 = require("./661191.js"),
  Chunk320697 = require("./320697.js"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js");

function b(e) {
  let {
    messageId: t,
    channelId: n,
    guildId: r,
    ReadStateStore_: i = _.Ay,
    GuildStore_: a = p.A
  } = e;
  if (!i.hasUnread(n)) returnfalse;
  let s = a.getGuild(r);
  if (null == s || null == s.joinedAt) returnfalse;
  let o = i.ackMessageId(n);
  if (null == o) {
    let e = a.getGuild(r);
    null != e && null != e.joinedAt && (o = h.default.fromTimestamp(e.joinedAt.getTime()))
  }
  return h.default.compare(t, o) > 0
}

function y(e) {
  let {
    id: t
  } = e, n = (0, r.default)(new Date, h.default.extractTimestamp(t));
  return 0 === n ? g.Ur.TODAY : 1 === n ? g.Ur.YESTERDAY : g.Ur.OLDER
}

function O() {
  let {
    pathname: e
  } = (0, i.zy)();
  return e.startsWith(E.BVt.CHANNEL(E.gNP))
}

function A(e) {
  {
    let {
      openUserSettings: t
    } = n(840065);
    t((0, d.E7)("openNotificationSettings") ? u.X.NOTIFICATIONS_PANEL : u.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
      section: E.nc_.NOTIFICATIONS,
      analyticsLocations: e
    })
  }
}

function v() {
  let e = (0, a.yK)([m.A], () => {
      var e;
      return null != (e = m.A.getNotifyingChannelIds()) ? e : []
    }),
    t = (0, a.yK)([_.Ay], () => e.filter(e => _.Ay.hasUnread(e)), [e]),
    n = (0, a.yK)([s.Ay], () => {
      var e;
      return null != (e = s.Ay.getSettingsFilteredMentions()) ? e : []
    });
  return {
    unreadRecentMentionsCount: (0, a.bG)([_.Ay, f.A, p.A], () => {
      var e, t;
      return null != (e = null == n || null == (t = n.filter(e => {
        let t = f.A.getBasicChannel(e.channel_id);
        return null != t && b({
          messageId: e.id,
          channelId: e.channel_id,
          guildId: t.guild_id,
          ReadStateStore_: _.Ay,
          GuildStore_: p.A
        })
      })) ? true : t.length) ? e : 0
    }, [n]),
    unreadChannelIds: t
  }
}

function S() {
  let {
    enabled: e,
    inInbox: t
  } = o.A.useExperiment({
    location: "NotificationsInboxUtils"
  }), n = (0, a.bG)([l.A], () => l.A.getSavedMessageCount());
  return e && t && (n > 0 || (0, c.A)())
}

function I(e, t) {
  return null != t && e.channelId === t.channelId && h.default.compare(e.id, t.messageId) >= 0
}