/** Chunk was on 31930 **/
/** chunk id: 22082, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk897473 = require("./897473.js"),
  Chunk581883 = require("./581883.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");
let _ = new Set,
  y = {},
  O = {};

function S(e, t) {
  let n = y[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !m.ZP.isOptInEnabled(e) || (null == (i = d.Z.getChannel(t)) ? true : i.isThread()) || null != f.ZP.ackMessageId(t) || l.Z.wait(() => (0, o.In)(t, {
      object: C.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: C.Qqv.ACK_AUTOMATIC
    }, true, true, v.default.atPreviousMillisecond(t)))
  }
}

function E(e) {
  var t;
  if (null != y[e]) return;
  let n = h.ZP.getChannels(e)[h.sH].map(e => e.channel.id),
    i = null == (t = p.ZP.getMember(e, u.default.getId())) ? true : t.joinedAt;
  if (null == i) return;
  y[e] = new Set;
  let r = new Date(i).getTime();
  0 !== n.length && (y[e] = new Set(n.filter(t => {
    let n = v.default.extractTimestamp(t);
    return null == f.ZP.getTrackedAckMessageId(t) && n > Date.now() - b.Z.Millis.WEEK && n > c.Z.getGuildRecentsDismissedAt(e) && n > r && !m.ZP.isChannelOrParentOptedIn(e, t)
  })), O[e] = Date.now())
}

function w() {
  Chunk709054.default.keys(y).forEach(e => {
    let t = y[e];
    y[e] = new Set([...t].filter(t => !m.ZP.isChannelOrParentOptedIn(e, t)))
  })
}
class I extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk984933.ZP, Chunk314897.default, Chunk271383.ZP, Chunk9156.ZP, Chunk306680.ZP, Chunk581883.Z), this.syncWith([Chunk9156.ZP], w)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == y[e] && E(e), null != e && null != (t = y[e]) ? t : _
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let i = g.Z.getGuild(e);
    return null != i && !!i.features.has(C.oNc.COMMUNITY) && (null != e && null == y[e] && E(e), (null == (n = y[e]) ? true : n.has(t)) && null == f.ZP.getTrackedAckMessageId(t))
  }
}(r = "displayName") in I ? Object.defineProperty(I, r, {
  value: "NewChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : I[r] = "NewChannelsStore";
let j = new I(Chunk570140.Z, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == y[t]) returnfalse;
    n.forEach(e => y[t].delete(e)), 0 === y[t].size && delete y[t]
  },
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == y[t] || O[t] < Date.now() - b.Z.Millis.HOUR ? (E(t), true) : (null != n && S(t, n), false))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === a.tI.VIEW_CHANNEL && (S(t, n), false)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (S(t, n), false)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete y[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (y[n.guild_id] = null != (t = y[n.guild_id]) ? t : new Set, y[n.guild_id].add(n.id))
  }
})