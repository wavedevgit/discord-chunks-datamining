/** Chunk was on web.js **/
/** chunk id: 22082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = new Set,
  O = {},
  v = {};

function S(e) {
  let {
    guild: t
  } = e;
  delete O[t.id]
}

function I(e) {
  var t;
  let {
    channel: n
  } = e;
  n.isVocal() || (O[n.guild_id] = null != (t = O[n.guild_id]) ? t : new Set, O[n.guild_id].add(n.id))
}

function T(e) {
  let {
    guildId: t,
    channelIds: n
  } = e;
  if (null == O[t]) returnfalse;
  n.forEach(e => O[t].delete(e)), 0 === O[t].size && delete O[t]
}

function A(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return null != t && (null == O[t] || v[t] < Date.now() - h.Z.Millis.HOUR ? (R(t), true) : (null != n && P(t, n), false))
}

function C(e) {
  let {
    guildId: t,
    channelId: n,
    sidebarType: r
  } = e;
  return null != t && r === s.tI.VIEW_CHANNEL && (P(t, n), false)
}

function N(e) {
  let {
    guildId: t,
    baseChannelId: n
  } = e;
  return null != t && (P(t, n), false)
}

function P(e, t) {
  let n = O[e];
  if (null != n && null != t && n.has(t)) {
    var r;
    !m.ZP.isOptInEnabled(e) || (null == (r = u.Z.getChannel(t)) ? true : r.isThread()) || null != _.ZP.ackMessageId(t) || a.Z.wait(() => (0, o.ack)(t, {
      object: E.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: E.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, true, true, g.default.atPreviousMillisecond(t)))
  }
}

function R(e) {
  var t;
  if (null != O[e]) return;
  let n = d.ZP.getChannels(e)[d.sH].map(e => e.channel.id),
    r = null == (t = f.ZP.getMember(e, c.default.getId())) ? true : t.joinedAt;
  if (null == r) return;
  O[e] = new Set;
  let i = new Date(r).getTime();
  0 !== n.length && (O[e] = new Set(n.filter(t => {
    let n = g.default.extractTimestamp(t);
    return null == _.ZP.getTrackedAckMessageId(t) && n > Date.now() - h.Z.Millis.WEEK && n > l.Z.getGuildRecentsDismissedAt(e) && n > i && !m.ZP.isChannelOrParentOptedIn(e, t)
  })), v[e] = Date.now())
}

function D() {
  Chunk709054.default.keys(O).forEach(e => {
    let t = O[e];
    O[e] = new Set([...t].filter(t => !m.ZP.isChannelOrParentOptedIn(e, t)))
  })
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk984933.ZP, Chunk271383.ZP, Chunk430824.Z, Chunk306680.ZP, Chunk9156.ZP, Chunk581883.Z), this.syncWith([Chunk9156.ZP], D)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == O[e] && R(e), null != e && null != (t = O[e]) ? t : y
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let r = p.Z.getGuild(e);
    return null != r && !!r.features.has(E.GuildFeatures.COMMUNITY) && (null != e && null == O[e] && R(e), (null == (n = O[e]) ? true : n.has(t)) && null == _.ZP.getTrackedAckMessageId(t))
  }
}
b(w, "displayName", "NewChannelsStore");
let x = new w(Chunk570140.Z, {
  BULK_CLEAR_RECENTS: T,
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: A,
  SIDEBAR_VIEW_CHANNEL: C,
  SIDEBAR_VIEW_GUILD: N,
  GUILD_DELETE: S,
  CHANNEL_CREATE: I
})