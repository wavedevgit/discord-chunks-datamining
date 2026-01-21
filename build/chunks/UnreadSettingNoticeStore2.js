/** Chunk was on 82124 **/
/** chunk id: 390289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./997841.js");
var r, Chunk95015 = require("./95015.js"),
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
let v = [{
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
  O = 5 * v[v.length - 1].viewTime,
  j = Chunk70956.Z.Millis.WEEK,
  x = {
    channels: {}
  },
  C = new Set,
  E = null,
  S = 0,
  _ = 0;

function I() {
  if (null == E || !N(E)) returnfalse;
  let e = Z(E);
  if (e.lastActionTime > Date.now() - p.Z.Millis.DAY && e.viewDuration > O) returnfalse;
  let t = Date.now();
  e.lastActionTime = t, e.viewDuration += t - S, S = t
}

function P() {
  return 0 !== _ && (clearInterval(_), _ = 0), d.ZP.useNewNotifications && (_ = setInterval(() => {
    I() && w.emitChange()
  }, 15 * p.Z.Millis.SECOND)), false
}

function Z(e) {
  return e in x.channels || (x.channels[e] = {
    lastActionTime: 0,
    viewDuration: 0,
    numSends: 0
  }), x.channels[e]
}

function N(e) {
  if (!d.ZP.useNewNotifications || C.has(e)) returnfalse;
  let t = s.Z.getBasicChannel(e);
  if (null == t || null == t.guild_id || d.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || T(t.guild_id, t.id) || T(t.guild_id, t.parent_id)) returnfalse;
  let n = d.ZP.resolveUnreadSetting(t);
  return d.ZP.getChannelUnreadSetting(t.guild_id, t.id) === m.i.UNSET && n !== m.i.ALL_MESSAGES
}

function T(e, t) {
  if (null == t) returnfalse;
  let n = d.ZP.getChannelOverrides(e)[t];
  return null != n && !!(null != n.message_notifications && n.message_notifications !== g.bL.NULL || null != n.flags && (0, i.EB)(n.flags, b.ic.UNREADS_ALL_MESSAGES | b.ic.UNREADS_ONLY_MENTIONS))
}
class A extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (x.channels = e.channels), this.syncWith([d.ZP], P), this.waitFor(o.default, s.Z, c.Z, u.Z, d.ZP)
  }
  getState() {
    return x
  }
  getLastActionTime(e) {
    var t, n;
    return null != (n = null == (t = x.channels[e]) ? true : t.lastActionTime) ? n : 0
  }
  maybeAutoUpgradeChannel(e) {
    if (!N(e)) returnfalse;
    let t = s.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && !! function(e) {
      var t;
      let n = c.Z.getGuild(e.guild_id),
        r = null != (t = null == n ? true : n.joinedAt) ? t : new Date,
        i = Math.min(f.default.age(e.id), Date.now() - r.getTime()),
        l = x.channels[e.id];
      if (null == l || l.lastActionTime < Date.now() - j) returnfalse;
      for (let e of v)
        if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) returntrue;
      returnfalse
    }(t) && (delete x.channels[e], C.add(e), (0, h.IG)(t.guild_id, t.id, m.i.ALL_MESSAGES), true)
  }
}
y(A, "displayName", "UnreadSettingNoticeStore2"), y(A, "persistKey", "UnreadSettingNoticeStore2");
let w = new A(Chunk570140.Z, {
    CHANNEL_SELECT: function() {
      let e = I();
      return E = u.Z.getChannelId(), S = Date.now(), e
    },
    CONNECTION_OPEN: function() {
      E = u.Z.getChannelId(), S = Date.now(), P();
      let e = Date.now() - j;
      f.default.forEach(x.channels, (t, n) => {
        let {
          lastActionTime: r
        } = t;
        r < e && delete x.channels[n]
      })
    },
    MESSAGE_CREATE: function(e) {
      var t;
      if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? true : t.id) !== o.default.getId() || !N(e.channelId)) returnfalse;
      let n = Z(e.channelId);
      n.lastActionTime = Date.now(), n.numSends++
    }
  }),
  R = w