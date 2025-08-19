/** Chunk was on 4756 **/
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
let y = new Set,
  O = {},
  S = {};

function E(e, t) {
  let n = O[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !v.ZP.isOptInEnabled(e) || (null == (i = d.Z.getChannel(t)) ? true : i.isThread()) || null != f.ZP.ackMessageId(t) || l.Z.wait(() => (0, o.In)(t, {
      object: b.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: b.Qqv.ACK_AUTOMATIC
    }, true, true, C.default.atPreviousMillisecond(t)))
  }
}

function _(e) {
  var t;
  if (null != O[e]) return;
  let n = h.ZP.getChannels(e)[h.sH].map(e => e.channel.id),
    i = null == (t = p.ZP.getMember(e, c.default.getId())) ? true : t.joinedAt;
  if (null == i) return;
  O[e] = new Set;
  let r = new Date(i).getTime();
  0 !== n.length && (O[e] = new Set(n.filter(t => {
    let n = C.default.extractTimestamp(t);
    return null == f.ZP.getTrackedAckMessageId(t) && n > Date.now() - m.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > r && !v.ZP.isChannelOrParentOptedIn(e, t)
  })), S[e] = Date.now())
}

function I() {
  Chunk709054.default.keys(O).forEach(e => {
    let t = O[e];
    O[e] = new Set([...t].filter(t => !v.ZP.isChannelOrParentOptedIn(e, t)))
  })
}
class w extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk984933.ZP, Chunk314897.default, Chunk271383.ZP, Chunk9156.ZP, Chunk306680.ZP, Chunk581883.Z), this.syncWith([Chunk9156.ZP], I)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == O[e] && _(e), null != e && null != (t = O[e]) ? t : y
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let i = g.Z.getGuild(e);
    return null != i && !!i.features.has(b.oNc.COMMUNITY) && (null != e && null == O[e] && _(e), (null == (n = O[e]) ? true : n.has(t)) && null == f.ZP.getTrackedAckMessageId(t))
  }
}(r = "displayName") in w ? Object.defineProperty(w, r, {
  value: "NewChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : w[r] = "NewChannelsStore";
let j = new w(Chunk570140.Z, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == O[t]) returnfalse;
    n.forEach(e => O[t].delete(e)), 0 === O[t].size && delete O[t]
  },
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == O[t] || S[t] < Date.now() - m.Z.Millis.HOUR ? (_(t), true) : (null != n && E(t, n), false))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === a.tI.VIEW_CHANNEL && (E(t, n), false)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (E(t, n), false)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete O[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (O[n.guild_id] = null != (t = O[n.guild_id]) ? t : new Set, O[n.guild_id].add(n.id))
  }
})