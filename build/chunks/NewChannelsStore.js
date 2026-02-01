/** Chunk was on 76719 **/
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
let m = new Set,
  S = {},
  O = {};

function E(e, t) {
  let n = S[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    !C.Ay.isOptInEnabled(e) || (null == (i = c.A.getChannel(t)) ? true : i.isThread()) || null != f.Ay.ackMessageId(t) || l.h.wait(() => (0, o.ack)(t, {
      object: b.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, true, true, v.default.atPreviousMillisecond(t)))
  }
}

function A(e) {
  var t;
  if (null != S[e]) return;
  let n = h.Ay.getChannels(e)[h.I6].map(e => e.channel.id),
    i = null == (t = p.Ay.getMember(e, u.default.getId())) ? true : t.joinedAt;
  if (null == i) return;
  S[e] = new Set;
  let s = new Date(i).getTime();
  0 !== n.length && (S[e] = new Set(n.filter(t => {
    let n = v.default.extractTimestamp(t);
    return null == f.Ay.getTrackedAckMessageId(t) && n > Date.now() - y.A.Millis.WEEK && n > d.A.getGuildRecentsDismissedAt(e) && n > s && !C.Ay.isChannelOrParentOptedIn(e, t)
  })), O[e] = Date.now())
}

function I() {
  v.default.keys(S).forEach(e => {
    let t = S[e];
    S[e] = new Set([...t].filter(t => !C.Ay.isChannelOrParentOptedIn(e, t)))
  })
}
class _ extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.default, c.A, h.Ay, p.Ay, g.A, f.Ay, C.Ay, d.A), this.syncWith([C.Ay], I)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == S[e] && A(e), null != e && null != (t = S[e]) ? t : m
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let i = g.A.getGuild(e);
    return null != i && !!i.features.has(b.GuildFeatures.COMMUNITY) && (null != e && null == S[e] && A(e), (null == (n = S[e]) ? true : n.has(t)) && null == f.Ay.getTrackedAckMessageId(t))
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
    if (null == S[t]) returnfalse;
    n.forEach(e => S[t].delete(e)), 0 === S[t].size && delete S[t]
  },
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == S[t] || O[t] < Date.now() - y.A.Millis.HOUR ? (A(t), true) : (null != n && E(t, n), false))
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
    delete S[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    n.isVocal() || (S[n.guild_id] = null != (t = S[n.guild_id]) ? t : new Set, S[n.guild_id].add(n.id))
  }
})