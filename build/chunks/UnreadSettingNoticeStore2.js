/** Chunk was on 1113 **/
/** chunk id: 517092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./938796.js");
var r, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk887560 = require("./887560.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = [{
    timeSinceJoin: +Chunk927813.A.Millis.HOUR,
    sends: 1,
    viewTime: +Chunk927813.A.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk927813.A.Millis.DAY,
    sends: 2,
    viewTime: 2 * Chunk927813.A.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk927813.A.Millis.WEEK,
    sends: 5,
    viewTime: 5 * Chunk927813.A.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk927813.A.Millis.DAYS_30,
    sends: 10,
    viewTime: 30 * Chunk927813.A.Millis.MINUTE
  }],
  O = 5 * y[y.length - 1].viewTime,
  _ = Chunk927813.A.Millis.WEEK,
  j = {
    channels: {}
  },
  x = new Set,
  v = null,
  E = 0,
  C = 0;

function S() {
  if (null == v || !T(v)) returnfalse;
  let e = N(v);
  if (e.lastActionTime > Date.now() - h.A.Millis.DAY && e.viewDuration > O) returnfalse;
  let t = Date.now();
  e.lastActionTime = t, e.viewDuration += t - E, E = t
}

function I() {
  return 0 !== C && (clearInterval(C), C = 0), d.Ay.useNewNotifications && (C = setInterval(() => {
    S() && R.emitChange()
  }, 15 * h.A.Millis.SECOND)), false
}

function N(e) {
  return e in j.channels || (j.channels[e] = {
    lastActionTime: 0,
    viewDuration: 0,
    numSends: 0
  }), j.channels[e]
}

function T(e) {
  if (!d.Ay.useNewNotifications || x.has(e)) returnfalse;
  let t = o.A.getBasicChannel(e);
  if (null == t || null == t.guild_id || d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || P(t.guild_id, t.id) || P(t.guild_id, t.parent_id)) returnfalse;
  let n = d.Ay.resolveUnreadSetting(t);
  return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === m.e.UNSET && n !== m.e.ALL_MESSAGES
}

function P(e, t) {
  if (null == t) returnfalse;
  let n = d.Ay.getChannelOverrides(e)[t];
  return null != n && !!(null != n.message_notifications && n.message_notifications !== f.orn.NULL || null != n.flags && (0, l.br)(n.flags, b.vv.UNREADS_ALL_MESSAGES | b.vv.UNREADS_ONLY_MENTIONS))
}
class w extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (j.channels = e.channels), this.syncWith([d.Ay], I), this.waitFor(a.default, o.A, c.A, u.A, d.Ay)
  }
  getState() {
    return j
  }
  getLastActionTime(e) {
    var t, n;
    return null != (t = null == (n = j.channels[e]) ? true : n.lastActionTime) ? t : 0
  }
  maybeAutoUpgradeChannel(e) {
    if (!T(e)) returnfalse;
    let t = o.A.getBasicChannel(e);
    return null != t && null != t.guild_id && !! function(e) {
      var t;
      let n = c.A.getGuild(e.guild_id),
        r = null != (t = null == n ? true : n.joinedAt) ? t : new Date,
        l = Math.min(p.default.age(e.id), Date.now() - r.getTime()),
        i = j.channels[e.id];
      if (null == i || i.lastActionTime < Date.now() - _) returnfalse;
      for (let e of y)
        if (l < e.timeSinceJoin && (i.numSends >= e.sends || i.viewDuration >= e.viewTime)) returntrue;
      returnfalse
    }(t) && (delete j.channels[e], x.add(e), (0, g.mA)(t.guild_id, t.id, m.e.ALL_MESSAGES), true)
  }
}
A(w, "displayName", "UnreadSettingNoticeStore2"), A(w, "persistKey", "UnreadSettingNoticeStore2");
let R = new w(Chunk73153.h, {
    CHANNEL_SELECT: function() {
      let e = S();
      return v = u.A.getChannelId(), E = Date.now(), e
    },
    CONNECTION_OPEN: function() {
      v = u.A.getChannelId(), E = Date.now(), I();
      let e = Date.now() - _;
      p.default.forEach(j.channels, (t, n) => {
        let {
          lastActionTime: r
        } = t;
        r < e && delete j.channels[n]
      })
    },
    MESSAGE_CREATE: function(e) {
      var t;
      if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? true : t.id) !== a.default.getId() || !T(e.channelId)) returnfalse;
      let n = N(e.channelId);
      n.lastActionTime = Date.now(), n.numSends++
    }
  }),
  D = R