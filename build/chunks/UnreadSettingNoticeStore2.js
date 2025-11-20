/** Chunk was on 34740 **/
/** chunk id: 390289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./997841.js");
var i, Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk221259 = require("./221259.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = [{
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
  v = 5 * C[C.length - 1].viewTime,
  _ = Chunk70956.Z.Millis.WEEK,
  x = {
    channels: {}
  },
  j = new Set,
  O = null,
  E = 0,
  S = 0;

function P() {
  if (null == O || !T(O)) returnfalse;
  let e = Z(O);
  if (module.lastActionTime > Date.now() - Chunk70956.Z.Millis.DAY && module.viewDuration > v) returnfalse;
  let t = Date.now();
  module.lastActionTime = exports, module.viewDuration += exports - E, E = exports
}

function I() {
  return 0 !== S && (clearInterval(S), S = 0), Chunk9156.ZP.useNewNotifications && (S = setInterval(() => {
    P() && w.emitChange()
  }, 15 * Chunk70956.Z.Millis.SECOND)), false
}

function Z(e) {
  return e in x.channels || (x.channels[e] = {
    lastActionTime: 0,
    viewDuration: 0,
    numSends: 0
  }), x.channels[e]
}

function T(e) {
  if (!d.ZP.useNewNotifications || j.has(e)) returnfalse;
  let t = s.Z.getBasicChannel(e);
  if (null == t || null == t.guild_id || d.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || N(t.guild_id, t.id) || N(t.guild_id, t.parent_id)) returnfalse;
  let n = d.ZP.resolveUnreadSetting(t);
  return d.ZP.getChannelUnreadSetting(t.guild_id, t.id) === g.i.UNSET && n !== g.i.ALL_MESSAGES
}

function N(e, t) {
  if (null == t) returnfalse;
  let n = d.ZP.getChannelOverrides(e)[t];
  return null != n && !!(null != n.message_notifications && n.message_notifications !== m.bL.NULL || null != n.flags && (0, r.EB)(n.flags, b.ic.UNREADS_ALL_MESSAGES | b.ic.UNREADS_ONLY_MENTIONS))
}
class A extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (x.channels = e.channels), this.syncWith([d.ZP], I), this.waitFor(o.default, s.Z, c.Z, u.Z, d.ZP)
  }
  getState() {
    return x
  }
  getLastActionTime(e) {
    var t, n;
    return null != (n = null == (t = x.channels[e]) ? true : t.lastActionTime) ? n : 0
  }
  maybeAutoUpgradeChannel(e) {
    if (!T(e)) returnfalse;
    let t = s.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && !! function(e) {
      var t;
      let n = c.Z.getGuild(e.guild_id),
        i = null != (t = null == n ? true : n.joinedAt) ? t : new Date,
        r = Math.min(h.default.age(e.id), Date.now() - i.getTime()),
        l = x.channels[e.id];
      if (null == l || l.lastActionTime < Date.now() - _) returnfalse;
      for (let e of C)
        if (r < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) returntrue;
      returnfalse
    }(t) && (delete x.channels[e], j.add(e), (0, f.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), true)
  }
}
y(A, "displayName", "UnreadSettingNoticeStore2"), y(A, "persistKey", "UnreadSettingNoticeStore2");
let w = new A(Chunk570140.Z, {
    CHANNEL_SELECT: function() {
      let e = P();
      return O = Chunk944486.Z.getChannelId(), E = Date.now(), module
    },
    CONNECTION_OPEN: function() {
      O = Chunk944486.Z.getChannelId(), E = Date.now(), I();
      let e = Date.now() - _;
      Chunk709054.default.forEach(x.channels, (t, n) => {
        let {
          lastActionTime: i
        } = t;
        i < e && delete x.channels[n]
      })
    },
    MESSAGE_CREATE: function(e) {
      var t;
      if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? true : t.id) !== o.default.getId() || !T(e.channelId)) returnfalse;
      let n = Z(e.channelId);
      n.lastActionTime = Date.now(), n.numSends++
    }
  }),
  M = w