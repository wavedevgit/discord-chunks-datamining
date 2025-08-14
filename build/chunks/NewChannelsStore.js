/** Chunk was on 62117 **/
/** chunk id: 22082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var i, s, Chunk442837 = require("./442837.js"),
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
  E = {},
  w = {};

function _(e, t) {
  let n = E[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !f.ZP.isOptInEnabled(e) || (null == (i = u.Z.getChannel(t)) ? true : i.isThread()) || null != p.ZP.ackMessageId(t) || r.Z.wait(() => (0, a.In)(t, {
      object: S.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: S.Qqv.ACK_AUTOMATIC
    }, true, true, I.default.atPreviousMillisecond(t)))
  }
}

function m(e) {
  var t;
  if (null != E[e]) return;
  let n = c.ZP.getChannels(e)[c.sH].map(e => e.channel.id),
    i = null == (t = g.ZP.getMember(e, h.default.getId())) ? true : t.joinedAt;
  if (null == i) return;
  E[e] = new Set;
  let s = new Date(i).getTime();
  0 !== n.length && (E[e] = new Set(n.filter(t => {
    let n = I.default.extractTimestamp(t);
    return null == p.ZP.getTrackedAckMessageId(t) && n > Date.now() - v.Z.Millis.WEEK && n > o.Z.getGuildRecentsDismissedAt(e) && n > s && !f.ZP.isChannelOrParentOptedIn(e, t)
  })), w[e] = Date.now())
}

function b() {
  Chunk709054.default.keys(E).forEach(e => {
    let t = E[e];
    E[e] = new Set([...t].filter(t => !f.ZP.isChannelOrParentOptedIn(e, t)))
  })
}
class N extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk984933.ZP, Chunk314897.default, Chunk271383.ZP, Chunk9156.ZP, Chunk306680.ZP, Chunk581883.Z), this.syncWith([Chunk9156.ZP], b)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == E[e] && m(e), null != e && null != (t = E[e]) ? t : y
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let i = C.Z.getGuild(e);
    return null != i && !!i.features.has(S.oNc.COMMUNITY) && (null != e && null == E[e] && m(e), (null == (n = E[e]) ? true : n.has(t)) && null == p.ZP.getTrackedAckMessageId(t))
  }
}(s = "displayName") in N ? Object.defineProperty(N, s, {
  value: "NewChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : N[s] = "NewChannelsStore";
let O = new N(Chunk570140.Z, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == E[t]) returnfalse;
    n.forEach(e => E[t].delete(e)), 0 === E[t].size && delete E[t]
  },
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == E[t] || w[t] < Date.now() - v.Z.Millis.HOUR ? (m(t), true) : (null != n && _(t, n), false))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === d.tI.VIEW_CHANNEL && (_(t, n), false)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (_(t, n), false)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete E[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (E[n.guild_id] = null != (t = E[n.guild_id]) ? t : new Set, E[n.guild_id].add(n.id))
  }
})