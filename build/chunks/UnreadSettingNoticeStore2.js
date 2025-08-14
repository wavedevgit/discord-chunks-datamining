/** Chunk was on web.js **/
/** chunk id: 390289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk221259 = require("./221259.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = [{
    timeSinceJoin: +Chunk70956.Z.Millis.HOUR,
    sends: 1,
    viewTime: +Chunk70956.Z.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk70956.Z.Millis.DAY,
    sends: 2,
    viewTime: 2 * Chunk70956.Z.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk70956.Z.Millis.WEEK,
    sends: 5,
    viewTime: 5 * Chunk70956.Z.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk70956.Z.Millis.DAYS_30,
    sends: 10,
    viewTime: 30 * Chunk70956.Z.Millis.MINUTE
  }],
  y = 5 * b[b.length - 1].viewTime,
  O = Chunk70956.Z.Millis.WEEK,
  v = {
    channels: {}
  },
  I = new Set,
  T = null,
  S = 0,
  A = 0;

function N(e) {
  var t;
  if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? true : t.id) !== a.default.getId() || !L(e.channelId)) returnfalse;
  let n = D(e.channelId);
  n.lastActionTime = Date.now(), n.numSends++
}

function C() {
  if (null == T || !L(T)) returnfalse;
  let e = D(T);
  if (module.lastActionTime > Date.now() - Chunk70956.Z.Millis.DAY && module.viewDuration > y) returnfalse;
  let t = Date.now();
  module.lastActionTime = exports, module.viewDuration += exports - S, S = exports
}

function R() {
  T = Chunk944486.Z.getChannelId(), S = Date.now(), P();
  let e = Date.now() - O;
  Chunk709054.default.forEach(v.channels, (t, n) => {
    let {
      lastActionTime: r
    } = t;
    r < e && delete v.channels[n]
  })
}

function P() {
  return 0 !== A && (clearInterval(A), A = 0), Chunk9156.ZP.useNewNotifications && (A = setInterval(() => {
    C() && j.emitChange()
  }, 15 * Chunk70956.Z.Millis.SECOND)), false
}

function w() {
  let e = C();
  return T = Chunk944486.Z.getChannelId(), S = Date.now(), module
}

function D(e) {
  return e in v.channels || (v.channels[e] = {
    lastActionTime: 0,
    viewDuration: 0,
    numSends: 0
  }), v.channels[e]
}

function L(e) {
  if (!u.ZP.useNewNotifications || I.has(e)) returnfalse;
  let t = s.Z.getBasicChannel(e);
  if (null == t || null == t.guild_id || u.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || M(t.guild_id, t.id) || M(t.guild_id, t.parent_id)) returnfalse;
  let n = u.ZP.resolveUnreadSetting(t);
  return u.ZP.getChannelUnreadSetting(t.guild_id, t.id) === m.i.UNSET && n !== m.i.ALL_MESSAGES
}

function x(e) {
  var t;
  let n = l.Z.getGuild(e.guild_id),
    r = null != (t = null == n ? true : n.joinedAt) ? t : new Date,
    i = Math.min(_.default.age(e.id), Date.now() - r.getTime()),
    o = v.channels[e.id];
  if (null == o || o.lastActionTime < Date.now() - O) returnfalse;
  for (let e of b)
    if (i < e.timeSinceJoin && (o.numSends >= e.sends || o.viewDuration >= e.viewTime)) returntrue;
  returnfalse
}

function M(e, t) {
  if (null == t) returnfalse;
  let n = u.ZP.getChannelOverrides(e)[t];
  return null != n && !!(null != n.message_notifications && n.message_notifications !== h.bL.NULL || null != n.flags && (0, f.EB)(n.flags, g.ic.UNREADS_ALL_MESSAGES | g.ic.UNREADS_ONLY_MENTIONS))
}
class k extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (v.channels = e.channels), this.syncWith([u.ZP], P), this.waitFor(u.ZP, c.Z, s.Z)
  }
  getState() {
    return v
  }
  getLastActionTime(e) {
    var t, n;
    return null != (n = null == (t = v.channels[e]) ? true : t.lastActionTime) ? n : 0
  }
  maybeAutoUpgradeChannel(e) {
    if (!L(e)) returnfalse;
    let t = s.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && !!x(t) && (delete v.channels[e], I.add(e), (0, p.IG)(t.guild_id, t.id, m.i.ALL_MESSAGES), true)
  }
}
E(k, "displayName", "UnreadSettingNoticeStore2"), E(k, "persistKey", "UnreadSettingNoticeStore2");
let j = new k(Chunk570140.Z, {
    CHANNEL_SELECT: w,
    CONNECTION_OPEN: R,
    MESSAGE_CREATE: N
  }),
  U = j