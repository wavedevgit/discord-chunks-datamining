/** Chunk was on 4192 **/
/** chunk id: 22082, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var l, i, r, Chunk442837 = require("./442837.js"),
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
let v = new Set,
  Z = {},
  w = {};

function P(e, n) {
  let t = Z[e];
  if (null != t && null != n && t.has(n)) {
    var l;
    !_.ZP.isOptInEnabled(e) || (null == (l = g.Z.getChannel(n)) ? true : l.isThread()) || null != E.ZP.ackMessageId(n) || u.Z.wait(() => (0, s.In)(n, {
      object: b.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: b.Qqv.ACK_AUTOMATIC
    }, true, true, S.default.atPreviousMillisecond(n)))
  }
}

function O(e) {
  var n;
  if (null != Z[e]) return;
  let t = f.ZP.getChannels(e)[f.sH].map(e => e.channel.id),
    l = null == (n = h.ZP.getMember(e, c.default.getId())) ? true : n.joinedAt;
  if (null == l) return;
  Z[e] = new Set;
  let i = new Date(l).getTime();
  0 !== t.length && (Z[e] = new Set(t.filter(n => {
    let t = S.default.extractTimestamp(n);
    return null == E.ZP.getTrackedAckMessageId(n) && t > Date.now() - p.Z.Millis.WEEK && t > d.Z.getGuildRecentsDismissedAt(e) && t > i && !_.ZP.isChannelOrParentOptedIn(e, n)
  })), w[e] = Date.now())
}

function I() {
  Chunk709054.default.keys(Z).forEach(e => {
    let n = Z[e];
    Z[e] = new Set([...n].filter(n => !_.ZP.isChannelOrParentOptedIn(e, n)))
  })
}
class N extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk984933.ZP, Chunk314897.default, Chunk271383.ZP, Chunk9156.ZP, Chunk306680.ZP, Chunk581883.Z), this.syncWith([Chunk9156.ZP], I)
  }
  getNewChannelIds(e) {
    var n;
    return null != e && null == Z[e] && O(e), null != e && null != (n = Z[e]) ? n : v
  }
  shouldIndicateNewChannel(e, n) {
    var t;
    if (null == e) returnfalse;
    let l = C.Z.getGuild(e);
    return null != l && !!l.features.has(b.oNc.COMMUNITY) && (null != e && null == Z[e] && O(e), (null == (t = Z[e]) ? true : t.has(n)) && null == E.ZP.getTrackedAckMessageId(n))
  }
}
r = "NewChannelsStore", (i = "displayName") in N ? Object.defineProperty(N, i, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : N[i] = r;
let y = new N(Chunk570140.Z, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: n,
      channelIds: t
    } = e;
    if (null == Z[n]) returnfalse;
    t.forEach(e => Z[n].delete(e)), 0 === Z[n].size && delete Z[n]
  },
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: n,
      channelId: t
    } = e;
    return null != n && (null == Z[n] || w[n] < Date.now() - p.Z.Millis.HOUR ? (O(n), true) : (null != t && P(n, t), false))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: n,
      channelId: t,
      sidebarType: l
    } = e;
    return null != n && l === o.tI.VIEW_CHANNEL && (P(n, t), false)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: n,
      baseChannelId: t
    } = e;
    return null != n && (P(n, t), false)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: n
    } = e;
    delete Z[n.id]
  },
  CHANNEL_CREATE: function(e) {
    var n;
    let {
      channel: t
    } = e;
    t.isVocal() || (Z[t.guild_id] = null != (n = Z[t.guild_id]) ? n : new Set, Z[t.guild_id].add(t.id))
  }
})