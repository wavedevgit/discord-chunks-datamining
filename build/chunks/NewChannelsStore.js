/** Chunk was on web.js **/
/** chunk id: 454058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = new Set,
  O = {},
  v = {};

function A(e) {
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

function S(e) {
  let {
    guildId: t,
    channelIds: n
  } = e;
  if (null == O[t]) returnfalse;
  n.forEach(e => O[t].delete(e)), 0 === O[t].size && delete O[t]
}

function T(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return null != t && (null == O[t] || v[t] < Date.now() - m.A.Millis.HOUR ? (w(t), true) : (null != n && R(t, n), false))
}

function C(e) {
  let {
    guildId: t,
    channelId: n,
    sidebarType: r
  } = e;
  return null != t && r === o.PE.VIEW_CHANNEL && (R(t, n), false)
}

function N(e) {
  let {
    guildId: t,
    baseChannelId: n
  } = e;
  return null != t && (R(t, n), false)
}

function R(e, t) {
  let n = O[e];
  if (null != n && null != t && n.has(t)) {
    var r;
    !h.Ay.isOptInEnabled(e) || (null == (r = u.A.getChannel(t)) ? true : r.isThread()) || null != _.Ay.ackMessageId(t) || a.h.wait(() => (0, s.ack)(t, {
      object: E.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
      objectType: E.AnalyticsObjectTypes.ACK_AUTOMATIC
    }, true, true, g.default.atPreviousMillisecond(t)))
  }
}

function w(e) {
  var t;
  if (null != O[e]) return;
  let n = d.Ay.getChannels(e)[d.I6].map(e => e.channel.id),
    r = null == (t = f.Ay.getMember(e, c.default.getId())) ? true : t.joinedAt;
  if (null == r) return;
  O[e] = new Set;
  let i = new Date(r).getTime();
  0 !== n.length && (O[e] = new Set(n.filter(t => {
    let n = g.default.extractTimestamp(t);
    return null == _.Ay.getTrackedAckMessageId(t) && n > Date.now() - m.A.Millis.WEEK && n > l.A.getGuildRecentsDismissedAt(e) && n > i && !h.Ay.isChannelOrParentOptedIn(e, t)
  })), v[e] = Date.now())
}

function P() {
  g.default.keys(O).forEach(e => {
    let t = O[e];
    O[e] = new Set([...t].filter(t => !h.Ay.isChannelOrParentOptedIn(e, t)))
  })
}
class D extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, u.A, d.Ay, f.Ay, p.A, _.Ay, h.Ay, l.A), this.syncWith([h.Ay], P)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == O[e] && w(e), null != e && null != (t = O[e]) ? t : b
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) returnfalse;
    let r = p.A.getGuild(e);
    return null != r && !!r.features.has(E.GuildFeatures.COMMUNITY) && (null != e && null == O[e] && w(e), (null == (n = O[e]) ? true : n.has(t)) && null == _.Ay.getTrackedAckMessageId(t))
  }
}
y(D, "displayName", "NewChannelsStore");
let x = new D(Chunk73153.h, {
  BULK_CLEAR_RECENTS: S,
  CHANNEL_ACK: () => true,
  CHANNEL_SELECT: T,
  SIDEBAR_VIEW_CHANNEL: C,
  SIDEBAR_VIEW_GUILD: N,
  GUILD_DELETE: A,
  CHANNEL_CREATE: I
})