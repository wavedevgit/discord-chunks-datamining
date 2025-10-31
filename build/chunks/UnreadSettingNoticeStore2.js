/** Chunk was on 88647 **/
/** chunk id: 390289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = [{
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
  C = 5 * y[y.length - 1].viewTime,
  v = Chunk70956.Z.Millis.WEEK,
  O = {
    channels: {}
  },
  x = new Set,
  E = null,
  j = 0,
  S = 0;

function P() {
  if (null == E || !T(E)) returnfalse;
  let e = Z(E);
  if (module.lastActionTime > Date.now() - Chunk70956.Z.Millis.DAY && module.viewDuration > C) returnfalse;
  let t = Date.now();
  module.lastActionTime = exports, module.viewDuration += exports - j, j = exports
}

function I() {
  return 0 !== S && (clearInterval(S), S = 0), Chunk9156.ZP.useNewNotifications && (S = setInterval(() => {
    P() && w.emitChange()
  }, 15 * Chunk70956.Z.Millis.SECOND)), false
}

function Z(e) {
  return e in O.channels || (O.channels[e] = {
    lastActionTime: 0,
    viewDuration: 0,
    numSends: 0
  }), O.channels[e]
}

function T(e) {
  if (!u.ZP.useNewNotifications || x.has(e)) returnfalse;
  let t = o.Z.getBasicChannel(e);
  if (null == t || null == t.guild_id || u.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || N(t.guild_id, t.id) || N(t.guild_id, t.parent_id)) returnfalse;
  let n = u.ZP.resolveUnreadSetting(t);
  return u.ZP.getChannelUnreadSetting(t.guild_id, t.id) === g.i.UNSET && n !== g.i.ALL_MESSAGES
}

function N(e, t) {
  if (null == t) returnfalse;
  let n = u.ZP.getChannelOverrides(e)[t];
  return null != n && !!(null != n.message_notifications && n.message_notifications !== m.bL.NULL || null != n.flags && (0, p.EB)(n.flags, b.ic.UNREADS_ALL_MESSAGES | b.ic.UNREADS_ONLY_MENTIONS))
}
class A extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (O.channels = e.channels), this.syncWith([u.ZP], I), this.waitFor(a.default, o.Z, s.Z, c.Z, u.ZP)
  }
  getState() {
    return O
  }
  getLastActionTime(e) {
    var t, n;
    return null != (n = null == (t = O.channels[e]) ? true : t.lastActionTime) ? n : 0
  }
  maybeAutoUpgradeChannel(e) {
    if (!T(e)) returnfalse;
    let t = o.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && !! function(e) {
      var t;
      let n = s.Z.getGuild(e.guild_id),
        r = null != (t = null == n ? true : n.joinedAt) ? t : new Date,
        i = Math.min(f.default.age(e.id), Date.now() - r.getTime()),
        l = O.channels[e.id];
      if (null == l || l.lastActionTime < Date.now() - v) returnfalse;
      for (let e of y)
        if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) returntrue;
      returnfalse
    }(t) && (delete O.channels[e], x.add(e), (0, h.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), true)
  }
}
_(A, "displayName", "UnreadSettingNoticeStore2"), _(A, "persistKey", "UnreadSettingNoticeStore2");
let w = new A(Chunk570140.Z, {
    CHANNEL_SELECT: function() {
      let e = P();
      return E = Chunk944486.Z.getChannelId(), j = Date.now(), module
    },
    CONNECTION_OPEN: function() {
      E = Chunk944486.Z.getChannelId(), j = Date.now(), I();
      let e = Date.now() - v;
      Chunk709054.default.forEach(O.channels, (t, n) => {
        let {
          lastActionTime: r
        } = t;
        r < e && delete O.channels[n]
      })
    },
    MESSAGE_CREATE: function(e) {
      var t;
      if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? true : t.id) !== a.default.getId() || !T(e.channelId)) returnfalse;
      let n = Z(e.channelId);
      n.lastActionTime = Date.now(), n.numSends++
    }
  }),
  M = w