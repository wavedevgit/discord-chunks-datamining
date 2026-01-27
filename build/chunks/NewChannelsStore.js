/** Chunk was on 3911 **/
/** chunk id: 454058, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var i, s, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk940382 = require("./940382.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");
let S = new Set,
  m = {},
  A = {};

function E(e, t) {
  let n = m[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !C.Ay.isOptInEnabled(e) || (null == (i = c.A.getChannel(t)) ? true : i.isThread()) || null != f.Ay.ackMessageId(t) || l.h.wait(() => (0, o.ack)(t, {
      object: b.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, true, true, y.default.atPreviousMillisecond(t)))
  }
}

function I(e) {
  var t;
  if (null != m[e]) return;
  let n = h.Ay.getChannels(e)[h.I6].map(e => e.channel.id),
    i = null == (t = g.Ay.getMember(e, u.default.getId())) ? true : t.joinedAt;
  if (null == i) return;
  m[e] = new Set;
  let s = new Date(i).getTime();
  0 !== n.length && (m[e] = new Set(n.filter(t => {
    let n = y.default.extractTimestamp(t);
    return null == f.Ay.getTrackedAckMessageId(t) && n > Date.now() - v.A.Millis.WEEK && n > d.A.getGuildRecentsDismissedAt(e) && n > s && !C.Ay.isChannelOrParentOptedIn(e, t)
  })), A[e] = Date.now())
}

function O() {
  y.default.keys(m).forEach(e => {
    let t = m[e];
    m[e] = new Set([...t].filter(t => !C.Ay.isChannelOrParentOptedIn(e, t)))
  })
}
class _ extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.default, c.A, h.Ay, g.Ay, p.A, f.Ay, C.Ay, d.A), this.syncWith([C.Ay], O)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == m[e] && I(e), null != e && null != (t = m[e]) ? t : S
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let i = p.A.getGuild(e);
    return null != i && !!i.features.has(b.GuildFeatures.COMMUNITY) && (null != e && null == m[e] && I(e), (null == (n = m[e]) ? true : n.has(t)) && null == f.Ay.getTrackedAckMessageId(t))
  }
}(s = "displayName") in _ ? Object.defineProperty(_, s, {
  value: "NewChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[s] = "NewChannelsStore";
let w = new _(Chunk73153.h, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == m[t]) returnfalse;
    n.forEach(e => m[t].delete(e)), 0 === m[t].size && delete m[t]
  },
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == m[t] || A[t] < Date.now() - v.A.Millis.HOUR ? (I(t), true) : (null != n && E(t, n), false))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === a.PE.VIEW_CHANNEL && (E(t, n), false)
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
    delete m[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (m[n.guild_id] = null != (t = m[n.guild_id]) ? t : new Set, m[n.guild_id].add(n.id))
  }
})